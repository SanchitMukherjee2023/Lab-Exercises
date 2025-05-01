const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

let boatAngle = 0;

function drawBoat(yOffset) {
  ctx.beginPath();
  ctx.moveTo(370, 300 + yOffset);
  ctx.lineTo(400, 320 + yOffset);
  ctx.lineTo(430, 300 + yOffset);
  ctx.closePath();
  ctx.fillStyle = "brown";
  ctx.fill();
}

function animateScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStaticScene();
  let yOffset = Math.sin(boatAngle) * 5;
  drawBoat(yOffset);
  boatAngle += 0.05;
  requestAnimationFrame(animateScene);
}

function drawStaticScene() {
  ctx.fillStyle = "orange";
  ctx.fillRect(100, 250, 100, 100);
  ctx.beginPath();
  ctx.moveTo(100, 250);
  ctx.lineTo(150, 200);
  ctx.lineTo(200, 250);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.fillStyle = "brown";
  ctx.fillRect(145, 280, 20, 70);
  ctx.fillStyle = "blue";
  ctx.fillRect(110, 270, 25, 25);

  ctx.beginPath();
  ctx.ellipse(400, 300, 150, 80, 0, 0, Math.PI * 2);
  ctx.fillStyle = "lightblue";
  ctx.fill();
  ctx.strokeStyle = "blue";
  ctx.stroke();

  [[120, 380, 15], [140, 390, 10], [160, 375, 20], [600, 400, 15], [620, 410, 10]].forEach(([x, y, r]) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.stroke();
  });

  ctx.beginPath();
  ctx.arc(700, 100, 40, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  for (let i = 0; i < 12; i++) {
    let angle = (i * Math.PI) / 6;
    let x1 = 700 + Math.cos(angle) * 50;
    let y1 = 100 + Math.sin(angle) * 50;
    let x2 = 700 + Math.cos(angle) * 65;
    let y2 = 100 + Math.sin(angle) * 65;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "yellow";
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(550, 360, 25, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(575, 345, 15, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(580, 340, 4, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(590, 345);
  ctx.lineTo(600, 350);
  ctx.lineTo(590, 355);
  ctx.closePath();
  ctx.fillStyle = "orange";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(680, 350);
  ctx.lineTo(680, 400);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(665, 370);
  ctx.quadraticCurveTo(660, 360, 670, 350);
  ctx.quadraticCurveTo(660, 360, 665, 370);
  ctx.fillStyle = "darkgreen";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(695, 370);
  ctx.quadraticCurveTo(700, 360, 690, 350);
  ctx.quadraticCurveTo(700, 360, 695, 370);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(680, 330, 30, 40, 0, 0, Math.PI * 2);
  ctx.fillStyle = "pink";
  ctx.fill();
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(680, 330, 8, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

animateScene();
