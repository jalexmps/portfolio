const nav = document.querySelector('nav');
const hero = document.getElementById('hero');

const heroObserver = new IntersectionObserver(
  ([entry]) => nav.classList.toggle('nav--scrolled', !entry.isIntersecting),
  { threshold: 0, rootMargin: '0px' }
);

heroObserver.observe(hero);
