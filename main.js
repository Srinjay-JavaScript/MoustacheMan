function preload(){
}
function setup(){
    canvas = createCanvas(530, 430);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(530, 430);
    posenet = ml5.poseNet(video, loaded);
    posenet.on("pose", poses);
    video.hide();    
}
function draw(){
    image(video, 0, 0, 530, 430);
}
function loaded(){
    console.log("Posenet is Initialized");
}
function poses(output){
    if (output.length > 0){
        console.log(output);
        console.log("X is " + output[0].pose.nose.x + "\n Y is " + output[0].pose.nose.y);
    }
}