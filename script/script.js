// +++ 1. Edit Profile Popup

const editProfilePopup = document.querySelector('.popup_edit-profile');
const profileNameInput = document.querySelector('.form__input[name="user-name"]');
const profileStatusInput = document.querySelector('.form__input[name="user-bio"]');
const profileNameElement = document.querySelector('.profile__name');
const profileStatusElement = document.querySelector('.profile__status');

// * 1.1 Open Function

function editProfilePopupOpener() {
  profileNameInput.value = profileNameElement.textContent;
  profileStatusInput.value = profileStatusElement.textContent;
  editProfilePopup.classList.add('popup_is_opened');
}

const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', editProfilePopupOpener);

// * 1.2 Edit Profile Submit

function editProfileSubmit (evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileStatusElement.textContent = profileStatusInput.value;
}

const editProfileForm = document.querySelector('.form_edit-profile');
editProfileForm.addEventListener('submit', editProfileSubmit);

// +++ 2. Add Place Popup

const addPlacePopup = document.querySelector('.popup_add-place');
const placeTitleInput = document.querySelector('.form__input[name="place-title"]');
const placeUrlInput = document.querySelector('.form__input[name="place-url"]');

// * 2.1 Open Function

function addPlacePopupOpener() {
  placeTitleInput.value = '';
  placeUrlInput.value = '';
  addPlacePopup.classList.add('popup_is_opened');
}

const addPlaceButton = document.querySelector('.profile__add-button');
addPlaceButton.addEventListener('click', addPlacePopupOpener);

// * 2.2 Add Place Submit

const addPlaceForm = document.querySelector('.form_add-place');

function addPlaceSubmit (evt) {
  evt.preventDefault();
  placeTemplateImg.src = placeUrlInput.value;
  placeTemplateTitle.textContent = placeTitleInput.value;
  placeTemplateImg.alt = placeTemplateTitle.textContent;

  // ** 2.2.1 Clone

  const placeElement = placeTemplate.cloneNode(true);

  // ** 2.2.2 Like

  const likeButton = placeElement.querySelector('.photo-grid__like-button');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__like-button_is_active');
  });

  // ** 2.2.3 Delete

  const deleteButton = placeElement.querySelector('.photo-grid__delete-button');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.photo-grid__item').remove();
  });

  // ** 2.2.4 Prepend

  placesContainer.prepend(placeElement);

  // ** 2.2.5 Full-View Popup

  const placeImg = placesContainer.querySelector('.photo-grid__image');

  placeImg.addEventListener('click', function (evt) {

    // ** Parse Image

    const targetImgSrc = evt.target.src;
    const fullViewImg = fullViewPopup.querySelector('.full-view__image');
    fullViewImg.setAttribute('src', targetImgSrc);

    // ** Parse Caption

    const targetImgCaption = evt.target.closest('.photo-grid__item').querySelector('.photo-grid__item-title');
    const fullViewImgCaption = fullViewContainer.querySelector('.full-view__caption');
    fullViewImgCaption.textContent = targetImgCaption.textContent;

    fullViewContainer.prepend(fullViewImg);

    function fullViewPopupOpener() {
      fullViewPopup.classList.add('popup_is_opened');
    }
    fullViewPopupOpener();
  });
}

addPlaceForm.addEventListener('submit', addPlaceSubmit);

// +++ 3. Init Places

const initPlaces = [
  {
    name: 'Карачаево-Черкесск',
    link: 'https://images.unsplash.com/photo-1634665598022-325f0152926e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80'
  },
  {
    name: 'Дагестан',
    link: 'https://images.unsplash.com/photo-1633975029239-83e696ffab0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
  },
  {
    name: 'Северная Осетия',
    link: 'https://images.unsplash.com/photo-1612719734814-73ed4b4235e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Златоуст',
    link: 'https://images.unsplash.com/photo-1637073665858-44e5f12d3917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
  },
  {
    name: 'Роза Хутор',
    link: 'https://images.unsplash.com/photo-1632414612752-f7619ec1d2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
];

const placesContainer = document.querySelector('.photo-grid__list');

const placeTemplate = document.querySelector('#grid-post').content;
const placeTemplateImg = placeTemplate.querySelector('.photo-grid__image');
const placeTemplateTitle = placeTemplate.querySelector('.photo-grid__item-title');

// * 3.1 Init Places For Each

initPlaces.forEach(function (initPlaces) {
  placeTemplateImg.src = initPlaces.link;
  placeTemplateTitle.textContent = initPlaces.name;

  // ** 3.1.1 Clone

  const placeElement = placeTemplate.cloneNode(true);

  // ** 3.1.2 Like

  const likeButton = placeElement.querySelector('.photo-grid__like-button');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__like-button_is_active');
  });

  // ** 3.1.3 Delete

  const deleteButton = placeElement.querySelector('.photo-grid__delete-button');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.photo-grid__item').remove();
  });

  // ** 3.1.4 Append

  placesContainer.append(placeElement);
});

// +++ 4. Full-View Popup

const fullViewPopup = document.querySelector('.popup_image-full');
const fullViewContainer = document.querySelector('.full-view');

function fullViewPopupOpener() {
  fullViewPopup.classList.add('popup_is_opened');
}

const placeImg = placesContainer.querySelectorAll('.photo-grid__image');

placeImg.forEach(function (imgItem) {
  imgItem.addEventListener('click', function (evt) {

    // ** 4.1 Parse Image

    const targetImgSrc = evt.target.src;
    const fullViewImg = fullViewPopup.querySelector('.full-view__image');
    fullViewImg.setAttribute('src', targetImgSrc);

    // ** 4.2 Parse Caption

    const targetImgCaption = evt.target.closest('.photo-grid__item').querySelector('.photo-grid__item-title');
    const fullViewImgCaption = fullViewContainer.querySelector('.full-view__caption');
    fullViewImgCaption.textContent = targetImgCaption.textContent;

    fullViewContainer.prepend(fullViewImg);
    fullViewPopupOpener();
  });
});

// +++ 5. Any Popup Close

const popups = document.querySelectorAll('.popup');
const forms = document.querySelectorAll('.form');
const popupCloseButton = document.querySelectorAll('.popup__close-button');

// ** 5.1 On Close Button

for (let i = 0; i < popups.length; i++) {
  function closeAnyPopup() {
    popups[i].classList.remove('popup_is_opened');
  }
  popupCloseButton[i].addEventListener('click', closeAnyPopup);
}

// ** 5.2 On Form Submit

for (let i = 0; i < forms.length; i++) {
  function closeAnyPopup() {
    popups[i].classList.remove('popup_is_opened');
  }
  forms[i].addEventListener('submit', closeAnyPopup);
}
