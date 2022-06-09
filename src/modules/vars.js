const popups = document.querySelectorAll('.popup');

/*___ Edit Profile Modal */

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_edit-profile');
const profileNameElement = document.querySelector('.profile__name');
const profileStatusElement = document.querySelector('.profile__status');
const editProfileForm = document.forms.editProfileForm;
const profileNameInput = editProfileForm.elements.profileName;
const profileStatusInput = editProfileForm.elements.profileStatus;
const editProfileSubmit = editProfileForm.querySelector('.form__submit');

/*___ Add Place Modal */

const addPlaceButton = document.querySelector('.profile__add-button');
const addPlacePopup = document.querySelector('.popup_add-place');
const addPlaceForm = document.forms.addPlaceForm;
const placeTitleInput = addPlaceForm.elements.placeTitle;
const placeUrlInput = addPlaceForm.elements.placeUrl;
const addPlaceSubmit = addPlaceForm.querySelector('.form__submit');
const placesContainer = document.querySelector('.photo-grid__list');

/*___ Init Places */

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

/*___ Full View */

const fullViewPopup = document.querySelector('.popup_image-full');
const fullViewImg = fullViewPopup.querySelector('.full-view__image');
const fullViewImgCaption = fullViewPopup.querySelector('.full-view__caption');

export { popups,
  editProfileButton,
  editProfilePopup,
  profileNameElement,
  profileStatusElement,
  editProfileForm,
  profileNameInput,
  profileStatusInput,
  editProfileSubmit,
  addPlaceButton,
  addPlacePopup,
  addPlaceForm,
  placeTitleInput,
  placeUrlInput,
  addPlaceSubmit,
  placesContainer,
  initPlaces,
  fullViewPopup,
  fullViewImg,
  fullViewImgCaption
 };
