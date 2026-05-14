# SEO — Turismo Rural Maimará — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimizar el SEO del sitio turismoruralmaimara.com.ar agregando meta tags completos, JSON-LD estructurado para 6 emprendimientos y 13 experiencias, robots.txt, sitemap.xml, favicon y mejora de alt text en imágenes.

**Architecture:** SPA vanilla JS con un único archivo HTML de entrada. Todas las mejoras son aditivas: se enriquece el `<head>` de `index.html`, se agrega un nuevo `js/seo.js` con JSON-LD, y se crean archivos estáticos. No se modifica la lógica de renderizado JS.

**Tech Stack:** HTML5, vanilla JS, Hostinger shared hosting, turismoruralmaimara.com.ar

---

## Mapa de archivos

| Archivo | Acción |
|---|---|
| `Turismo Rural Maimara.html` → `index.html` | Renombrar + ampliar `<head>` |
| `js/seo.js` | Crear: inyecta todos los JSON-LD via `document.head` |
| `robots.txt` | Crear en raíz |
| `sitemap.xml` | Crear en raíz |
| `site.webmanifest` | Crear en raíz |
| `favicon.svg` | Crear en raíz |
| `js/page-other.js` | Modificar: mejorar alt text en galería |
| `js/page-hosts.js` | Modificar: mejorar alt text en imágenes de detalle |

---

## Task 0: Inicializar repositorio git

**Files:** ninguno (setup)

- [ ] **Step 1: Inicializar git en el directorio del proyecto**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git init
git add data.js styles.css js/ images/ content.md
git commit -m "chore: initial commit — proyecto base pre-SEO"
```

- [ ] **Step 2: Verificar estado limpio**

```bash
git status
```
Expected: `nothing to commit, working tree clean`

---

## Task 1: Renombrar HTML y enriquecer `<head>`

**Files:**
- Rename: `Turismo Rural Maimara.html` → `index.html`
- Modify: `index.html` (sección `<head>`)

- [ ] **Step 1: Renombrar el archivo (git mv preserva el historial)**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git mv "Turismo Rural Maimara.html" index.html
```

- [ ] **Step 2: Verificar que se renombró correctamente**

```bash
ls -la "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)/index.html"
git status
```
Expected: el archivo existe como `index.html`; git status muestra `renamed: Turismo Rural Maimara.html -> index.html`

- [ ] **Step 3: Reemplazar el `<head>` completo en index.html**

Reemplazar el `<head>` actual (líneas 3–11) con el siguiente contenido:

```html
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO básico -->
<title>Turismo Rural Maimará · Experiencias en la Quebrada de Humahuaca</title>
<meta name="description" content="Familias de Maimará, Jujuy, con experiencias rurales auténticas: cocina andina, tejidos ancestrales, plantas medicinales y vida de campo en la Quebrada de Humahuaca.">
<link rel="canonical" href="https://turismoruralmaimara.com.ar/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Turismo Rural Maimará">
<meta property="og:title" content="Turismo Rural Maimará · Quebrada de Humahuaca">
<meta property="og:description" content="Viví la Quebrada desde adentro. 6 emprendimientos familiares con experiencias rurales auténticas en Maimará, Jujuy.">
<meta property="og:url" content="https://turismoruralmaimara.com.ar/">
<meta property="og:image" content="https://turismoruralmaimara.com.ar/images/maices.jpeg">
<meta property="og:locale" content="es_AR">
<meta property="og:locale:alternate" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Turismo Rural Maimará · Quebrada de Humahuaca">
<meta name="twitter:description" content="Viví la Quebrada desde adentro. 6 emprendimientos familiares con experiencias rurales auténticas en Maimará, Jujuy.">
<meta name="twitter:image" content="https://turismoruralmaimara.com.ar/images/maices.jpeg">

<!-- hreflang ES/EN -->
<link rel="alternate" hreflang="es-AR" href="https://turismoruralmaimara.com.ar/">
<link rel="alternate" hreflang="en" href="https://turismoruralmaimara.com.ar/?lang=en">
<link rel="alternate" hreflang="x-default" href="https://turismoruralmaimara.com.ar/">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#C5483A">

<!-- Performance -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.gstatic.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="script" href="data.js">

<!-- Fuentes -->
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- Estilos -->
<link rel="stylesheet" href="styles.css">

<!-- SEO: Datos estructurados JSON-LD -->
<script src="js/seo.js"></script>
</head>
```

