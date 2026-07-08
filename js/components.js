/* ============================================================
   SHARED COMPONENTS — Header & Footer
   Injected via JS so they are never duplicated.
   ============================================================ */

const BASE = 'https://suryamitramandal.github.io/surya/';

const HEADER_HTML = `
<div id="scroll-progress"></div>
<div class="topbar">
  <div class="container">
    <span>🌺 <a href="tel:+919867648995" data-i18n="topbar_call">Call Us: +91 9867648995</a></span>
    <div class="topbar-right">
      <a href="https://www.facebook.com/profile.php?id=61578631113462" target="_blank" rel="noopener">📘 Facebook</a>
      <a href="https://www.instagram.com/singhestatecha_raja/" target="_blank" rel="noopener">📸 Instagram</a>
      <a href="https://www.youtube.com/watch?v=Z_s6wVqMk-A" target="_blank" rel="noopener">▶️ YouTube</a>
    </div>
  </div>
</div>
<header id="site-header">
  <div class="container nav-inner">
    <a href="index.html" class="nav-brand" aria-label="Surya Mitra Mandal Home">
      <img class="nav-logo" src="Bappa1/assets/favicon.png" alt="SMM Logo" width="46" height="46">
      <div class="nav-brand-text">Surya Mitra Mandal<small>Singh Estate Cha Raja</small></div>
    </a>
    <ul class="nav-menu" id="nav-menu">
      <li><a href="index.html" data-i18n="nav_home">Home</a></li>
      <li><a href="about.html" data-i18n="nav_about">About</a></li>
      <li><a href="leadership.html" data-i18n="nav_leadership">Leadership</a></li>
      <li><a href="gallery.html" data-i18n="nav_gallery">Gallery</a></li>
      <li><a href="event.html" data-i18n="nav_event">Events</a></li>
      <li><a href="sponsors.html" data-i18n="nav_sponsors">Sponsors</a></li>
      <li><a href="contact.html" data-i18n="nav_contact">Contact</a></li>
      <li><a href="donate.html" class="nav-donate btn-ripple" data-i18n="nav_donate">Donate</a></li>
    </ul>
    <div class="nav-controls">
      <button class="lang-btn" data-lang="en" title="English" aria-label="English">EN</button>
      <button class="lang-btn" data-lang="hi" title="Hindi" aria-label="Hindi">हि</button>
      <button class="lang-btn" data-lang="mr" title="Marathi" aria-label="Marathi">म</button>
      <button class="theme-btn" id="theme-toggle" aria-label="Toggle theme">🌙</button>
    </div>
    <button class="nav-burger" id="nav-burger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

const FOOTER_HTML = `
<div id="back-top" title="Back to top" aria-label="Back to top">↑</div>
<footer id="site-footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem">
            <img class="nav-logo" src="Bappa1/assets/favicon.png" alt="SMM Logo" width="44" height="44">
            <div class="nav-brand-text">Surya Mitra Mandal<small>Singh Estate Cha Raja</small></div>
          </div>
          <p class="footer-desc" data-i18n="footer_tagline">Surya Mitra Mandal — Singh Estate Cha Raja. Faith, Community, Devotion.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61578631113462" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/singhestatecha_raja/" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">◎</a>
            <a href="https://www.youtube.com/watch?v=Z_s6wVqMk-A" target="_blank" rel="noopener" class="social-btn" aria-label="YouTube">▶</a>
          </div>
          <div class="qr-footer">
            <img src="${BASE}Bappa1/Images/QR.jpeg" alt="UPI QR Code" width="90" height="90">
          </div>
          <p class="footer-qr-label">Scan to Donate</p>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_quick">Quick Links</h5>
          <ul class="footer-links">
            <li><a href="index.html" data-i18n="nav_home">Home</a></li>
            <li><a href="about.html" data-i18n="nav_about">About</a></li>
            <li><a href="leadership.html" data-i18n="nav_leadership">Leadership</a></li>
            <li><a href="gallery.html" data-i18n="nav_gallery">Gallery</a></li>
            <li><a href="event.html" data-i18n="nav_event">Events</a></li>
            <li><a href="sponsors.html" data-i18n="nav_sponsors">Sponsors</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_connect">Connect</h5>
          <ul class="footer-links">
            <li><a href="donate.html" data-i18n="nav_donate">Donate</a></li>
            <li><a href="contact.html" data-i18n="nav_contact">Contact</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61578631113462" target="_blank" rel="noopener">📘 Facebook</a></li>
            <li><a href="https://www.instagram.com/singhestatecha_raja/" target="_blank" rel="noopener">📸 Instagram</a></li>
            <li><a href="https://www.youtube.com/watch?v=Z_s6wVqMk-A" target="_blank" rel="noopener">▶️ YouTube</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_contact">Contact</h5>
          <ul class="footer-contact">
            <li>📍 Road No. 3, Singh Estate, Kandivali (E), Mumbai 400101</li>
            <li>📞 <a href="tel:+919867648995">+91 9867648995</a></li>
            <li>🕉️ Ganpati Sthapana: 14 Sep 2026</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <span>© <span id="footer-year"></span> Surya Mitra Mandal. <span data-i18n="footer_copy">All rights reserved. Made with ❤️ by Ayush Singh.</span></span>
      <span>🌺 गणपती बाप्पा मोरया! 🌺</span>
    </div>
  </div>
</footer>`;

function injectComponents() {
  const hp = document.getElementById('header-placeholder');
  const fp = document.getElementById('footer-placeholder');
  if (hp) hp.outerHTML = HEADER_HTML;
  if (fp) fp.outerHTML = FOOTER_HTML;

  // Back to top
  document.getElementById('back-top')?.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  // Footer year
  const fy = document.getElementById('footer-year');
  if (fy) fy.textContent = new Date().getFullYear();

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Apply saved lang & theme
  initTheme();
  setLang(currentLang);
  initNavigation();
}

document.addEventListener('DOMContentLoaded', injectComponents);
