function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const butonChangeColor = document.querySelector('.change-color');
const bodyChangeColor = document.querySelector('body');
const changedColor = document.querySelector('.color');

butonChangeColor.addEventListener('click', () => {
  changedColor.textContent = getRandomHexColor();
  bodyChangeColor.style.backgroundColor = changedColor.textContent;

  console.log(bodyChangeColor.style.background);
});
