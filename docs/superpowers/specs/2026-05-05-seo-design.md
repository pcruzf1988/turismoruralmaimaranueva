# SEO Design — Turismo Rural Maimará

**Fecha:** 2026-05-05
**Dominio:** turismoruralmaimara.com.ar
**Hosting:** Hostinger (shared, PHP disponible)
**Enfoque elegido:** Opción 2 — SEO completo sin cambios de arquitectura

---

## Contexto

El sitio es una SPA en JavaScript vainilla con un único archivo HTML de entrada (`Turismo Rural Maimara.html`). Todo el contenido se genera via JS en el cliente. El contenido estático del `<head>` es mínimo: solo `<title>` y una `<meta description>` básica. No hay datos estructurados, Open Graph, robots.txt ni sitemap.

El objetivo principal es aparecer en búsquedas de turistas argentinos que planifican viaje a Jujuy/Quebrada de Humahuaca, y en búsquedas de operadores turísticos y agencias de viaje.

---

## Arquitectura

No se cambia la arquitectura SPA. Todas las mejoras son aditivas:

- `Turismo Rural Maimara.html` se renombra a `index.html` (requisito de Hostinger para servir la URL raíz)
- Se enriquece el `<head>` del HTML estático
- Se agrega un nuevo archivo `js/seo.js` con los JSON-LD
- Se crean `robots.txt` y `sitemap.xml` en la raíz
- Se actualiza el alt text de todas las imágenes en los `js/page-*.js`
- Se añaden iconos de favicon

---

## Sección 1 — `<head>`: Meta tags, Open Graph, hreflang, performance

### Meta tags

```html
<title>Turismo Rural Maimará · Experiencias en la Quebrada de Humahuaca</title>
<meta name="description" content="Familias de Maimará, Jujuy, con experiencias rurales auténticas: cocina andina, tejidos ancestrales, plantas medicinales y vida de campo en la Quebrada de Humahuaca.">
<link rel="canonical" href="https://turismoruralmaimara.com.ar/">
```

La descripción tiene ~155 caracteres, incluye palabras clave primarias: "Maimará", "Jujuy", "experiencias rurales", "Quebrada de Humahuaca".

### Open Graph (para WhatsApp, redes sociales)

```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Turismo Rural Maimará">
<meta property="og:title" content="Turismo Rural Maimará · Quebrada de Humahuaca">
<meta property="og:description" content="Viví la Quebrada desde adentro. 6 emprendimientos familiares con experiencias rurales auténticas en Maimará, Jujuy.">
<meta property="og:url" content="https://turismoruralmaimara.com.ar/">
<meta property="og:image" content="https://turismoruralmaimara.com.ar/images/maices.jpeg">
<meta property="og:locale" content="es_AR">
<meta property="og:locale:alternate" content="en_US">
```

Imagen social: `images/maices.jpeg` (elegida por el cliente, representativa del lugar).

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Turismo Rural Maimará · Quebrada de Humahuaca">
<meta name="twitter:description" content="Viví la Quebrada desde adentro. 6 emprendimientos familiares con experiencias rurales auténticas en Maimará, Jujuy.">
<meta name="twitter:image" content="https://turismoruralmaimara.com.ar/images/maices.jpeg">
```

### hreflang (el sitio ya tiene ES/EN)

```html
<link rel="alternate" hreflang="es-AR" href="https://turismoruralmaimara.com.ar/">
<link rel="alternate" hreflang="en" href="https://turismoruralmaimara.com.ar/?lang=en">
<link rel="alternate" hreflang="x-default" href="https://turismoruralmaimara.com.ar/">
```

### Performance

```html
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.gstatic.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="script" href="data.js">
```

### Favicon e iconos

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#C5483A">
```

El `site.webmanifest` define nombre, colores y los íconos para instalación como PWA.

---

## Sección 2 — JSON-LD: Datos estructurados (`js/seo.js`)

Archivo nuevo `js/seo.js`, cargado en el `<head>` con `<script src="js/seo.js"></script>`. Inyecta dinámicamente todos los bloques `<script type="application/ld+json">`.

### Bloque 1: TouristDestination (raíz)

