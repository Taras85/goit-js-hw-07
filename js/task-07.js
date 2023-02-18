const fontSizeControl = document.querySelector('#font-size-control');
const fontSizeText = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  console.log(fontSizeControl.value);

  fontSizeText.style.fontSize = `${fontSizeControl.value}px`;
});
