function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const butonCreate = document.querySelector('[data-create]');
const butonDestroy = document.querySelector('[data-destroy]');
const inputNuber = document.querySelector('#controls input');
const divBoxes = document.querySelector('#boxes');

let amount = 0;
let dataCreate = [];
let startSize = 30;
let stepSize = 10;

inputNuber.addEventListener('input', event => {
  amount = event.target.value;
});

butonCreate.addEventListener('click', createBoxes);
butonDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  if (amount > 0) {
    for (let i = 1; i <= amount; i += 1) {
      dataCreate.push(
        `<div style= "background: ${getRandomHexColor()}; width:${startSize}px; height:${startSize}px;" ></div>`,
      );
      startSize += stepSize;
    }
  } else {
    return alert('Введіть значення !!!');
  }

  divBoxes.insertAdjacentHTML('beforeend', dataCreate.join(' '));
  dataCreate = [];
  inputNuber.value = '';
  amount = 0;
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
  dataCreate = [];
  startSize = 30;
  stepSize = 10;
  inputNuber.value = '';
  amount = 0;
}
