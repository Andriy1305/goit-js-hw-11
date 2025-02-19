import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { fetchPhotos } from './js/pixabay-api';
import { createGalleryCard } from './js/render-functions';
const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const formSubbmit = event => {
  const loader = document.querySelector('.loader-container');
  loader.style.display = 'block';
  gallery.innerHTML = '';
  event.preventDefault();
  const searchedQuery = event.currentTarget.elements.query.value.trim();
  if (searchedQuery === '') {
    loader.style.display = 'none';
    iziToast.error({
      title: '',
      message: 'Please complete the form',
      messageColor: '#fafafb',
      icon: 'fas fa-keyboard',
      iconColor: '#fafafb',
      position: 'topRight',
      backgroundColor: '#ef4040',
      color: '#fafafb',
    });
    return;
  }
  fetchPhotos(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          icon: 'far fa-file-image',
          iconColor: '#fafafb',
          position: 'topRight',
          backgroundColor: '#ef4040',
          color: '#fafafb',
        });
      }
      const galleryTemplate = data.hits
        .map(el => createGalleryCard(el))
        .join('');
      gallery.innerHTML = galleryTemplate;

      const modal = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captions: true,
        captionDelay: 250,
      });
      modal.refresh();
    })
    .catch(err =>
      iziToast.error({
        message: 'Something wrong',
        messageColor: '#fafafb',
        icon: 'fas fa-exclamation-triangle',
        iconColor: '#fafafb',
        position: 'topRight',
        backgroundColor: '#ef4040',
        color: '#fafafb',
      })
    )
    .finally(() => {
      loader.style.display = 'none';
    });

  event.target.reset();
};

form.addEventListener('submit', formSubbmit);