let x = 0, y = 0;
let angle = 0;
let size = 50;
let speed = 2;
let spiralAngle = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220);

    bounceCircle(100, 100);
    pulseCircle(300, 100);
    rotateRectangle(500, 100);
    movingSquare(100, 300);
    expandContractEllipse(300, 300);
    spiralDots(500, 300);
    oscillateLine(100, 500);
    rotatingStar(300, 500);
}

function bounceCircle(xPos, yPos) {
    push();
    translate(xPos, yPos);
    ellipse(x, 0, 50, 50);
    x += speed;
    if (x > 50 || x < -50) {
        speed *= -1;
    }
    pop();
}

function pulseCircle(xPos, yPos) {
    push();
    translate(xPos, yPos);
    ellipse(0, 0, size, size);
    size += speed;
    if (size > 70 || size < 30) {
        speed *= -1;
    }
    pop();
}

function rotateRectangle(xPos, yPos) {
    push();
    translate(xPos, yPos);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, 80, 40);
    angle += 0.05;
    pop();
}

function movingSquare(xPos, yPos) {
    push();
    translate(xPos, yPos);
    rectMode(CENTER);
    rect(x, 0, 30, 30);
    x += speed;
    if (x > 50 || x < -50) {
        speed *= -1;
    }
    pop();
}

function expandContractEllipse(xPos, yPos) {
    push();
    translate(xPos, yPos);
    ellipse(0, 0, size, size * 0.8);
    size += speed;
    if (size > 80 || size < 20) {
        speed *= -1;
    }
    pop();
}

function spiralDots(xPos, yPos) {
    push();
    translate(xPos, yPos);
    for (let i = 0; i < 15; i++) { 
        let angle = spiralAngle + i * 0.3; 
        let radius = i * 5 + frameCount * 0.1;
        let x = cos(angle) * radius;
        let y = sin(angle) * radius;
        ellipse(x, y, 5, 5);
    }
    spiralAngle += 0.01;
    pop();
}

function oscillateLine(xPos, yPos) {
    push();
    translate(xPos, yPos);
    let yLine = sin(frameCount * 0.05) * 30;
    line(0, 0, 50, yLine);
    pop();
}

function rotatingStar(xPos, yPos) {
    push();
    translate(xPos, yPos);
    rotate(angle);
    star(0, 0, 20, 40, 5);
    angle += 0.03;
    pop();
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
