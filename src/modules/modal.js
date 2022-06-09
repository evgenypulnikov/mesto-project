/*___ Open Modal */

function openPopup(popup) {
  popup.classList.add('popup_is_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

/*___ Close Modal */

function closePopup(popup) {
  popup.classList.remove('popup_is_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

/*___ Close Modal By Esc */

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is_opened');
    closePopup(openedPopup);
  }
}

export { openPopup, closePopup };
