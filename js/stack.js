/* ── STACK FILTER MODULE ─────────────────────────────────── */

const Stack = (() => {
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const stackGroups = document.querySelectorAll('.stack-group');

  function setFilter(filter) {
    /* Update button states */
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    /* Show/hide groups */
    stackGroups.forEach(group => {
      if (filter === 'all') {
        group.classList.remove('hidden');
      } else {
        const match = group.dataset.category === filter;
        group.classList.toggle('hidden', !match);
      }
    });
  }

  function init() {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => setFilter(btn.dataset.filter));
    });
  }

  return { init };
})();