let tracePoint;
let anchors;

function setup() {

    createCanvas(500, 500);
    background(51);

    anchors = [
        createVector(250, 50),
        createVector(50, 450),
        createVector(450, 450)
    ];

    stroke(255);
    noFill();
    for (let p of anchors) {
        ellipse(p.x, p.y, 10);
    }

    tracePoint = createVector(random(width), random(height));

}

function draw() {

    fill(255);
    for (let i = 0; i < 100; i++) {
        ellipse(tracePoint.x, tracePoint.y, 1);
        let randomIndex = floor(random(anchors.length));
        let randomAnchor = anchors[randomIndex];
        tracePoint.add(randomAnchor).div(2);
    }

}