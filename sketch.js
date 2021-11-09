function preload(){
  teapot=loadModel("mushroom house.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
  background(223, 202, 175);
  push();
  translate(-width/2, -height/2) 
  fill(244, 238, 216)
  ellipse(mouseX,mouseY,100,100)
  pop();
push();
  scale(3);
  rotateX(PI/2)
  rotateZ(frameCount*0.01);
  noStroke();
  ambientLight(80);
  directionalLight(0,0,255,0,1,0)
  model(teapot);
  pop();
  normalMaterial();
  
}