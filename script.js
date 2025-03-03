// Select the canvas and get the 2D drawing context
const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

// Load and draw the background image
const background = new Image();
background.src = "images/background.jpg"; // Ensure this path is correct
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawForeground(); // Call function after background is drawn
};

// Load and draw foreground images
function drawForeground() {
    const foreground1 = new Image();
    foreground1.src = "images/foreground1.png";
    foreground1.onload = function () {
        ctx.drawImage(foreground1, 100, 300, 150, 150);
    };

    const foreground2 = new Image();
    foreground2.src = "images/foreground2.png";
    foreground2.onload = function () {
        ctx.drawImage(foreground2, 500, 250, 200, 200);
    };

    drawText(); // Draw text after images load
}

// Add text to the canvas
function drawText() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Your Name - My Scenic View", 50, 50);
}
