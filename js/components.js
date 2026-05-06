/* Componentes UI compartidos: Header, Footer, LogoMark, ExpModal */
(function () {
  const D = window.SITE_DATA;
  const h = window.h, t = window.t, ph = window.ph, imgBox = window.imgBox;

  function LogoMark() {
    return h('svg', { viewBox: '0 0 44 44', class: 'logo-mark', html: `
      <rect x="0" y="0" width="44" height="44" fill="#F5EFE2"/>
      <polygon points="0,32 9,18 16,26 24,12 32,22 44,16 44,44 0,44" fill="#C5483A"/>
      <polygon points="0,38 8,28 16,34 24,24 32,32 44,26 44,44 0,44" fill="#D9892A"/>
      <polygon points="0,42 12,34 22,38 32,34 44,40 44,44 0,44" fill="#5C7A3F"/>
      <circle cx="34" cy="12" r="4" fill="#1F1A14"/>
    ` });
  }

  function Header() {
    const s = window.STATE;
    const links = [
      ['home', 'nav_home'], ['about', 'nav_about'], ['experiences', 'nav_exp'],
      ['hosts', 'nav_hosts'], ['gallery', 'nav_gallery'], ['visit', 'nav_visit'], ['contact', 'nav_contact']
    ];

    return h('header', { class: 'site-header' },
      h('div', { class: 'aguayo aguayo-thin' }, [1,2,3,4,5,6,7].map(() => h('span'))),
      h('div', { class: 'nav-inner' },
        h('div', { class: 'logo', onclick: () => window.setRoute('home') },
          LogoMark(),
          h('div', { class: 'logo-text' },
            'Turismo Rural',
            h('small', null, 'Maimará · Quebrada de Humahuaca')
          )
        ),
        h('nav', { class: `nav-links ${s.menuOpen ? 'open' : ''}` },
          ...links.map(([r, k]) =>
            h('a', { class: s.route === r ? 'active' : '', onclick: () => window.setRoute(r) }, t(k))
          )
        ),
        h('div', { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
          h('div', { class: 'lang-toggle' },
            h('button', { class: s.lang === 'es' ? 'active' : '', onclick: () => window.setLang('es') }, 'ES'),
            h('button', { class: s.lang === 'en' ? 'active' : '', onclick: () => window.setLang('en') }, 'EN')
          ),
          h('button', { class: 'menu-btn', onclick: () => window.setMenu(!s.menuOpen) }, s.menuOpen ? '✕' : '☰')
        )
      )
    );
  }

  function Footer() {
    const s = window.STATE;
    const lang = s.lang;
    return h('footer', { class: 'site-footer' },
      h('div', { class: 'aguayo aguayo-thick' }, [1,2,3,4,5,6,7].map(() => h('span'))),
      h('div', { class: 'container', style: { paddingTop: '60px' } },
        h('div', { class: 'footer-grid' },
          h('div', { class: 'footer-col' },
            h('h3', { style: { marginBottom: '16px', fontSize: '36px' } }, 'Maimará'),
            h('p', { style: { opacity: '0.75', fontSize: '14px', lineHeight: '1.6' } },
              lang === 'es'
                ? 'Familias anfitrionas que abren sus casas, sus huertas y sus oficios en el corazón de la Quebrada de Humahuaca.'
                : 'Host families opening their homes, gardens and crafts in the heart of the Quebrada de Humahuaca.'
            )
          ),
          h('div', { class: 'footer-col' },
            h('h4', null, lang === 'es' ? 'Navegar' : 'Navigate'),
            ...['home', 'about', 'experiences', 'hosts'].map(r => {
              const k = r === 'home' ? 'nav_home' : r === 'about' ? 'nav_about' : r === 'experiences' ? 'nav_exp' : 'nav_hosts';
              return h('a', { onclick: () => window.setRoute(r), style: { cursor: 'pointer' } }, t(k));
            })
          ),
          h('div', { class: 'footer-col' },
            h('h4', null, lang === 'es' ? 'Visitar' : 'Visit'),
            ...['gallery', 'visit', 'contact'].map(r => {
              const k = r === 'gallery' ? 'nav_gallery' : r === 'visit' ? 'nav_visit' : 'nav_contact';
              return h('a', { onclick: () => window.setRoute(r), style: { cursor: 'pointer' } }, t(k));
            })
          ),
          h('div', { class: 'footer-col' },
            h('h4', null, lang === 'es' ? 'Comunidad' : 'Community'),
            h('a', { href: 'https://instagram.com/maimara.turismorural', target: '_blank', rel: 'noopener' }, '@maimara.turismorural'),
          )
        ),
        h('div', { class: 'footer-bottom' },
          h('span', null, '© 2025 · Red Maimará Turismo Rural'),
          h('span', null, lang === 'es' ? 'Quebrada de Humahuaca · Patrimonio de la Humanidad' : 'World Heritage Site')
        )
      )
    );
  }

  // ---------- Modal de experiencia ----------
  function ExpModal(exp) {
    const lang = window.STATE.lang;
    const emp = D.emprendimientos.find(e => e.id === exp.emprendimiento);
    if (!emp) return h('div', { class: 'modal-backdrop', onclick: () => window.closeModal() },
      h('div', { class: 'modal', style: { padding: '40px' } }, 'Error: emprendimiento no encontrado.')
    );
    const tones = { intipacha: 'cardon', estrella: 'terracota', manitos: 'violeta', qullana: 'turquesa', alborada: 'ocre', tierramia: 'rosa' };
    const tone = tones[emp.id] || 'terracota';
    const toneAlt = { cardon: 'ocre', terracota: 'ocre', violeta: 'turquesa', turquesa: 'cardon', ocre: 'terracota', rosa: 'violeta' };
    const tone2 = toneAlt[tone];

    const meta = [
      [t('duration'), exp.duracion],
      [t('group'), exp.grupo],
      [t('difficulty'), exp.dificultad],
      [lang === 'es' ? 'Categoría' : 'Category', exp.categoria]
    ];

    return h('div', { class: 'modal-backdrop', onclick: () => window.closeModal() },
      h('div', { class: 'modal modal-wide', onclick: (e) => e.stopPropagation() },
        h('button', { class: 'modal-close', onclick: () => window.closeModal() }, '✕'),
        h('div', { style: { background: emp.color, padding: '50px 50px 36px', color: '#F5EFE2', position: 'relative' } },
          h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: '0.85', marginBottom: '14px' } },
            `${emp.nombre} · ${emp.anfitriones.join(' & ')}`),
          h('h2', { style: { color: '#F5EFE2', fontSize: 'clamp(32px, 4.5vw, 56px)', marginBottom: '10px', lineHeight: '1.05' } }, exp.titulo),
          h('div', { style: { fontSize: '19px', opacity: '0.92', fontStyle: 'italic' } }, exp.subtitulo)
        ),
        h('div', { style: { aspectRatio: '21/9', overflow: 'hidden', borderBottom: `4px solid ${emp.colorAccent || emp.color}` } },
          h('img', { src: exp.img, alt: exp.titulo, style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } })
        ),
        h('div', { style: { padding: '40px 50px 50px' } },
          h('div', { class: 'modal-meta-grid' },
            ...meta.map(([k, v]) => h('div', { class: 'modal-meta-cell' },
              h('div', { class: 'modal-meta-label' }, k),
              h('div', { class: 'modal-meta-value' }, v)
            ))
          ),
          h('div', { class: 'modal-section' },
            h('div', { class: 'eyebrow', style: { marginBottom: '18px', color: emp.color } }, t('description')),
            ...window.paragraphs(exp.descripcion).map(p => h('p', { class: 'modal-paragraph' }, p))
          ),
          h('div', { class: 'modal-gallery' },
            h('div', { class: 'placeholder' }, h('img', { src: exp.imgGal1, alt: exp.titulo, style: { position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block' } })),
            h('div', { class: 'placeholder' }, h('img', { src: exp.imgGal2, alt: exp.titulo, style: { position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block' } })),
            h('div', { class: 'placeholder' }, h('img', { src: exp.imgGal3, alt: exp.titulo, style: { position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }))
          ),
          exp.queHaremos && h('div', { class: 'modal-section' },
            h('div', { class: 'eyebrow', style: { marginBottom: '18px', color: emp.color } }, t('what')),
            ...window.paragraphs(exp.queHaremos).map(p => h('p', { class: 'modal-paragraph' }, p))
          ),
          h('div', { class: 'modal-section' },
            h('div', { class: 'eyebrow', style: { marginBottom: '18px', color: emp.color } }, t('includes')),
            h('ul', { class: 'modal-list' },
              ...exp.incluye.map((it, i) => h('li', { class: 'modal-list-item' },
                h('span', { class: 'modal-list-num', style: { color: emp.color } }, String(i + 1).padStart(2, '0')),
                h('span', null, it)
              ))
            )
          ),
          exp.dificultadDetalle && h('div', { class: 'modal-callout', style: { borderLeftColor: emp.color } },
            h('div', { class: 'eyebrow', style: { marginBottom: '12px', color: emp.color } }, t('diff_detail')),
            h('p', { style: { fontSize: '15px', lineHeight: '1.65', color: 'var(--c-tinta)' } }, exp.dificultadDetalle)
          ),
          h('div', { class: 'modal-host' },
            h('div', { style: { aspectRatio: '1/1', minWidth: '180px', overflow: 'hidden' } },
              h('img', { src: emp.imgRetrato, alt: emp.anfitriones[0], style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } })
            ),
            h('div', null,
              h('div', { class: 'eyebrow', style: { marginBottom: '10px' } }, lang === 'es' ? 'Tu anfitrión' : 'Your host'),
              h('div', { style: { fontFamily: 'var(--font-display)', fontSize: '28px', marginBottom: '6px' } }, emp.anfitriones.join(' & ')),
              h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: emp.color, marginBottom: '14px' } }, `${emp.nombre} · ${emp.numero}`),
              h('div', { style: { fontSize: '13px', lineHeight: '1.6' } },
                h('div', { style: { marginBottom: '8px' } },
                  h('strong', null, t('location') + ': '),
                  emp.ubicacion.length > 180 ? emp.ubicacion.slice(0, 180) + '…' : emp.ubicacion
                ),
                h('div', { style: { marginBottom: '8px' } },
                  h('strong', null, t('schedule') + ': '),
                  emp.horarios
                )
              )
            )
          ),
          h('div', { class: 'modal-actions' },
            h('a', {
              class: 'btn btn-arrow',
              href: `mailto:hola@turismoruralmaimara.ar?subject=Reserva: ${exp.titulo}&body=Hola, me interesa la experiencia "${exp.titulo}" de ${emp.nombre} (${emp.anfitriones.join(' & ')}).`
            }, lang === 'es' ? 'Reservar por correo' : 'Book by email'),
            emp.contacto && emp.contacto.whatsapp && h('a', {
              class: 'btn btn-ghost btn-arrow',
              href: `https://wa.me/${(emp.contacto.whatsapp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola ${emp.anfitriones[0].split(' ')[0]}, me interesa la experiencia "${exp.titulo}".`)}`,
              target: '_blank', rel: 'noopener'
            }, 'WhatsApp ' + emp.anfitriones[0].split(' ')[0]),
            h('button', { class: 'btn btn-ghost', onclick: () => window.closeModal() }, lang === 'es' ? 'Cerrar' : 'Close')
          )
        )
      )
    );
  }

  Object.assign(window, { Header, Footer, LogoMark, ExpModal });
})();
