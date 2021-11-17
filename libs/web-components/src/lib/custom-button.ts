export class CustomButton extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', e => {
      const result = confirm('Are you sure you want to click this button?');
      if (!result) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.dispatchEvent(new CustomEvent('cancelled'));
      }
    }, {
      capture: true
    });
  }
}

customElements.define('custom-button', CustomButton, {
  extends: 'button'
});
