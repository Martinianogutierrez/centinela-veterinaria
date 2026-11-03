/* Horizontal drag on services track */

const Carousel = (() => {
  let pointerDown = false;
  let startX = 0;
  let startScroll = 0;
  let dragging = false;

  function isDragging() {
    return dragging;
  }

  function initCarousel() {
    const track = $("#track");
    if (!track) return;

    track.onpointerdown = (event) => {
      pointerDown = true;
      dragging = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
    };

    window.addEventListener("pointerup", () => {
      pointerDown = false;
      setTimeout(() => {
        dragging = false;
      });
    });

    track.onpointermove = (event) => {
      if (!pointerDown) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 5) dragging = true;
      track.scrollLeft = startScroll - delta;
    };
  }

  return { initCarousel, isDragging };
})();
