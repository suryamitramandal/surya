/* ============================================================
   3D TILT CARDS — vanilla port of Aceternity 3D Card
   - pointer-driven rotateX/rotateY (mouse + touch unified)
   - cursor-following glow via --mx / --my CSS variables
   - depth layers (.tz-1..4) ride on preserve-3d
   - touch devices get an idle float animation from CSS;
     pressing/dragging tilts the card toward the finger
   ============================================================ */

function init3DCards() {
  const cards = document.querySelectorAll('.card3d');
  if (!cards.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MAX_TILT = 13; // degrees

  cards.forEach(card => {
    const body = card.querySelector('.card3d-body');
    const glow = card.querySelector('.card3d-glow');
    if (!body) return;

    let rafId = null;
    let pending = null;

    const apply = (rx, ry, mx, my, active) => {
      body.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      body.style.setProperty('--ry', ry.toFixed(2) + 'deg');
      if (glow) {
        glow.style.setProperty('--mx', mx.toFixed(1) + '%');
        glow.style.setProperty('--my', my.toFixed(1) + '%');
      }
      card.classList.toggle('is-tilting', active);
    };

    const schedule = (clientX, clientY) => {
      const rect = card.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;
      pending = {
        ry: (px - 0.5) * 2 * MAX_TILT,
        rx: -(py - 0.5) * 2 * MAX_TILT,
        mx: px * 100,
        my: py * 100
      };
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!pending) return;
        apply(pending.rx, pending.ry, pending.mx, pending.my, true);
        pending = null;
      });
    };

    if (!reduceMotion) {
      // Pointer events cover mouse and pen; explicit touch handlers guarantee
      // the same behavior on phones where touch scrolling can swallow moves.
      card.addEventListener('pointermove', e => schedule(e.clientX, e.clientY), { passive: true });
      card.addEventListener('pointerdown', e => schedule(e.clientX, e.clientY), { passive: true });
      card.addEventListener('pointerleave', () => reset());
      card.addEventListener('pointercancel', () => reset());

      card.addEventListener('touchstart', e => {
        const t = e.touches[0];
        if (t) schedule(t.clientX, t.clientY);
      }, { passive: true });
      card.addEventListener('touchmove', e => {
        const t = e.touches[0];
        if (t) schedule(t.clientX, t.clientY);
      }, { passive: true });
      card.addEventListener('touchend', () => reset());
      card.addEventListener('touchcancel', () => reset());
    }

    function reset() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      apply(0, 0, 50, 50, false); // spring back to rest
    }
  });
}

document.addEventListener('DOMContentLoaded', init3DCards);
