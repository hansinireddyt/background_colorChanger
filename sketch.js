

function setup() {
  createCanvas(400,400);

  
  background("grey");
}


function draw() {
 

  if (keyIsDown(DOWN_ARROW)){
    background ("red");
  }

  if (keyIsDown(UP_ARROW)){
    background ("blue");
  }

  if (keyIsDown(LEFT_ARROW)){
    background ("green");
  }

  if (keyIsDown(RIGHT_ARROW)){
    background ("pink");
  }
}




