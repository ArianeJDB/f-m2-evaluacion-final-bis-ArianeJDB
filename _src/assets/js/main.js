'use strict';

const input = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

for (const items of input) {
  const chooseCards = e => {
    const trigger = e.currentTarget;

    const value = trigger.value;
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
            imgUp.setAttribute('class', 'hidden');

            // imgUp.setAttribute('class', 'face-down');
            const elementUp = document.createElement('li');
            elementUp.setAttribute('class', 'face-down');
            elementUp.appendChild(imgUp);
            list.appendChild(elementUp);

            // if (imgUp.classList.contains('face-down')) {
            //   imgUp.classList.remove('hidden', 'face-down');
            //   imgUp.classList.add('face-up');
            // } else {
            //   imgUp.classList.add('hidden', 'face-down');
            //   imgUp.classList.remove('face-up');
            // }
          }

        });
    };
    btn.addEventListener('click', startGame);
  };
  items.addEventListener('click', chooseCards);
}

// const elementDown = document.createElement('li');
//       const imgDown = document.createElement('img');
//       imgDown.setAttribute('class', 'face-down');
//       imgDown.setAttribute(
//         'src',
//         'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB'
//       );
//       elementDown.appendChild(imgDown);
//       list.appendChild(elementDown);
