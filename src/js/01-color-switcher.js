const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', startChange);
refs.stopBtn.addEventListener('click', stopChange);
refs.stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function startChange(event) {
  timerId = setInterval(changeBodyColor, 1000);
  refs.stopBtn.disabled = false;
  refs.startBtn.disabled = true;

  console.log('started');
}

function stopChange(event) {
  clearInterval(timerId);
  timerId = 0;
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  console.log('stopped');
}
