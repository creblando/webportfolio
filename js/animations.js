/* ── ANIMATIONS MODULE ───────────────────────────────────── */

const Animations = (() => {
  function init() {
    const fadeEls = document.querySelectorAll('.fade-in');

    if (!('IntersectionObserver' in window)) {
      /* Fallback: just show everything */
      fadeEls.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(el => observer.observe(el));
  }

  return { init };
})();