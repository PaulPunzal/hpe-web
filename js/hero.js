/* Makes the giant hero word drift down slowly while scrolling. */
(function () {
  const word = document.querySelector("[data-hero-word]");
  const hero = document.getElementById("top");
  if (!word || !hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let inView = true;
  let ticking = false;

  function update() {
    ticking = false;
    word.style.translate = "0 " + Math.min(window.scrollY, 700) * 0.2 + "px";
  }

  function onScroll() {
    if (inView && !ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) onScroll();
  }).observe(hero);

  window.addEventListener("scroll", onScroll, { passive: true });
})();