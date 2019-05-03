'use strict';

const input = document.querySelectorAll('input');

const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

for (const items of input) {
  //const startGame = () => {
  const elementDown = document.createElement('li');
  const imgDown = document.createElement('img');
  imgDown.setAttribute('class', 'face-down');
  imgDown.setAttribute(
    'src',
    'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB'
  );
  elementDown.appendChild(imgDown);
  list.appendChild(elementDown);
  //};
  const chooseCards = e => {
    const trigger = e.currentTarget;

    const value = trigger.value;
    const startGame = () => {
      const elementDown = document.createElement('li');
      const imgDown = document.createElement('img');
      imgDown.setAttribute('class', 'face-down');
      imgDown.setAttribute(
        'src',
        'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB'
      );
      elementDown.appendChild(imgDown);
      list.appendChild(elementDown);
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
            imgUp.setAttribute('class', 'face-up');
            const elementUp = document.createElement('li');
            elementUp.appendChild(imgUp);
            list.appendChild(elementUp);
          }
        });
    };
    btn.addEventListener('click', startGame);
  };
  items.addEventListener('click', chooseCards);
}
