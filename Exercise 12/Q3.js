const canvas = document.getElementById("clockCanvas");
const ctx = canvas.getContext("2d");
const radius = canvas.width / 2;
ctx.translate(radius, radius);

function drawClock() {
  drawFace();
  drawNumbers();
  drawTime();
}

function drawFace() {
  ctx.beginPath();
  ctx.arc(0, 0, radius - 5, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
}

function drawNumbers() {
  ctx.font = "24px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (let num = 1; num <= 12; num++) {
    let angle = num * Math.PI / 6;
    let x = Math.cos(angle - Math.PI / 2) * (radius - 35);
    let y = Math.sin(angle - Math.PI / 2) * (radius - 35);
    ctx.fillText(num, x, y);
  }
}

function drawTime() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour = hour % 12;
  hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60));
  drawHand(hour, radius * 0.5, 8);

  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(minute, radius * 0.75, 6);

  second = (second * Math.PI / 30);
  drawHand(second, radius * 0.9, 2, "#e00");
}

function drawHand(pos, length, width, color = "#000") {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

setInterval(() => {
  ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
  drawClock();
}, 1000);
