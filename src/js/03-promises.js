import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const elems = evt.currentTarget.elements;

  let delayVal = Number(elems.delay.value);
  const stepVal = Number(elems.step.value);
  let amountVal = Number(elems.amount.value);

  for (let position = 1; position <= amountVal; position++) {
    if (position !== 1) {
      delayVal += stepVal;
    }
    createPromise(position, delayVal)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
  }
}

formEl.addEventListener('submit', onFormSubmit);
