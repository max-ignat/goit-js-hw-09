import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');

const refs = {
  inputEl: document.querySelector('[datetime-picker]'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;
let intervalId = null;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  minDate: Date.now(),
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userDate = selectedDates[0];
    checkValidDate(selectedDates);
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function checkValidDate(date) {
  if (date[0].getTime() <= Date.now()) {
    refs.startBtn.disabled = true;
    // return window.alert('Please choose a date in the future');
  }
  refs.startBtn.disabled = false;
}


refs.startBtn.addEventListener('click', onStartClick);


function onStartClick() {
  isActive: false,
    refs.startBtn.disabled = true;
    intervalId = null;
  const timer = {
    start() {
      if (this.isActive) {
        return;
      }
      this.isActive = true;

      this.intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = userDate - currentTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    updateTimer({ days, hours, minutes, seconds });
      }, 1000);
    },
  };
    timer.start();
    Notify.success('✅ timer has been started');
}

function updateTimer({ days, hours, minutes, seconds }) {
  if (!(days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0)) {
    return;
  }
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}
