// +++ Global Scope

// + Init Places

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
]

// + Edit Profile

const editProfilePopup = document.querySelector('.popup_edit-profile');
const profileNameInput = document.querySelector('.form__input[name="user-name"]');
const profileStatusInput = document.querySelector('.form__input[name="user-bio"]');
const profileNameElement = document.querySelector('.profile__name');
const profileStatusElement = document.querySelector('.profile__status');
const editProfileButton = document.querySelector('.profile__edit-button');
const editProfileForm = document.querySelector('.form_edit-profile');

// + Add Place

const addPlacePopup = document.querySelector('.popup_add-place');
const placeTitleInput = document.querySelector('.form__input[name="place-title"]');
const placeUrlInput = document.querySelector('.form__input[name="place-url"]');
const addPlaceButton = document.querySelector('.profile__add-button');
const addPlaceForm = document.querySelector('.form_add-place');
const placesContainer = document.querySelector('.photo-grid__list');
const placeTemplate = document.querySelector('#grid-post').content;
const placeTemplateImg = placeTemplate.querySelector('.photo-grid__image');
const placeTemplateTitle = placeTemplate.querySelector('.photo-grid__item-title');

// + Full-View

const fullViewPopup = document.querySelector('.popup_image-full');
const fullViewContainer = document.querySelector('.full-view');
const fullViewImg = fullViewPopup.querySelector('.full-view__image');
const fullViewImgCaption = fullViewContainer.querySelector('.full-view__caption');

// 1. Open & Close Functions

function openPopup(popup) {
  popup.classList.add('popup_is_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_is_opened');
}

// 2. Create Card

function createCard(link, name) {
  placeTemplateImg.src = link;
  placeTemplateTitle.textContent = name;
  placeTemplateImg.alt = placeTemplateTitle.textContent;

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
    fullViewImg.setAttribute('src', link);
    fullViewImg.setAttribute('alt', name);
    fullViewImgCaption.textContent = name;
    openPopup(fullViewPopup);
  });
  return placeElement;
}

// 3. Render Card

function renderCard(card, container) {
  container.prepend(card);
}

// 4. Edit Profile Popup

editProfileButton.addEventListener('click', function() {
  profileNameInput.value = profileNameElement.textContent;
  profileStatusInput.value = profileStatusElement.textContent;
  openPopup(editProfilePopup);
});

// 4.1 Edit Profile Submit

editProfileForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileStatusElement.textContent = profileStatusInput.value;
  closePopup(editProfilePopup);
});

// 5. Add Place Popup

addPlaceButton.addEventListener('click', function() {
  placeTitleInput.value = '';
  placeUrlInput.value = '';
  openPopup(addPlacePopup);
});

// 5.1 Add Place Submit

addPlaceForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const card = createCard(placeUrlInput.value, placeTitleInput.value);
  renderCard(card, placesContainer);
  closePopup(addPlacePopup);
});

// 6. Init Places

initPlaces.forEach(function(initPlaces) {
  const card = createCard(initPlaces.link, initPlaces.name);
  renderCard(card, placesContainer);
});

// 7. Close Button

const closeButton = document.querySelectorAll('.popup__close-button');
  closeButton.forEach(function(btn) {
    btn.addEventListener('click', function(evt) {
      closePopup(evt.target.closest('.popup'));
    });
});
