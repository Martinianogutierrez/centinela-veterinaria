/* Boot Centinela SPA */

const BOOKING_ALERT =
  "Prototipo: aquí iría el formulario / WhatsApp de turnos";

function bindBooking() {
  const openBooking = () => alert(BOOKING_ALERT);
  const bookBtn = $("#book");
  const contactBtn = $("#book-contact");
  if (bookBtn) bookBtn.onclick = openBooking;
  if (contactBtn) contactBtn.onclick = openBooking;
}

function boot() {
  renderServices();
  renderTeam();
  applyImages();
  initTheme();
  initReveal();
  initParallax();
  initNav();
  Carousel.initCarousel();
  bindBooking();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
