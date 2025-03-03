
const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "images/forest.jpg";
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawForeground();
};

function drawForeground() {
    const foreground1 = new Image();
    foreground1.src = "images/city.png";
    foreground1.onload = function () {
        ctx.drawImage(foreground1, 100, 300, 150, 150);
    };

    const foreground2 = new Image();
    foreground2.src = "images/castle.png";
    foreground2.onload = function () {
        ctx.drawImage(foreground2, 500, 250, 200, 200);
    };

    drawText();
}

function drawText() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Your Name - My Scenic View", 50, 50);
}
