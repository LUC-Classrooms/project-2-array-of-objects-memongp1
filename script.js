/*
 Project 2 - Array of Objects
 Name: patrick memong
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
let ufos = []; // Array to hold UFO objects

function setup(){
  // This function runs once
  createCanvas(600, 400); // Create a 600 x 400 pixel drawing canvas
  
  // Part A - Individual Object Instances (Constructor Testing)
  // Create two individual UFO objects
  let obj1 = new UFO(100, 200);
  let obj2 = new UFO(300, 100);

  // Part B - Array of Objects Initialization
  // Initialize the array with 10 UFO objects
  for(let i = 0; i < 10; i++) {
    ufos.push(new UFO(random(width), random(height)));
  }
}

function draw(){
  background(200); // Light gray background
  
  // Part A - Individual Object Instances (Constructor Testing)
  // Move and display obj1
  obj1.move();
  obj1.display();

  // Move and display obj2
  obj2.move();
  obj2.display();

  // Part B - Array of Objects Movement and Display
  // Move and display each UFO in the array
  for(let i = 0; i < ufos.length; i++) {
    ufos[i].move();
    ufos[i].display();
  }
}

// UFO Constructor function
function UFO(tempX, tempY){ 
  // Properties
  this.x = tempX;
  this.y = tempY;
  this.d = 50; // Diameter
  this.speedX = random(-1, 1); // Speed in x direction
  this.speedY = random(-1, 1); // Speed in y direction

  // Methods
  this.move = function() {
    // Move the UFO
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Boundary conditions - bounce off the canvas edges
    if (this.x > width || this.x < 0){
      this.speedX *= -1;
    }
    if (this.y > height || this.y < 0){
      this.speedY *= -1;
    }
  }
  
  this.display = function() {
    // Display the UFO
    push();
    translate(this.x, this.y);
    fill(255, 0, 0); // Red color
    ellipse(0, 0, this.d, this.d); // Draw a circle at the center of the UFO
    pop();
  }
}