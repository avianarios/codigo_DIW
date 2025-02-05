document.body.addEventListener("click", (evento)=>{
    switch (evento.target.id){
        case "gato":
            evento.target.classList.add("mueve-derecha");
            evento.target.classList.remove("mueve-izquierda");
            evento.target.classList.remove("back");
            break;
        case "gato2":
            evento.target.classList.add("sacudelo");
            break;
        case "gato3":
            evento.target.classList.add("mueve-infinito-alterno");
            break;
        case "gato4":
            evento.target.classList.add("mueve-cuatro-inversa");
            break;
        case "boton1":
            evento.target.classList.toggle("boton1")
            break;
        case "boton2":
            evento.target.classList.toggle("cuatro-esquinas-ease-out");
            break;
    }
});

document.body.addEventListener("animationend", (evento)=>{
    switch (evento.target.id){
        case "gato":
            evento.target.classList.remove("mueve-derecha");
            evento.target.classList.add("mueve-izquierda");
            evento.target.classList.add("back");
            break;
        case "gato2":
            evento.target.classList.remove("sacudelo");
            break;
        case "gato3":
            evento.target.classList.remove("mueve-infinito-alterno");
            break;
        case "gato4":
            evento.target.classList.remove("mueve-cuatro-inversa");
            break;
        case "boton1":
            evento.target.classList.toggle("boton1");
            break;
        case "boton2":
            evento.target.classList.toggle("cuatro-esquinas-ease-out");
            break;
    }
});