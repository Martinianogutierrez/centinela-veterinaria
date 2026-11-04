/* Parallax for elements with data-p */

function initParallax() {
  const nodes = $$("[data-p]");
  let framePending = 0;

  function updateParallax() {
    framePending = 0;
    const viewportHeight = innerHeight;

    nodes.forEach((el) => {
      const parentRect = el.parentElement.getBoundingClientRect();
      if (parentRect.bottom < -200 || parentRect.top > viewportHeight + 200) {
        return;
      }
      const factor = parseFloat(el.dataset.p);
      const y =
        (parentRect.top + parentRect.height / 2 - viewportHeight / 2) * factor;
      el.style.translate = `0 ${-y}px`;
    });
  }

  addEventListener(
    "scroll",
    () => {
      if (!framePending) framePending = requestAnimationFrame(updateParallax);
    },
    { passive: true }
  );

  updateParallax();
}
