/* Apply IMG map to .ph slots; optional hero video */

function applyImages() {
  $$(".ph").forEach((el) => {
    const url = IMG[el.dataset.i];
    if (url) {
      el.style.backgroundImage = `url(${url})`;
      el.classList.remove("empty");
    } else {
      el.classList.add("empty");
    }
  });

  if (IMG.video) {
    const video = document.createElement("video");
    Object.assign(video, {
      src: IMG.video,
      autoplay: true,
      muted: true,
      loop: true,
      playsInline: true,
    });
    $("#inicio").prepend(video);
  }
}
