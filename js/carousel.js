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

  function maxScroll(track) {
    return Math.max(0, track.scrollWidth - track.clientWidth);
  }

  function syncNav(track, prevBtn, nextBtn, scrollLeft = track.scrollLeft) {
    if (!prevBtn || !nextBtn) return;
    const max = maxScroll(track);
    prevBtn.disabled = scrollLeft <= 1;
    nextBtn.disabled = scrollLeft >= max - 1;
  }

  function step(track, prevBtn, nextBtn, direction) {
    const max = maxScroll(track);
    const target = Math.min(
      max,
      Math.max(0, track.scrollLeft + direction * stepSize(track)),
    );
    syncNav(track, prevBtn, nextBtn, target);
    track.scrollTo({ left: target, behavior: "smooth" });
  }

  function initCarousel() {
    const track = $("#track");
    if (!track) return;

    const prevBtn = $("#track-prev");
    const nextBtn = $("#track-next");

    if (prevBtn && nextBtn) {
      prevBtn.onclick = () => step(track, prevBtn, nextBtn, -1);
      nextBtn.onclick = () => step(track, prevBtn, nextBtn, 1);
      const resync = () => syncNav(track, prevBtn, nextBtn);
      track.addEventListener("scroll", resync, { passive: true });
      window.addEventListener("resize", resync);
      resync();
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
