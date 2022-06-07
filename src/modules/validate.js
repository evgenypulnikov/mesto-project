export function validate() {

  /*___ Show or Hide Input Error */

  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_is_active');
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_is_active');
    errorElement.textContent = '';
  };

  /*___ Check Inputs Validity & Toggle State */

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  function toggleSubmitState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('form__submit_is_disabled');
      buttonElement.setAttribute('disabled', '');
    } else {
      buttonElement.classList.remove('form__submit_is_disabled');
      buttonElement.removeAttribute('disabled');
    }
  }

  /*___ Set Listeners */

  function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const submitButton = formElement.querySelector('.form__submit');

    toggleSubmitState(inputList, submitButton);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function() {
        checkInputValidity(formElement, inputElement);
        toggleSubmitState(inputList, submitButton);
      });
    });
  }

  /*___ Enable Listeners */

  function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      const fieldsetList = Array.from(formElement.querySelectorAll('.form__fieldset'));
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
      });
    });
  }

  enableValidation();
}


