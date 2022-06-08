/*___ Open Modal */

function openPopup(popup) {
  popup.classList.add('popup_is_opened');

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape' && popup.classList.contains('popup_is_opened')) {
      popup.classList.remove('popup_is_opened');
    }
  });

  popup.addEventListener('click', function() {
    if (popup.classList.contains('popup_is_opened')) {
      popup.classList.remove('popup_is_opened');
    }
  });

  const closeButton = document.querySelectorAll('.popup__close-button');
  closeButton.forEach(function(btn) {
    btn.addEventListener('click', function(evt) {
      closePopup(evt.target.closest('.popup'));
    });
  });

  const popupsContainers = document.querySelectorAll('.popup__container');
  popupsContainers.forEach(function(elem) {
    elem.addEventListener('click', function(evt) {
      evt.stopPropagation();
    });
  });
}

/*___ Close Modal */

function closePopup(popup) {
  popup.classList.remove('popup_is_opened');
}

export { openPopup, closePopup };
