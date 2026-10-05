/* Shows the compact ticket bar once the big strip has scrolled away, and highlights the current section. */
(function () {
  const strip = document.getElementById("ticketNav");
  const mini = document.getElementById("ticketMini");
  if (!strip || !mini || !("IntersectionObserver" in window)) return;

  new IntersectionObserver(([entry]) => {
    mini.classList.toggle("is-visible", !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }, { rootMargin: "-80px 0px 0px 0px" }).observe(strip);

  const sections = ["top", "benefits", "incentive", "prize"];
  const links = Array.from(document.querySelectorAll("#ticketMini a"));
  const visible = {};

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { visible[e.target.id] = e.isIntersecting; });
    const current = sections.filter((id) => visible[id]).pop();
    links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + current));
  }, { rootMargin: "-42% 0px -52% 0px" });

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();