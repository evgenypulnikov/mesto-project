/*___ Validation Parameters */

const validationParams = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_is_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_is_active'
};

/*___ Show or Hide Input Error */

const showInputError = (formElement, inputElement, errorMessage, paramsObj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(paramsObj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(paramsObj.errorClass);
};

const hideInputError = (formElement, inputElement, paramsObj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(paramsObj.inputErrorClass);
  errorElement.classList.remove(paramsObj.errorClass);
  errorElement.textContent = '';
};

/*___ Check Inputs Validity & Toggle State */

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationParams);
  } else {
    hideInputError(formElement, inputElement, validationParams);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleSubmitState(inputList, buttonElement, paramsObj) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(paramsObj.inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.classList.remove(paramsObj.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

/*___ Set Listeners */

function setEventListeners(formElement, paramsObj) {
  const inputList = Array.from(formElement.querySelectorAll(paramsObj.inputSelector));
  const submitButton = formElement.querySelector(paramsObj.submitButtonSelector);

  toggleSubmitState(inputList, submitButton, validationParams);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement);
      toggleSubmitState(inputList, submitButton, validationParams);
    });
  });
}

/*___ Enable Listeners */

function enableValidation(paramsObj) {
  const formList = Array.from(document.querySelectorAll(paramsObj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll('.form__fieldset'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, validationParams);
    });
  });
}

export { validationParams,
  showInputError,
  hideInputError,
  checkInputValidity,
  hasInvalidInput,
  toggleSubmitState,
  enableValidation };
