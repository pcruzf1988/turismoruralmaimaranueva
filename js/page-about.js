/* Página: Sobre el grupo */
(function () {
  const h = window.h, ph = window.ph, imgBox = window.imgBox;

  window.PageAbout = function PageAbout() {
    const lang = window.STATE.lang;
    const valores = [
      { num: '01', t_es: 'Sustentabilidad', t_en: 'Sustainability', d_es: 'Cada emprendimiento aplica prácticas responsables que cuidan la tierra, el agua y las relaciones humanas, fortaleciendo la comunidad.', d_en: 'Each venture applies responsible practices that care for land, water and human relationships.' },
      { num: '02', t_es: 'Gestión de residuos', t_en: 'Waste management', d_es: 'Separamos, reutilizamos materiales, compostamos los orgánicos y reducimos al mínimo el uso de plásticos.', d_en: 'We separate, reuse, compost organics and minimize plastic use.' },
      { num: '03', t_es: 'Uso responsable del agua', t_en: 'Responsible water use', d_es: 'Implementamos riego eficiente, reutilizamos el agua cuando es posible y promovemos su uso consciente.', d_en: 'Efficient irrigation, water reuse where possible, and conscious use across activities.' },
      { num: '04', t_es: 'Comercio justo', t_en: 'Fair trade', d_es: 'Precios justos, respeto por los tiempos artesanales y compra directa a las familias que sostienen cada emprendimiento.', d_en: 'Fair prices, respect for artisan timing, and direct purchase from each host family.' }
    ];

    return h('div', { class: 'page-content' },
      h('section', { class: 'hero' },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow reveal', style: { marginBottom: '30px' } }, lang === 'es' ? 'Sobre el grupo' : 'About us'),
          h('h1', {
            class: 'reveal-clip',
            style: { fontSize: 'clamp(48px, 8vw, 110px)', maxWidth: '1100px' },
            html: lang === 'es'
              ? 'Una red <em style="color:var(--c-cardon);font-style:italic">integrada</em> donde la producción agrícola define la economía, la población y el entorno.'
              : 'An integrated network where agricultural production defines the economy, population, and environment.'
          })
        )
      ),
      h('section', { class: 'section', style: { paddingTop: '40px' } },
        h('div', { class: 'container' },
          h('div', { class: 'about-intro-grid' },
            h('div', { class: 'reveal about-img' },
              imgBox('images/maices.jpeg', 'Terrazas de cultivo', '3/4')
            ),
            h('div', { class: 'reveal' },
              h('div', { class: 'eyebrow', style: { marginBottom: '20px' } }, lang === 'es' ? 'Quiénes somos' : 'Who we are'),
              h('p', { style: { fontSize: 'clamp(17px, 2.4vw, 22px)', lineHeight: '1.55', marginBottom: '24px' } },
                lang === 'es'
                  ? 'Turismo Rural Maimará es una oferta integrada de servicios turísticos en un contexto donde económica, demográfica y paisajísticamente predomina la actividad agrícola.'
                  : 'Turismo Rural Maimará is an integrated offer of tourism services in a context where farming dominates economy, demography and landscape.'
              ),
              h('p', { style: { fontSize: '17px', lineHeight: '1.65', color: 'var(--c-tinta-soft)' } },
                lang === 'es'
                  ? 'Algunos somos agricultores y brindamos experiencias de convivencia con nuestras familias, animales y cultivos. Otros ofrecemos actividades más específicas como recorridos guiados, talleres de artesanías o de cocina, vinculando a quienes nos visitan con el paisaje agrícola maimareño desde experiencias puntuales.'
                  : 'Some of us are farmers offering shared life with families, animals and crops. Others offer specific activities like guided tours, craft or cooking workshops — linking visitors to Maimará\'s farming landscape through more focused experiences.'
              )
            )
          )
        )
      ),
      h('section', { class: 'section', style: { background: 'var(--c-tinta)', color: 'var(--c-papel)', paddingTop: '100px', paddingBottom: '100px' } },
        h('div', { class: 'container' },
          h('div', { class: 'eyebrow reveal', style: { color: 'rgba(245,239,226,0.7)', marginBottom: '30px' } }, lang === 'es' ? 'Sustentabilidad' : 'Sustainability'),
          h('h2', { class: 'reveal', style: { color: 'var(--c-papel)', maxWidth: '1000px', marginBottom: '60px' } },
            lang === 'es' ? 'Una forma de vivir y trabajar en armonía con nuestro entorno.' : 'A way of living and working in harmony with our environment.'
          ),
          h('div', { class: 'values-grid', style: { borderColor: 'rgba(245,239,226,0.2)' } },
            ...valores.map(v => h('div', { class: 'value reveal', style: { borderColor: 'rgba(245,239,226,0.2)' } },
              h('div', { class: 'value-num', style: { color: 'var(--c-amarillo)' } }, v.num),
              h('h3', { style: { color: 'var(--c-papel)', marginBottom: '14px', fontSize: '28px' } }, lang === 'es' ? v.t_es : v.t_en),
              h('p', { style: { opacity: '0.8', lineHeight: '1.55' } }, lang === 'es' ? v.d_es : v.d_en)
            ))
          )
        )
      ),
      h('section', { class: 'section' },
        h('div', { class: 'container' },
          h('div', { class: 'about-context-grid' },
            h('div', { class: 'reveal' },
              h('div', { class: 'eyebrow', style: { marginBottom: '20px' } }, lang === 'es' ? 'En contexto' : 'In context'),
              h('h2', { style: { marginBottom: '24px' } },
                lang === 'es' ? 'Maimará, en el corazón de la Quebrada.' : 'Maimará, in the heart of the Quebrada.'
              ),
              h('p', { style: { fontSize: '17px', lineHeight: '1.65' } },
                lang === 'es'
                  ? 'A 2.383 metros sobre el nivel del mar, en la Quebrada de Humahuaca —Patrimonio Cultural de la Humanidad por UNESCO desde 2003—.'
                  : 'At 2,383 m above sea level, in the Quebrada de Humahuaca — UNESCO World Heritage Site since 2003.'
              )
            ),
            h('div', { class: 'reveal about-img' }, imgBox('images/maices.jpeg', 'Postal de Maimará al atardecer', '4/3'))
          )
        )
      )
    );
  };
})();
