import { openPopup, closePopup } from './utils.js';
import { createCard, renderCard } from './utils.js';

export function modal() {

  /*___ Edit Profile Modal */

  const editProfileButton = document.querySelector('.profile__edit-button');
  const editProfilePopup = document.querySelector('.popup_edit-profile');
  const profileNameElement = document.querySelector('.profile__name');
  const profileStatusElement = document.querySelector('.profile__status');
  const editProfileForm = document.forms.editProfileForm;
  const profileNameInput = document.editProfileForm.elements.profileName;
  const profileStatusInput = document.editProfileForm.elements.profileStatus;

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

  /*___ Add Place Modal */

  const addPlaceButton = document.querySelector('.profile__add-button');
  const addPlacePopup = document.querySelector('.popup_add-place');
  const addPlaceForm = document.forms.addPlaceForm;
  const placeTitleInput = document.addPlaceForm.elements.placeTitle;
  const placeUrlInput = document.addPlaceForm.elements.placeUrl;
  const placesContainer = document.querySelector('.photo-grid__list');

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
}
