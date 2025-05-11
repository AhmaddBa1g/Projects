
let canvas = document.getElementById('spaceCanvas');
let ctx = canvas.getContext('2d');
let menu = document.getElementById('menu');
let data = [];

fetch('data.json')
  .then(res => res.json())
  .then(json => {
    data = json.space;
    data.forEach((item, index) => {
      let btn = document.createElement('button');
      btn.textContent = item.title;
      btn.onclick = () => showItem(index);
      menu.appendChild(btn);
    });
  });

function showItem(index) {
  let item = data[index];
  let img = new Image();
  img.src = item.image;
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 200, 50, 200, 200);
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(item.title, 20, 30);
    wrapText(ctx, item.description, 20, 270, 560, 20);
  };
  let audio = new Audio(item.audio);
  audio.play();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let words = text.split(' ');
  let line = '';
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}
