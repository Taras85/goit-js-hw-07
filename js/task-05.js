const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  if (event.target.value.trim() !== '') {
    outputName.textContent = event.target.value.trim();
  } else {
    outputName.textContent = 'Anonymous';
    console.log(outputName.textContent);
  }
});
