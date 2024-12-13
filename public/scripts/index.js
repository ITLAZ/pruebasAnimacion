/* document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const overlay = document.querySelector(".transition-overlay");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetUrl = event.currentTarget.href;

            overlay.classList.add("active");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // El tiempo coincide con la duración de la animación en CSS
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const myEllipse = document.querySelector("#myEllipse");

    // Calcula la longitud total del elipse para controlar el trazo
    const length = myEllipse.getTotalLength();

    // Establece el strokeDasharray y strokeDashoffset para ocultar el elipse al inicio
    gsap.set(myEllipse, { strokeDasharray: length, strokeDashoffset: length });

    // Anima desde la parte superior del elipse hasta cerrarse en la parte inferior
    gsap.fromTo(myEllipse, 
        { strokeDashoffset: length },           // Oculto al inicio
        { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" } // Dibuja el trazo en 2 segundos
    );
});
 */

