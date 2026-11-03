/* Nav bubble + section scroll spy */

function initNav() {
  const links = $$("nav a");
  const bubble = $("#bub");
  if (!bubble || !links.length) return;

  function moveBubble(activeLink) {
    if (!activeLink) {
      bubble.style.opacity = 0;
      return;
    }
    links.forEach((link) => link.classList.toggle("on", link === activeLink));
    bubble.style.opacity = 1;
    bubble.style.left = activeLink.offsetLeft + "px";
    bubble.style.width = activeLink.offsetWidth + "px";
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const match = links.find((link) => link.hash === "#" + entry.target.id);
        links.forEach((link) => link.classList.remove("on"));
        moveBubble(match);
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  $$("section").forEach((section) => sectionObserver.observe(section));

  addEventListener("resize", () => {
    const active = $("nav a.on");
    if (active) moveBubble(active);
  });
}
