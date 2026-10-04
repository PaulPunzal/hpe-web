/* The giant word drifts down slowly while scrolling (skipped for reduced motion). */
(function () {
  const word = document.querySelector("[data-hero-word]");
  if (!word || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      word.style.translate = "0 " + Math.min(window.scrollY, 700) * 0.2 + "px";
      ticking = false;
    });
  }, { passive: true });
})();
