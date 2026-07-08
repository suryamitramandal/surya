/* Scroll Reveal + Counter + Typing */
function initAnimations() {
  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-zoom');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  // Counter animation
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(e.target);
          countIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countIO.observe(el));
  }

  // Ripple buttons
  document.querySelectorAll('.btn-ripple').forEach(btn => {
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

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 2000;
  const suffix = el.dataset.suffix || '';
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Typing animation
function initTyping(el, words, speed = 80, pause = 2200) {
  if (!el || !words.length) return;
  let wi = 0, ci = 0, deleting = false;
  const tick = () => {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, pause); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  };
  tick();
}
