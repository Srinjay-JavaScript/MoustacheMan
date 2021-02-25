function preload(){
}
function setup(){
    canvas = createCanvas(530, 430);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(530, 430);
    video.hide();    
}
function draw(){
    image(video, 0, 0, 530, 430);
}