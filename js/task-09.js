function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const butonChangeColor = document.querySelector('.change-color');
const bodyChangeColor = document.querySelector('body');
const changedColor = document.querySelector('.color');

butonChangeColor.addEventListener('click', () => {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  changedColor.textContent = `-${bodyChangeColor.style.backgroundColor}`;

  console.log(bodyChangeColor.style.backgroundColor);
});
