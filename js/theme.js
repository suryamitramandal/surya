/* Theme System */

(function () {
    const STORAGE_KEY = "smm_theme";

    const savedTheme = localStorage.getItem(STORAGE_KEY);

    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    const theme = savedTheme || preferredTheme;

    document.documentElement.setAttribute("data-theme", theme);
})();

function initTheme() {

    const buttons = document.querySelectorAll(".theme-btn");
    if (!buttons.length) return;

    const STORAGE_KEY = "smm_theme";

    const update = (theme) => {
        buttons.forEach(btn => {
            btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
            btn.title = theme === "dark"
                ? "Switch to Light"
                : "Switch to Dark";
        });
    };

    // Apply saved theme
    const currentTheme =
        localStorage.getItem(STORAGE_KEY) ||
        document.documentElement.getAttribute("data-theme") ||
        "light";

    document.documentElement.setAttribute("data-theme", currentTheme);

    update(currentTheme);

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            const current = document.documentElement.getAttribute("data-theme");

            const next = current === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", next);

            localStorage.setItem(STORAGE_KEY, next);

            update(next);

        });

    });

}

document.addEventListener("DOMContentLoaded", initTheme);