function preload(){
  // put preload code here
  mySong = loadSound("./assets/baby.mp3");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here
  if (mouseX > width/2) {
    background(0,255,0);
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else {
    background(255,0,0);
    mySong.stop();
  }

}
