song2 = "";
song = "";
lwristy="";
rwristy="";
lwristx="";
rwristx="";
lscore="";
rscore="";
function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(500, 375);
    canvas.position(390, 252);
    video = createCapture(VIDEO);
    video.hide();
    video.size(500, 375)
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}
function modelloaded() {
    console.log("poseNet is initialised!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        lwristy = results[0].pose.leftWrist.y;
        rwristy = results[0].pose.rightWrist.y;
        lwristx = results[0].pose.leftWrist.x;
        rwristx = results[0].pose.rightWrist.x;
        lscore = results[0].pose.keypoints[10].score;
        rscore = results[0].pose.keypoints[10].score;
    }
}
function draw(){
    image(video, 0, 0, 500, 375);
    fill("red");
    stroke("blue");
    circle(lwristx, lwristy, 20);
    fill("blue");
    stroke("red");
    circle(rwristx, rwristy, 20);
}
function play() {
   if(rwristy > 124.92104301675718){
       song.play();
       document.getElementById("song").innerHTML="Hedwig's theme";
   }else if(lwristy > 124.92104301675718){
       song2.play();
       document.getElementById("song").innerHTML="Peter Pan theme";
   } 
}
function stop() {
    song.stop();
    song2.stop();
}