import './pages/index.css';

import { openPopup, closePopup } from '../src/modules/modal.js';
import { createCard, renderCard, renderAllCards } from '../src/modules/card.js';
import { validationParams,
  showInputError,
  hideInputError,
  checkInputValidity,
  hasInvalidInput,
  toggleSubmitState,
  enableValidation
} from '../src/modules/validate.js';

import { popups,
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
  placesContainer
} from '../src/modules/vars.js';

/*___ Render Cards */

renderAllCards();

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

  editProfileSubmit.classList.add('form__submit_is_disabled');
  editProfileSubmit.setAttribute('disabled', '');

  closePopup(editProfilePopup);
});

/*___ Add Place Modal Listeners */

addPlaceButton.addEventListener('click', function() {
  openPopup(addPlacePopup);
});

addPlaceForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const card = createCard(placeUrlInput.value, placeTitleInput.value);
  renderCard(card, placesContainer);

  addPlaceSubmit.classList.add('form__submit_is_disabled');
  addPlaceSubmit.setAttribute('disabled', '');

  addPlaceForm.reset();
  closePopup(addPlacePopup);
});

/*___ Enable Validation */

enableValidation(validationParams);
