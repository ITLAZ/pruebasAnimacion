function setup() {
    let canvas = createCanvas(1000, 1000);
    canvas.parent('p5-canvas-container');
    background(220);
    let clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', limpiarLienzo);
}

function draw() {
    if (mouseIsPressed) {
        fill(100, 150, 250);
        noStroke();
        ellipse(mouseX, mouseY, 50, 50);
    }
}

function limpiarLienzo() {
    background(220);
}