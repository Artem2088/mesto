const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  labelSelector: '.popup__label',
  inputError: '.popup__input-error',
  inputErrorButtonLine: 'popup__input_type_error',
};
const getErrorElement = (inputElement, object) => {
  return inputElement
    .closest(object.labelSelector)
    .querySelector(object.inputError);
};

const showError = (formElement, inputElement, errorMessage, object) => {
  const errorElement = getErrorElement(inputElement, validationSettings);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(object.errorClass);
  errorElement.classList.add(object.inputErrorButtonLine);
};

const hideError = (formElement, inputElement, object) => {
  const errorElement = getErrorElement(inputElement, validationSettings);

  errorElement.textContent = '';
  errorElement.classList.remove(object.errorClass);
};

const checkValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;

  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showError(formElement, inputElement, errorMessage, validationSettings);
  } else {
    hideError(formElement, inputElement, validationSettings);
  }
};

const toggleButtonState = (inputList, submitButtonElement, object) => {
  const inputElements = Array.from(inputList);
  const hasInvalidInput = inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });

  if (hasInvalidInput) {
    submitButtonElement.classList.add(object.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.classList.remove(object.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement, object) => {
  const inputList = formElement.querySelectorAll(object.inputSelector);
  const submitButtonElement = formElement.querySelector(
    object.submitButtonSelector
  );
  const inputListIterator = (inputElement) => {
    const handleInput = (event) => {
      checkValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButtonElement, validationSettings);
    };

    inputElement.addEventListener('input', handleInput);
  };

  toggleButtonState(inputList, submitButtonElement, validationSettings);

  inputList.forEach(inputListIterator);
};

const enableValidation = (object) => {
  const formList = document.querySelectorAll(object.formSelector);

  const formListIteratior = (formElement) => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };

    formElement.addEventListener('submit', handleFormSubmit);

    setEventListeners(formElement, validationSettings);
  };

  formList.forEach(formListIteratior);
};

enableValidation(validationSettings);
