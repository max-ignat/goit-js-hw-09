import '../css/common.css';

const body = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function startChange(event) {
  timerId = setInterval(changeBodyColor, 1000);

  console.log('started');
}

function stopChange(event) {
  clearInterval(timerId);
  timerId = 0;
  console.log('stopped');
}

startBtn.addEventListener('click', startChange, { once: true });
stopBtn.addEventListener('click', stopChange);
