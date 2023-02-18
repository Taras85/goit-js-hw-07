let counterValue = 0;
const butonDecrement = document.querySelector('[data-action="decrement"]');
const butonIncrement = document.querySelector('[data-action="increment"]');
const valueResult = document.querySelector('#value');

butonDecrement.addEventListener('click', () => {
  counterValue -= 1;
  valueResult.textContent = `${counterValue}`;
});
butonIncrement.addEventListener('click', () => {
  counterValue += 1;
  valueResult.textContent = `${counterValue}`;
});
