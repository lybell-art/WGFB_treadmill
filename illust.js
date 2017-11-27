var sky, in_bg;
var walk;
var r=0;
function preload() {
  sky = loadImage("source/sky.png");
  in_bg = loadImage("source/in_bg.png");
  walk = new Animation("source/walk-",60);
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw()
{
  push();
  translate(width/2,height/2);
  push();
  rotate(r);
  display_mid(sky);
  pop();
  display_mid(in_bg);
  walk.display(-3,176);
  pop();
  r+=0.02;
}

function display_mid(img)
{
  image(img, -img.width/2,-img.height/2);
}
function Animation(prefix, count)
{
	this.sprite=[];
	this.imageCount=count;
	for(var i=0;i<this.imageCount;i++)
	{
		var filename=prefix+(i+1)+".png";
		this.sprite[i]=loadImage(filename);
	}
	this.frame=0;
	this.width=130;
	this.height=320;
	this.display=function(x,y)
	{
		this.frame=(this.frame+1)%this.imageCount;
		image(this.sprite[this.frame],x-this.width/2,y-this.height/2);
	}
}
