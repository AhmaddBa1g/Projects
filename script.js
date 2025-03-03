// Get the canvas and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Load and draw background image
const background = new Image();
background.src = 'images/forest.jpg';  // Ensure this path is correct
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawForeground(); // Draw foreground images after the background
};

// Load and draw foreground images
const foreground1 = new Image();
foreground1.src = 'images/city.png'; // Ensure this path is correct

const foreground2 = new Image();
foreground2.src = 'images/castle.png'; // Ensure this path is correct

function drawForeground() {
    foreground1.onload = function () {
        ctx.drawImage(foreground1, 100, 300, 200, 150); // Adjust position and size
    };

    foreground2.onload = function () {
        ctx.drawImage(foreground2, 500, 250, 200, 150); // Adjust position and size
    };

    drawText(); // Draw text after images
}

// Draw text on the canvas
function drawText() {
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Your Name', 50, 50);
    ctx.fillText('Scene Title', 50, 80);
}
