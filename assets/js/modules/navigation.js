(function () {
  "use strict";

  function init() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-site-nav]");
    if (!toggle || !nav || toggle.dataset.ready === "true") return;
    toggle.dataset.ready = "true";

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú de navegación" : "Abrir menú de navegación");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
    }

    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (event) { if (event.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") setOpen(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 1120) setOpen(false); });
  }

  document.addEventListener("jj:layout-ready", init);
})();
