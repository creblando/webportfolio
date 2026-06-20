/* ── CONTACT FORM MODULE ─────────────────────────────────── */

const Form = (() => {
  const form       = document.getElementById('contact-form');
  const nameInput  = document.getElementById('fname');
  const emailInput = document.getElementById('femail');
  const msgInput   = document.getElementById('fmsg');
  const submitBtn  = document.getElementById('submit-btn');
  const successEl  = document.getElementById('form-success');

  /* ── Validation helpers ─────────────────────────────────── */
  function showError(inputEl, errorId, message) {
    inputEl.classList.add('invalid');
    document.getElementById(errorId).textContent = message;
  }

  function clearError(inputEl, errorId) {
    inputEl.classList.remove('invalid');
    document.getElementById(errorId).textContent = '';
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateAll() {
    let valid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, 'err-name', 'Name is required.');
      valid = false;
    } else {
      clearError(nameInput, 'err-name');
    }

    if (!emailInput.value.trim()) {
      showError(emailInput, 'err-email', 'Email is required.');
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'err-email', 'Enter a valid email address.');
      valid = false;
    } else {
      clearError(emailInput, 'err-email');
    }

    if (!msgInput.value.trim()) {
      showError(msgInput, 'err-msg', 'Message is required.');
      valid = false;
    } else if (msgInput.value.trim().length < 10) {
      showError(msgInput, 'err-msg', 'Message is too short.');
      valid = false;
    } else {
      clearError(msgInput, 'err-msg');
    }

    return valid;
  }

  /* ── Toast notification ─────────────────────────────────── */
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  /* ── Submit ─────────────────────────────────────────────── */
  function handleSubmit(e) {
    e.preventDefault();
    successEl.textContent = '';

    if (!validateAll()) return;

    const name = nameInput.value.trim();

    /* Simulate sending */
    submitBtn.disabled = true;
    submitBtn.querySelector('.submit-btn__text').textContent = 'Sending…';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('.submit-btn__text').textContent = 'Send Message';
      showToast(`Thanks, ${name}! I'll get back to you soon.`);
    }, 900);
  }

  /* ── Live validation on blur ────────────────────────────── */
  function initLiveValidation() {
    nameInput.addEventListener('blur',  () => {
      if (!nameInput.value.trim()) showError(nameInput, 'err-name', 'Name is required.');
      else clearError(nameInput, 'err-name');
    });

    emailInput.addEventListener('blur', () => {
      if (!emailInput.value.trim()) showError(emailInput, 'err-email', 'Email is required.');
      else if (!isValidEmail(emailInput.value.trim())) showError(emailInput, 'err-email', 'Enter a valid email address.');
      else clearError(emailInput, 'err-email');
    });

    msgInput.addEventListener('blur',  () => {
      if (!msgInput.value.trim()) showError(msgInput, 'err-msg', 'Message is required.');
      else clearError(msgInput, 'err-msg');
    });
  }

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    form.addEventListener('submit', handleSubmit);
    initLiveValidation();
  }

  return { init };
})();