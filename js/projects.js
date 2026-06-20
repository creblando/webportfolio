/* ── PROJECTS MODAL MODULE ───────────────────────────────── */

const Projects = (() => {
  const overlay      = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const closeBtn     = document.getElementById('modal-close');
  let lastFocused    = null;

  /* ── Build modal HTML from DATA ─────────────────────────── */
  function buildModal(key) {
    const p = DATA.projects[key];
    if (!p) return '';

    const highlights = p.highlights.length
      ? `<ul class="modal-highlights">
           ${p.highlights.map(h => `<li>${h}</li>`).join('')}
         </ul>`
      : '';

    const liveLink = p.live
      ? `<a href="${p.live}" class="modal-link modal-link--primary" target="_blank" rel="noopener">View Live ↗</a>`
      : '';

    const ghLink = p.github
      ? `<a href="${p.github}" class="modal-link modal-link--ghost" target="_blank" rel="noopener">GitHub ↗</a>`
      : '';

    const meta = [
      p.subject ? `<span class="modal-meta-item">📚 ${p.subject}</span>` : '',
      p.role    ? `<span class="modal-meta-item">🛠 Role: ${p.role}</span>` : '',
    ].filter(Boolean).join('');

    return `
      <p class="modal-status">${p.status}</p>
      <h2 class="modal-title" id="modal-title">${p.name}</h2>
      <span class="modal-tag">${p.tag}</span>
      ${meta ? `<div class="modal-meta">${meta}</div>` : ''}
      <p class="modal-desc">${p.description}</p>
      ${highlights}
      <div class="modal-links">${liveLink}${ghLink}</div>
    `;
  }

  /* ── Open ───────────────────────────────────────────────── */
  function open(key) {
    lastFocused = document.activeElement;
    modalContent.innerHTML = buildModal(key);
    overlay.classList.add('open');
    overlay.removeAttribute('hidden');
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  /* ── Close ──────────────────────────────────────────────── */
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    /* Project cards */
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click',    () => open(card.dataset.project));
      card.addEventListener('keydown',  (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(card.dataset.project);
        }
      });
    });

    /* Close triggers */
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  return { init };
})();