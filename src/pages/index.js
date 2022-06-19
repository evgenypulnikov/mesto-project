import '../pages/index.css';

import { openPopup, closePopup } from '../components/modal.js';
import { renderCardOnSubmit, renderAllCards } from '../components/card.js';
import { validationParams,
  showInputError,
  hideInputError,
  checkInputValidity,
  hasInvalidInput,
  toggleSubmitState,
  disableSubmitButton,
  enableValidation
} from '../components/validate.js';

import { popups,
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
} from '../components/constants.js';

import { changeAvatar,
  getUserData,
  editUserData,
  getUserId,
  getCards,
  addNewCard,
  deleteCard,
  addLike,
  removeLike,
  getActiveLikes,
} from '../components/api.js'

import { submitLoading } from '../utils/utils.js'

/*___ Modals Listener */

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  });
});

/*___ Get & Set User Info */

function getUserInfo(name, about) {
  profileNameInput.value = name;
  profileStatusInput.value = about;
}

function setUserInfo(name, about) {
  profileNameElement.textContent = name;
  profileStatusElement.textContent = about;
}

/*___ Edit Profile Modal Listeners */

editProfileButton.addEventListener('click', function() {
  getUserInfo(profileNameElement.textContent, profileStatusElement.textContent);
  openPopup(editProfilePopup);
});

editProfileForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  submitLoading(true, editProfileSubmit);

  editUserData(profileNameElement.textContent, profileStatusElement.textContent)
    .then(() => {
      setUserInfo(profileNameInput.value, profileStatusInput.value);
      closePopup(editProfilePopup);
    })
    .finally(() => {
      disableSubmitButton(editProfileSubmit);
      submitLoading(false, editProfileSubmit, 'Сохранить');
    });
});

/*___ Add Place Modal Listeners */

addPlaceButton.addEventListener('click', function() {
  openPopup(addPlacePopup);
});

addPlaceForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  submitLoading(true, addPlaceSubmit);

  addNewCard(placeTitleInput.value, placeUrlInput.value)
    .then((res) => {
      renderCardOnSubmit(res);
      closePopup(addPlacePopup);
      addPlaceForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      disableSubmitButton(addPlaceSubmit);
      submitLoading(false, addPlaceSubmit, 'Создать');
    });
});

/*___ Change Avatar Modal Listeners */

changeAvatarButton.addEventListener('click', function() {
  openPopup(changeAvatarPopup);
});

changeAvatarForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  submitLoading(true, changeAvatarSubmit);

  changeAvatar(changeAvatarUrlInput.value)
    .then((res) => {
      profileAvatarElement.src = res.avatar;
      closePopup(changeAvatarPopup);
      changeAvatarForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      disableSubmitButton(changeAvatarSubmit);
      submitLoading(false, changeAvatarSubmit, 'Сохранить');
    });
});

/*___ Enable Validation */

enableValidation(validationParams);

/*___ Get User */

getUserData()
  .then((res) => {
    profileAvatarElement.src = res.avatar;
    setUserInfo(res.name, res.about);
  })
  .catch((err) => {
    console.log(err);
  });

renderAllCards();
