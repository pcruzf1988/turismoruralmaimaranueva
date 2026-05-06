/* === Turismo Rural Maimará — App vainilla === */
(function () {
  const D = window.SITE_DATA;

  // ---------- Helpers ----------
  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (attrs[k] == null || attrs[k] === false) continue;
        if (k === 'class') el.className = attrs[k];
        else if (k === 'style' && typeof attrs[k] === 'object') Object.assign(el.style, attrs[k]);
        else if (k === 'html') el.innerHTML = attrs[k];
        else if (k.startsWith('on') && typeof attrs[k] === 'function') el.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        else if (k === 'dataset') Object.assign(el.dataset, attrs[k]);
        else el.setAttribute(k, attrs[k]);
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      if (typeof c === 'string' || typeof c === 'number') el.appendChild(document.createTextNode(c));
      else el.appendChild(c);
    }
    return el;
  }
  window.h = h;

  function placeholder(tone, label, aspect = '4/5', cls = '') {
    return h('div', { class: `placeholder tone-${tone} ${cls}`, style: { aspectRatio: aspect } },
      h('span', { class: 'placeholder-label' }, label)
    );
  }
  window.ph = placeholder;

  function imgBox(src, alt, aspect, cls) {
    const attrs = { style: { overflow: 'hidden', position: 'relative', display: 'block' } };
    if (cls) attrs.class = cls;
    if (aspect) attrs.style.aspectRatio = aspect;
    return h('div', attrs,
      h('img', { src: src, alt: alt || '', style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } })
    );
  }
  window.imgBox = imgBox;

  function paragraphs(txt) {
    return (txt || '').split(/\n\n+/).map(p => p.trim()).filter(Boolean);
  }
  window.paragraphs = paragraphs;

  // ---------- Estado global ----------
  const state = {
    route: 'home',
    lang: localStorage.getItem('trm_lang') || 'es',
    expFilter: 'todas',
    hostFilter: 'all',
    modalExp: null,
    menuOpen: false,
  };
  window.STATE = state;

  function t(key) { return (D.i18n[key] && D.i18n[key][state.lang]) || key; }
  window.t = t;

  function setLang(l) { state.lang = l; localStorage.setItem('trm_lang', l); render(); }
  function setRoute(r) { state.route = r; state.menuOpen = false; window.scrollTo({ top: 0, behavior: 'instant' }); render(); }
  function setMenu(v) { state.menuOpen = v; render(); }
  function openModal(exp) { state.modalExp = exp; document.body.style.overflow = 'hidden'; render(); }
  function closeModal() { state.modalExp = null; document.body.style.overflow = ''; render(); }
  function setExpFilter(v) { state.expFilter = v; render(); }
  function setHostFilter(v) { state.hostFilter = v; render(); }

  Object.assign(window, { setLang, setRoute, setMenu, openModal, closeModal, setExpFilter, setHostFilter });

  // ---------- Reveal observer ----------
  let revealObserver;
  function setupReveal() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
    document.querySelectorAll('.reveal:not(.in), .reveal-fade:not(.in), .reveal-clip:not(.in)').forEach(n => revealObserver.observe(n));

    // Fallback: forzar .in en elementos ya visibles en el viewport
    // setTimeout(0) resuelve en la misma tarea de pintura, antes que rAF anidado
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in), .reveal-fade:not(.in), .reveal-clip:not(.in)').forEach(n => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          n.classList.add('in');
          revealObserver.unobserve(n);
        }
      });
    }, 0);
  }

  // ---------- Render principal ----------
  function render() {
    const root = document.getElementById('app');
    root.innerHTML = '';
    root.appendChild(window.Header());

    const main = h('main');
    let page;
    switch (state.route) {
      case 'about': page = window.PageAbout(); break;
      case 'experiences': page = window.PageExperiences(); break;
      case 'hosts': page = window.PageHosts(); break;
      case 'gallery': page = window.PageGallery(); break;
      case 'visit': page = window.PageVisit(); break;
      case 'contact': page = window.PageContact(); break;
      default: page = window.PageHome();
    }
    main.appendChild(page);
    root.appendChild(main);
    root.appendChild(window.Footer());

    if (state.modalExp) root.appendChild(window.ExpModal(state.modalExp));

    requestAnimationFrame(setupReveal);
  }
  window.render = render;

  document.addEventListener('DOMContentLoaded', render);
})();
