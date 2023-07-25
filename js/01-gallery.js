import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems.map(({preview, description, original}) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`).join("");

list.insertAdjacentHTML('beforeend', markup);
list.addEventListener('click', onImgClick);

const instance = basicLightbox.create(
  `<img width="auto" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onImgClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}
function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  if(e.target.nodeName !== "IMG") return
  instance.close();
}
console.log(galleryItems);


