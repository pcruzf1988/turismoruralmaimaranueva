/* Página: Experiencias con filtros */
(function () {
  const D = window.SITE_DATA;
  const h = window.h;

  window.PageExperiences = function PageExperiences() {
    const s = window.STATE;
    const lang = s.lang;
    const tones = { intipacha: 'cardon', estrella: 'terracota', manitos: 'violeta', qullana: 'turquesa', alborada: 'ocre', tierramia: 'rosa' };

    const filtered = D.experiencias.filter(e => {
      const okCat = s.expFilter === 'todas' || e.categoria === s.expFilter;
      const okHost = s.hostFilter === 'all' || e.emprendimiento === s.hostFilter;
      return okCat && okHost;
    });

    return h('div', { class: 'page-content' },
      h('section', { class: 'hero' },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow reveal', style: { marginBottom: '30px' } }, lang === 'es' ? `Catálogo · ${D.experiencias.length} experiencias` : `Catalog · ${D.experiencias.length} experiences`),
          h('h1', { class: 'reveal-clip', style: { fontSize: 'clamp(48px, 8vw, 110px)' } }, lang === 'es' ? 'Experiencias' : 'Experiences'),
          h('p', { class: 'reveal', style: { fontSize: '19px', maxWidth: '620px', marginTop: '24px', color: 'var(--c-tinta-soft)' } },
            lang === 'es'
              ? 'Cada experiencia se hace en grupos pequeños, con reserva previa. Filtrá por tipo o por anfitrión y reservá por correo o WhatsApp.'
              : 'Small groups, advance booking. Filter by type or host, then book by email or WhatsApp.'
          )
        )
      ),
      h('section', { class: 'section', style: { paddingTop: '30px' } },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow', style: { marginBottom: '14px' } }, lang === 'es' ? 'Filtrar por categoría' : 'Filter by type'),
          h('div', { class: 'filters' },
            ...D.categorias.map(c =>
              h('button', {
                class: `filter-pill ${s.expFilter === c.id ? 'active' : ''}`,
                onclick: () => window.setExpFilter(c.id)
              }, lang === 'es' ? c.label_es : c.label_en)
            )
          ),
          h('div', { class: 'eyebrow', style: { marginBottom: '14px', marginTop: '30px' } }, lang === 'es' ? 'Filtrar por anfitrión' : 'Filter by host'),
          h('div', { class: 'filters' },
            ...[{ id: 'all', nombre: lang === 'es' ? 'Todos' : 'All' }, ...D.emprendimientos].map(emp =>
              h('button', {
                class: `filter-pill ${s.hostFilter === emp.id ? 'active' : ''}`,
                onclick: () => window.setHostFilter(emp.id),
                style: s.hostFilter === emp.id && emp.color ? { background: emp.color, borderColor: emp.color } : {}
              }, emp.nombre)
            )
          ),
          h('div', { style: { marginTop: '50px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--c-tinta-soft)', letterSpacing: '0.12em' } },
            `${filtered.length} ${lang === 'es' ? 'experiencias' : 'experiences'} · ${lang === 'es' ? 'click para ver detalle' : 'click to view detail'}`
          ),
          h('div', { style: { marginTop: '30px' } },
            filtered.length === 0
              ? h('div', { style: { padding: '60px', textAlign: 'center', color: 'var(--c-tinta-soft)' } },
                  lang === 'es' ? 'No hay experiencias con esos filtros.' : 'No experiences match these filters.'
                )
              : h('div', { class: 'exp-grid' },
                  ...filtered.map((exp, i) => {
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
                        h('div', { class: 'exp-card-meta' },
                          h('span', null, `👥 ${exp.grupo}`),
                          h('span', null, `◐ ${exp.dificultad}`)
                        ),
                        h('div', { class: 'exp-card-cta' },
                          h('span', null, lang === 'es' ? 'Ver detalle' : 'View details'),
                          h('span', { class: 'exp-card-arrow', style: { borderColor: emp.color, color: emp.color } }, '→')
                        )
                      )
                    );
                  })
                )
          )
        )
      )
    );
  };
})();
