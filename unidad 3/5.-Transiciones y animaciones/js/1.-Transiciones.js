/*let objetivo=document.getElementById("boton_color");
objetivo.addEventListener('click', (evento)=>{
    evento.target.style.backgroundColor="red";
    evento.target.classlist.add
});*/


let cambio = document.getElementById("boton_color");
cambio.addEventListener("click", () => cambio.classList.toggle("fondo-verde"));

cambio2 = document.getElementById("boton_tamaño");
cambio2.addEventListener("click", (evento) => {
    evento.target.classList.toggle("letra-2rem");
    evento.target.classList.toggle("letra-verde");
});


let transformaciones=["escalar-rotar", "escalar", "rotar", "trasladar"];
for (let imagen of document.querySelectorAll("#imagenes1 > img")){
    imagen.addEventListener("mouseover", (evento)=>{
        if (!imagen.classList.contains("transition-linear")){
            evento.target.classList.toggle(transformaciones.pop());
            evento.target.classList.toggle("transition-linear");
//            evento.target.classList.toggle("transformacion3");
        }
    });
}


let transformaciones2=["transition-steps", "transition-bezier2", "transition-bezier", "transition-ease-in-out", "transition-ease-out", "transition-ease-in", "transition-ease",  "transition-linear"];
for (let imagen of document.querySelectorAll("#imagenes2 > img")){
    imagen.addEventListener("mouseover", (evento)=>{
        if (!imagen.classList.contains("trasladar")){
            let funcion=transformaciones2.pop();
            evento.target.classList.toggle("trasladar");
            evento.target.classList.toggle(funcion);
            let cual=document.createElement('p');
            cual.textContent=`${funcion}`;
            evento.target.insertAdjacentElement("afterend", cual);
        }
    });
}


document.getElementById("digit").addEventListener("click", ()=> {
    document.getElementById("stripe").classList.add('animate');
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



