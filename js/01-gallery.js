import { galleryItems } from './gallery-items.js';


function createGalleryItem(items) {
    return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
                class="gallery__image"
                src="${preview}"
                data-original="${original}"
                alt="${description}">
        </a>
        </li>`;
    }).join("");
}

const galleryEl = document.querySelector(".gallery");
const addGalleryItem = createGalleryItem(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", addGalleryItem);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();
    const instance =
    basicLightbox.create(`<img src="${event.target.dataset.original}" 
    alt="${event.target.alt}">`);
    instance.show();
    galleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
        instance.close();
    }
    });
}