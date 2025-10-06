const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('scoreDisplay');

// Canvas size
canvas.width = 800;
canvas.height = window.innerHeight;

// Basket image
const basketImage = new Image();
basketImage.src = 'basket.png';

// Basket settings
const basketWidth = 100;
const basketHeight = 100;
let basketX = (canvas.width - basketWidth) / 2;
const basketY = canvas.height - basketHeight - 10; // Position the basket near the bottom

// object image
const objectImage = new Image();
objectImage.src = 'apple.png';


// Falling object settings
const objectWidth = 50;
const objectHeight = 50;
let objectX = Math.random() * (canvas.width - objectWidth);
let objectY = 0 - objectHeight;
let objectSpeed = 5;

// Score
let score = 0;
let gameOver = false;

// Controls
let left = false;
let right = false;

// Event listeners for controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') left = true;
    if (e.key === 'ArrowRight') right = true;
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') left = false;
    if (e.key === 'ArrowRight') right = false;
});

// Update game objects
function update() {
	if (gameOver) return; // Skip updating if the game is over
	 
    // Move basket
    if (left && basketX > 0) basketX -= 5;
    if (right && basketX < canvas.width - basketWidth) basketX += 5;

    // Move falling object
    objectY += objectSpeed;

    // Check if the object is caught
    if (
        objectY + objectHeight > basketY &&
        objectX + objectWidth > basketX &&
        objectX < basketX + basketWidth
    ) {
        score++;
		scoreDisplay.textContent = 'Score: ' + score; // Update score display
        objectY = 0 - objectHeight; // Reset falling object position
        objectX = Math.random() * (canvas.width - objectWidth); // Randomize X position
    }

    // Reset object if it falls below the canvas
    if (objectY > canvas.height) {
       gameOver = true;
    }
}

// Draw everything on the canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    
	if (gameOver) {
        // Display "Game Over" message
        ctx.fillStyle = 'black';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
        ctx.font = '20px Arial';
        ctx.fillText('Final Score: ' + score, canvas.width / 2, canvas.height / 2 + 40);
        return; // Stop drawing if game is over
    }
	
    // Draw falling object
    
    ctx.drawImage(objectImage, objectX, objectY, objectWidth, objectHeight); // Use apple image here

    // Draw basket image at the basket's position
    ctx.drawImage(basketImage, basketX, basketY, basketWidth, basketHeight);

}

// Main game loop
function gameLoop() {
    update();
    draw();
    if (!gameOver) {
        requestAnimationFrame(gameLoop); // Continue the loop if game isn't over
    }
}

// Start the game only after the basket image has loaded
basketImage.onload = () => {
    gameLoop();
};
