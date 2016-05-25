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

    ellipse(
        mouseX,
        mouseY,
        (diffX^2 + 0.5*diffY^2)^0.5 + 30,
        (diffY^2 + 0.5*diffX^2)^0.5 + 30
    );

    prevX = mouseX
    prevY = mouseY
}