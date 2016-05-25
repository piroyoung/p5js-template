var prevX;
var prevY;

function setup() {
    var canvas = createCanvas(1280, 960);
    canvas.parent('container');
    frameRate(100)
}

function draw() {
    var diffX = mouseX - prevX;
    var diffY = mouseY - prevY;

    if(mouseIsPressed) {
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