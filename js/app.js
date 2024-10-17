document.addEventListener("DOMContentLoaded", () => {
    // Variables
    let iconMostrar = document.querySelector(".menu > button");
    let iconCerrar = document.querySelector(".boton");
    let navbar = document.querySelector(".navbar");

    // Eventos
    iconMostrar.addEventListener("click", () => {

        navbar.classList.add("mostrar");
        setTimeout(() => {
            navbar.style.right = "0%";
            navbar.classList.remove("mostrar");
        }, 999);

    });

    iconCerrar.addEventListener("click", () => {

        navbar.classList.add("ocultar");
        setTimeout(() => {
            navbar.style.right = "-20%";
            navbar.classList.remove("ocultar");
        }, 1000);
        
    });

    navbar.addEventListener("mouse")
})