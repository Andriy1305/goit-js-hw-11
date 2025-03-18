import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
let lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

export const createGalleryCard = (imgInfo) => {
  return `<li class="gallery-item">
    <a href="${imgInfo.largeImageURL}" class="gallery-link">
      <img src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" width="360" class="gallery-img" loading="lazy"/>
    </a>
    <ul class="gallery-info-list">
      <li><h3>Likes</h3><p>${imgInfo.likes}</p></li>
      <li><h3>Views</h3><p>${imgInfo.views}</p></li>
      <li><h3>Comments</h3><p>${imgInfo.comments}</p></li>
      <li><h3>Downloads</h3><p>${imgInfo.downloads}</p></li>
    </ul>
  </li>`;
};

// Функция рендеринга карточек
export const renderGallery = (images) => {
  const markup = images.map(createGalleryCard).join("");
  galleryContainer.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh(); // Обновление SimpleLightbox
};

// Функция очистки галереи
export const clearGallery = () => {
  galleryContainer.innerHTML = "";
};
