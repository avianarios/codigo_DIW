//mejoras: cambiar a jquery. Ponerle un hecho aleatorio debajo de la foto
let urlImagenes = "https://api.thecatapi.com/v1/images/search?limit=";
const urlHechos= "https://catfact.ninja/facts";
const section = document.querySelector("#contenedor-img");

let imgFlexbox=3;
let imgGrid=9;
let numFotos;

//catFacts(3);
let matrizHechos=[];
let matrizFotos=[];

window.addEventListener("load", ()=>{
  if (window.location.pathname.includes("flexbox")){
    urlImagenes+=imgFlexbox;
    numFotos=3;
  }else{
    if (window.location.pathname.includes("grid")){
      urlImagenes+=imgGrid;
      numFotos=9;
    }
  }
  getRandomCats(urlImagenes);
});

randomCatPhoto = (json) => {
  for (let i=0; i<numFotos; i++){   //aunque la llamada a la API está bien hecha, ésta devuelve siempre 10 elementos. Por eso hay que usar una variable numFotos
    let photo = json[i].url;
    section.classList.add("cats");
  
    let div=document.createElement("div");
    let image = document.createElement("img");
    image.src = photo;
    image.classList.add("object-scale-down");
    image.alt = photo;
    div.appendChild(image);
    section.appendChild(div);
  }
};

async function getRandomCats(url) {
  section.innerHTML = "";
  try {
    const response = await fetch(url);
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