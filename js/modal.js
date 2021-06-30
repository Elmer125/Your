window.addEventListener("load",function(){
    let imagenes=document.querySelectorAll(".gallery__img");
    let modal=document.querySelector("#modal");
    let img=document.querySelector("#modal__img");
    let boton=document.querySelector("#modal__boton");

    for(let f = 0; f < imagenes.length ;f++){
        imagenes[f].addEventListener("click", function(e){// se le pasa un parametro para que lo tome con el click
            modal.classList.toggle("modal--open");
            let src=e.target.src;//obten la ruta de la imagen 
            img.setAttribute("src",src) //set attribute para pasarle un atributo a img
        });
        //TOGGLE PONE Y ELIMINA 
    }
    boton.addEventListener("click",function(){
        modal.classList.toggle("modal--open");
    })
})