/* Páginas: Galería, Cómo llegar, Contacto */
(function () {
  const D = window.SITE_DATA;
  const h = window.h;

  // ---------- GALERÍA ----------
  window.PageGallery = function PageGallery() {
    const lang = window.STATE.lang;
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
    return h('div', { class: 'page-content' },
      h('section', { class: 'hero' },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow reveal', style: { marginBottom: '30px' } }, lang === 'es' ? 'Lugares · Oficios · Sabores' : 'Places · Crafts · Flavors'),
          h('h1', { class: 'reveal-clip', style: { fontSize: 'clamp(48px, 8vw, 110px)' } }, lang === 'es' ? 'Galería' : 'Gallery'),
          h('p', { class: 'reveal', style: { fontSize: '16px', color: 'var(--c-tinta-soft)', maxWidth: '540px', marginTop: '24px', fontFamily: 'var(--font-mono)' } },
            lang === 'es' ? 'un vistazo a todo lo que podés vivir' : 'a glimpse into everything you can experience'
          )
        )
      ),
      h('section', { class: 'section', style: { paddingTop: '30px' } },
        h('div', { class: 'container' },
          h('div', { class: 'gallery-grid' },
            ...tiles.map(tt => h('div', { class: `${tt.cls} reveal-fade`, style: { overflow: 'hidden', position: 'relative' } },
              h('img', { src: tt.src, alt: tt.label, style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } })
            ))
          )
        )
      )
    );
  };

  // ---------- CÓMO LLEGAR ----------
  window.PageVisit = function PageVisit() {
    const lang = window.STATE.lang;
    return h('div', { class: 'page-content' },
      h('section', { class: 'hero' },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow reveal', style: { marginBottom: '30px' } }, lang === 'es' ? 'Maimará · 2.383 m' : 'Maimará · 2,383 m'),
          h('h1', { class: 'reveal-clip', style: { fontSize: 'clamp(48px, 8vw, 110px)' } }, lang === 'es' ? 'Cómo llegar' : 'How to get here')
        )
      ),
      h('section', { class: 'section', style: { paddingTop: '30px' } },
        h('div', { class: 'container' },
          h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' } },
            h('div', { class: 'reveal' },
              h('div', { class: 'eyebrow', style: { marginBottom: '16px' } }, lang === 'es' ? 'En auto' : 'By car'),
              h('p', { style: { fontSize: '17px', lineHeight: '1.65', marginBottom: '12px' } },
                lang === 'es' ? 'Desde San Salvador de Jujuy: 80 km por RN9 (1 h 20 min). Desde Salta: 187 km (3 h).' : 'From San Salvador de Jujuy: 80 km via RN9 (1 h 20 min). From Salta: 187 km (3 h).'
              ),
              h('p', { style: { fontSize: '15px', color: 'var(--c-tinta-soft)' } },
                lang === 'es' ? 'La ruta atraviesa Tilcara y Purmamarca. Maimará está sobre la RN9, a la altura del km 1.764.' : 'Route passes Tilcara and Purmamarca. Maimará sits on RN9 at km 1,764.'
              )
            ),
            h('div', { class: 'reveal' },
              h('div', { class: 'eyebrow', style: { marginBottom: '16px' } }, lang === 'es' ? 'En transporte público' : 'Public transport'),
              h('p', { style: { fontSize: '17px', lineHeight: '1.65', marginBottom: '12px' } },
                lang === 'es' ? 'Combis y colectivos desde Jujuy y Tilcara con frecuencia diaria. Bajada en plaza central.' : 'Vans and buses from Jujuy and Tilcara, daily frequency. Drop off at central plaza.'
              ),
              h('p', { style: { fontSize: '15px', color: 'var(--c-tinta-soft)' } },
                lang === 'es' ? 'Recomendamos coordinar con cada anfitrión los detalles de llegada al emprendimiento.' : 'Coordinate arrival details with each host.'
              )
            )
          ),
          h('div', { class: 'reveal', style: { marginTop: '60px', position: 'relative', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '12px' } },
            h('iframe', {
              src: 'https://maps.google.com/maps?q=Maimar%C3%A1,+Jujuy,+Argentina&output=embed&hl=es',
              width: '100%',
              height: '100%',
              style: { border: '0', display: 'block' },
              allowfullscreen: '',
              loading: 'lazy',
              referrerpolicy: 'no-referrer-when-downgrade',
              title: lang === 'es' ? 'Mapa de Maimará, Jujuy' : 'Map of Maimará, Jujuy'
            })
          )
        )
      )
    );
  };

  // ---------- CONTACTO ----------
  window.PageContact = function PageContact() {
    const lang = window.STATE.lang;

    function onSubmit(e) {
      e.preventDefault();
      const f = e.currentTarget;
      const data = new FormData(f);
      const subject = encodeURIComponent(`Consulta TRM · ${data.get('experiencia') || 'general'}`);
      const body = encodeURIComponent(
        `Nombre: ${data.get('nombre')}\nEmail: ${data.get('email')}\nFecha: ${data.get('fecha')}\nPersonas: ${data.get('personas')}\nExperiencia: ${data.get('experiencia')}\n\n${data.get('mensaje')}`
      );
      window.location.href = `mailto:hola@turismoruralmaimara.ar?subject=${subject}&body=${body}`;
      const sentEl = document.getElementById('contact-sent');
      if (sentEl) sentEl.style.display = 'block';
    }

    return h('div', { class: 'page-content' },
      h('section', { class: 'hero' },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow reveal', style: { marginBottom: '30px' } }, lang === 'es' ? 'Reservas y consultas' : 'Booking & inquiries'),
          h('h1', { class: 'reveal-clip', style: { fontSize: 'clamp(48px, 8vw, 110px)' } }, lang === 'es' ? 'Contacto' : 'Contact')
        )
      ),
      h('section', { class: 'section', style: { paddingTop: '30px' } },
        h('div', { class: 'container' },
          h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px' } },
            h('div', { class: 'reveal' },
              h('h2', { style: { marginBottom: '24px', fontSize: 'clamp(28px, 3.5vw, 44px)' } }, lang === 'es' ? 'Escribinos.' : 'Write to us.'),
              h('p', { style: { fontSize: '16px', lineHeight: '1.65', color: 'var(--c-tinta-soft)', marginBottom: '30px' } },
                lang === 'es'
                  ? 'Completá el formulario y te responderemos por correo. Para coordinar fechas concretas, también podés contactar directamente al anfitrión vía WhatsApp.'
                  : 'Fill the form and we\'ll reply by email. To coordinate dates, you can also reach each host via WhatsApp.'
              ),
              h('div', { style: { padding: '24px 0', borderTop: '1px solid rgba(31,26,20,0.15)', borderBottom: '1px solid rgba(31,26,20,0.15)' } },
                h('div', { class: 'eyebrow', style: { marginBottom: '10px' } }, 'Email'),
                h('div', { style: { fontFamily: 'var(--font-display)', fontSize: '22px' } }, 'hola@turismoruralmaimara.ar')
              ),
              h('div', { style: { padding: '24px 0', borderBottom: '1px solid rgba(31,26,20,0.15)' } },
                h('div', { class: 'eyebrow', style: { marginBottom: '10px' } }, 'Instagram'),
                h('div', { style: { fontFamily: 'var(--font-display)', fontSize: '22px' } }, '@turismoruralmaimara')
              )
            ),
            h('form', { class: 'reveal', onsubmit: onSubmit, style: { background: 'var(--c-papel-2)', padding: '40px 36px' } },
              h('div', { id: 'contact-sent', style: { display: 'none', padding: '16px', background: 'var(--c-cardon)', color: 'var(--c-papel)', marginBottom: '24px', fontSize: '14px' } },
                lang === 'es' ? '✓ Abriendo tu cliente de correo…' : '✓ Opening your mail client…'
              ),
              h('div', { class: 'form-grid' },
                h('div', { class: 'field' },
                  h('label', null, lang === 'es' ? 'Nombre' : 'Name'),
                  h('input', { name: 'nombre', required: true })
                ),
                h('div', { class: 'field' },
                  h('label', null, 'Email'),
                  h('input', { type: 'email', name: 'email', required: true })
                ),
                h('div', { class: 'field' },
                  h('label', null, lang === 'es' ? 'Fecha estimada' : 'Estimated date'),
                  h('input', { name: 'fecha', placeholder: lang === 'es' ? 'ej. 15 de junio' : 'e.g. June 15' })
                ),
                h('div', { class: 'field' },
                  h('label', null, lang === 'es' ? 'Cantidad de personas' : 'Number of people'),
                  h('input', { name: 'personas', type: 'number', min: '1', placeholder: '2' })
                ),
                h('div', { class: 'field span-2' },
                  h('label', null, lang === 'es' ? 'Experiencia de interés' : 'Experience of interest'),
                  h('select', { name: 'experiencia' },
                    h('option', { value: '' }, lang === 'es' ? '— sin definir —' : '— not sure —'),
                    ...D.experiencias.map(e => h('option', { value: e.titulo },
                      `${D.emprendimientos.find(emp => emp.id === e.emprendimiento).nombre} · ${e.titulo}`
                    ))
                  )
                ),
                h('div', { class: 'field span-2' },
                  h('label', null, lang === 'es' ? 'Mensaje' : 'Message'),
                  h('textarea', { name: 'mensaje', placeholder: lang === 'es' ? 'Contanos sobre tu visita…' : 'Tell us about your visit…' })
                )
              ),
              h('button', { type: 'submit', class: 'btn btn-arrow', style: { marginTop: '24px' } },
                lang === 'es' ? 'Enviar consulta' : 'Send inquiry')
            )
          )
        )
      ),
      // FAQ
      h('section', { class: 'section', style: { background: 'var(--c-papel-2)' } },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow reveal', style: { marginBottom: '14px' } }, lang === 'es' ? 'Preguntas frecuentes' : 'FAQ'),
          h('h2', { class: 'reveal', style: { marginBottom: '50px' } }, lang === 'es' ? 'Antes de venir.' : 'Before you come.'),
          h('div', null,
            ...D.faqs.map(f => h('details', { class: 'reveal', style: { borderTop: '1px solid rgba(31,26,20,0.15)', padding: '20px 0' } },
              h('summary', { style: { fontFamily: 'var(--font-display)', fontSize: '22px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                h('span', null, lang === 'es' ? f.q_es : f.q_en),
                h('span', { style: { fontSize: '22px' } }, '+')
              ),
              h('p', { style: { marginTop: '14px', color: 'var(--c-tinta-soft)', lineHeight: '1.65', paddingRight: '40px' } },
                lang === 'es' ? f.a_es : f.a_en
              )
            ))
          ),
          // Política
          h('div', { class: 'reveal', style: { marginTop: '80px', padding: '40px 36px', background: 'var(--c-tinta)', color: 'var(--c-papel)' } },
            h('div', { class: 'eyebrow', style: { color: 'var(--c-amarillo)', marginBottom: '16px' } }, lang === 'es' ? 'Política de reservas' : 'Booking policy'),
            h('h3', { style: { color: 'var(--c-papel)', marginBottom: '20px', fontSize: '28px' } },
              lang === 'es' ? 'Trabajamos desde el principio del precio justo.' : 'We work from the principle of fair price.'
            ),
            h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', fontSize: '14px', lineHeight: '1.55' } },
              h('div', null,
                h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-amarillo)', marginBottom: '10px' } }, '🌿 ' + (lang === 'es' ? 'Tarifas' : 'Rates')),
                lang === 'es' ? 'Ciclos semestrales (ene–jun, jul–dic). Actualizaciones en redes y por correo.' : 'Half-year cycles (Jan–Jun, Jul–Dec). Updates via socials and email.'
              ),
              h('div', null,
                h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-amarillo)', marginBottom: '10px' } }, '💛 ' + (lang === 'es' ? 'Pagos' : 'Payments')),
                lang === 'es' ? 'Seña del 50% para confirmar. Operadores: cada 10 pasajeros, 2 plazas liberadas.' : '50% deposit to confirm. Operators: every 10 paid passengers, 2 free spots.'
              ),
              h('div', null,
                h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-amarillo)', marginBottom: '10px' } }, '🌻 ' + (lang === 'es' ? 'Cancelaciones' : 'Cancellations')),
                lang === 'es' ? '+72 hs: reintegro con 10% retenido como aporte comunitario. -72 hs: depósito no reintegrable.' : '+72 h: refund with 10% retained as community contribution. -72 h: non-refundable.'
              )
            )
          )
        )
      )
    );
  };
})();
