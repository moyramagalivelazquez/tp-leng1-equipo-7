const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    alert("¡Gracias por querer formar parte de Red Rodolfo al Rescate! 🐶❤️");

    formulario.reset();
});