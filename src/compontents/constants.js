const popups = document.querySelectorAll('.popup');

/*___ Change Avatar Modal */

const changeAvatarButton = document.querySelector('.profile__avatar-change-button');
const changeAvatarPopup = document.querySelector('.popup_avatar-change');
const changeAvatarForm = document.forms.avatarChangeForm;
const changeAvatarUrlInput = changeAvatarForm.elements.avatarUrl;
const changeAvatarSubmit = changeAvatarForm.querySelector('.form__submit');

/*___ Edit Profile Modal */

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_edit-profile');
const profileAvatarElement = document.querySelector('.profile__picture');
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
const placeTemplate = document.querySelector('#grid-post').content;
const placeTemplateImg = placeTemplate.querySelector('.photo-grid__image');
const placeTemplateTitle = placeTemplate.querySelector('.photo-grid__item-title');
const placesContainer = document.querySelector('.photo-grid__list');

/*___ Full View */

const fullViewPopup = document.querySelector('.popup_image-full');
const fullViewImg = fullViewPopup.querySelector('.full-view__image');
const fullViewImgCaption = fullViewPopup.querySelector('.full-view__caption');

export { popups,
  changeAvatarButton,
  changeAvatarPopup,
  changeAvatarForm,
  changeAvatarUrlInput,
  changeAvatarSubmit,
  editProfileButton,
  editProfilePopup,
  profileAvatarElement,
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
  placeTemplate,
  placeTemplateImg,
  placeTemplateTitle,
  placesContainer,
  fullViewPopup,
  fullViewImg,
  fullViewImgCaption
 };
