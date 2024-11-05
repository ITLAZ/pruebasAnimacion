/* const element = document.getElementById("animado");
const animations = [
    "animate__bounce",
    "animate__flash",
    "animate__pulse",
    "animate__rubberBand",
    "animate__shakeX",
    "animate__swing",
    "animate__tada",
    "animate__wobble",
    "animate__jello"
];

let index = 0;

function applyAnimation() {
    element.classList.remove(...animations);
    element.classList.add("animate__animated", animations[index]);
    index = (index + 1) % animations.length;
    setTimeout(applyAnimation, 1000);
}

applyAnimation();
 */

/* transiciones */
document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-principal");
    const elementos = document.querySelectorAll("#contenedor-principal > *");
    const enlacesSalir = document.querySelectorAll(".salir");

    const animacionesEntrada = [
        "animate__bounceIn",
        "animate__fadeInDown",
        "animate__fadeInLeft",
        "animate__fadeInRight",
        "animate__rotateIn",
        "animate__zoomIn",
        "animate__jackInTheBox",
        "animate__lightSpeedInLeft",
        "animate__bounce",
        "animate__flash",
        "animate__pulse",
        "animate__rubberBand",
        "animate__shakeX",
        "animate__swing",
        "animate__tada",
        "animate__wobble",
        "animate__jello"
    ];

    const animacionesSalida = [
        "animate__fadeOut",
        "animate__fadeOutDown",
        "animate__fadeOutLeft",
        "animate__fadeOutRight",
        "animate__rotateOut",
        "animate__zoomOut",
        "animate__hinge",
        "animate__lightSpeedOutRight",
        "animate__bounce",
        "animate__flash",
        "animate__pulse",
        "animate__rubberBand",
        "animate__shakeX",
        "animate__swing",
        "animate__tada",
        "animate__wobble",
        "animate__jello"
    ];

    const animacionContenedorEntrada = animacionesEntrada[Math.floor(Math.random() * animacionesEntrada.length)];
    contenedor.classList.add("animate__animated", animacionContenedorEntrada);

    elementos.forEach((elemento, index) => {
        const animacionElementoEntrada = animacionesEntrada[Math.floor(Math.random() * animacionesEntrada.length)];
        elemento.classList.add("animate__animated", animacionElementoEntrada);
        elemento.style.animationDelay = `${index * 0.2}s`;
    });

    contenedor.addEventListener("animationend", () => {
        contenedor.classList.remove("animate__animated", animacionContenedorEntrada);
        elementos.forEach((elemento) => {
            elemento.classList.remove("animate__animated");
        });
    });

    enlacesSalir.forEach((enlace) => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();

            const animacionContenedorSalida = animacionesSalida[Math.floor(Math.random() * animacionesSalida.length)];
            contenedor.classList.add("animate__animated", animacionContenedorSalida);

            elementos.forEach((elemento, index) => {
                const animacionElementoSalida = animacionesSalida[Math.floor(Math.random() * animacionesSalida.length)];
                elemento.classList.add("animate__animated", animacionElementoSalida);
                elemento.style.animationDelay = `${index * 0.2}s`;
            });

            contenedor.addEventListener("animationend", () => {
                window.location.href = enlace.href;
            }, { once: true });
        });
    });
});
