export class Api {

 static async getCatImgs() {
    return fetch("https://api.thecatapi.com/v1/images/search?limit=1")
      .then((response) => response.json())
      .then(images => images[0])
      .catch(console.error);
  }

  
}