- [ ] **Step 4: Abrir index.html en el navegador y verificar que carga correctamente**

Abrir `index.html` con un servidor local o directamente en el browser. El sitio debe verse y funcionar igual que antes.

- [ ] **Step 5: Commit**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git add index.html
git commit -m "seo: rename to index.html and enrich <head> with meta tags, OG, hreflang"
```

---

## Task 2: Crear js/seo.js — JSON-LD estructurado

**Files:**
- Create: `js/seo.js`

- [ ] **Step 1: Crear el archivo js/seo.js con el siguiente contenido**

```js
/* SEO: JSON-LD structured data — Turismo Rural Maimará */
(function () {
  function injectJsonLd(data) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ① TouristDestination — sitio raíz */
  injectJsonLd({
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
    "touristType": ["Turismo rural", "Turismo cultural", "Turismo gastronómico", "Turismo artesanal"]
  });

  /* ② LocalBusiness × 6 emprendimientos */
  [
    {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "Inti Pacha",
      "description": "Espacio familiar en Maimará con cocina andina, huerta agroecológica y productos artesanales. Sello Cocinar del Ministerio de Turismo.",
      "url": "https://turismoruralmaimara.com.ar/",
      "address": { "@type": "PostalAddress", "streetAddress": "Pasaje 2 de Febrero, Barrio Matadero", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" },
      "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday", "Sunday", "PublicHolidays"], "opens": "17:00", "closes": "20:00" }],
      "sameAs": ["https://instagram.com/intipacha_maimara"]
    },
    {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "La Estrella Familiar",
      "description": "Vida de campo con Ramona: cabras, quesos artesanales, huerta y mesa familiar en Maimará, Quebrada de Humahuaca.",
      "url": "https://turismoruralmaimara.com.ar/",
      "telephone": "+5493884784785",
      "address": { "@type": "PostalAddress", "streetAddress": "Calle Belgrano, Barrio San Francisco", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" },
      "sameAs": ["https://instagram.com/ramor5243", "https://facebook.com/ramo.rodri.2025"]
    },
    {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "Manitos Tejedoras",
      "description": "Taller textil andino en Maimará: hilado en puisca prehispánica, tintes naturales y tejido en telar bastidor con Ortencia Quispe.",
      "url": "https://turismoruralmaimara.com.ar/",
      "telephone": "+5493884158833",
      "address": { "@type": "PostalAddress", "streetAddress": "Calle Muña Muña, Barrio Sumaj Pacha", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "10:00", "closes": "12:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "15:00", "closes": "17:00" }
      ],
      "sameAs": ["https://instagram.com/manitostejedoras"]
    },
    {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "Qulläna",
      "description": "Laboratorio artesanal de plantas medicinales en Maimará: aceites esenciales, pomadas y tinturas madre elaborados con Marina.",
      "url": "https://turismoruralmaimara.com.ar/",
      "telephone": "+5491130341946",
      "address": { "@type": "PostalAddress", "streetAddress": "Pasaje 19 de abril (final), Barrio El Cristo", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "10:00", "closes": "13:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "15:00", "closes": "18:00" }
      ],
      "sameAs": ["https://instagram.com/qullana_argentina"]
    },
    {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "Tejidos Alborada",
      "description": "Taller de bordado y tejido andino en Maimará con Nora Quispe: bordado de flores, flores de lana y circuito textil completo.",
      "url": "https://turismoruralmaimara.com.ar/",
      "telephone": "+5493884728730",
      "address": { "@type": "PostalAddress", "streetAddress": "Calle Pedro Manzur, Barrio Güemes", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "10:00", "closes": "12:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "15:00", "closes": "17:00" }
      ],
      "sameAs": ["https://instagram.com/tejidosalborada", "https://facebook.com/tejidosalborada"]
    },
    {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "Tierra Mía",
      "description": "Visita al campo de flores y hortalizas al pie de la Paleta del Pintor, Maimará. Más de 30 años de cultivo familiar con Patricia Cruz.",
      "url": "https://turismoruralmaimara.com.ar/",
      "address": { "@type": "PostalAddress", "streetAddress": "Coronel Zelaya esq. Froilán Calvetti (Costanera)", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "10:00", "closes": "12:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "16:00", "closes": "19:00" }
      ]
    }
  ].forEach(injectJsonLd);

  /* ③ TouristAttraction × 13 experiencias */
  [
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Recorrido por nuestras prácticas ambientales",
      "description": "Vida sostenible en Inti Pacha, Maimará: huerta agroecológica, deshidratadores reciclados y 12 prácticas ambientales cotidianas.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/intipacha/ambiental1.jpeg",
      "duration": "PT1H",
      "audience": { "@type": "Audience", "audienceType": "Todo público" },
      "provider": { "@type": "LocalBusiness", "name": "Inti Pacha", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Sabores conscientes en ollas de barro",
      "description": "Merienda con panes artesanales, infusiones andinas y dulces caseros elaborados en ollas de barro en Inti Pacha, Maimará.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/intipacha/ollas1.jpeg",
      "duration": "PT1H30M",
      "audience": { "@type": "Audience", "audienceType": "Todo público" },
      "provider": { "@type": "LocalBusiness", "name": "Inti Pacha", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Aromas, sabores y secretos de la cocina familiar andina",
      "description": "Cocina participativa andina en Inti Pacha: menú de 4 pasos con ingredientes de la huerta, elaboración conjunta del plato principal. Apto celíacos y diabéticos.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/intipacha/cocina1.jpeg",
      "duration": "PT3H",
      "audience": { "@type": "Audience", "audienceType": "Adolescentes y adultos, apto celíacos" },
      "provider": { "@type": "LocalBusiness", "name": "Inti Pacha", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Experiencias rurales: Vive, Siente y Comparte",
      "description": "Vida de campo con Ramona en La Estrella Familiar, Maimará: cabras, huerta, elaboración de quesos artesanales y mesa familiar. Opciones de medio día, día completo o alojamiento.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/estrellafamiliar/vidarural1.jpeg",
      "duration": "PT2H",
      "audience": { "@type": "Audience", "audienceType": "Todo público, apto para familias con niños" },
      "provider": { "@type": "LocalBusiness", "name": "La Estrella Familiar", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Del vellón al hilo",
      "description": "Proceso textil andino desde la esquila hasta el hilado en puisca prehispánica o rueca a pedal con Ortencia. Manitos Tejedoras, Maimará.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/manitostejedoras/hilo1.jpg",
      "duration": "PT4H",
      "audience": { "@type": "Audience", "audienceType": "Todo público" },
      "provider": { "@type": "LocalBusiness", "name": "Manitos Tejedoras", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Alquimia del color — Tintes naturales",
      "description": "Taller de tintes naturales con plantas de la Quebrada de Humahuaca, fogón y madejas de lana. Manitos Tejedoras, Maimará.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/manitostejedoras/tintes1.jpeg",
      "duration": "PT4H",
      "audience": { "@type": "Audience", "audienceType": "Todo público" },
      "provider": { "@type": "LocalBusiness", "name": "Manitos Tejedoras", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Primeras tramas — Tejido en telar bastidor",
      "description": "Urdí y tejé en telar bastidor con Ortencia Quispe. Te llevás el telar con tu trabajo iniciado. Manitos Tejedoras, Maimará.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/manitostejedoras/telar1.jpeg",
      "duration": "PT4H",
      "audience": { "@type": "Audience", "audienceType": "Todo público" },
      "provider": { "@type": "LocalBusiness", "name": "Manitos Tejedoras", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Alquimia vegetal: obtené tu propio aceite esencial",
      "description": "Destilación de aceite esencial por arrastre de vapor en alambique artesanal con Marina. Qulläna, laboratorio de plantas medicinales en Maimará, Jujuy.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/qullana/aceite1.jpeg",
      "duration": "PT3H",
      "audience": { "@type": "Audience", "audienceType": "Amantes de las plantas medicinales" },
      "provider": { "@type": "LocalBusiness", "name": "Qulläna", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "La medicina está en tus manos — Ungüentos, pomadas y tinturas madre",
      "description": "Preparación de pomada medicinal y tintura madre con plantas medicinales en Qulläna, laboratorio artesanal en Maimará, Jujuy.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/qullana/medicina1.jpeg",
      "duration": "PT1H30M",
      "audience": { "@type": "Audience", "audienceType": "Todo público" },
      "provider": { "@type": "LocalBusiness", "name": "Qulläna", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Bordado de flores",
      "description": "Taller de bordado floral andino con Nora Quispe en Tejidos Alborada, Maimará. Te llevás un souvenir bordado por vos mismo.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/alborada/exp2.jpeg",
      "duration": "PT3H",
      "audience": { "@type": "Audience", "audienceType": "Amantes del textil y el bordado" },
      "provider": { "@type": "LocalBusiness", "name": "Tejidos Alborada", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Adornos con flores de lana",
      "description": "Recreamos la tradición puneña de florar el ganado: creá flores de lana coloridas y transformalas en un llavero. Tejidos Alborada, Maimará.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/alborada/alborada1.jpeg",
      "duration": "PT1H",
      "audience": { "@type": "Audience", "audienceType": "Todo público" },
      "provider": { "@type": "LocalBusiness", "name": "Tejidos Alborada", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "El circuito del textil",
      "description": "Recorrido interactivo por 4 estaciones: de la fibra a la prenda terminada. Tejidos Alborada, Maimará. Ideal para grupos de 2 a 12 personas.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/alborada/alborada2.jpeg",
      "duration": "PT2H",
      "audience": { "@type": "Audience", "audienceType": "Todo público, ideal para grupos" },
      "provider": { "@type": "LocalBusiness", "name": "Tejidos Alborada", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    },
    {
      "@context": "https://schema.org", "@type": "TouristAttraction",
      "name": "Visita al campo de flores",
      "description": "Recorrido por sembradíos de flores y hortalizas al pie de la Paleta del Pintor, Maimará. 15 variedades de flores, 30 años de cultivo familiar con Patricia Cruz.",
      "url": "https://turismoruralmaimara.com.ar/",
      "image": "https://turismoruralmaimara.com.ar/images/tierramia/flores1.jpeg",
      "duration": "PT1H",
      "audience": { "@type": "Audience", "audienceType": "Todo público" },
      "provider": { "@type": "LocalBusiness", "name": "Tierra Mía", "address": { "@type": "PostalAddress", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" } }
    }
  ].forEach(injectJsonLd);

  /* ④ FAQPage */
  injectJsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "¿Cómo reservar una experiencia?", "acceptedAnswer": { "@type": "Answer", "text": "Elegí la experiencia que quieras y contactá por WhatsApp al anfitrión/a. Indicá cantidad de personas y fecha estimada. La reserva se confirma al coordinar día y pagar la seña (50% del total)." } },
      { "@type": "Question", "name": "¿Es necesario tener experiencia previa?", "acceptedAnswer": { "@type": "Answer", "text": "No, las experiencias están diseñadas para todo público. No se necesita experiencia previa. Todas las actividades están pensadas para aprender compartiendo, paso a paso." } },
      { "@type": "Question", "name": "¿Cómo se puede pagar?", "acceptedAnswer": { "@type": "Answer", "text": "Cada anfitrión lo organiza distinto, pero generalmente aceptan efectivo y transferencia bancaria. Algunos emprendimientos también aceptan tarjeta de débito y crédito." } },
      { "@type": "Question", "name": "¿Las experiencias son aptas para niños?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Muchas experiencias son familiares y los niños disfrutan mucho en la huerta, con los animales o en los talleres. Algunas son más adecuadas que otras para familias con niños; consultá con el anfitrión." } },
      { "@type": "Question", "name": "¿Cuánto duran las actividades?", "acceptedAnswer": { "@type": "Answer", "text": "Varía según la propuesta: entre 1 y 5 horas, o media jornada. Se recomienda contar siempre con tiempo para disfrutar sin apuros." } },
      { "@type": "Question", "name": "¿Se incluyen comidas en las experiencias?", "acceptedAnswer": { "@type": "Answer", "text": "En algunas sí: Inti Pacha incluye merienda o menú completo según la experiencia. En otras se ofrece un refrigerio o bebida tradicional. Consultá directamente con cada anfitrión." } }
    ]
  });
})();
```

- [ ] **Step 2: Verificar que index.html carga seo.js sin errores**

Abrir `index.html` en el browser → abrir DevTools → Console. No deben aparecer errores. En la pestaña Elements → `<head>`, deben verse los bloques `<script type="application/ld+json">` inyectados.

- [ ] **Step 3: Validar JSON-LD en Google Rich Results Test**

Ir a https://search.google.com/test/rich-results (requiere que el sitio esté publicado) o usar la opción "URL" con un servidor local. Verificar que no hay errores de validación.

- [ ] **Step 4: Commit**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git add js/seo.js
git commit -m "seo: add JSON-LD structured data (TouristDestination, 6 LocalBusiness, 13 TouristAttraction, FAQPage)"
```

---

## Task 3: Crear robots.txt y sitemap.xml

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Crear robots.txt**

Crear el archivo `robots.txt` en la raíz del proyecto con este contenido exacto:

```
User-agent: *
Allow: /

Sitemap: https://turismoruralmaimara.com.ar/sitemap.xml
```

- [ ] **Step 2: Crear sitemap.xml**

Crear el archivo `sitemap.xml` en la raíz del proyecto con este contenido exacto:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://turismoruralmaimara.com.ar/</loc>
    <lastmod>2026-05-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Verificar que los archivos se crearon**

```bash
cat "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)/robots.txt"
cat "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)/sitemap.xml"
```

- [ ] **Step 4: Commit**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git add robots.txt sitemap.xml
git commit -m "seo: add robots.txt and sitemap.xml"
```

---

## Task 4: Crear site.webmanifest y favicon.svg

**Files:**
- Create: `site.webmanifest`
- Create: `favicon.svg`

- [ ] **Step 1: Crear favicon.svg** (basado en el logo del sitio)

Crear el archivo `favicon.svg` en la raíz del proyecto:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
  <rect x="0" y="0" width="44" height="44" fill="#F5EFE2"/>
  <polygon points="0,32 9,18 16,26 24,12 32,22 44,16 44,44 0,44" fill="#C5483A"/>
  <polygon points="0,38 8,28 16,34 24,24 32,32 44,26 44,44 0,44" fill="#D9892A"/>
  <polygon points="0,42 12,34 22,38 32,34 44,40 44,44 0,44" fill="#5C7A3F"/>
  <circle cx="34" cy="12" r="4" fill="#1F1A14"/>
</svg>
```

- [ ] **Step 2: Crear site.webmanifest**

Crear el archivo `site.webmanifest` en la raíz del proyecto:

```json
{
  "name": "Turismo Rural Maimará",
  "short_name": "TRM Maimará",
  "description": "Experiencias rurales auténticas en la Quebrada de Humahuaca, Jujuy.",
  "start_url": "/",
  "display": "browser",
  "background_color": "#F5EFE2",
  "theme_color": "#C5483A",
  "lang": "es-AR",
  "icons": [
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" }
  ]
}
```

- [ ] **Step 3: Verificar favicon en el browser**

Abrir `index.html` en el browser. La pestaña del navegador debe mostrar el ícono de las montañas con sol (igual al logo del sitio).

- [ ] **Step 4: Commit**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git add favicon.svg site.webmanifest
git commit -m "seo: add favicon.svg and site.webmanifest"
```

---

## Task 5: Mejorar alt text en galería (page-other.js)

**Files:**
- Modify: `js/page-other.js` (líneas 10–22, array `tiles`)

Las etiquetas actuales de la galería son cortas y en mayúsculas. Se reemplazan por descripciones contextuales que incluyen el emprendimiento y la ubicación.

- [ ] **Step 1: Actualizar el array `tiles` en PageGallery**

Ubicar el array `tiles` en `js/page-other.js` (comienza en la línea 10) y reemplazar con:

```js
const tiles = [
  { src: 'images/maices.jpeg', label: 'Maíces de colores en la Quebrada de Humahuaca, Maimará, Jujuy', cls: 'g-big' },
  { src: 'images/intipacha/huerta1.jpeg', label: 'Huerta agroecológica con aromáticas y especias, Inti Pacha, Maimará', cls: 'g-sq' },
  { src: 'images/estrellafamiliar/casa1.jpeg', label: 'Cabras y vida de campo en La Estrella Familiar, Maimará', cls: 'g-sq' },
  { src: 'images/manitostejedoras/telar1.jpeg', label: 'Telar bastidor andino con lana de oveja, Manitos Tejedoras, Maimará', cls: 'g-wide' },
  { src: 'images/qullana/qullana2.jpeg', label: 'Alambique artesanal para destilación de aceites esenciales, Qulläna, Maimará', cls: 'g-narrow' },
  { src: 'images/tierramia/flores1.jpeg', label: 'Campo de flores cultivadas al pie de la Paleta del Pintor, Tierra Mía, Maimará', cls: 'g-narrow' },
  { src: 'images/alborada/alborada2.jpeg', label: 'Bordado de flores andinas en tela, Tejidos Alborada, Maimará', cls: 'g-default' },
  { src: 'images/intipacha/cocina2.jpeg', label: 'Cocina en ollas de barro con ingredientes andinos, Inti Pacha, Maimará', cls: 'g-default' },
  { src: 'images/manitostejedoras/manitostejedoras2.jpg', label: 'Hilado en puisca prehispánica con lana de llama, Manitos Tejedoras, Maimará', cls: 'g-default' },
  { src: 'images/manitostejedoras/tintes2.jpeg', label: 'Tintes naturales con plantas de la Quebrada en madejas de lana', cls: 'g-default' },
  { src: 'images/estrellafamiliar/estadia1.jpeg', label: 'Amanecer en la Quebrada de Humahuaca desde La Estrella Familiar, Maimará', cls: 'g-wide' },
  { src: 'images/intipacha/cocina3.jpeg', label: 'Pan artesanal elaborado con harinas andinas en Inti Pacha, Maimará', cls: 'g-sq' }
];
```

- [ ] **Step 2: Verificar en el browser**

Abrir la galería en el sitio. Inspeccionar una imagen: el atributo `alt` debe mostrar el texto descriptivo nuevo.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git add js/page-other.js
git commit -m "seo: improve gallery image alt text with descriptive location context"
```

---

## Task 6: Mejorar alt text en imágenes de detalle de anfitriones (page-hosts.js)

**Files:**
- Modify: `js/page-hosts.js` (líneas 12–13, objetos `labels2a` y `labels2b`)

Las etiquetas actuales son cortas y sin contexto de ubicación. Se mejoran para incluir el emprendimiento.

- [ ] **Step 1: Actualizar `labels2a` y `labels2b` en page-hosts.js**

Localizar las líneas 12–13 y reemplazar:

```js
const labels2a = {
  intipacha: 'Huerta agroecológica con aromáticas y especias, Inti Pacha, Maimará',
  estrella: 'Cabras y animales de campo, La Estrella Familiar, Maimará',
  manitos: 'Hilado en puisca prehispánica, Manitos Tejedoras, Maimará',
  qullana: 'Plantas medicinales y alambique artesanal, Qulläna, Maimará',
  alborada: 'Bordado de flores en tela, Tejidos Alborada, Maimará',
  tierramia: 'Campo de flores y hortalizas, Tierra Mía, Maimará'
};
const labels2b = {
  intipacha: 'Infusiones y dulces en ollas de barro, Inti Pacha, Maimará',
  estrella: 'Mesa familiar con productos de la huerta, La Estrella Familiar, Maimará',
  manitos: 'Tejido en telar bastidor con tintes naturales, Manitos Tejedoras, Maimará',
  qullana: 'Preparación de aceites esenciales e hidrolatos, Qulläna, Maimará',
  alborada: 'Flores de lana de colores para adornos, Tejidos Alborada, Maimará',
  tierramia: 'Hortalizas y cosecha en el campo familiar, Tierra Mía, Maimará'
};
```

- [ ] **Step 2: Verificar en el browser**

Abrir la página de Anfitriones. Inspeccionar las imágenes de detalle de cada emprendimiento: el `alt` debe mostrar la descripción nueva con nombre y ubicación.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git add js/page-hosts.js
git commit -m "seo: improve host detail image alt text with emprendimiento and location"
```

---

## Task 7: Verificación final y checklist de testing

**Files:** ninguno (solo verificación)

- [ ] **Step 1: Verificar que todos los archivos nuevos existen**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
ls -la index.html robots.txt sitemap.xml site.webmanifest favicon.svg js/seo.js
```
Expected: los 6 archivos deben aparecer.

- [ ] **Step 2: Verificar que el `<head>` de index.html tiene todas las etiquetas**

```bash
grep -c "og:title\|og:image\|twitter:card\|hreflang\|canonical\|seo.js" "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)/index.html"
```
Expected: 6 (una línea por cada patrón encontrado)

- [ ] **Step 3: Verificar que seo.js inyecta JSON-LD correctamente**

Abrir `index.html` en el browser → DevTools → Elements → buscar en `<head>` los `<script type="application/ld+json">`. Deben aparecer al menos 11 bloques (1 TouristDestination + 6 LocalBusiness + 13 TouristAttraction + 1 FAQPage = 22 bloques).

- [ ] **Step 4: Checklist de herramientas externas (post-publicación en Hostinger)**

Una vez subido el sitio a `turismoruralmaimara.com.ar`:

1. **Google Rich Results Test:** https://search.google.com/test/rich-results → ingresar la URL → verificar que no hay errores en FAQPage y LocalBusiness
2. **Meta Sharing Debugger (OG):** https://developers.facebook.com/tools/debug/ → ingresar la URL → verificar que la imagen de los maíces aparece en el preview
3. **Google Search Console:** registrar el sitio → subir el sitemap en `turismoruralmaimara.com.ar/sitemap.xml` → solicitar indexación de la URL raíz
4. **Bing Webmaster Tools:** https://www.bing.com/webmasters → registrar el sitio y subir sitemap
5. **robots.txt Check:** abrir `https://turismoruralmaimara.com.ar/robots.txt` en el browser → debe mostrar el contenido del archivo

- [ ] **Step 5: Commit final de verificación (si hay ajustes menores)**

```bash
cd "/Users/pedrocruz/Downloads/Turismo Rural Maimara (1)"
git add -A
git status
# Verificar que no haya archivos inesperados antes de commitear
git commit -m "seo: final verification and minor adjustments"
```
