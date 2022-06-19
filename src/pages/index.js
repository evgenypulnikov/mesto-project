import '../pages/index.css';

import { openPopup, closePopup } from '../compontents/modal.js';
import { renderCardOnSubmit, renderAllCards } from '../compontents/card.js';
import { validationParams,
  showInputError,
  hideInputError,
  checkInputValidity,
  hasInvalidInput,
  toggleSubmitState,
  enableValidation
} from '../compontents/validate.js';

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
} from '../compontents/constants.js';

import { changeAvatar,
  getUserData,
  editUserData,
  getCards,
  addNewCard,
  deleteCard,
  addLike,
  removeLike
} from '../compontents/api.js'

/*___ Forms Submit Loading */

export function submitLoading(isLoading, submitButton, submitDefaultText) {
  if(isLoading) {
    submitButton.textContent = 'Сохранение...';
  } else {
    submitButton.textContent = submitDefaultText;
  }
}

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

/*___ Edit Profile Modal Listeners */

editProfileButton.addEventListener('click', function() {
  profileNameInput.value = profileNameElement.textContent;
  profileStatusInput.value = profileStatusElement.textContent;

  openPopup(editProfilePopup);
});

editProfileForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  profileNameElement.textContent = profileNameInput.value;
  profileStatusElement.textContent = profileStatusInput.value;

  submitLoading(true, editProfileSubmit);

  editUserData(profileNameElement.textContent, profileStatusElement.textContent)
    .finally(() => {
      editProfileSubmit.classList.add('form__submit_is_disabled');
      editProfileSubmit.setAttribute('disabled', '');
      closePopup(editProfilePopup);
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
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addPlaceSubmit.classList.add('form__submit_is_disabled');
      addPlaceSubmit.setAttribute('disabled', '');
      closePopup(addPlacePopup);
      submitLoading(false, addPlaceSubmit, 'Создать');
    });

  addPlaceForm.reset();
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
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      changeAvatarSubmit.classList.add('form__submit_is_disabled');
      changeAvatarSubmit.setAttribute('disabled', '');
      closePopup(changeAvatarPopup);
      submitLoading(false, changeAvatarSubmit, 'Сохранить');
    });

  changeAvatarForm.reset();
});

/*___ Enable Validation */

enableValidation(validationParams);

/*___ Server Interaction */

getUserData()
  .then((res) => {
    profileAvatarElement.src = res.avatar;
    profileNameElement.textContent = res.name;
    profileStatusElement.textContent = res.about;
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  });

renderAllCards();
