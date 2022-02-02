function preload() {
}

function setup() {
    canvas =createCanvas(640, 480);
    canvas.position(110,260);
    video =createCapture(VIDEO);
    video.hide();

    color1 = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(color1);
}

function filter_color() {
  color1 =document.getElementById("color_name").value;
}

function take_snapshot() {
    save("selfie_with_filter.png");
}