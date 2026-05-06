/* Página: Anfitriones */
(function () {
  const D = window.SITE_DATA;
  const h = window.h, ph = window.ph, imgBox = window.imgBox;

  window.PageHosts = function PageHosts() {
    const lang = window.STATE.lang;

    const tones = { intipacha: 'cardon', estrella: 'terracota', manitos: 'violeta', qullana: 'turquesa', alborada: 'ocre', tierramia: 'rosa' };
    const tones2a = { intipacha: 'ocre', estrella: 'cardon', manitos: 'turquesa', qullana: 'cardon', alborada: 'terracota', tierramia: 'cardon' };
    const tones2b = { intipacha: 'rosa', estrella: 'ocre', manitos: 'rosa', qullana: 'violeta', alborada: 'violeta', tierramia: 'ocre' };
    const labels2a = { intipacha: 'HUERTA AGROECOLÓGICA', estrella: 'CABRAS · QUESOS', manitos: 'PUISCA · HILADO', qullana: 'PLANTAS MEDICINALES', alborada: 'BORDADO DE FLORES', tierramia: 'CAMPO DE FLORES' };
    const labels2b = { intipacha: 'OLLAS DE BARRO', estrella: 'MESA FAMILIAR', manitos: 'TELAR · TINTES', qullana: 'ALAMBIQUE ARTESANAL', alborada: 'FLORES DE LANA', tierramia: 'HORTALIZAS · COSECHA' };

    return h('div', { class: 'page-content' },
      h('section', { class: 'hero' },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow reveal', style: { marginBottom: '30px' } }, lang === 'es' ? 'Las familias' : 'The families'),
          h('h1', { class: 'reveal-clip', style: { fontSize: 'clamp(48px, 8vw, 110px)' } }, lang === 'es' ? 'Anfitriones' : 'Hosts'),
          h('p', { class: 'reveal', style: { fontSize: '19px', maxWidth: '620px', marginTop: '24px', color: 'var(--c-tinta-soft)' } },
            lang === 'es' ? 'Seis emprendimientos familiares. Cada uno con su historia, su oficio y su forma de habitar Maimará.' : 'Six family ventures. Each with its own story, craft and way of living in Maimará.'
          )
        )
      ),
      h('section', { class: 'section', style: { paddingTop: '30px' } },
        h('div', { class: 'container' },
          ...D.emprendimientos.map(emp =>
            h('div', { id: `host-${emp.id}`, class: 'host-card reveal', style: { borderTopColor: emp.color } },
              h('div', null,
                h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '14px' } },
                  h('div', { class: 'eyebrow', style: { color: emp.color } }, `${emp.numero} · ${emp.sub}`)
                ),
                h('h2', { style: { fontSize: 'clamp(36px, 4.5vw, 64px)', marginBottom: '8px' } }, emp.nombre),
                h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-tinta-soft)', marginBottom: '24px' } },
                  emp.anfitriones.join(' · ')
                ),
                h('p', { style: { fontSize: '17px', lineHeight: '1.65', marginBottom: '20px' } }, emp.bio),
                h('p', { style: { fontSize: '15px', lineHeight: '1.65', color: 'var(--c-tinta-soft)', marginBottom: '24px' } }, emp.historia),
                h('div', { style: { borderTop: '1px solid rgba(31,26,20,0.15)', paddingTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '13px' } },
                  h('div', null,
                    h('div', { class: 'eyebrow', style: { fontSize: '10px', marginBottom: '6px' } }, lang === 'es' ? 'Ubicación' : 'Location'),
                    h('div', null, emp.ubicacion)
                  ),
                  h('div', null,
                    h('div', { class: 'eyebrow', style: { fontSize: '10px', marginBottom: '6px' } }, lang === 'es' ? 'Horarios' : 'Hours'),
                    h('div', null, emp.horarios)
                  ),
                  h('div', null,
                    h('div', { class: 'eyebrow', style: { fontSize: '10px', marginBottom: '6px' } }, lang === 'es' ? 'Pagos' : 'Payment'),
                    h('div', null, emp.pagos)
                  ),
                  h('div', null,
                    h('div', { class: 'eyebrow', style: { fontSize: '10px', marginBottom: '6px' } }, lang === 'es' ? 'Contacto' : 'Contact'),
                    h('div', null,
                      ...Object.entries(emp.contacto || {}).map(([k, v]) => h('div', null, `${k}: ${v}`))
                    )
                  ),
                  emp.sello && h('div', { style: { gridColumn: 'span 2', marginTop: '10px', padding: '10px 14px', background: 'var(--c-papel-2)', fontSize: '12px' } }, '✦ ', emp.sello)
                )
              ),
              h('div', null,
                imgBox(emp.imgRetrato, emp.nombre, '4/5'),
                h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' } },
                  imgBox(emp.imgDet1, labels2a[emp.id], '1/1'),
                  imgBox(emp.imgDet2, labels2b[emp.id], '1/1')
                ),
                h('div', { style: { marginTop: '24px' } },
                  h('div', { class: 'eyebrow', style: { marginBottom: '14px' } }, lang === 'es' ? 'Lo que ofrecemos' : 'What we offer'),
                  ...emp.ofrecemos.map(o => h('div', { style: { padding: '14px 0', borderBottom: '1px solid rgba(31,26,20,0.1)' } },
                    h('div', { style: { fontFamily: 'var(--font-display)', fontSize: '19px', marginBottom: '4px' } }, o.titulo),
                    h('div', { style: { fontSize: '14px', color: 'var(--c-tinta-soft)', lineHeight: '1.5' } }, o.desc)
                  )),
                  h('div', { style: { marginTop: '20px' } },
                    h('div', { class: 'eyebrow', style: { fontSize: '10px', marginBottom: '10px' } }, lang === 'es' ? 'Ver más' : 'Book an experience'),
                    h('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
                      ...D.experiencias.filter(e => e.emprendimiento === emp.id).map(exp =>
                        h('button', {
                          onclick: () => window.openModal(exp),
                          style: {
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            width: '100%', padding: '10px 14px',
                            background: 'var(--c-papel-2)', border: `1px solid ${emp.color}`,
                            fontFamily: 'var(--font-display)', fontSize: '15px',
                            color: 'var(--c-tinta)', cursor: 'pointer', textAlign: 'left',
                            transition: 'background 0.2s, color 0.2s'
                          },
                          onmouseenter: function() {
                            this.style.background = emp.color; this.style.color = 'var(--c-papel)';
                            const arrow = this.querySelector('.exp-arrow');
                            if (arrow) arrow.style.color = 'var(--c-papel)';
                          },
                          onmouseleave: function() {
                            this.style.background = 'var(--c-papel-2)'; this.style.color = 'var(--c-tinta)';
                            const arrow = this.querySelector('.exp-arrow');
                            if (arrow) arrow.style.color = emp.color;
                          }
                        },
                          h('span', null, exp.titulo),
                          h('span', { class: 'exp-arrow', style: { color: emp.color, fontSize: '18px', transition: 'color 0.2s' } }, '→')
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  };
})();
