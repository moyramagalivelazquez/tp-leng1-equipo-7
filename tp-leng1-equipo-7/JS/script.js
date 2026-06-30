window.addEventListener("DOMContentLoaded", () => {

    const contadores = document.querySelectorAll(".display-6, .display-5");

    contadores.forEach(contador => {

        const objetivo = Number(contador.textContent.replace("+", ""));
        let numero = 0;

        const velocidad = objetivo / 50;

        const intervalo = setInterval(() => {

            numero += velocidad;

            if (numero >= objetivo) {
                contador.textContent = "+" + objetivo;
                clearInterval(intervalo);
            } else {
                contador.textContent = "+" + Math.floor(numero);
            }

        }, 30);

    });

});

const formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        alert("¡Gracias por querer formar parte de Red Rodolfo al Rescate! 🐶❤️");

        formulario.reset();
    });
}

const elementos = document.querySelectorAll(".list-group-item");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
});

elementos.forEach(el=>{
    observer.observe(el);
});