```json
{
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Turismo Rural Maimará",
  "description": "Red de familias anfitrionas en Maimará, Jujuy, que ofrecen experiencias rurales auténticas en la Quebrada de Humahuaca.",
  "url": "https://turismoruralmaimara.com.ar/",
  "image": "https://turismoruralmaimara.com.ar/images/maices.jpeg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Maimará",
    "addressRegion": "Jujuy",
    "addressCountry": "AR"
  },
  "touristType": ["Turismo rural", "Turismo cultural", "Turismo gastronómico"]
}
```

### Bloque 2: LocalBusiness × 6 emprendimientos

Un objeto por emprendimiento con `@type: LocalBusiness`, `name`, `description`, `address` (calle específica), `telephone` (WhatsApp), `openingHours`, `sameAs` (Instagram), `url` (sitio con anchor).

Emprendimientos:
1. **Inti Pacha** — Pasaje 2 de Febrero, Barrio Matadero · Sáb–Dom 17–20h · @intipacha_maimara
2. **La Estrella Familiar** — Calle Belgrano, Barrio San Francisco · Con reserva · @ramor5243
3. **Manitos Tejedoras** — Muña Muña, Sumaj Pacha · Mañanas 10–12 / Tardes 15–17 · @manitostejedoras
4. **Qullana** — Pasaje 19 de Abril, Barrio El Cristo · Mañanas 10–13 / Tardes 15–18 · @qullana_argentina
5. **Tejidos Alborada** — Pedro Manzur, Barrio Güemes · Mañanas 10–12 / Tardes 15–17 · @tejidosalborada
6. **Tierra Mía** — Coronel Zelaya esq. Froilán Calvetti · Mañanas 10–12 / Tardes 16–19 · solo WhatsApp

### Bloque 3: TouristAttraction × experiencias destacadas

Un objeto por experiencia principal (una por emprendimiento) con `@type: TouristAttraction`, `name`, `description`, `duration` (ISO 8601: PT1H, PT3H, etc.), `provider` → referencia al LocalBusiness correspondiente.

Experiencias:
1. Recorrido por prácticas ambientales (Inti Pacha) — PT1H
2. Merienda con panes e infusiones (Inti Pacha) — PT1H30M
3. Cocina participativa andina (Inti Pacha) — PT3H
4. Experiencias rurales: Vive, Siente y Comparte (La Estrella Familiar) — PT4H
5. Del Vellón al Hilo (Manitos Tejedoras) — PT4H / PT5H
6. Alquimia del Color — Tintes Naturales (Manitos Tejedoras) — PT4H / PT5H
7. Primeras Tramas — Tejido en Telar (Manitos Tejedoras) — PT4H
8. Alquimia Vegetal — Aceite Esencial (Qullana) — PT3H
9. La Medicina Está en Tus Manos (Qullana) — PT1H30M / PT2H
10. Bordado de Flores (Tejidos Alborada) — PT3H
11. Adornos con Flores de Lana (Tejidos Alborada) — PT1H
12. El Circuito del Textil (Tejidos Alborada) — PT2H
13. Visita Campo de Flores (Tierra Mía) — PT1H

