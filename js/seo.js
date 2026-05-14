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
      "telephone": "+5493885090436",
      "address": { "@type": "PostalAddress", "streetAddress": "Pasaje 2 de Febrero, Barrio Matadero", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" },
      "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday", "Sunday", "PublicHolidays"], "opens": "17:00", "closes": "20:00" }],
      "sameAs": ["https://instagram.com/intipacha_maimara", "https://www.facebook.com/profile.php?id=61576988424322"]
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
      "sameAs": ["https://instagram.com/ortenciaquispe23", "https://facebook.com/ortecia.quispe"]
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
      "sameAs": ["https://instagram.com/qullana_argentina", "https://facebook.com/qullanaremediosnaturales"]
    },
    {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "Tejidos Alborada",
      "description": "Taller de bordado y tejido andino en Maimará con Nora Quispe: bordado de flores, flores de lana y circuito textil completo.",
      "url": "https://turismoruralmaimara.com.ar/",
      "telephone": "+5493884752873",
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
      "telephone": "+5493883299741",
      "address": { "@type": "PostalAddress", "streetAddress": "Coronel Zelaya esq. Froilán Calvetti (Costanera)", "addressLocality": "Maimará", "addressRegion": "Jujuy", "addressCountry": "AR" },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "10:00", "closes": "12:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "16:00", "closes": "19:00" }
      ],
      "sameAs": ["https://instagram.com/maimara.turismorural", "https://www.facebook.com/profile.php?id=61571458094018"]
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
