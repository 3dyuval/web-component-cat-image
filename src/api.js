export async function getCatImgs(limit = 1) {
  return fetch("https://api.thecatapi.com/v1/images/search?limit=" + limit)
    .then((response) => response.json())
    .catch(console.log);
}
