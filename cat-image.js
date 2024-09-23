/*

customized web components for built in element
inherited from `HTMLImageElement`

*/

export class CatImage extends HTMLImageElement {
  constructor(element, { ...rest } = {}) {
    super(element);
    for (const [key, value] of Object.entries(rest)) {
      this.setAttribute(key, value);
    }
  }

  async getCatImgs() {
    return fetch("https://api.thecatapi.com/v1/images/search?limit=1")
      .then((response) => response.json())
      .catch(console.log);
  }

  connectedCallback() {
    if (!this.url) {
      /*
        src defaults to current url if not provided.
        will use url, which is not part of HTMLImageElement default attributes.
        */
      this.getCatImgs().then(([img]) => {
        this.setAttribute("src", img.url);
        this.setAttribute("id", img.id);
        if (!this.width) {
          debugger;
          this.setAttribute("width", img.width);
        }
        if (!this.height) {
          this.setAttribute("height", img.height);
        }
      });
    }
    console.log("Cat Image added to page.");
  }

  disconnectedCallback() {
    console.log("Cat Image removed from page.");
  }

  adoptedCallback() {
    console.log("Cat Image moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

/*
Use customElements.define() to define your custom element. However,
for extending built-in elements like HTMLImageElement, you need to
pass an additional options object specifying the element you're extending.
*/

customElements.define("cat-image", CatImage, { extends: "img" });
