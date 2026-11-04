/* Horizontal drag on services track */

const Carousel = (() => {
  let pointerDown = false;
  let startX = 0;
  let startScroll = 0;
  let dragging = false;

  function isDragging() {
    return dragging;
  }

  function stepSize(track) {
    const card = track.querySelector(".card");
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return card.offsetWidth + gap;
  }

  function syncNav(track, prevBtn, nextBtn) {
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = track.scrollLeft <= 1;
    nextBtn.disabled =
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
  }

  function step(track, direction) {
    track.scrollBy({ left: direction * stepSize(track), behavior: "smooth" });
  }

  function initCarousel() {
    const track = $("#track");
    if (!track) return;

    const prevBtn = $("#track-prev");
    const nextBtn = $("#track-next");

    if (prevBtn && nextBtn) {
      prevBtn.onclick = () => step(track, -1);
      nextBtn.onclick = () => step(track, 1);
      track.addEventListener(
        "scroll",
        () => syncNav(track, prevBtn, nextBtn),
        { passive: true },
      );
      syncNav(track, prevBtn, nextBtn);
    }

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