### Bloque 4: FAQPage

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo reservar una experiencia?", "acceptedAnswer": { "@type": "Answer", "text": "Elegí la experiencia que quieras y contactá por WhatsApp al anfitrión/a. Indicá cantidad de personas y fecha estimada. La reserva se confirma al coordinar día y pagar la seña." } },
    { "@type": "Question", "name": "¿Es necesario tener experiencia previa?", "acceptedAnswer": { "@type": "Answer", "text": "No, las experiencias están diseñadas para todo público. No se necesita experiencia previa. Todas las actividades están pensadas para aprender compartiendo, paso a paso." } },
    { "@type": "Question", "name": "¿Cómo se puede pagar?", "acceptedAnswer": { "@type": "Answer", "text": "Cada anfitrión lo organiza distinto, pero generalmente aceptan efectivo y transferencia bancaria. Algunos emprendimientos también aceptan tarjeta de débito y crédito." } },
    { "@type": "Question", "name": "¿Las experiencias son aptas para niños?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Muchas experiencias son familiares y los niños disfrutan mucho en la huerta, con los animales o en los talleres. Algunas son más adecuadas que otras para familias con niños; consultá con el anfitrión." } },
    { "@type": "Question", "name": "¿Cuánto duran las actividades?", "acceptedAnswer": { "@type": "Answer", "text": "Varía según la propuesta: entre 1 y 5 horas, o media jornada. Se recomienda contar siempre con tiempo para disfrutar sin apuros." } },
    { "@type": "Question", "name": "¿Se incluyen comidas en las experiencias?", "acceptedAnswer": { "@type": "Answer", "text": "En algunas sí: Inti Pacha incluye merienda o menú completo según la experiencia. En otras se ofrece un refrigerio o bebida tradicional. Consultá directamente con cada anfitrión." } }
  ]
}
```

---

## Sección 3 — Archivos de rastreo y alt text

### robots.txt (nuevo en raíz)

```
User-agent: *
Allow: /
Sitemap: https://turismoruralmaimara.com.ar/sitemap.xml
```

### sitemap.xml (nuevo en raíz)

Solo la URL raíz, ya que el SPA no lee parámetros de URL — todas las rutas se manejan en memoria JS. Agregar URLs `?page=X` crearía contenido duplicado (Google vería el mismo HTML para todas). Google indexará las secciones internas al renderizar el JS.

```xml
<url>
  <loc>https://turismoruralmaimara.com.ar/</loc>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
  <lastmod>2026-05-05</lastmod>
</url>
```

**Nota para el futuro:** Si se quiere indexar secciones por separado, el siguiente paso es agregar hash routing en `app.js` (cambia la URL a `/#/experiencias` al navegar) — eso permitiría tener múltiples entradas en el sitemap con URLs reales.

### Alt text en imágenes

En todos los archivos `js/page-*.js`, los llamados a `imgBox(src, '', ...)` y `imgBox(src, alt, ...)` se actualizan con descripciones descriptivas en español. Criterio: `[qué muestra] en [emprendimiento/lugar], Maimará`. Ejemplos:

- `images/intipacha/cocina1.jpeg` → `"Cocina andina en ollas de barro, Inti Pacha, Maimará"`
- `images/manitostejedoras/telar1.jpeg` → `"Telar artesanal andino, Manitos Tejedoras, Maimará"`
- `images/qullana/medicina1.jpeg` → `"Preparación de medicina natural con plantas, Qullana, Maimará"`
- `images/tierramia/flores1.jpeg` → `"Campo de flores cultivadas, Tierra Mía, Maimará"`

### Archivos nuevos y modificados

| Archivo | Acción |
|---|---|
| `Turismo Rural Maimara.html` → `index.html` | Renombrar + modificar: ampliar `<head>` con todas las etiquetas |
| `js/seo.js` | Crear: inyecta todos los JSON-LD |
| `robots.txt` | Crear |
| `sitemap.xml` | Crear |
| `site.webmanifest` | Crear |
| `js/page-home.js` | Modificar: alt text en imágenes |
| `js/page-experiences.js` | Modificar: alt text en imágenes |
| `js/page-hosts.js` | Modificar: alt text en imágenes |
| `js/page-about.js` | Modificar: alt text en imágenes |
| `js/page-other.js` | Modificar: alt text en imágenes |
| `images/icons/` | Crear: favicon.ico, favicon-32x32.png, apple-touch-icon.png |

---

## Palabras clave objetivo

**Primarias (mayor volumen):**
- turismo rural maimará
- experiencias quebrada de humahuaca
- turismo jujuy actividades
- qué hacer en maimará

**Secundarias (intent específico):**
- cocina andina maimará
- tejidos artesanales quebrada humahuaca
- plantas medicinales jujuy
- turismo rural jujuy para grupos

**Long tail (operadores):**
- experiencias rurales para grupos jujuy
- proveedores turismo quebrada humahuaca
- actividades culturales maimará para agencias

---

## Testing post-implementación

1. Validar JSON-LD en [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Validar Open Graph en [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/)
3. Registrar el sitio en Google Search Console con `sitemap.xml`
4. Registrar en Bing Webmaster Tools
5. Confirmar que robots.txt es accesible en `/robots.txt`
