function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);

    canvas.position(110, 250);

    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    ellipse(38, 5, 89, [89])
    rect(-38, 38, 55, 55);
    circle(-67, -67, 67, 67);
}

function takeSnapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("colorName").value;
}