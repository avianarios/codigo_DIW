//this is plain JavaScript. Later on, we'll learn how to do it with JQuery
const urlImagenes = "https://api.thecatapi.com/v1/images/search";
const urlHechos= "https://catfact.ninja/facts";
const section = document.querySelector(".container");

catFacts(3);
let matrizHechos=[];
let matrizFotos=[];


window.addEventListener("load", ()=>{
    for (let i=0; i<3; i++)
        getRandomCats();
});

randomCatPhoto = (json) => {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats", "md:w-1/4", "object-scale-down");
  image.alt = photo;
  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(urlImagenes);
    const json = await response.json();
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error:"+e);
  }
}


async function catFacts(cuantos) {
    try {
      const response = await fetch(urlHechos);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      for (let i=0; i<cuantos; i++){
        matrizHechos.push(data.data[i].fact);
      }
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
}
