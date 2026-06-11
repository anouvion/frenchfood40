let current = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
function goSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}
setInterval(() => { goSlide((current + 1) % slides.length); }, 5000);
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
