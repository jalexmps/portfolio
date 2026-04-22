function handleParallax() {
  const scrollY = window.scrollY;
  const hero = document.querySelector('#hero');
  if (hero) {
    const heroH = hero.offsetHeight;
    const progress = Math.min(scrollY / heroH, 1);
    hero.style.transform = `translateY(${progress * 40}px)`;
    hero.style.opacity = 1 - progress * 0.4;
  }

  document.querySelectorAll('section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    const mid = rect.top + rect.height / 2;
    const vMid = window.innerHeight / 2;
    const offset = (mid - vMid) * 0.04;
    sec.style.backgroundPositionY = `calc(50% + ${offset}px)`;
  });
}

window.addEventListener('scroll', handleParallax, { passive: true });
