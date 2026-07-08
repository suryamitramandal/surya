/* Form Validation */
function initForms() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const validate = (input) => {
    const err = input.parentElement.querySelector('.form-error') || input.nextElementSibling;
    let valid = true, msg = '';
    if (input.required && !input.value.trim()) { valid = false; msg = 'This field is required.'; }
    else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) { valid = false; msg = 'Enter a valid email.'; }
    else if (input.type === 'tel' && input.value && !/^\+?[\d\s\-]{7,15}$/.test(input.value)) { valid = false; msg = 'Enter a valid phone number.'; }
    if (err && err.classList.contains('form-error')) { err.textContent = msg; err.classList.toggle('show', !valid); }
    input.style.borderColor = valid ? '' : '#E53E3E';
    return valid;
  };

  form.querySelectorAll('input,textarea,select').forEach(el => {
    el.addEventListener('blur', () => validate(el));
    el.addEventListener('input', () => { el.style.borderColor = ''; const e = el.parentElement.querySelector('.form-error'); if (e) e.classList.remove('show'); });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;
    form.querySelectorAll('[required]').forEach(el => { if (!validate(el)) allValid = false; });
    if (!allValid) return;
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true; btn.textContent = 'Sending…';
    setTimeout(() => {
      btn.disabled = false; btn.textContent = 'Send Message';
      const s = document.getElementById('form-success');
      if (s) s.classList.add('show');
      form.reset();
      setTimeout(() => s && s.classList.remove('show'), 5000);
    }, 1500);
  });
}
