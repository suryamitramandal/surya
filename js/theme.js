/* Theme System — light/dark via [data-theme] on <html>.
   The animated sun/moon toggle (Skiper Theme Toggle Button 2 port)
   is styled entirely in CSS from the data-theme attribute. */

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
        const isDark = theme === "dark";
        buttons.forEach(btn => {
            btn.setAttribute("aria-pressed", String(isDark));
            btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
            btn.title = isDark ? "Switch to Light" : "Switch to Dark";
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
