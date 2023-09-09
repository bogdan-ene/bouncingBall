// This variable stores the ball element
let ball = document.getElementById('ball');

// This variable stores the start button
let startButton = document.getElementById('start-button');

// Function to start the bouncing animation
function startBouncing() {
  // Random initial direction (up, down, left, right)
  let randomDirection = Math.floor(Math.random() * 4);
  let transformValue = 'translate(-50%, -50%)';

  switch (randomDirection) {
    case 0:
      transformValue += ' translateY(-100vh)';
      break;
    case 1:
      transformValue += ' translateY(100vh)';
      break;
    case 2:
      transformValue += ' translateX(-100vw)';
      break;
    case 3:
      transformValue += ' translateX(100vw)';
      break;
  }

  // Apply the initial transform
  ball.style.transform = transformValue;

  // After a short delay, return the ball to the center
  setTimeout(() => {
    ball.style.transform = 'translate(-50%, -50%)';
  }, 500);
}

// Add click event listener to start the bouncing animation
startButton.addEventListener('click', startBouncing);
