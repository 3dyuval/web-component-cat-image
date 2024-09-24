import {ImgCat}  from "./img-cat.js";
import {CatImg} from './cat-img.js'

/*
Use customElements.define() to define your custom element. However,
for extending built-in elements like HTMLImageElement, you need to
pass an additional options object specifying the element you're extending.
*/

customElements.define("img-cat", ImgCat, { extends: "img" });
customElements.define("cat-img", CatImg);
