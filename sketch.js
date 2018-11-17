var value = 0;
var babe;
var babe2;

function preload() {
  // put preload code here
  mySong = loadSound("./assets/baby.mp3");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  babe = loadImage("./assets/baby.jpg");
  babe2 = loadImage("./assets/baby2.jpg");
  setMoveThreshold(5);
  frameRate(12);
}

function draw() {
  // put drawing code here
  value = value - 5;
  if (value > 200 || value < 100) {
    image(babe, 0, 0, windowWidth, windowHeight);
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else {
    image(babe2, 0, 0, windowWidth, windowHeight);
    mySong.stop();
  }
  textAlign(CENTER);
  textSize(32);
  text('Gently shake the baby to sleep!', width/4.5, 50);
  fill('slategray');
}

function deviceMoved() {
  value = value + 17;
  if (value > 255) {
    value = 0;
  }
}
