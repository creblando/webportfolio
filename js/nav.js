/* ── NAV MODULE ──────────────────────────────────────────── */

const Nav = (() => {
  const nav       = document.getElementById('nav');
  const navLinks  = document.querySelectorAll('.nav__link');
  const hamburger = document.getElementById('hamburger');
  const linksList = document.getElementById('nav-links');

  /* Sections to observe for active link highlighting */
  const sections = ['about', 'stack', 'projects', 'certs', 'contact'];

  /* ── Scroll shadow ──────────────────────────────────────── */
  function onScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    updateActiveLink();
  }

  /* ── Active link based on scroll position ───────────────── */
  function updateActiveLink() {
    let current = '';

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 90) current = id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  /* ── Mobile hamburger ───────────────────────────────────── */
  function toggleMenu() {
    const isOpen = linksList.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    linksList.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  }

  /* ── Smooth scroll + close menu on nav link click ──────── */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      const target = document.getElementById(link.dataset.section);
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    window.addEventListener('scroll', onScroll, { passive: true });
    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) closeMenu();
    });
    onScroll();
  }

  return { init };
})();