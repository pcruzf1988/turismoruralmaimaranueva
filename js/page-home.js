/* Página HOME */
(function () {
  const D = window.SITE_DATA;
  const h = window.h, ph = window.ph, imgBox = window.imgBox;

  window.PageHome = function PageHome() {
    const lang = window.STATE.lang;
    const tones = { intipacha: 'cardon', estrella: 'terracota', manitos: 'violeta', qullana: 'turquesa', alborada: 'ocre', tierramia: 'rosa' };

    return h('div', { class: 'page-content' },
      // HERO
      h('section', { class: 'hero' },
        h('div', { class: 'container' },
          h('div', { class: 'hero-grid' },
            h('div', null,
              h('div', { class: 'eyebrow reveal', style: { marginBottom: '30px' } },
                lang === 'es'
                  ? `Red de Familias Anfitrionas · ${D.emprendimientos.length} emprendimientos`
                  : `Host Families Network · ${D.emprendimientos.length} ventures`
              ),
              h('h1', { class: 'hero-title reveal-clip', html: lang === 'es'
                ? 'Viví la <em>Quebrada</em><br>desde <em>adentro</em>.'
                : 'Live the <em>Quebrada</em><br>from <em>within</em>.'
              }),
              h('p', { class: 'reveal', style: { fontSize: '19px', maxWidth: '520px', marginTop: '30px', color: 'var(--c-tinta-soft)' } },
                lang === 'es'
                  ? 'Somos familias anfitrionas de Maimará que invitan a vivir experiencias rurales auténticas en la Quebrada de Humahuaca. No te llevás solo una postal: te llevás una emoción, una vivencia, un aprendizaje.'
                  : 'We are host families from Maimará inviting you to live authentic rural experiences in the Quebrada de Humahuaca. You don\'t just take a postcard — you take an emotion, an experience, a lesson.'
              ),
              h('div', { class: 'reveal', style: { display: 'flex', gap: '14px', marginTop: '36px', flexWrap: 'wrap' } },
                h('button', { class: 'btn btn-arrow', onclick: () => window.setRoute('experiences') },
                  lang === 'es' ? 'Ver experiencias' : 'See experiences'),
                h('button', { class: 'btn btn-ghost', onclick: () => window.setRoute('hosts') },
                  lang === 'es' ? 'Conocé a las familias' : 'Meet the families')
              ),
              h('div', { class: 'hero-meta reveal' },
                h('span', null, lang === 'es' ? 'Familias' : 'Families', h('strong', null, String(D.emprendimientos.length).padStart(2, '0'))),
                h('span', null, lang === 'es' ? 'Experiencias' : 'Experiences', h('strong', null, String(D.experiencias.length))),
                h('span', null, lang === 'es' ? 'Altura' : 'Altitude', h('strong', null, '2.383 m')),
                h('span', null, lang === 'es' ? 'Patrimonio UNESCO' : 'UNESCO', h('strong', null, '2003'))
              )
            ),
            h('div', { class: 'reveal hero-collage' },
              h('img', { class: 'hc-main', src: 'images/abeja.jpeg', alt: 'Abeja sobre flores', style: { display: 'block', objectFit: 'cover' } }),
              h('img', { class: 'hc-sm1', src: 'images/maices.jpeg', alt: 'Maíces andinos', style: { display: 'block', objectFit: 'cover' } }),
              h('img', { class: 'hc-sm2', src: 'images/telar.jpeg', alt: 'Telar · lana de llama', style: { display: 'block', objectFit: 'cover' } })
            )
          )
        )
      ),

      // TICKER
      h('div', { class: 'ticker' },
        h('div', { class: 'ticker-track' },
          ...[].concat(...Array.from({ length: 2 }).map(() =>
            ['Inti Pacha', 'La Estrella Familiar', 'Manitos Tejedoras', 'Qulläna', 'Tejidos Alborada', 'Tierra Mía']
              .map(n => h('span', null, n))
          ))
        )
      ),

      // INTRO
      h('section', { class: 'section' },
        h('div', { class: 'container' },
          h('div', { class: 'section-header' },
            h('div', null,
              
              h('div', { class: 'eyebrow reveal', style: { marginTop: '12px' } }, lang === 'es' ? 'Sobre nosotros' : 'About us')
            ),
            h('h2', { class: 'reveal' },
              lang === 'es'
                ? 'Una oferta integrada de turismo rural donde lo agrícola, lo hogareño y lo artesanal se viven en el mismo gesto.'
                : 'An integrated offer of rural tourism where farming, home life and craft happen in a single gesture.'
            )
          ),
          h('div', { class: 'home-intro-grid' },
            h('p', { class: 'reveal', style: { fontSize: 'clamp(16px, 2.2vw, 20px)', lineHeight: '1.6' } },
              lang === 'es'
                ? 'Algunos de los emprendedores son agricultores y brindan experiencias con sus familias, animales y cultivos. Otros ofrecen actividades más específicas: paseos, recorridos guiados, talleres de artesanías o cocina, vinculando a los visitantes con el paisaje agrícola maimareño desde experiencias puntuales.'
                : 'Some of us are farmers who share life with their families, animals and crops. Others offer more specific activities —  guided tours, craft or cooking workshops — linking visitors to Maimará\'s agricultural landscape through more focused experiences.'
            ),
            h('div', { class: 'reveal', style: { display: 'flex', flexDirection: 'column', gap: '0' } },
              h('div', { style: {
                borderLeft: '3px solid var(--c-terracota)',
                paddingLeft: '24px',
                paddingTop: '8px',
                paddingBottom: '16px'
              } },
                h('div', { class: 'bignum', style: { lineHeight: '0.75', marginBottom: '12px' } }, '“'),
                h('p', { style: {
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  lineHeight: '1.35',
                  fontStyle: 'italic',
                  margin: '0'
                } },
                  lang === 'es' ? 'Cada experiencia nace de lo que somos.' : 'Each experience grows from what we are.',
                  h('span', { class: 'bignum', style: { fontSize: '1.1em', lineHeight: '0', verticalAlign: '-0.15em', marginLeft: '4px' } }, '"')
                )
              ),
              h('button', { class: 'btn btn-ghost btn-arrow', style: { marginTop: '24px', alignSelf: 'flex-start', width: 'auto' }, onclick: () => window.setRoute('about') },
                lang === 'es' ? 'Conocer más' : 'Read more')
            )
          )
        )
      ),

      // EXPERIENCIAS PREVIEW
      h('section', { class: 'section', style: { background: 'var(--c-papel-2)' } },
        h('div', { class: 'container' },
          h('div', { class: 'section-header' },
            h('div', null,
              
              h('div', { class: 'eyebrow reveal', style: { marginTop: '12px' } }, lang === 'es' ? 'Experiencias' : 'Featured experiences')
            ),
            h('h2', { class: 'reveal' }, lang === 'es' ? `${D.experiencias.length} formas de habitar la quebrada.` : `${D.experiencias.length} ways to inhabit the quebrada.`)
          ),
          h('div', { class: 'exp-grid' },
            ...[...D.experiencias].sort(() => Math.random() - 0.5).slice(0, 6).map((exp, i) => {
              const emp = D.emprendimientos.find(e => e.id === exp.emprendimiento);
              return h('div', { class: 'exp-card-v reveal', onclick: () => window.openModal(exp) },
                h('div', { class: 'exp-card-img', style: { overflow: 'hidden' } },
                  h('img', { src: exp.img, alt: exp.titulo, style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }),
                  h('div', { class: 'exp-card-num-tag', style: { background: emp.color } }, String(i + 1).padStart(2, '0'))
                ),
                h('div', { class: 'exp-card-body' },
                  h('div', { class: 'exp-card-host-tag', style: { color: emp.color } }, `${emp.nombre} · ${exp.duracion}`),
                  h('div', { class: 'exp-card-title' }, exp.titulo),
                  h('div', { class: 'exp-card-sub' }, exp.subtitulo),
                  h('div', { class: 'exp-card-cta' },
                    h('span', null, lang === 'es' ? 'Ver detalle' : 'View'),
                    h('span', { class: 'exp-card-arrow', style: { borderColor: emp.color, color: emp.color } }, '→')
                  )
                )
              );
            })
          ),
          h('div', { style: { marginTop: '50px', textAlign: 'center' } },
            h('button', { class: 'btn btn-arrow', onclick: () => window.setRoute('experiences') },
              lang === 'es' ? `Ver las ${D.experiencias.length} experiencias` : `See all ${D.experiencias.length} experiences`)
          )
        )
      ),

      // ANFITRIONES PREVIEW
      h('section', { class: 'section' },
        h('div', { class: 'container' },
          h('div', { class: 'section-header' },
            h('div', null,
              
              h('div', { class: 'eyebrow reveal', style: { marginTop: '12px' } }, lang === 'es' ? 'Las familias' : 'The families')
            ),
            h('h2', { class: 'reveal' }, lang === 'es' ? 'Siete hogares, siete oficios, una misma quebrada.' : 'Seven homes, seven crafts, one quebrada.')
          ),
          h('div', { class: 'home-hosts-grid' },
            ...D.emprendimientos.map(emp =>
              h('div', { class: 'reveal home-host-card', onclick: () => {
                window.setRoute('hosts');
                document.getElementById(`host-${emp.id}`)?.scrollIntoView({ behavior: 'smooth' });
              } },
                imgBox(emp.imgRetrato, emp.anfitriones[0], '4/5'),
                h('div', { style: { borderTop: `4px solid ${emp.color}`, paddingTop: '16px', marginTop: '16px' } },
                  h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', color: 'var(--c-tinta-soft)', marginBottom: '8px' } }, `${emp.numero} · ${emp.anfitriones.join(' & ')}`),
                  h('h3', null, emp.nombre),
                  h('p', { style: { color: 'var(--c-tinta-soft)', fontSize: '14px', marginTop: '8px' } }, emp.sub)
                )
              )
            )
          )
        )
      )
    );
  };
})();
