import {formatDisplayText} from './display-text.js';
// Extend native constraint validation with visible, associated inline feedback.
// Fields are handled only after the browser reports them invalid; no values are stored or sent.
export function installFormFeedback() {
  let counter = 0;
  const selector = '.sales-page-form input,.sales-page-form select,.sales-page-form textarea,.site-dialog form input,.site-dialog form select,.site-dialog form textarea';
  function update(field, invalid) {
    if (!(field instanceof HTMLElement) || !field.matches(selector)) return;
    let message = field.closest('label')?.querySelector('.field-error');
    if (!invalid) {
      field.removeAttribute('aria-invalid');
      if (message) message.textContent = '';
      return;
    }
    if (!message) {
      message = document.createElement('span');
      message.className = 'field-error';
      message.id = 'field-feedback-' + ++counter;
      field.insertAdjacentElement('afterend', message);
      const existing = field.getAttribute('aria-describedby') || '';
      field.setAttribute('aria-describedby', (existing + ' ' + message.id).trim());
    }
    field.setAttribute('aria-invalid', 'true');
    message.textContent = formatDisplayText(field.validationMessage);
  }
  function invalid(event) { update(event.target, true); }
  function input(event) {
    const field = event.target;
    if (field instanceof HTMLElement && field.matches(selector) && field.hasAttribute('aria-invalid')) {
      update(field, !field.validity.valid);
    }
  }
  document.addEventListener('invalid', invalid, true);
  document.addEventListener('input', input);
  document.addEventListener('change', input);
  return () => {
    document.removeEventListener('invalid', invalid, true);
    document.removeEventListener('input', input);
    document.removeEventListener('change', input);
  };
}
