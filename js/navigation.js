/* Navigation — floating glass pill: sticky state, mobile sheet,
   hover-dropdown click/accordion handling, active links */
function initNavigation() {
  const header = document.getElementById('site-header');
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('nav-menu');
  const dropdowns = Array.from(document.querySelectorAll('.has-dropdown'));
  const overlay = document.createElement('div');

  if (!header) return;

  const closeDropdowns = () => {
    dropdowns.forEach(li => {
      li.classList.remove('open');
      li.querySelector('.nav-item-toggle')?.setAttribute('aria-expanded', 'false');
    });
  };

  // Sticky shadow + scroll progress + back-to-top
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    const prog = document.getElementById('scroll-progress');
    if (prog) {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0';
    }
    const bt = document.getElementById('back-top');
    if (bt) bt.classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- dropdown toggles (hover on desktop, tap/click + keyboard) ---------- */
  const setDropdown = (li, open) => {
    li.classList.toggle('open', open);
    li.querySelector('.nav-item-toggle')?.setAttribute('aria-expanded', String(open));
  };
  dropdowns.forEach(li => {
    const btn = li.querySelector('.nav-item-toggle');
    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !li.classList.contains('open');
      dropdowns.forEach(other => other !== li && setDropdown(other, false));
      setDropdown(li, willOpen);
    });
    // Pointer hover on desktop widths (same 900px breakpoint as the CSS).
    // On mobile the inline menu is hidden, so the click/accordion path rules.
    li.addEventListener('mouseenter', () => {
      if (window.innerWidth > 900) {
        dropdowns.forEach(other => other !== li && setDropdown(other, false));
        setDropdown(li, true);
      }
    });
    li.addEventListener('mouseleave', () => {
      if (window.innerWidth > 900) setDropdown(li, false);
    });
  });

  // Click anywhere outside closes open dropdowns
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) closeDropdowns();
  });
  // Escape closes dropdowns, or the mobile sheet if no dropdown is open
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (dropdowns.some(li => li.classList.contains('open'))) {
      closeDropdowns();
    } else if (menu?.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  /* ---------- mobile glass sheet ---------- */
  function toggleMenu(open) {
    if (!burger || !menu) return;
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    overlay.style.opacity = open ? '1' : '0';
    overlay.style.pointerEvents = open ? 'auto' : 'none';
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) closeDropdowns();
  }

  if (burger && menu) {
    overlay.className = 'nav-overlay';
    overlay.style.cssText =
      'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:189;opacity:0;' +
      'pointer-events:none;transition:opacity .32s';
    document.body.appendChild(overlay);

    burger.addEventListener('click', () => toggleMenu(!menu.classList.contains('open')));
    overlay.addEventListener('click', () => toggleMenu(false));
    // Any link tap navigates — collapse the sheet first
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => toggleMenu(false)));
  }

  // Growing back to desktop width — reset every mobile-only state
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) toggleMenu(false);
  });

  // Active link (including links nested inside dropdowns)
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href && page.includes(href.replace('.html', ''))) a.classList.add('active');
    if ((page === 'index.html' || page === '') && href === 'index.html') a.classList.add('active');
  });
}
