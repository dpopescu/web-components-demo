import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('page-header')
export class PageHeader extends LitElement {

  static styles = css`
    :host {
      border: 5px dotted red;
      display: block;
      height: 100%;
      box-sizing: border-box;
    }

    button {
      font-size: var(--header-button-font-size, 12px);
  `;

  fireClickEvent(e: Event) {
    this.dispatchEvent(new CustomEvent('onButtonClick', {
      bubbles: true,
      composed: true,
      detail: 'buttonClick'
    }))
  }

  render() {
    return html`
      <div>
        <slot></slot>
        <button @click='${this.fireClickEvent}'>Click me</button>
      </div>
    `;
  }
}
