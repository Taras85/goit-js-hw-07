const inputText = document.querySelector('input');
// console.log(inputText);

let lengthChar = 0;

inputText.addEventListener('focus', () => {
  inputText.addEventListener('input', event => {
    lengthChar = event.currentTarget.value.length;
  });
});

inputText.addEventListener('blur', () => {
  console.log(lengthChar);
  console.log(inputText.dataset.length);

  if (inputText.dataset.length === lengthChar) {
    inputText.className = 'valid';
  } else {
    inputText.className = 'invalid';
  }
});
