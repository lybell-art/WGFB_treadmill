var sky, in_bg;
var r=0;
function preload() {
  sky = loadImage("source/sky.png");
  in_bg = loadImage("source/in_bg.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw()
{
  push();
  translate(width/2,height/2);
  display_mid(in_bg);
  rotate(r);
  display_mid(sky);
  pop();
  r+=0.1;
}
function display_mid(img)
{
  image(img, -img.width/2,-img.height/2);
}
