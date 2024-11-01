document.addEventListener("DOMContentLoaded", () => {
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
