import { Api } from "./api";

/*
Autonomous web component (extends HTMLElement)
*/

export class CatImg extends HTMLElement {
    static observedAttributes = ["seed"];
    element = document.createElement('img')

    constructor({ ...attrs } = {}) {
        super();
        for (const [key, value] of Object.entries(attrs)) {
          this.element[key] =  value
        }
      }


      render() {
      const host = document.createElement('div')
      host.id = 'host'
      document.body.appendChild(host)
      const shadow = host.attachShadow( { mode: 'open'})
      shadow.appendChild(this.element)
      }
    
    
      connectedCallback() {
        if (!this.element.url) {
            Api.getCatImgs().then((img) => {
            this.element.src =  img.url
            this.element.id =  img.id
            if (!this.element.width) {
              this.element.width =  img.width;
            }
            if (!this.element.height) {
              this.element.height =  img.height;
            }
          });
        }
        this.render()
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