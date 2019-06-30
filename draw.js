let input;
let val1;
let val2;
let val3;

function setup() {
  createCanvas(500, 500);
  background(0);
  input = createSlider(1, 100, 1, 1);
  val1 = createSlider(1,255, 255, 1);
  val2 = createSlider(1,255, 1, 1);
  val3 = createSlider(1,255, 1, 1);
  input.position(20,20);
  val1.position(350,20);
  val2.position(350,50);
  val3.position(350,80);
}


function draw() {
  let cl1 = val1.value();
  let cl2 = val2.value();
  let cl3 = val3.value();
  let drawSize = input.value();
  fill(cl1, cl2, cl3);
  rect(300,20,25,25);

  if (mouseButton === RIGHT) {
    if (mouseIsPressed) {
      colorCode = 255;
      fill(cl1, cl2, cl3);
      noStroke();
      rect(mouseX, mouseY, drawSize, drawSize, 20);
    }
  }
}
