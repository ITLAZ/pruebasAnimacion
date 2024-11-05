// Seleccionamos el elemento del cuerpo de la página
const pagina = document.body;

// Función para seleccionar aleatoriamente entre dos animaciones
function randomAnimation(animations) {
    const randomIndex = Math.floor(Math.random() * animations.length);
    animations[randomIndex]();
}

// Animación de entrada: glitch
function glitchIn() {
    gsap.set("body", { opacity: 0, x: "random(-10, 10)", y: "random(-10, 10)" });
    gsap.to("body", {
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
        x: 0,
        y: 0,
        onStart: () => {
            gsap.to("body", {
                x: "random(-5, 5)",
                duration: 0.1,
                ease: "none",
                repeat: 6,
                yoyo: true
            });
        }
    });
}

// Animación de entrada: desintegración
function animacionEntrada() {
    gsap.from(pagina, {
        opacity: 0,
        x: -50,
        y: 50,
        scale: 1.2,
        duration: 1.2,
        ease: "power4.out"
    });
}

// Animación de salida: glitch
function glitchOut(event) {
    event.preventDefault();
    const targetUrl = event.currentTarget.getAttribute('href');

    gsap.timeline()
        .to("body", {
            opacity: 1,
            duration: 0.1,
            ease: "none",
            onStart: () => {
                gsap.set("body", { willChange: "transform, opacity" });
            }
        })
        .to("body", {
            x: "random(-10, 10)",
            y: "random(-10, 10)",
            duration: 0.05,
            ease: "none",
            repeat: 8,
            yoyo: true
        })
        .to("body", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                window.location.href = targetUrl;
            }
        });
}

// Animación de salida: desintegración
function desintegracionCompleta(event) {
    event.preventDefault();
    const urlDestino = event.currentTarget.href;

    gsap.to(pagina, {
        opacity: 0,
        x: "+=50",
        y: "-=50",
        scale: 1.2,
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
            window.location.href = urlDestino;
        }
    });
}

// Ejecuta una animación de entrada aleatoria al cargar la página
window.addEventListener("load", () => {
    randomAnimation([glitchIn, animacionEntrada]);
});

// Añade el evento de salida aleatoria a cada enlace de navegación
const enlaces = document.querySelectorAll("a.salir");
enlaces.forEach(enlace => {
    enlace.addEventListener("click", (event) => {
        randomAnimation([() => glitchOut(event), () => desintegracionCompleta(event)]);
    });
});
