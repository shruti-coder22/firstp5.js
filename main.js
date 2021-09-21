function preload() {
}

function setup() {
    canvas = createCanvas(580, 500);
    canvas.position(400, 200)
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 60, 60, 450, 380);

    fill("green");
    rect(60, 10, 450, 40);
    fill("green");
    rect(60, 450, 450, 40);

    fill("green");
    rect(10, 50, 40, 390);
    fill("green");
    rect(520, 50, 40, 390);
}


function take_snapshot() {
    save("selfie.png");
}