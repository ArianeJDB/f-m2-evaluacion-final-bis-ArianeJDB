'use strict';

const input = document.querySelectorAll('input');
const inputFour = document.getElementById('four');
const inputSix = document.getElementById('six');
const inputEight = document.getElementById('eight');

const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

if (JSON.parse(localStorage.getItem('Cards')) !== null) {
  if (parseInt(JSON.parse(localStorage.getItem('Cards'))) === 4) {
    inputFour.checked = true;
  } else if (parseInt(JSON.parse(localStorage.getItem('Cards'))) === 6) {
    inputSix.checked = true;
  } else {
    inputEight.checked = true;
  }
} else {
  input.value = '';
}

for (const items of input) {
  const chooseCards = e => {
    const trigger = e.currentTarget;
    const value = trigger.value;
    localStorage.setItem('Cards', JSON.stringify(trigger.value));
console.log(value);
    const startGame = () => {

      const api = `https://raw.githubusercontent.com/Adalab/cards-data/master/${value}.json`;
      fetch(api)
        .then(response => response.json())
        .then(data => {
          list.innerHTML = '';
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const { image } = item;
            const imgUp = document.createElement('img');
            imgUp.setAttribute('src', image);
            const showCards = e => {
              const triggerCards = e.currentTarget;

              if (triggerCards.classList.contains('face-down')) {
                imgUp.classList.remove('hidden');
                triggerCards.classList.remove('face-down');
                triggerCards.classList.add('face-up');
              } else {
                imgUp.classList.add('hidden');
                triggerCards.classList.add('face-down');
                triggerCards.classList.remove('face-up');
              }
            };

            imgUp.setAttribute('class', 'face-up');
            imgUp.setAttribute('class', 'hidden');
            const elementUp = document.createElement('li');
            elementUp.setAttribute('class', 'face-down');
            elementUp.appendChild(imgUp);
            list.appendChild(elementUp);

            elementUp.addEventListener('click', showCards);
          }
        });
    };
    btn.addEventListener('click', startGame);
  };
  items.addEventListener('click', chooseCards);
}
