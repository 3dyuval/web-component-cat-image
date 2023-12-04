export default class CatImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.setAttribute(name, newValue);
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
            img {
                width: ${this.getAttribute("width")};
                height: ${this.getAttribute("height")};
            }
        </style>
        <img src="${this.getAttribute("src")}" alt="${this.getAttribute(
      "alt"
    )}">
        `;
  }
}

customElements.define("cat-image", CatImage);
