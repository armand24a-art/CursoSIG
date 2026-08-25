// Fundamentos de Razonamiento Espacial con SIG — interacción de sitio
document.addEventListener('DOMContentLoaded', () => {

  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Revelado suave al hacer scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Menú móvil
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Toast helper
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  // Slots de "entrega" por práctica — quedan almacenados solo en memoria
  // de esta pestaña, ya que GitHub Pages no ofrece backend de subida de
  // archivos. El nombre del archivo elegido se muestra como confirmación
  // visual local; los envíos reales del curso se hacen por el formulario
  // de entrega final.
  document.querySelectorAll('.upload-slot').forEach(slot => {
    const input = slot.querySelector('input[type="file"]');
    const fname = slot.querySelector('.fname');
    if (!input) return;
    slot.addEventListener('click', () => input.click());
    slot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
    });
    input.addEventListener('change', () => {
      if (input.files && input.files[0]) {
        const f = input.files[0];
        if (fname) fname.textContent = `Seleccionado: ${f.name}`;
        showToast(`"${f.name}" listo — recuerda enviarlo por el canal indicado por el instructor.`);
      }
    });
  });

});
