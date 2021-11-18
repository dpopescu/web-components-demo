import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  [x: string]: unknown;

  static styles = css`
  h1 {
    color: var(--heading-color, green);
  }

  ::slotted(p) {
    border: 1px solid black;
  }
  `;

  static properties = {
    message: { type: String, reflect: true },
    counter: { state: true, type: Number }
  };

  private intervalId: any;

  constructor() {
    super();
    this.counter = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.intervalId = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.counter++;
    }, 500);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.intervalId);
  }

  render() {
    return html`
      <div>
        <slot name='secondary'></slot>
        <h1>My Lit element -
          <slot>Nothing</slot>
        </h1>
        <p>${this.message} - ${this.counter}</p>
        <button @click='${() => this.message = 'updated from inside'}'>Internal update</button>
      </div>
    `;
  }
}
