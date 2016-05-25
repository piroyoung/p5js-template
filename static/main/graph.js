var prevX;
var prevY;

var source = '/dat'
// jsonを取得


class Node {
    constructor(x, y) {
        this.coordinate = [x, y];
    }

    link(other) {
        line(this.coordinate[0], this.coordinate[1], other.coordinate[0], other.coordinate[1]);
        fill(255);
        ellipse(this.coordinate[0], this.coordinate[1], 10, 10);
        ellipse(other.coordinate[0], other.coordinate[1], 10, 10);
    }

    move(diffX, diffY) {
        this.coordinate[0] += diffX;
        this.coordinate[1] += diffY;
    }
}


class Layer {
    constructor(layer_num, x) {
        var nodes = []
        for (var i = 0; i < layer_num; i++) {
            nodes.push(new Node(x, 50 * i));
        }
        this.nodes = nodes

    }

    adjust(stepSize) {
        for (var i = 0; i < this.nodes.length; i++) {
            if (i == 0) {
                var upper = this.nodes[i].coordinate[1];
                var lower = this.nodes[i + 1].coordinate[1] - this.nodes[i].coordinate[1];
                if (Math.abs(upper - lower) < 5) {
                    continue;
                } else if (upper < lower) {
                    this.nodes[i].move(0, stepSize);
                } else {
                    this.nodes[i].move(0, -stepSize);
                }
            } else if (i == this.nodes.length - 1) {
                var upper = this.nodes[i].coordinate[1] - this.nodes[i - 1].coordinate[1];
                var lower = 600 - this.nodes[i].coordinate[1];
                if (Math.abs(upper - lower) < 5) {
                    continue;
                } else if (upper < lower) {
                    this.nodes[i].move(0, stepSize);
                } else {
                    this.nodes[i].move(0, -stepSize);
                }
            } else {
                var lower = this.nodes[i + 1].coordinate[1] - this.nodes[i].coordinate[1];
                var upper = this.nodes[i].coordinate[1] - this.nodes[i - 1].coordinate[1];
                if (Math.abs(upper - lower) < 5) {
                    continue;
                } else if (upper < lower) {
                    this.nodes[i].move(0, stepSize);
                } else {
                    this.nodes[i].move(0, -stepSize);
                }
            }
        }
    }

    link(other) {
        for (var i = 0; i < this.nodes.length; i++) {
            for (var j = 0; j < other.nodes.length; j++) {
                this.nodes[i].link(other.nodes[j])
            }
        }
    }
}

var l1 = new Layer(8, 100);
var l2 = new Layer(4, 350);
var l3 = new Layer(4, 550);
var l4 = new Layer(3, 800);

function setup() {
    var canvas = createCanvas(900, 600);
    canvas.parent('container');
    frameRate(30)
}

function draw() {
    clear();

    l1.link(l2);
    l2.link(l3);
    l3.link(l4);
    l1.adjust(3);
    l2.adjust(3);
    l3.adjust(3);
    l4.adjust(3);


}