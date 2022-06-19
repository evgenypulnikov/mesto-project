import { openPopup } from './modal.js';
import { getUserId, getCards, deleteCard, addLike, removeLike, getActiveLikes } from './api.js';
import { placeTemplate, placeTemplateImg, placeTemplateTitle, placesContainer, fullViewPopup, fullViewImg, fullViewImgCaption } from './constants.js';

getUserId()
  .then((res) => {
    let user = res._id;
  })
  .catch((err) => {
    console.log(err);
  });

/*___ Create Card */

function createCard(link, name, owner, id, likes, likesArr) {
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
      // addLike(id)
      //   .then((res) => {
      //     likesCounter.textContent = res.likes.length;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } else {
      evt.target.classList.remove('photo-grid__like-button_is_active');
      // removeLike(id)
      //   .then((res) => {
      //     likesCounter.textContent = res.likes.length;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  });

  likesCounter.textContent = likes;

  getActiveLikes()
    .then((res) => {
      likesArr.forEach((like) => {
        if(like._id === '34f8cd9478826799e75475a9') {
          likeButton.classList.add('photo-grid__like-button_is_active');
        }
      })
    })
    .catch((err) => {
      console.log(err);
    });


  const ownerId = owner;
  if(ownerId === '34f8cd9478826799e75475a9') {
    const deleteButton = placeElement.querySelector('.photo-grid__delete-button');
    deleteButton.style.display = 'block';
    deleteButton.addEventListener('click', function(evt) {
      evt.target.closest('.photo-grid__item').remove();
      deleteCard(id)
        .then((res) => {
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });;
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

function renderNewCard(card, container) {
  container.prepend(card);
}

function renderCard(card, container) {
  container.append(card);
}

function renderCardOnSubmit(res) {
  const card = createCard(res.link, res.name, res.owner._id, res._id, res.likes.length, res.likes);
  renderNewCard(card, placesContainer);
}

/*___ Render All Cards */

function renderAllCards() {
  getCards()
  .then((res) => {
    res.forEach((card) => {
      const newCard = createCard(card.link, card.name, card.owner._id, card._id, card.likes.length, card.likes);
      renderCard(newCard, placesContainer);
    })
  })
  .catch((err) => {
    console.log(err);
  });
}

export { createCard, renderNewCard, renderCard, renderCardOnSubmit, renderAllCards };
