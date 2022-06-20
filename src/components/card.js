import { openPopup } from './modal.js';
import { activeLikesHandler, addLikeHandler, deleteCardHandler, removeLikeHandler } from '../pages/index.js';
import { placeTemplate, placeTemplateImg, placeTemplateTitle, fullViewPopup, fullViewImg, fullViewImgCaption } from './constants.js';

/*___ Create Card */

function createCard(card, userId) {
  placeTemplateImg.src = card.link;
  placeTemplateImg.alt = card.name;
  placeTemplateImg.id = card.id;
  placeTemplateTitle.textContent = card.name;
  const placeElement = placeTemplate.cloneNode(true);

  const likesCounter = placeElement.querySelector('.photo-grid__likes-counter');

  const likeButton = placeElement.querySelector('.photo-grid__like-button');
  likeButton.addEventListener('click', function(evt) {
    if(!evt.target.classList.contains('photo-grid__like-button_is_active')) {
      evt.target.classList.add('photo-grid__like-button_is_active');
      addLikeHandler(card, likesCounter);
    } else {
      evt.target.classList.remove('photo-grid__like-button_is_active');
      removeLikeHandler(card, likesCounter);
    }
  });

  likesCounter.textContent = card.likes.length;

  activeLikesHandler(card, userId, likeButton);

  const ownerId = card.owner._id;
  if(ownerId === userId) {
    const deleteButton = placeElement.querySelector('.photo-grid__delete-button');
    deleteButton.style.display = 'block';
    deleteButton.addEventListener('click', function(evt) {
      evt.target.closest('.photo-grid__item').remove();
      deleteCardHandler(card);
    });
  }

  const placeImg = placeElement.querySelector('.photo-grid__image');
  placeImg.addEventListener('click', function(evt) {
    fullViewImg.src = card.link;
    fullViewImg.alt = card.name;
    fullViewImgCaption.textContent = card.name;

    openPopup(fullViewPopup);
  });

  return placeElement;
}

/*___ Render Card */

function renderNewCard(card, container) {
  container.prepend(card);
}

function renderCard(card, container) {
  container.append(card);
}

export { createCard, renderNewCard, renderCard };
