const elementCategories = document.querySelector('#categories');

console.log(`Number of categories: ${elementCategories.children.length}`);

const elementTopic = elementCategories.querySelectorAll('h2');

const elements = elementCategories.querySelectorAll('.item ul');

const Topics = elementTopic.forEach(function (topic, index) {
  console.log(`Category: ${topic.textContent}`);
  console.log(`Elements: ${elements[index].children.length}`);
});
