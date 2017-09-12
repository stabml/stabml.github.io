var canvas;
var a =200;
var b =200;
var t = 0;

function setup (){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-1");
  background("#aabbcc");
  a = width/2;
  b = height/2;
}


function draw(){


  if (a<=width && b<=height){
    a+=int(random(-4,4));
    b-=int(random(-4,4));
    strokeWeight(5);
    stroke(a/3,b/3,b/5);
    point(a,b);
  }else{
    a-=int(random(-4,4));
    b+=int(random(-4,4));
    strokeWeight(5);
    stroke(a/3,b/3,b/5);
    point(a,b);
  }
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#aabbcc");
  a = width/2;
  b = height/2;
}




    