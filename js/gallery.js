/* Gallery Filter + Lightbox */
function initGallery() {
  // Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  if (!lb || !lbImg) return;

  const imgs = Array.from(document.querySelectorAll('.gallery-item img'));
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

  document.querySelectorAll('.gallery-item').forEach((item, idx) => {
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
