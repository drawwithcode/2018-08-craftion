var value = 0;
var babe ;
var babe2;
function preload(){
  // put preload code here
  mySong = loadSound("./assets/baby.mp3");
  babe = loadImage("./assets/baby.jpg");
  babe2 = loadImage("./assets/baby2.jpg");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  setMoveThreshold(5);
  frameRate(12);


}

function draw() {
  // put drawing code here
  // if (value>150) {
  //   image(babe, 0,0,windowWidth,windowHeight);
  //   // if (mySong.isPlaying() == false) {
  //   //   mySong.play();
  //   // }
  // } else {
  //
  //   image(babe2, 0,0,windowWidth,windowHeight);
  //   // mySong.stop();
  // }

}

function deviceTurned() {
  if (turnAxis === 'Z'){
    mySong.play();
  }
}
