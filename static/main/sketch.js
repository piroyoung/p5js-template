var prevX;
var prevY;

function setup() {
    var canvas = createCanvas(900, 600);
    canvas.parent('container');
    frameRate(10)
}

function draw() {
    var diffX = mouseX - prevX;
    var diffY = mouseY - prevY;

    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255)
    }

    ellipse(
        mouseX,
        mouseY,
        diffX + 30,
        diffY + 30
    );

    prevX = mouseX
    prevY = mouseY
}