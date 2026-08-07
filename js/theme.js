function initTheme() {
  const buttons = document.querySelectorAll(".theme-btn");
  if (!buttons.length) return;

  const update = (theme) => {
    buttons.forEach(btn => {
      btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
      btn.title = theme === "dark"
        ? "Switch to Light"
        : "Switch to Dark";
    });
  };

  update(document.documentElement.getAttribute("data-theme"));

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("smm_theme", next);

      update(next);
    });
  });
}

document.addEventListener("DOMContentLoaded", initTheme);
