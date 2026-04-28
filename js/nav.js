const nav = document.querySelector('nav');
const hero = document.getElementById('hero');

const heroObserver = new IntersectionObserver(
  ([entry]) => nav.classList.toggle('nav--scrolled', !entry.isIntersecting),
  { threshold: 0, rootMargin: '0px' }
);

heroObserver.observe(hero);

// Mobile menu
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.getElementById('mobile-nav');

function openMenu() {
  hamburger.setAttribute('aria-expanded', 'true');
  mobileNav.classList.add('is-open');
  mobileNav.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('is-open');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  hamburger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
});

mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
