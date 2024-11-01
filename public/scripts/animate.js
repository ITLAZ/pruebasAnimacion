const element = document.getElementById("animado");
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