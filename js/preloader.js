/* ============================================================
   PRELOADER — covers the page until every resource is loaded,
   then fades out to reveal the site.

   Markup lives inline at the top of <body> in every page so the
   overlay is painted before anything else (no content flash).
   This script only handles the hide timing:
     - min display : 600ms  (avoids a flicker on cached loads)
     - normal hide : window 'load' event (all images/CSS/JS done)
     - safety net  : 6000ms regardless, so a stalled resource
                     can never trap the visitor
   ============================================================ */

(function initPreloader() {
  const PRELOAD_MIN_MS = 600;
  const PRELOAD_MAX_MS = 6000;
  const startedAt = Date.now();
  let done = false;

  const hide = () => {
    if (done) return;
    done = true;

    const elapsed = Date.now() - startedAt;
    const wait = Math.max(0, PRELOAD_MIN_MS - elapsed);

    setTimeout(() => {
      const el = document.getElementById('preloader');
      document.body.classList.remove('preloading');
      if (!el) return;
      el.classList.add('loaded');
      // Remove from the DOM after the CSS fade completes
      el.addEventListener('transitionend', () => el.remove(), { once: true });
      setTimeout(() => el.remove(), 900); // fallback if transitionend doesn't fire
    }, wait);
  };

  if (document.readyState === 'complete') {
    hide();
  } else {
    window.addEventListener('load', hide);
  }
  setTimeout(hide, PRELOAD_MAX_MS);
})();
