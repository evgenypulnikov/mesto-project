/*___ Open Modal */

export function openPopup(popup) {
  popup.classList.add('popup_is_opened');

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape' && popup.classList.contains('popup_is_opened')) {
      popup.classList.remove('popup_is_opened');
    }
  });

  popup.addEventListener('click', function() {
    if (popup.classList.contains('popup_is_opened')) {
      popup.classList.remove('popup_is_opened');
    }
  });

  const closeButton = document.querySelectorAll('.popup__close-button');
  closeButton.forEach(function(btn) {
    btn.addEventListener('click', function(evt) {
      closePopup(evt.target.closest('.popup'));
    });
  });

  const popupsContainers = document.querySelectorAll('.popup__container');
  popupsContainers.forEach(function(elem) {
    elem.addEventListener('click', function(evt) {
      evt.stopPropagation();
    });
  });
}

/*___ Close Modal */

export function closePopup(popup) {
  popup.classList.remove('popup_is_opened');
}

/*___ Create Card */

export function createCard(link, name) {
  const fullViewPopup = document.querySelector('.popup_image-full');
  const fullViewContainer = document.querySelector('.full-view');
  const fullViewImg = fullViewPopup.querySelector('.full-view__image');
  const fullViewImgCaption = fullViewContainer.querySelector('.full-view__caption');
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

export function renderCard(card, container) {
  container.prepend(card);
}
