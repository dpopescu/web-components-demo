
export class AppLayout extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode:'open'}).innerHTML = `
<style>
:host {
  display: grid;
  grid-template-columns: 220px auto auto auto;
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
  "header header header header"
  "sidebar content content content"
  "footer footer footer footer";
  height: 100%;
}

div {
  color: var(--page-text-color, black);
}

.header {
  grid-area: header;
  background-color: #0094ba;
}

.sidebar {
  grid-area: sidebar;
  background-color: #3daf23;
}

.content {
  grid-area: content;
  background-color: #7f1692;
}

.footer {
  grid-area: footer;
  background-color: #e2953d;
}
</style>
<div class='header'><slot name='header'></slot></div>
<div class='sidebar'><slot name='sidebar'></slot></div>
<div class='content'><slot></slot></div>
<div class='footer'><slot name='footer'></slot></div>
`;
  }
}
customElements.define('app-layout', AppLayout);
