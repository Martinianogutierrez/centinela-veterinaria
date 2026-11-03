/* Scroll reveal for .rv elements */

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in");
      });
    },
    { threshold: 0.15 }
  );

  $$(".rv").forEach((el) => observer.observe(el));
}
