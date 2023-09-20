let x = 200;
let speed = 5;
let diameter = 40;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255,125,0);
  ellipse( x, height/2, diameter);
  if (x >= width || x<=0) {
    speed = speed * -1;
  }
  x += speed;
}

   function mouseReleased() {
    loop();
  }
  
function mousePressed() {
    noLoop();

    

  }

 
