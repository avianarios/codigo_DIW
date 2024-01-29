/*let objetivo=document.getElementById("boton_color");
objetivo.addEventListener('click', (evento)=>{
    evento.target.style.backgroundColor="red";
    evento.target.classlist.add
});*/


let cambio = document.getElementById("boton_color");
cambio.addEventListener("click", () => cambio.classList.toggle("fondo_rojo"));

cambio2 = document.getElementById("boton_tamaño");
cambio2.addEventListener("click", (evento) => {
    evento.target.classList.toggle("crece");
    evento.target.classList.toggle("letra_roja");
});


/*let transformaciones=["trasladar", "rotar", "escalar"];
i=0;
for (let imagen of document.querySelectorAll("img")){
    imagen.addEventListener("click", (evento)=>{
        evento.target.classList.toggle(transformaciones.pop());
    });
    i++;
}*/

document.querySelector("article#imagenes1 > img:nth-of-type(1)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("animacion_linear");
    evento.target.classList.toggle("transformacion3");
    evento.target.classList.toggle("trasladar");

});
document.querySelector("article#imagenes1 > img:nth-of-type(2)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("animacion_linear");
    evento.target.classList.toggle("transformacion3");
    evento.target.classList.toggle("rotar");
});
document.querySelector("article#imagenes1 > img:nth-of-type(3)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("animacion_linear");
    evento.target.classList.toggle("transformacion3");
    evento.target.classList.toggle("escalar");
});
document.querySelector("article#imagenes1 > img:nth-of-type(4)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("animacion_linear");
    evento.target.classList.toggle("transformacion3");
    evento.target.classList.toggle("escalar_y_rotar");
});




document.querySelector("article#imagenes2 > img:nth-of-type(1)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("trasladar");
    evento.target.classList.toggle("animacion_ease");
});

document.querySelector("article#imagenes2 > img:nth-of-type(2)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("trasladar");
    evento.target.classList.toggle("animacion_linear");
});

document.querySelector("article#imagenes2 > img:nth-of-type(3)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("trasladar");
    evento.target.classList.toggle("animacion_ease-in");
});

document.querySelector("article#imagenes2 > img:nth-of-type(4)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("trasladar");
    evento.target.classList.toggle("animacion_ease-out");
});

document.querySelector("article#imagenes2 > img:nth-of-type(5)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("trasladar");
    evento.target.classList.toggle("animacion_ease-in-out");
});

document.querySelector("article#imagenes2 > img:nth-of-type(6)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("trasladar");
    evento.target.classList.toggle("animacion_bezier");
});

document.querySelector("article#imagenes2 > img:nth-of-type(7)").addEventListener("mouseover", (evento)=>{
    evento.target.classList.toggle("trasladar");
    evento.target.classList.toggle("animacion_bezier2");
});


let boat=document.getElementById("boat");
boat.addEventListener("mouseover", navegar);
boat.addEventListener('transitionend', ()=>{
    turno++;
    navegar();
});


let turno=1;
function navegar(){
    if (turno % 2) {
        // navegar a la derecha
        boat.classList.remove('back');
        boat.style.marginLeft =  document.body.offsetWidth + 'px';
  } else {
    // navegar a la izquierda
        boat.classList.add('back');
        boat.style.marginLeft = - 50 + '%';
  }
}



