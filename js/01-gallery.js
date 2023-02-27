import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const generateHtml = ({ description, original, preview }) => {
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
const generateGallery = galleryItems.map(generateHtml).join('');

galleryList.insertAdjacentHTML('afterbegin', generateGallery);

// ***//***// */

galleryList.addEventListener('click', clickImage);

const instance = basicLightbox.create(`<img  >`, {
  onShow: instance => {
    window.addEventListener('keydown', clickEscKeyPress);
  },
  onClose: instance => {
    window.removeEventListener('keydown', clickEscKeyPress);
  },
});

function clickImage(event) {
  event.preventDefault();
  if (!event.target.dataset.source) return;
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.element().querySelector('img').alt = event.target.alt;
  instance.show();
}

function clickEscKeyPress(event) {
  if (event.code !== 'Escape') return;
  instance.close();
}
