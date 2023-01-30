let particles = [];
const num = 10000;

const noiseScale = 0.01/2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  
  stroke(255);
  // For a cool effect try uncommenting this line
  // And comment out the background() line in draw
  // stroke(255, 50);
  clear();
}

function draw() {
  background(0, 10);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p) && frameCount < 100000) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

// function mouseReleased() {
//   noiseSeed(millis());
// }

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}


// const reloadUsingLocationHash = () => {
//   window.location.hash = "reload";
// }
// window.onload = reloadUsingLocationHash();


 // JavaScript anonymous function
 (() => {
  if (window.localStorage) {

      // If there is no item as 'reload'
      // in localstorage then create one &
      // reload the page
      if (!localStorage.getItem('reload')) {
          localStorage['reload'] = true;
          window.location.reload();
      } else {

          // If there exists a 'reload' item
          // then clear the 'reload' item in
          // local storage
          localStorage.removeItem('reload');
      }
  }
})(); // Calling anonymous function here only



