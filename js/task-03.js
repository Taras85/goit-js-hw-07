const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector('.gallery');
// const galleryItems = document.querySelector('li');

// console.log(galleryItems);

galleryList.style.display = 'grid';
galleryList.style.gap = '20px';
galleryList.style.alignItems = 'center';
galleryList.style.gridTemplateColumns = 'repeat(3, 30vw)';
galleryList.style.gridTemplateRows = 'repeat(3, 400px)';

// galleryItems.style.listStyle = 'none';

const generateGallery = (urlEl, altEL) => {
  return `
  <li style=list-style:none> 
    <img width= 100% src='${urlEl}' alt='${altEL}'>
  </li>`;
};

const galleryHTML = images
  .map(cardGallery => {
    // console.log(cardGallery);
    return generateGallery(cardGallery.url, cardGallery.alt);
  })
  .join('');

// console.log(galleryHTML);

galleryList.insertAdjacentHTML('afterbegin', galleryHTML);
