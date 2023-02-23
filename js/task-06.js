const inputText = document.querySelector('input');

let lengthChar = 0;

inputText.addEventListener('input', event => {
  lengthChar = event.target.value.trim().length;
});

inputText.addEventListener('blur', () => {
  if (Number(inputText.dataset.length) === lengthChar) {
    inputText.className = 'valid';
  } else {
    inputText.className = 'invalid';
  }
});
