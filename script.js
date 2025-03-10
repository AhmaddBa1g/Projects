const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const background = new Image();
background.src = 'images/forest.jpg';
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawForeground(); 
};

const foreground1 = new Image();
foreground1.src = 'images/city.jpg';

const foreground2 = new Image();
foreground2.src = 'images/castle.jpg';

function drawForeground() {
    foreground1.onload = function () {
        ctx.drawImage(foreground1, 100, 300, 200, 150);
    };

    foreground2.onload = function () {
        ctx.drawImage(foreground2, 500, 250, 200, 150);
    };

    drawText();
}

function drawText() {
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Ahmad Baig', 50, 50);
    ctx.fillText('Forest, City, Castle', 50, 80);
}
