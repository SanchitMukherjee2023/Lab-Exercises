let timer;
let seconds = 0;
let isRunning = false;

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

document.getElementById('startBtn').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      document.getElementById('stopwatch').innerText = formatTime(seconds);
    }, 1000);
  }
});

document.getElementById('stopBtn').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  document.getElementById('stopwatch').innerText = '00:00:00';
});

document.getElementById('dobInput').addEventListener('mouseover', () => {
  const dobValue = document.getElementById('dobInput').value;
  if (dobValue) {
    const dob = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    document.getElementById('ageDisplay').innerText = `You are ${age} years old.`;
  }
});

const textarea = document.getElementById('textArea');
const charCounter = document.getElementById('charCount');

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  charCounter.innerText = `Characters: ${length}`;
});
