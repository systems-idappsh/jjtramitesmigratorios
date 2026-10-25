(function () {
  "use strict";

  var currentScript = document.currentScript;
  var rootUrl = currentScript ? new URL("../../../", currentScript.src) : new URL("./", document.baseURI);
  var templates = {
    header: '<div class="container site-header__bar"><a href="{{ROOT}}index.html" class="brand" data-nav-link aria-label="Inicio del Despacho J&amp;J"><img class="brand__logo" src="{{ROOT}}assets/img/brand-jj/logos/isotipo-jj-marco.png" width="72" height="72" alt="" aria-hidden="true"><span class="brand__name"><strong>J&amp;J</strong><span>Despacho Jurídico y Trámites Migratorios</span></span></a><button type="button" class="nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="site-nav" aria-label="Abrir menú"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button><nav class="site-nav" id="site-nav" data-site-nav aria-label="Navegación principal"><ul class="site-nav__list"><li><a href="{{ROOT}}index.html" data-nav-link>Inicio</a></li><li><a href="{{ROOT}}pages/core/servicios.html" data-nav-link>Servicios</a></li><li><a href="{{ROOT}}pages/paises/index.html" data-nav-link>Países</a></li><li><a href="{{ROOT}}pages/core/preguntas-frecuentes.html" data-nav-link>Preguntas</a></li><li><a href="{{ROOT}}pages/core/contacto.html" data-nav-link>Contacto</a></li></ul><a class="site-nav__contact" href="tel:+524251039697" data-analytics="phone_header">425 103 9697</a></nav></div>',
    footer: '<div class="container"><div class="site-footer__grid"><div class="site-footer__brand"><a class="brand" href="{{ROOT}}index.html"><img class="brand__logo" src="{{ROOT}}assets/img/brand-jj/logos/isotipo-jj-marco.png" width="72" height="72" alt="" aria-hidden="true"><span class="brand__name"><strong>J&amp;J</strong><span>Despacho Jurídico y Trámites Migratorios</span></span></a><p>Asuntos familiares y civiles, visas, pasaportes y acompañamiento consular.</p><p class="site-footer__professional">Lic. Juan José Cárdenas Solorio</p><p class="site-footer__address">Hidalgo Ote. 271, Centro, 61853 La Huacana, Michoacán</p><div class="site-footer__social"><a href="https://www.facebook.com/share/1C5XV5uBvW/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a><a href="https://wa.me/524251039697" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a><a href="mailto:lic.j.j.tramites.mig@gmail.com" aria-label="Correo">@</a></div></div><div><h4>Páginas</h4><ul class="site-footer__list"><li><a href="{{ROOT}}index.html">Inicio</a></li><li><a href="{{ROOT}}pages/core/despacho.html">El despacho</a></li><li><a href="{{ROOT}}pages/core/servicios.html">Todos los servicios</a></li><li><a href="{{ROOT}}pages/paises/index.html">México y Estados Unidos</a></li><li><a href="{{ROOT}}pages/core/preguntas-frecuentes.html">Preguntas frecuentes</a></li></ul></div><div><h4>Servicios</h4><ul class="site-footer__list"><li><a href="{{ROOT}}pages/servicios/derecho-familiar.html">Derecho familiar</a></li><li><a href="{{ROOT}}pages/servicios/derecho-civil.html">Derecho civil</a></li><li><a href="{{ROOT}}pages/servicios/tramites-migratorios.html">Trámites migratorios</a></li><li><a href="{{ROOT}}pages/servicios/acompanamiento-embajadas.html">Acompañamiento consular</a></li><li><a href="{{ROOT}}pages/servicios/pasaportes.html">Pasaportes</a></li></ul></div><div><h4>Contacto y legal</h4><ul class="site-footer__list"><li><a href="tel:+524251039697">425 103 9697</a></li><li><a href="tel:+524251031294">425 103 1294</a></li><li><a href="mailto:lic.j.j.tramites.mig@gmail.com">Correo electrónico</a></li><li><a href="https://maps.app.goo.gl/RT4tmzjG8fqX5W6o7?g_st=atm" target="_blank" rel="noopener noreferrer">Google Maps</a></li><li><a href="{{ROOT}}pages/legal/aviso-privacidad.html">Aviso de privacidad</a></li><li><a href="{{ROOT}}pages/legal/terminos-condiciones.html">Términos y condiciones</a></li><li><a href="{{ROOT}}pages/legal/politicas-servicio.html">Políticas de servicio</a></li></ul></div></div><div class="site-footer__bottom"><span>© <span data-current-year></span> Despacho Jurídico y Trámites Migratorios J&amp;J</span><a href="{{ROOT}}pages/core/contacto.html">Contacto y ubicación</a></div></div>',
    "cta-contact": '<div class="container"><div class="cta-contact"><div class="cta-contact__grid"><div><p class="eyebrow eyebrow--light">Atención directa</p><h2>Cuéntanos qué trámite o asunto necesitas resolver.</h2><p>Revisamos la información disponible y te explicamos el alcance antes de comenzar.</p></div><div class="btn-row"><a class="btn btn--gold" href="https://wa.me/524251039697" target="_blank" rel="noopener noreferrer">WhatsApp</a><a class="btn btn--outline" href="tel:+524251039697">Llamar</a><a class="btn btn--outline" href="{{ROOT}}pages/core/contacto.html">Contacto y mapa</a></div></div></div></div>',
    "whatsapp-float": '<a class="whatsapp-float" href="https://wa.me/524251039697" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 1 1-3.8-7.1M8.3 8.8c.5 3.3 3.1 5.9 6.4 6.4"/></svg></a>'
  };

  templates.header = templates.header.replace('<li><a href="{{ROOT}}pages/core/despacho.html" data-nav-link>El despacho</a></li>', "");
  templates.footer = templates.footer.replace('<li><a href="{{ROOT}}pages/core/despacho.html">El despacho</a></li>', "");
  templates.header = templates.header.replace('<strong>J&amp;J</strong><span>Despacho Jurídico y Trámites Migratorios</span>', '<strong>J&amp;J TRÁMITES MIGRATORIOS</strong><span>Despacho Jurídico</span>');
  templates.footer = templates.footer.replace('<strong>J&amp;J</strong><span>Despacho Jurídico y Trámites Migratorios</span>', '<strong>J&amp;J TRÁMITES MIGRATORIOS</strong><span>Despacho Jurídico</span>');
  templates["cta-contact"] = '<div class="container"><div class="cta-contact"><div class="cta-contact__grid"><div><p class="eyebrow eyebrow--light">Atención directa</p><h2>Conversemos para definir el siguiente paso.</h2><p>Una primera conversación permite conocer tu situación y precisar el alcance de la orientación.</p></div><div class="cta-contact__actions"><a class="btn btn--whatsapp cta-contact__primary" href="https://wa.me/524251039697" target="_blank" rel="noopener noreferrer">WhatsApp</a><div class="cta-contact__secondary"><a class="btn btn--outline" href="tel:+524251039697">Llamar al 425 103 9697</a><a class="btn btn--outline" href="mailto:lic.j.j.tramites.mig@gmail.com">Enviar correo</a></div></div></div></div></div>';

  function rootToken() { return rootUrl.href; }

  function activePath(href) {
    try {
      var target = new URL(href, rootUrl).pathname.replace(/index\.html$/, "");
      var current = window.location.pathname.replace(/index\.html$/, "");
      if (target === current || (target !== rootUrl.pathname && current.indexOf(target) === 0)) return true;
      if (target.endsWith("/pages/core/servicios.html") && current.indexOf("/pages/servicios/") !== -1) return true;
      return target.endsWith("/pages/paises/") && current.indexOf("/pages/paises/") !== -1;
    } catch (_) { return false; }
  }

  function mount(node, html) {
    node.innerHTML = html.replaceAll("{{ROOT}}", rootToken());
    node.querySelectorAll("[data-nav-link]").forEach(function (link) {
      if (activePath(link.href)) link.setAttribute("aria-current", "page");
    });
    if (window.JJ && window.JJ.hydrateInstitution) window.JJ.hydrateInstitution(node);
    return Promise.all(Array.from(node.querySelectorAll("[data-include]")).map(include));
  }

  function include(node) {
    var name = node.dataset.include;
    if (!name) return Promise.resolve();
    if (window.location.protocol === "file:") {
      return mount(node, templates[name] || "");
    }
    var componentUrl = new URL("components/" + name + ".html", rootUrl);
    componentUrl.searchParams.set("v", "20261025-7");
    return fetch(componentUrl, { credentials: "same-origin", cache: "no-store" })
      .then(function (response) { if (!response.ok) throw new Error(String(response.status)); return response.text(); })
      .then(function (html) { return mount(node, html); })
      .catch(function () { return mount(node, templates[name] || ""); });
  }

  function init() {
    Promise.all(Array.from(document.querySelectorAll("[data-include]")).map(include))
      .then(function () { document.dispatchEvent(new CustomEvent("jj:layout-ready")); });
  }

  window.JJ = window.JJ || {};
  window.JJ.rootUrl = rootUrl;
  if (!document.querySelector("script[data-jj-marketing]")) {
    var marketing = document.createElement("script");
    marketing.src = new URL("marketing.js", currentScript.src).href;
    marketing.defer = true;
    marketing.dataset.jjMarketing = "true";
    document.head.appendChild(marketing);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
