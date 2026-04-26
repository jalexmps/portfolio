// ─── GALLERY LIGHTBOX ─────────────────────────────────────────────────────
(function () {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const img = document.getElementById('lightbox-img');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const counter = document.getElementById('lightbox-counter');

  const items = Array.from(document.querySelectorAll('.gallery-item'));
  let currentIndex = 0;

  function show(index) {
    currentIndex = index;
    const btn = items[index];
    img.src = btn.dataset.src;
    img.alt = btn.querySelector('img') ? btn.querySelector('img').alt : '';
    if (counter) counter.textContent = (index + 1) + ' / ' + items.length;
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === items.length - 1;
  }

  function open(index) {
    show(index);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    img.src = '';
  }

  items.forEach(function (btn, i) {
    btn.addEventListener('click', function () { open(i); });
  });

  backdrop.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', function () { if (currentIndex > 0) show(currentIndex - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { if (currentIndex < items.length - 1) show(currentIndex + 1); });

  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft' && currentIndex > 0) show(currentIndex - 1);
    if (e.key === 'ArrowRight' && currentIndex < items.length - 1) show(currentIndex + 1);
  });

  // Touch swipe
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) < 50) return;
    if (delta < 0 && currentIndex < items.length - 1) show(currentIndex + 1);
    if (delta > 0 && currentIndex > 0) show(currentIndex - 1);
  }, { passive: true });
})();

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
