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
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elems = event.currentTarget.elements;
  // console.log('elems', elems);

  let delayValue = Number(elems.delay.value);
  const stepValue = Number(elems.step.value);
  let amountValue = Number(elems.amount.value);

  for (let position = 1; position <= amountValue; position +=1) {
    if (position !== 1) {
      delayValue += stepValue;
    }
    createPromise(position, delayValue)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      );
  }
}


