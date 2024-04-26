function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Assign a random style to each heart
  const styleNumber = Math.ceil(Math.random() * 3); // Assuming you have 3 styles
  heart.classList.add('heart-style-' + styleNumber);

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * (5 - 3) + 3 + 's'; // Duration between 3 and 5 seconds
  heart.style.animationDelay = '-' + Math.random() * 5 + 's';

  // Randomize the size from 0.5 to 1.5 times the original size
  const scale = Math.random() + 0.5;
  heart.style.transform = 'scale(' + scale + ')';
  heart.style.width = scale * 150 + 'px'; // Assuming the original size is 30px
  heart.style.height = scale * 180 + 'px';

  document.getElementById('hearts-container').appendChild(heart);

  // Remove the heart after it finishes animating to prevent a memory leak
  heart.addEventListener('animationend', function() {
    heart.parentElement.removeChild(heart);
  });
}

// Start creating hearts at a rate that increases over time
let creationRate = 1000; // Start with one heart every 1000 milliseconds
let creationRateDecreaseInterval = 90; // Decrease rate by 100 milliseconds every time a heart is created

function createHeartWithInterval() {
  createHeart();
  if (creationRate > 100) { // Ensure there's a minimum interval to prevent freezing
    creationRate -= creationRateDecreaseInterval;
  }
  setTimeout(createHeartWithInterval, creationRate);
}

createHeartWithInterval();
