import iziToast from 'izitoast';

import { fetchPhotos } from './js/pixabay-api';
import { createGalleryCard } from './js/render-functions';
import { renderGallery, clearGallery } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

const formSubmit = async event => {
  event.preventDefault();

  const loader = document.querySelector('.loader-container');
  loader.style.display = 'block';
  
  const searchedQuery = event.currentTarget.elements.query.value.trim();

  if (searchedQuery === '') {
    loader.style.display = 'none';
    iziToast.error({
      message: 'Please complete the form',
      messageColor: '#fafafb',
      icon: 'fas fa-keyboard',
      position: 'topRight',
      backgroundColor: '#ef4040',
      color: '#fafafb',
    });
    return;
  }

  try {
    const data = await fetchPhotos(searchedQuery);

    if (data.totalHits === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fafafb',
        icon: 'far fa-file-image',
        position: 'topRight',
        backgroundColor: '#ef4040',
        color: '#fafafb',
      });
      return;
    }

    clearGallery(); // Очищаем галерею перед рендерингом новых изображений
    renderGallery(data.hits); // Отрисовываем изображения

  } catch (error) {
    iziToast.error({
      message: 'Something went wrong',
      messageColor: '#fafafb',
      icon: 'fas fa-exclamation-triangle',
      position: 'topRight',
      backgroundColor: '#ef4040',
      color: '#fafafb',
    });
  } finally {
    loader.style.display = 'none';
  }

  event.target.reset();
};

form.addEventListener('submit', formSubmit);
