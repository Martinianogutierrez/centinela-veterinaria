/* Light / dark theme toggle */

function initTheme() {
  const root = document.documentElement;
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = prefersDark ? "dark" : "light";

  const toggle = $("#tg");
  if (!toggle) return;

  toggle.onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  };
}
