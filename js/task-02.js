const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
console.log(listIngredients);

const elementList = ingredients.forEach(function (value) {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = value;
  listIngredients.appendChild(list);
});
