var sky, in_bg;
var walk;
var r=0;
var gazer=1;
//face detect
var detector;
var classifier = objectdetect.frontalface;
var cam;
var w=320;
var h=240;
var img;
function preload() {
  sky = loadImage("source/sky.png");
  in_bg = loadImage("source/in_bg.png");
  walk = new Animation("source/walk-",60);
}
function setup() {
  createCanvas(1000,1400);
  var scaleFactor=2.0;
  detector=new objectdetect.detector(w,h,scaleFactor, classifier);
  cam=createCapture(VIDEO);
  cam.size(w,h);
  img=new p5.Image(w,h);
  walk.before=millis();
	
}
function draw()
{
  if(frameCount%60==0)
  {
    img.copy(cam,0,0,w,h,0,0,w,h);
    var faces=detector.detect(img.canvas);
    console.log(faces);
    gazer=constrain(faces.length,0,8);
    console.log(gazer);
  }
  var speed=1+gazer*0.5;
  push();
  translate(width/2,height/2);
  push();
  rotate(r);
  display_mid(sky);
  pop();
  display_mid(in_bg);
  walk.setSpeed(speed);
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
