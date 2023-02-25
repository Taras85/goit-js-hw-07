import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

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

// ***//***// */

const instance = basicLightbox.create(
  `
<img  src="">`,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: instance => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  },
);

function clickImage(event) {
  event.preventDefault();
  const datasetSource = event.target.dataset.source;
  const imgAlt = event.target.alt;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.element().querySelector('img').alt = imgAlt;
  instance.show();
}

function onEscKeyPress(event) {
  if (event.code !== 'Escape') return;
  instance.close();
}

// width="800" height="auto"
