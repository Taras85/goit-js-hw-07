import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', clickImage);

const generateHtml = (description, original, preview) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};

const generateGallery = galleryItems
  .map(cardGallery => {
    return generateHtml(
      cardGallery.description,
      cardGallery.original,
      cardGallery.preview,
    );
  })
  .join('');

galleryList.insertAdjacentHTML('afterbegin', generateGallery);

function clickImage(event) {}

//
// console.log(generateHtml);

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>;
