/*Name: Maitri Makwana
File: assignment4_part3
Date: 16th July, 2024
Description: This is the javascript for bouncing balls */

// Select the canvas element
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Setting the canvas height and width
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Function to generate a random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random background colour
function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// Shape class to serve as a base for Ball
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // Method to draw the ball on the canvas
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Updating the ball's position for collision
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -this.velX;
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -this.velX;
    }

    if ((this.y + this.size) >= height) {
      this.velY = -this.velY;
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  // Method to detect collisions between balls and change colors on collision
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// Array to hold all the balls
const balls = [];

// Create 25 balls with random properties
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball); // Add the ball to the balls array
}

// Main loop for animation
function loop() {
  ctx.fillStyle = "rgb(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  // Draw, update, and check collisions for each ball
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

// Start animation loop
loop();
