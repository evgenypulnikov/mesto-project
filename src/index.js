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

import { editProfileButton,
  editProfilePopup,
  profileNameElement,
  profileStatusElement,
  editProfileForm,
  profileNameInput,
  profileStatusInput,
  addPlaceButton,
  addPlacePopup,
  addPlaceForm,
  placeTitleInput,
  placeUrlInput,
  placesContainer
} from '../src/modules/vars.js';

/*___ Render Cards */

renderAllCards();

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

  addPlaceForm.reset();
  closePopup(addPlacePopup);
});

/*___ Enable Validation */

enableValidation(validationParams);
