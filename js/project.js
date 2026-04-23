// ─── SCROLL PROGRESS BAR ───────────────────────────────────────────────────
const progressBar = document.getElementById('scroll-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }, { passive: true });
}

// ─── HERO COUNTER ANIMATION ────────────────────────────────────────────────
function animateCounter(el, target, duration) {
  const decimals = parseInt(el.dataset.decimal || '0', 10);
  const suffix = el.dataset.suffix !== undefined ? el.dataset.suffix : '%';
  const multiplier = Math.pow(10, decimals);
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(eased * target * multiplier) / multiplier;
    el.textContent = current.toFixed(decimals) + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toFixed(decimals) + suffix;
    }
  };
  requestAnimationFrame(update);
}

const counterEl = document.querySelector('.js-counter');
if (counterEl) {
  const target = parseFloat(counterEl.dataset.target);
  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounter(counterEl, target, 1800);
      counterObserver.disconnect();
    }
  }, { threshold: 0.5 });
  counterObserver.observe(counterEl);
}
