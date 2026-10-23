/* Gallery Filter + Lightbox
   Works with both card systems:
   - .focus-card / .focus-grid  (gallery.html — Aceternity Focus Cards)
   - .gallery-item / .gallery-grid (event.html — legacy grid)          */
function initGallery() {
  const CARD_SELECTOR = '.focus-card, .gallery-item';

  // Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll(CARD_SELECTOR);
  const focusRows = document.querySelectorAll('.focus-grid');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.style.display = show ? '' : 'none';
      });
      // Collapse focus-card rows that have no visible card left
      focusRows.forEach(row => {
        const anyVisible = Array.from(row.children).some(
          card => card.style.display !== 'none'
        );
        row.style.display = anyVisible ? '' : 'none';
      });
    });
  });

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  if (!lb || !lbImg) return;

  const imgs = Array.from(
    document.querySelectorAll('.focus-card img, .gallery-item img')
  );
  let current = 0;

  const open = (idx) => {
    current = idx;
    lbImg.src = imgs[idx].src;
    lbImg.alt = imgs[idx].alt;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };
  const nav = (dir) => open((current + dir + imgs.length) % imgs.length);

  document.querySelectorAll(CARD_SELECTOR).forEach((item, idx) => {
    item.addEventListener('click', () => open(idx));
  });
  document.getElementById('lb-close')?.addEventListener('click', close);
  document.getElementById('lb-prev')?.addEventListener('click', () => nav(-1));
  document.getElementById('lb-next')?.addEventListener('click', () => nav(1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
  });
}
