/* ============================================================
   MUSIC TOGGLE — vanilla port of "Skiper25" MusicToggleButton
   Original: React + framer-motion + use-sound
   Port:     plain JS + CSS transitions (no framework / build)

   Audio engine : native HTML5 <audio>, looping
   Source       : Bappa1/audio/music.mp3
                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  DUMMY TRACK — replace this file with the real
                  song before deploying (keep the same filename).
   Persistence  : explicit play/pause is stored in localStorage
                  (smm_music_state), so a pause on any page stays
                  paused on every page and open tab until play.
                  The exact playback position (smm_music_pos) is
                  saved continuously and restored on the next page,
                  so the song resumes where it stopped.
   Visuals      : 5-bar randomized waveform while playing,
                  springy pill padding, blur fade-in.
   ============================================================ */

const MUSIC_SRC = 'Bappa1/audio/music.mp3';
const MUSIC_BAR_COUNT = 5;
const MUSIC_STATE_KEY = 'smm_music_state'; // 'playing' | 'paused' — shared across pages/tabs
const MUSIC_POS_KEY = 'smm_music_pos';     // last playback position in seconds

function initMusicPlayer() {
  const btn = document.getElementById('musicToggle');
  if (!btn || btn.dataset.musicInit) return;
  btn.dataset.musicInit = '1';

  const label = document.getElementById('musicLabel');
  const bars = Array.from(btn.querySelectorAll('.music-bar'));

  /* ---------- audio element ---------- */
  const audio = new Audio(MUSIC_SRC);
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 0.7;

  let isPlaying = false;
  let failed = false;
  let pausedByVisibility = false;  // we paused it because the tab was hidden
  let waveTimer = null;

  /* ---------- persisted play/pause choice (survives page navigation) ---------- */
  const readStoredState = () => {
    try { return localStorage.getItem(MUSIC_STATE_KEY); } catch (_) { return null; }
  };
  const writeStoredState = (value) => {
    try { localStorage.setItem(MUSIC_STATE_KEY, value); } catch (_) { /* private mode */ }
  };
  // Default is ON; only an explicit pause stores 'paused'
  let userPaused = readStoredState() === 'paused';

  /* ---------- persisted playback position (resume across page changes) ---------- */
  const readStoredPos = () => {
    try {
      const v = parseFloat(localStorage.getItem(MUSIC_POS_KEY));
      return Number.isFinite(v) && v > 0 ? v : 0;
    } catch (_) { return 0; }
  };
  const writeStoredPos = (secs) => {
    try { localStorage.setItem(MUSIC_POS_KEY, String(secs)); } catch (_) { /* private mode */ }
  };
  let savedPos = readStoredPos();

  /* ---------- labels (EN / HI / MR via language.js) ---------- */
  const setLabel = () => {
    const key = failed ? 'music_error' : (isPlaying ? 'music_pause' : 'music_play');
    const text = (typeof t === 'function') ? t(key) : key;
    if (label) label.textContent = text;
    btn.setAttribute('aria-label', text);
    btn.title = text;
    btn.setAttribute('aria-pressed', String(isPlaying));
  };

  /* ---------- waveform (mirrors the React random-height logic) ---------- */
  const randomHeights = () =>
    Array.from({ length: MUSIC_BAR_COUNT }, () => Math.random() * 0.8 + 0.2);

  const paintBars = (heights) => {
    bars.forEach((bar, i) => {
      bar.style.height = Math.max(4, (heights[i] != null ? heights[i] : 0.1) * 14) + 'px';
    });
  };

  const setPlaying = (playing) => {
    if (isPlaying === playing) return;
    isPlaying = playing;
    btn.classList.toggle('is-playing', playing);

    if (playing) {
      paintBars(randomHeights());
      waveTimer = setInterval(() => paintBars(randomHeights()), 100);
    } else {
      clearInterval(waveTimer);
      waveTimer = null;
      paintBars(Array(MUSIC_BAR_COUNT).fill(0.1)); // settles to the 4px minimum
    }
    setLabel();
  };

  const fail = () => {
    if (failed) return;
    failed = true;
    clearInterval(waveTimer);
    btn.classList.add('is-error');
    btn.disabled = true;
    setLabel();
  };

  /* ---------- media events drive the state (not just the click) ---------- */
  audio.addEventListener('play', () => setPlaying(true));
  audio.addEventListener('pause', () => {
    writeStoredPos(audio.currentTime || 0); // freeze the exact stop point
    setPlaying(false);
  });
  audio.addEventListener('ended', () => setPlaying(false)); // loop:true makes this unlikely
  audio.addEventListener('error', fail);                    // missing / undecodable file
  audio.addEventListener('canplay', () => btn.classList.add('is-ready'));

  /* Restore the saved position once duration is known. Clamp to a safe range:
     a stored point at/after the end (track looped, or file was replaced)
     restarts from the beginning instead of throwing. */
  audio.addEventListener('loadedmetadata', () => {
    if (!savedPos) return;
    const dur = audio.duration;
    if (Number.isFinite(dur) && dur > 0 && savedPos >= dur - 0.5) {
      savedPos = 0;
      writeStoredPos(0);
      return;
    }
    try { audio.currentTime = savedPos; } catch (_) { /* seek not ready yet */ }
  });

  /* Continuously remember where we are (~4 fires/sec), so a page change
     at any moment resumes within a fraction of a second of that point. */
  audio.addEventListener('timeupdate', () => {
    if (Number.isFinite(audio.currentTime)) writeStoredPos(audio.currentTime);
  });

  /* Mobile browsers can skip unload events — pagehide is the reliable hook. */
  window.addEventListener('pagehide', () => writeStoredPos(audio.currentTime || 0));

  /* ---------- click / keyboard toggle (Enter & Space work natively) ---------- */
  btn.addEventListener('click', () => {
    if (failed) return;
    if (isPlaying) {
      userPaused = true; // explicit pause: do not auto-restart on later gestures
      writeStoredState('paused'); // every page/tab now stays stopped
      audio.pause();
      return;
    }
    userPaused = false;
    writeStoredState('playing'); // every page/tab may play again
    // play() returns a promise; a rejection (e.g. browser policy) must stay uncaught-safe
    const p = audio.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => setPlaying(false));
    }
  });

  /* ---------- DEFAULT ON: try autoplay, then fall back to first user gesture.
     Browsers block unmuted autoplay until the user interacts with the page,
     so a rejected play() arms one-time gesture listeners. ------------------- */
  const GESTURES = ['pointerdown', 'keydown', 'touchstart'];
  const armGestureFallback = () => {
    const onGesture = () => {
      GESTURES.forEach(ev => document.removeEventListener(ev, onGesture));
      if (userPaused || failed || isPlaying) return;
      const p = audio.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };
    GESTURES.forEach(ev => document.addEventListener(ev, onGesture, { once: true, passive: true }));
  };

  const tryAutoplay = () => {
    if (userPaused) return; // persisted pause: stay stopped on this page too
    const p = audio.play();
    if (p && typeof p.catch === 'function') {
      p.then(() => { /* autoplay allowed — 'play' event flips the UI state */ })
       .catch(() => armGestureFallback()); // blocked: start on first interaction
    }
  };
  tryAutoplay();

  /* ---------- pause in background tabs; resume when the tab returns ---------- */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying) {
      pausedByVisibility = true;
      audio.pause();
    } else if (!document.hidden && pausedByVisibility && !userPaused) {
      pausedByVisibility = false;
      const p = audio.play();
      if (p && typeof p.catch === 'function') p.catch(() => armGestureFallback());
    }
  });

  /* ---------- cross-tab sync: a choice in one tab follows everywhere ---------- */
  window.addEventListener('storage', (e) => {
    if (e.key !== MUSIC_STATE_KEY || failed) return;
    if (e.newValue === 'paused') {
      userPaused = true;
      audio.pause();
    } else if (e.newValue === 'playing') {
      userPaused = false;
      const p = audio.play();
      if (p && typeof p.catch === 'function') p.catch(() => armGestureFallback());
    }
  });

  /* ---------- live language switching ---------- */
  document.addEventListener('smm:langchange', setLabel);

  // Initial resting state
  paintBars(Array(MUSIC_BAR_COUNT).fill(0.1));
  setLabel();
}

/* The header (and therefore #musicToggle) is injected by components.js.
   Retry briefly so boot order never matters. */
(function bootMusicPlayer(attempt = 0) {
  if (document.getElementById('musicToggle')) {
    initMusicPlayer();
  } else if (attempt < 40) {
    setTimeout(() => bootMusicPlayer(attempt + 1), 50);
  }
})();
