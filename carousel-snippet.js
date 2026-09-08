// ── Carrossel de tópicos (seção "Um pouco sobre o que fazemos") ────────────
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const slides = carousel.querySelectorAll('[data-slide]');
  const dots   = carousel.querySelectorAll('[data-dot]');

  function goTo(index) {
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
});
