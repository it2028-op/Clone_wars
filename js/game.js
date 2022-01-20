let canvas, x0, y0, trooper, spaceShiftSprite;
let time = 0;
let Cborder = 50;
let Csize = 80;
let Cspeed = 5;
let droids = [];
let blasts = [];

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(1000, 600);
  canvas.parent("mycanvas");
  trooper = new Trooper( Cborder, height / 2 - 40);
}

function draw() {
  time++;
  background(250);
  trooper.draw();
  if (time % 40 == 0) {
    droids.push(new Droid());
  }
  droids.forEach(function (droid, index, array) {
    droid.draw();
    if (trooper.detectCollision(droid)) {
      array.splice(index, 1);
    }
    if (droid.y > height) {
      array.splice(index, 1);
    }
    blasts.forEach(function(blast, idx, arr) {
      if (droid.detectCollision(blast)) {
        array.splice(index, 1);
        arr.splice(idx, 1);
      }
    });
  });

  blasts.forEach(function(blast, idx, arr) {
    blast.draw();
    if (
      blast.y > height ||
      blast.y < 0 ||
      blast.x < 0 ||
      blast.x > width
    ) {
      arr.splice(idx, 1);
    }
  });
}

function mousePressed() {
  x0 = mouseX;
  y0 = mouseY;
  trooper.angle += 15;
}

function mouseMoved() {}
