/* Navigation — sticky, mobile menu, active link */
function initNavigation() {
  const header = document.getElementById('site-header');
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('nav-menu');
  const overlay = document.createElement('div');

  if (!header) return;

  // Sticky shadow
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    // Scroll progress
    const prog = document.getElementById('scroll-progress');
    if (prog) {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0';
    }
    // Back to top
    const bt = document.getElementById('back-top');
    if (bt) bt.classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  if (burger && menu) {
    overlay.className = 'nav-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:189;opacity:0;pointer-events:none;transition:opacity .32s';
    document.body.appendChild(overlay);
    const toggle = (open) => {
      menu.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      overlay.style.opacity = open ? '1' : '0';
      overlay.style.pointerEvents = open ? 'auto' : 'none';
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => toggle(!menu.classList.contains('open')));
    overlay.addEventListener('click', () => toggle(false));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
  }

  // Active link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href && page.includes(href.replace('.html',''))) a.classList.add('active');
    if ((page === 'index.html' || page === '') && href === 'index.html') a.classList.add('active');
  });
}
