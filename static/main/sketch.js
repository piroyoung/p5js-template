function setup() {
    var canvas = createCanvas(1280, 960);

    canvas.parent('container')

}

function draw() {
    ellipse(mouseX, mouseY, 80, 80);
}