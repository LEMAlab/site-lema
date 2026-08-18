// ── Banner de disponibilidade ──────────────────────────────────────────────
const DISPONIBILIDADE_ABERTA = false;
const banner = document.getElementById('inscricao-banner');
if (banner && DISPONIBILIDADE_ABERTA) {
  banner.removeAttribute('hidden');
  const closeBtn = document.getElementById('inscricao-close');
  if (closeBtn) closeBtn.addEventListener('click', () => banner.setAttribute('hidden', ''));
}

// ── Logo → volta ao topo (quando aponta para #top) ──────────────────────────
document.querySelectorAll('.nav-logo').forEach(logo => {
  if (logo.getAttribute('href') === '#top') {
    logo.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }
});

// ── Menu lateral (mobile) ───────────────────────────────────────────────────
const sidebar  = document.querySelector('.sidebar');
const sbToggle = document.querySelector('.sb-toggle');
const backdrop = document.querySelector('.sb-backdrop');

function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('open');
  if (backdrop) backdrop.setAttribute('hidden', '');
  if (sbToggle) sbToggle.setAttribute('aria-expanded', 'false');
}
if (sbToggle && sidebar) {
  sbToggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    sbToggle.setAttribute('aria-expanded', String(open));
    if (backdrop) { if (open) backdrop.removeAttribute('hidden'); else backdrop.setAttribute('hidden', ''); }
  });
}
if (backdrop) backdrop.addEventListener('click', closeSidebar);
document.querySelectorAll('.sb-nav a, .sb-cta').forEach(a => a.addEventListener('click', closeSidebar));

// ── Link ativo conforme a seção visível ─────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.sb-nav a[href*="#"]');
if (sections.length && navAs.length) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => {
          const href = a.getAttribute('href') || '';
          a.classList.toggle('active', href.endsWith('#' + e.target.id));
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => sectionObserver.observe(s));
}

// ── Revelar ao rolar ────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Contadores animados ─────────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const dur = 1200; let t0 = null;
  function step(ts) {
    if (!t0) t0 = ts;
    const pct = Math.min((ts - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - pct, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (pct < 1) requestAnimationFrame(step); else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterObserver.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ── Blocos colapsáveis (projetos.html) ──────────────────────────────────────
document.querySelectorAll('.semester-block').forEach(block => {
  const heading = block.querySelector('.semester-heading');
  if (!heading) return;
  const body = document.createElement('div');
  body.className = 'semester-body';
  while (heading.nextSibling) body.appendChild(heading.nextSibling);
  block.appendChild(body);
  const btn = document.createElement('button');
  btn.className = 'semester-toggle';
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = `<span>${heading.innerHTML}</span>
    <svg class="semester-chevron" aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 8l5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  heading.replaceWith(btn);
  block.classList.add('collapsed');
  btn.addEventListener('click', () => {
    const collapsed = block.classList.toggle('collapsed');
    btn.setAttribute('aria-expanded', String(!collapsed));
  });
});

// ── Ano automático no rodapé ────────────────────────────────────────────────
document.querySelectorAll('#ano').forEach(el => { el.textContent = new Date().getFullYear(); });
