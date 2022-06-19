import { openPopup } from './modal.js';
import { getUserId, getCards, deleteCard, addLike, removeLike, getActiveLikes } from './api.js';
import { placeTemplate, placeTemplateImg, placeTemplateTitle, placesContainer, fullViewPopup, fullViewImg, fullViewImgCaption } from './constants.js';

let userId;

getUserId()
  .then((res) => {
    userId = res._id;
  })
  .catch((err) => {
    console.log(err);
  });

/*___ Create Card */

function createCard(card) {
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
      addLike(card._id)
        .then((res) => {
          likesCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      evt.target.classList.remove('photo-grid__like-button_is_active');
      removeLike(card._id)
        .then((res) => {
          likesCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  likesCounter.textContent = card.likes.length;

  getActiveLikes()
    .then((res) => {
      card.likes.forEach((like) => {
        if(like._id === userId) {
          likeButton.classList.add('photo-grid__like-button_is_active');
        }
      })
    })
    .catch((err) => {
      console.log(err);
    });


  const ownerId = card.owner._id;
  if(ownerId === userId) {
    const deleteButton = placeElement.querySelector('.photo-grid__delete-button');
    deleteButton.style.display = 'block';
    deleteButton.addEventListener('click', function(evt) {
      evt.target.closest('.photo-grid__item').remove();
      deleteCard(card._id)
        .catch((err) => {
          console.log(err);
        });;
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

function renderCardOnSubmit(res) {
  const card = createCard(res);
  renderNewCard(card, placesContainer);
}

/*___ Render All Cards */

function renderAllCards() {
  getCards()
  .then((res) => {
    res.forEach((card) => {
      const newCard = createCard(card);
      renderCard(newCard, placesContainer);
    })
  })
  .catch((err) => {
    console.log(err);
  });
}

export { createCard, renderNewCard, renderCard, renderCardOnSubmit, renderAllCards };
