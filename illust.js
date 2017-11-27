var sky, in_bg;
var walk;
var r=0;
var gazer=1;
function preload() {
  sky = loadImage("source/sky.png");
  in_bg = loadImage("source/in_bg.png");
  walk = new Animation("source/walk-",60);
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  walk.before=millis();
}
function draw()
{
  var speed=1+gazer*0.5;
  push();
  translate(width/2,height/2);
  push();
  rotate(r);
  display_mid(sky);
  pop();
  display_mid(in_bg);
  walk.setSped(speed);
  walk.display(-3,177);
  pop();
  r+=radians(8/60*speed);
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
	this.fps=60;
	this.before=0;
	this.display=function(x,y)
	{
		this.frame=(this.frame+int((millis()-this.before)*this.fps/1000))%this.imageCount;
		image(this.sprite[this.frame],x-this.width/2,y-this.height/2);
		this.before=millis();
	}
	this.setSpeed=function(n)
	{
		this.fps=60*n;
	}
}
