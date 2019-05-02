'use strict';

const input = document.querySelectorAll('input');

const btn = document.querySelector('.btn');
const faceUp = document.querySelector('.face__side');
const faceDown = document.querySelector('.back__side');

fetch('https://raw.githubusercontent.com/Adalab/cards-data/master/4.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      const { image } = item;

      const img = document.createElement('img');
      img.setAttribute('src', image);
      console.log(img);

      const li = document.createElement('li');
      li.appendChild(img);
      faceUp.appendChild(li);
    }
  });

for (const items of input) {
  const chooseCards = e => {
    const trigger = e.currentTarget;

    const value = trigger.value;

  };
  items.addEventListener('click', chooseCards);
}

const api = `https://raw.githubusercontent.com/Adalab/cards-data/master/${value}.json`;
fetch(api)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const { image } = item;
      const img = document.createElement('img');
      img.setAttribute('src', image);
      faceUp.appendChild.img;
    }
  });
