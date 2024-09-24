import { Api } from './api.js'
/*

customized web components for built in element
inherited from `HTMLImageElement`

*/

export class ImgCat extends HTMLImageElement {


  constructor(element, { ...rest } = {}) {
    super(element);
    for (const [key, value] of Object.entries(rest)) {
      this.setAttribute(key, value);
    }
  }


  connectedCallback() {
    if (!this.url) {
      /*
        src defaults to current url if not provided.
        will use url, which is not part of HTMLImageElement default attributes.
        */
        Api.getCatImgs().then((img) => {
        this.setAttribute("src", img.url);
        this.setAttribute("id", img.id);
        if (!this.width) {
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
