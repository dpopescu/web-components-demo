export class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ['message'];
  }

  connectedCallback() {
    this.render();
    this.shadowRoot?.querySelector('.floating')?.addEventListener('click', e => {
      this.dispatchEvent(new CustomEvent('onDetailsClick'));
    });
  }

  get message() {
    return this.getAttribute('message') || '';
  }

  set message(value) {
    this.setAttribute('message', value || '');
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'message':
        this.updateMessage();
        break;
    }
  }

  private updateMessage() {
    const messageEl = this.shadowRoot?.querySelector('h2');
    if (messageEl) {
      messageEl.innerText = this.message;
    }
  }

  render() {
    this.attachShadow({
      mode: 'open'
    })
      .innerHTML = `
      <style>
        h1 {
          color: var(--heading-color, red);
        }

        .floating {
          position: absolute;
          top: 10px;
          right: 100px;
          cursor: pointer;
        }

        .floating:hover {
          text-decoration: underline;
          color: blue;
        }

        :host {
          display: block;
          padding: 5px;
          border: 1px solid red;
          position: relative;
        }
      </style>
      <h1>This is element number: <slot>Zero</slot></h1>
      <span class='floating'><slot name='details'>No Details</slot></span>
      <h2>${this.message}</h2>
      `;
  }
}

customElements.define('my-element', MyElement);
