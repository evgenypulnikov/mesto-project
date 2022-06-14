import { openPopup } from './modal.js';
import { deleteCard, addLike, removeLike } from './api.js';
import { placesContainer, fullViewPopup, fullViewImg, fullViewImgCaption } from './vars.js';



/*___ Create Card */

function createCard(link, name, owner, id, likes) {
  const placeTemplate = document.querySelector('#grid-post').content;
  const placeTemplateImg = placeTemplate.querySelector('.photo-grid__image');
  const placeTemplateTitle = placeTemplate.querySelector('.photo-grid__item-title');

  placeTemplateImg.src = link;
  placeTemplateImg.alt = name;
  placeTemplateImg.id = id;
  placeTemplateTitle.textContent = name;

  const placeElement = placeTemplate.cloneNode(true);

  const likesCounter = placeElement.querySelector('.photo-grid__likes-counter');

  const likeButton = placeElement.querySelector('.photo-grid__like-button');
  likeButton.addEventListener('click', function(evt) {
    if(!evt.target.classList.contains('photo-grid__like-button_is_active')) {
      evt.target.classList.add('photo-grid__like-button_is_active');
      addLike(id, likesCounter);
    } else {
      evt.target.classList.remove('photo-grid__like-button_is_active');
      removeLike(id, likesCounter);
    }
  });

  likesCounter.textContent = likes;

  const ownerId = owner;
  if(ownerId === '34f8cd9478826799e75475a9') {
    const deleteButton = placeElement.querySelector('.photo-grid__delete-button');
    deleteButton.style.display = 'block';
    deleteButton.addEventListener('click', function(evt) {
      openPopup(deleteConfirmPopup);
    });
  }

  const placeImg = placeElement.querySelector('.photo-grid__image');
  placeImg.addEventListener('click', function(evt) {
    fullViewImg.src = link;
    fullViewImg.alt = name;
    fullViewImgCaption.textContent = name;

    openPopup(fullViewPopup);
  });

  return placeElement;
}

/*___ Render Card */

function renderCard(card, container) {
  container.append(card);
}

/*___ Render All Cards */

function renderAllCards(cardsJSON) {
  cardsJSON.forEach(function(res) {
    const card = createCard(res.link, res.name, res.owner._id, res._id, res.likes.length);
    renderCard(card, placesContainer);
  });
}

export { createCard, renderCard, renderAllCards };
