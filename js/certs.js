/* ── CERTIFICATIONS MODULE ───────────────────────────────── *
 * Renders cert cards in the main section and
 * compact links in the sidebar, both from DATA.certifications
 * ─────────────────────────────────────────────────────────── */

const Certs = (() => {

  /* Icon per issuer */
  const ISSUER_ICON = {
    TestDome: '✦',
    DataCamp: '◈',
    Sololearn: '◉',
    Cisco: '⬡',
  };

  /* ── Main section grid ──────────────────────────────────── */
  function renderGrid() {
    const grid = document.getElementById('cert-grid');
    if (!grid) return;

    grid.innerHTML = DATA.certifications.map(cert => {
      const icon = ISSUER_ICON[cert.issuer] || '◆';
      return `
        <a class="cert-card" href="${cert.url}" target="_blank" rel="noopener noreferrer" aria-label="${cert.name} – ${cert.issuer}">
          <div class="cert-card__inner">
            <div class="cert-card__header">
              <span class="cert-card__icon">${icon}</span>
              <span class="cert-card__issuer">${cert.issuer}</span>
              <span class="cert-card__arrow">↗</span>
            </div>
            <div class="cert-card__name">${cert.name}</div>
          </div>
        </a>
      `;
    }).join('');
  }

  /* ── Sidebar compact list ───────────────────────────────── */
  function renderSidebar() {
    const list = document.getElementById('sidebar-certs');
    if (!list) return;

    list.innerHTML = DATA.certifications.map(cert => `
      <li class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-body">
          <div class="tl-meta">
            <a class="tl-title tl-link" href="${cert.url}" target="_blank" rel="noopener noreferrer">${cert.name} ↗</a>
          </div>
          <div class="tl-sub">${cert.issuer}</div>
        </div>
      </li>
    `).join('');
  }

  function init() {
    renderGrid();
    renderSidebar();
  }

  return { init };
})();