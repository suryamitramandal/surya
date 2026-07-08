/* Theme System */
(function() {
  const STORAGE_KEY = 'smm_theme';
  const saved = localStorage.getItem(STORAGE_KEY);
  const preferred = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  const theme = saved || preferred;
  document.documentElement.setAttribute('data-theme', theme);
})();

function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const update = (t) => {
    btn.innerHTML = t === 'dark' ? '☀️' : '🌙';
    btn.title = t === 'dark' ? 'Switch to Light' : 'Switch to Dark';
  };
  update(document.documentElement.getAttribute('data-theme'));
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('smm_theme', next);
    update(next);
  });
}
