/* ── MAIN ────────────────────────────────────────────────── *
 * Entry point. Initializes all modules after DOM is ready.
 * ─────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  Nav.init();
  Stack.init();
  Projects.init();
  Certs.init();
  Form.init();
  Animations.init();
});