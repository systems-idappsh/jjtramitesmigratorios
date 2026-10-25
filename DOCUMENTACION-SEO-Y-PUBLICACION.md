# Documentación SEO y publicación

## Identidad y datos utilizados

- Marca visible: **J&J Trámites Migratorios**.
- Descriptor: **Despacho Jurídico**.
- Profesional: Lic. Juan José Cárdenas Solorio.
- Teléfono principal y WhatsApp: 425 103 9697.
- Teléfono secundario: 425 103 1294.
- Correo: lic.j.j.tramites.mig@gmail.com.
- Domicilio: Hidalgo Ote. 271, Centro, 61853 La Huacana, Michoacán.
- Países publicados: México y Estados Unidos.
- Dominio canónico: https://jjtramitesmigratorios.com/.

Los datos centralizados viven en `assets/js/config/institution.js`. No deben duplicarse con valores diferentes en componentes o páginas.

## Arquitectura pública

- `index.html`: portada, banner rotativo cada seis segundos, H1 principal, cinco tarjetas de servicio, presentación del despacho, proceso y contacto. El carrusel conserva controles manuales, pausa por interacción y respeta la preferencia de movimiento reducido.
- `pages/core/servicios.html`: directorio editorial estático de cinco áreas y catorce servicios; no repite las tarjetas visuales de Inicio.
- `pages/servicios/`: páginas de derecho familiar, derecho civil, trámites migratorios, acompañamiento consular y pasaportes. Cada servicio tiene un identificador enlazable.
- `pages/paises/`: índice y fichas de México y Estados Unidos con banderas, navegación interna, contenido orientativo y fuentes oficiales.
- `pages/core/preguntas-frecuentes.html`: respuestas útiles para intención informativa.
- `pages/core/contacto.html`: teléfonos, correo, dirección y mapa.
- `pages/legal/`: aviso de privacidad, términos y condiciones y políticas de servicio.

La página antigua `pages/core/despacho.html` permanece solo para compatibilidad con enlaces previos, usa `noindex` y canonical hacia `/#despacho`. No aparece en navegación ni sitemap.

## SEO implementado

- Un H1 por página pública, con H2 y H3 para la jerarquía interna.
- Títulos y descripciones únicos, canonical, robots, Open Graph y Twitter Cards.
- JSON-LD de WebSite, LegalService/LocalBusiness, Service, CollectionPage, BreadcrumbList y contenido aplicable.
- Enlaces internos entre portada, categorías, servicios concretos, países, preguntas, contacto y páginas legales.
- URLs profundas desde las tarjetas hasta el identificador del servicio solicitado.
- `robots.txt`, `sitemap.xml`, favicons, manifest y página 404 con `noindex`.
- Contenido principal de servicios disponible en HTML estático para indexación incluso antes de ejecutar JavaScript.
- Imágenes con dimensiones, texto alternativo, precarga de los tres banners y formatos locales.

El SEO técnico facilita rastreo e indexación, pero no garantiza posiciones. El posicionamiento depende también de autoridad del dominio, competencia, reseñas, enlaces externos, ficha de negocio, calidad editorial y mantenimiento.

## Componentes y estilos

- `components/header.html`, `nav.html`, `cta-contact.html`, `footer.html` y `whatsapp-float.html` son compartidos.
- `assets/js/core/layout-loader.js` monta los componentes y conserva una reserva para apertura local.
- `assets/css/global/` contiene tokens, base y responsive.
- `assets/css/layout/` contiene header, navegación y footer.
- `assets/css/components/` contiene CTA, catálogo, tarjetas y carruseles.
- `assets/css/pages/` contiene reglas específicas de contenido y servicios.

## Publicación en GitHub Pages

1. Publicar el contenido de esta carpeta en la raíz de la rama configurada.
2. Conservar `CNAME` y `.nojekyll` en la raíz.
3. Configurar `jjtramitesmigratorios.com` como dominio personalizado y activar HTTPS.
4. Verificar DNS, canonical, Open Graph, `robots.txt` y `sitemap.xml` en producción.
5. Registrar el sitemap en Google Search Console y Bing Webmaster Tools.
6. Probar Inicio, las cinco categorías, catorce enlaces profundos, dos países, contacto, mapa y páginas legales.

## Confirmaciones pendientes antes de producción

- Confirmar horario de atención y publicarlo solo cuando sea oficial.
- Confirmar jurisdicción profesional, cédula y alcances que legalmente deban mostrarse.
- Confirmar titularidad de los dos perfiles de Facebook.
- Validar aviso de privacidad, términos y políticas con una persona especialista antes de recibir expedientes sensibles.
- Configurar GA4 o Meta Pixel únicamente con identificadores reales y consentimiento; los campos vacíos mantienen el rastreo desactivado.
