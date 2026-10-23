/* ============================================================
   PARALLAX GALLERY — vanilla port of "Skiper30" Parallax_002
   Original: React + framer-motion (useScroll/useTransform) + Lenis
   Port:     plain JS, rAF-throttled scroll transforms (no build)

   - 4 columns travel downward at different speeds while the
     section scrolls through the viewport (multipliers below).
   - Images are shuffled on every page load ("random photos").
   - The full collection lives on gallery.html, reached via the
     "View All Photos" card.
   - Swap / extend PARALLAX_IMAGES with new URLs any time —
     this is the only list to edit when new photos arrive.
   ============================================================ */

const PARALLAX_IMAGES = [
  'Bappa1/Images/DSC05210.JPG',
  'Bappa1/Images/FDCB2395-F6A7-47E0-AF2F-71E290306F5B.JPEG',
  'Bappa1/Images/IMG-20240905-WA0005_1.jpg',
  'Bappa1/Images/IMG-20240905-WA0009_1.jpg',
  'Bappa1/Images/IMG-20240905-WA0009_1_vMb3f1h.jpg',
  'Bappa1/Images/IMG-20240905-WA0015.jpg',
  'Bappa1/Images/IMG-20240905-WA0015_yHBDDxe.jpg',
  'Bappa1/Images/IMG-20240916-WA0273.jpg',
  'Bappa1/Images/IMG-20240916-WA0274.jpg',
  'Bappa1/Images/IMG-20250706-WA0011.jpg',
  'Bappa1/Images/WhatsApp_Image_2024-09-07_at_16.28.49_41e454bd_1.jpg',
  'Bappa1/Images/_D0A6396.jpg',
  'Bappa1/Images/a.png'
];

/* framer-motion multipliers from the original component (× viewport height) */
const SPEEDS_DESKTOP = [2, 3.3, 1.25, 3];
const SPEEDS_MOBILE = [1.3, 2.1, 1, 1.7];
const CARDS_PER_COLUMN = 6;

function initParallaxGallery() {
  const section = document.getElementById('parallaxTrack');
  if (!section || section.dataset.parallaxInit) return;
  section.dataset.parallaxInit = '1';

  const cols = Array.from(section.querySelectorAll('.parallax-col'));
  if (!cols.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

  /* ---------- random helpers ---------- */
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /* Build a non-repeating-adjacently picker over a shuffled queue */
  const makePicker = () => {
    let queue = shuffle(PARALLAX_IMAGES);
    let last = null;
    return () => {
      if (!queue.length) queue = shuffle(PARALLAX_IMAGES);
      let idx = queue.findIndex(src => src !== last);
      if (idx === -1) idx = 0;
      last = queue.splice(idx, 1)[0];
      return last;
    };
  };

  /* ---------- populate columns with random photos ---------- */
  const pick = makePicker();
  cols.forEach(col => {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < CARDS_PER_COLUMN; i++) {
      const src = pick();
      const card = document.createElement('div');
      card.className = 'parallax-card';
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Surya Mitra Mandal celebration';
      img.loading = 'lazy';
      img.decoding = 'async';
      card.appendChild(img);
      frag.appendChild(card);
    }
    col.appendChild(frag);
  });

  /* Photo count on the "view all" card */
  const countEl = document.getElementById('vacCount');
  if (countEl) countEl.textContent = PARALLAX_IMAGES.length;

  if (reduceMotion) {
    section.classList.add('reduced-motion');
    return; // static layout, no scroll transforms
  }

  /* ---------- scroll progress → column translation ----------
     Mirrors framer's offset ["start end","end start"]:
       p = 0 when section top reaches viewport bottom
       p = 1 when section bottom reaches viewport top          */
  let ticking = false;
  let currentP = -1;

  const clamp01 = v => Math.min(1, Math.max(0, v));

  const update = () => {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const p = clamp01((vh - rect.top) / (rect.height + vh));
    if (p === currentP) return;
    currentP = p;

    const speeds = isMobile() ? SPEEDS_MOBILE : SPEEDS_DESKTOP;
    cols.forEach((col, i) => {
      const y = p * speeds[i] * vh; // positive = travels downward, like framer `y`
      col.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    });
  };

  const requestTick = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  update(); // paint initial position
}

document.addEventListener('DOMContentLoaded', initParallaxGallery);
