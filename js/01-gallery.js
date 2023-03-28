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
let instance = '';

galleryEl.insertAdjacentHTML("afterbegin", addGalleryItem);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();
    instance =
        basicLightbox.create(`<img src="${event.target.dataset.original}" 
        alt="${event.target.alt}">`, {
            onShow: openModal,
            onClose: closeModal,
        });
    instance.show();    
};

function openModal() {
    galleryEl.addEventListener("keydown", keyEscPressed);
}

function closeModal() {
    galleryEl.removeEventListener("keydown", keyEscPressed);
}

function keyEscPressed(event) {
        if (event.code === "Escape") {
            instance.close();            
        }
    }
