/* ============================================================
   MAIN — Initialise all modules after components injected
   ============================================================ */




   document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure components injected
  requestAnimationFrame(() => {
    initAnimations();
    initGallery();
    initForms();
    initCountdown();
    addRippleToAllBtns();
  });
});

function initCountdown() {
  // Ganpati Sthapana: 14 Sep 2026 12:00 IST
  const target = new Date('2026-09-10T12:00:00+05:30').getTime();
  const tick = () => {
    const diff = Math.max(target - Date.now(), 0);
    const pad = n => String(Math.floor(n)).padStart(2,'0');
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('cd-days',  pad(diff / 86400000));
    set('cd-hours', pad((diff % 86400000) / 3600000));
    set('cd-mins',  pad((diff % 3600000) / 60000));
    set('cd-secs',  pad((diff % 60000) / 1000));
  };
  tick();
  setInterval(tick, 1000);
}

function addRippleToAllBtns() {
  document.querySelectorAll('.btn-ripple').forEach(btn => {
    if (btn.dataset.rippleInit) return;
    btn.dataset.rippleInit = '1';
    btn.addEventListener('click', function(e) {
      const r = document.createElement('span');
      r.className = 'ripple-circle';
      const rect = this.getBoundingClientRect();
      r.style.left = (e.clientX - rect.left) + 'px';
      r.style.top = (e.clientY - rect.top) + 'px';
      this.appendChild(r);
      setTimeout(() => r.remove(), 700);
    });
  });
}



