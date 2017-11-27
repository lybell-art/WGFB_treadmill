var img;
var r=0;
function preload() {
  img = loadImage("source/sky.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw()
{
  push();
  translate(width/2,height/2);
  rotate(r);
  image(img,-img.width/2,-img.height/2);
  pop();
  r++;
}
