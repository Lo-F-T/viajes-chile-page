document.addEventListener('DOMContentLoaded', function () {

  const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipElements.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });

  const heroCarouselEl = document.getElementById('heroCarousel');
  const heroCarousel = new bootstrap.Carousel(heroCarouselEl, {
    interval: 5000,
    wrap: true,
    touch: true
  });

  const navLinks = document.querySelectorAll('.smooth');
  const navbarCollapse = document.getElementById('navMenu');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        const offset = 70;
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });

        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });

  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !asunto || !mensaje) {
      formFeedback.textContent = 'Por favor completa todos los campos antes de enviar.';
      formFeedback.style.color = '#ff6b6b';
      return;
    }

    formFeedback.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`;
    formFeedback.style.color = '#1ac3dc';
    contactForm.reset();
  });

  const mainNav = document.getElementById('mainNav');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY > 60;
    mainNav.classList.toggle('scrolled', scrolled);
    backToTopBtn.classList.toggle('show', window.scrollY > 400);
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});

/* ya no quiero mas e-e */