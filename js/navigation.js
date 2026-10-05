/* Navigation behaviour */
(function () {
  const strip = document.getElementById("ticketNav");
  const mini = document.getElementById("ticketMini");
  if (!strip || !mini) return;

  /* 1 - show / hide the compact bar */
  let ticking = false;
  function update() {
    ticking = false;
    mini.classList.toggle("is-visible", strip.getBoundingClientRect().bottom <= 80);
  }
  function requestUpdate() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();

  /* 2 - highlight the current section (order matches the page from top to bottom) */
  const sections = ["top", "benefits", "incentive", "prize"];
  const links = Array.from(document.querySelectorAll("#ticketNav a, #ticketMini a"));
  const visible = {};

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { visible[e.target.id] = e.isIntersecting; });
      const current = sections.filter((id) => visible[id]).pop();
      links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + current));
    }, { rootMargin: "-42% 0px -52% 0px" });   // a thin band around the middle of the screen

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
})();
