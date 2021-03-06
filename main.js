function preload(){
    moustacheMan = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(530, 430);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(530, 430);
    posenet = ml5.poseNet(video, loaded);
    posenet.on("pose", poses);
    tintColor = "";
    video.hide();    
}
function draw(){
    image(video, 0, 0, 530, 430);
    image(moustacheMan, noseX-45, noseY-20, 95, 70 );
    tint(tintColor);

}
function loaded(){
    console.log("Posenet is Initialized");
}
var noseX,noseY;
function poses(output){
    
    if (output.length > 0){
         noseX = output[0].pose.nose.x;
         noseY = output[0].pose.nose.y;
        console.log(output);
        console.log("X is " + output[0].pose.nose.x + "\n Y is " + output[0].pose.nose.y);
    }
}
function apply(){
    var redV = document.getElementById("redS").value;
    console.log(redV);
    var greenV = document.getElementById("greenS").value;
    var blueV = document.getElementById("blueS").value;
    tintColor = "rgb(" + redV + ", " + greenV + ", " + blueV + ")";
    console.log(tintColor);
}
function snap(){
    save("moustacheMan.png");
}