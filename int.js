const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

const bgOptions = document.getElementsByName("bg");
const sliderX = document.getElementById("sliderX");
const sliderY = document.getElementById("sliderY");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

const batmanImg = new Image();
batmanImg.src = "images/batman.png";

const items = [
  new Image(),
  new Image(),
  new Image()
];
items[0].src = "images/baterang.png";
items[1].src = "images/batcar.png";
items[2].src = "images/Bat-Signal-PNG-Picture.png";

const backgrounds = {
  "gotham1.jpg": new Image(),
  "gotham2.jpg": new Image(),
  "wayne_tower.jpg": new Image()
};
backgrounds["gotham1.jpg"].src = "images/gotham1.png";
backgrounds["gotham2.jpg"].src = "images/gotham2.jpg";
backgrounds["wayne_tower.jpg"].src = "images/tower.png";

const sounds = [
  new Audio("sounds/Batman Transition Sound-Effect.mp3"),
  new Audio("sounds/Gun Grappling Sound Effect.mp3"),
  new Audio("sounds/Batmobile starting up.mp3")
];

function getSelectedBackground() {
  for (const bg of bgOptions) {
    if (bg.checked) return bg.value;
  }
  return "gotham1.jpg";
}

function drawScene() {
  const bg = backgrounds[getSelectedBackground()];
  const x = parseInt(sliderX.value);
  const y = parseInt(sliderY.value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (bg.complete) ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.beginPath();
  ctx.ellipse(x + 50, y + 90, 40, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  if (batmanImg.complete) ctx.drawImage(batmanImg, x, y, 100, 100);

  if (item1.checked && items[0].complete) ctx.drawImage(items[0], 80, 90, 50, 50);
  if (item2.checked && items[1].complete) ctx.drawImage(items[1], 400, 300, 140, 70);
  if (item3.checked && items[2].complete) ctx.drawImage(items[2], 440, 20, 100, 100);
}

function playSound(index) {
  sounds[index].currentTime = 0;
  sounds[index].play();
}

setInterval(drawScene, 50);
