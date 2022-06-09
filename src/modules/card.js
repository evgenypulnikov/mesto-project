import { openPopup } from './modal.js';
import { placesContainer, initPlaces, fullViewPopup, fullViewImg, fullViewImgCaption } from './vars.js';



/*___ Create Card */

function createCard(link, name) {
  const placeTemplate = document.querySelector('#grid-post').content;
  const placeTemplateImg = placeTemplate.querySelector('.photo-grid__image');
  const placeTemplateTitle = placeTemplate.querySelector('.photo-grid__item-title');

  placeTemplateImg.src = link;
  placeTemplateImg.alt = name;
  placeTemplateTitle.textContent = name;

  const placeElement = placeTemplate.cloneNode(true);

  const likeButton = placeElement.querySelector('.photo-grid__like-button');
  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('photo-grid__like-button_is_active');
  });

  const deleteButton = placeElement.querySelector('.photo-grid__delete-button');
  deleteButton.addEventListener('click', function(evt) {
    evt.target.closest('.photo-grid__item').remove();
  });

  const placeImg = placeElement.querySelector('.photo-grid__image');
  placeImg.addEventListener('click', function() {
    fullViewImg.src = link;
    fullViewImg.alt = name;
    fullViewImgCaption.textContent = name;
    openPopup(fullViewPopup);
  });

  return placeElement;
}

/*___ Render Card */

function renderCard(card, container) {
  container.prepend(card);
}

/*___ Render All Cards */

function renderAllCards() {
  initPlaces.forEach(function(initPlaces) {
    const card = createCard(initPlaces.link, initPlaces.name);
    renderCard(card, placesContainer);
  });
}

export { createCard, renderCard, renderAllCards };


