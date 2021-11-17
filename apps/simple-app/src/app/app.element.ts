import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
      <h1>Simple Application</h1>
      `;
  }
}
customElements.define('web-components-demo-root', AppElement);
