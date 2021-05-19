function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCapture(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded(){
    console.log('PoseNet Is Initiated!');
    poseNet.on('Pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
function draw() {
    background('#e5b2ff')
}