/* On phones the hero logo shows only the green bar. Tap = open / close the full logo. */
(function () {
  const brand = document.querySelector(".hero__nav .brand");
  if (!brand) return;
  const phone = window.matchMedia("(max-width: 1024.98px)");

  function set(open) {
    brand.classList.toggle("is-open", open);
    if (phone.matches) brand.setAttribute("aria-expanded", String(open));
    else brand.removeAttribute("aria-expanded");
  }

  brand.addEventListener("click", function (e) {
    if (!phone.matches) return;            // desktop: normal link to #top
    e.preventDefault();
    set(!brand.classList.contains("is-open"));
  });

  document.addEventListener("click", function (e) {
    if (phone.matches && !brand.contains(e.target)) set(false);   // tap outside closes it
  });

  phone.addEventListener("change", function () { set(false); });
  set(false);
})();