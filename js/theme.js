/* Light / dark mode. Uses Bootstrap's data-bs-theme attribute and remembers the choice.
   (A tiny inline script in <head> sets the initial theme before the page paints.) */
(function () {
  const KEY = "hpe-theme";
  const root = document.documentElement;
  const button = document.getElementById("themeToggle");

  function apply(theme) {
    root.setAttribute("data-bs-theme", theme);
    if (button) button.setAttribute("aria-pressed", String(theme === "dark"));
  }

  function save(theme) {
    try { localStorage.setItem(KEY, theme); } catch (e) { /* storage can be blocked */ }
  }

  apply(root.getAttribute("data-bs-theme") || "light");

  if (button) {
    button.addEventListener("click", function () {
      const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      apply(next);
      save(next);
    });
  }
})();
