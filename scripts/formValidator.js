export default class FormValidator {
  constructor(object, formElement) {
    this._object = object;
    this._formElement = formElement;
  }

  _getErrorElement() {
    return this._inputElement
      .closest(this._object.labelSelector)
      .querySelector(this._object.inputError);
  }

  _showError() {
    this._errorElement = this._getErrorElement();

    this._errorElement.textContent = this._errorMessage;
    this._errorElement.classList.add(this._errorClass);
    this._errorElement.classList.add(this._inputErrorButtonLine);
  }

  _hideError() {
    this._errorElement = this._getErrorElement();

    this._errorElement.textContent = '';
    this._errorElement.classList.remove(this._object.errorClass);
  }

  _checkValidity() {
    const isInputNotValid = !this._inputElement.validity.valid;

    if (isInputNotValid) {
      this._errorMessage = this._inputElement.validationMessage;
      this._showError();
    } else {
      this._hideError();
    }
  }

  _disableSubmitButtonElement() {
    submitButtonElement.classList.add(this._object.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
  }

  _enableSubmitButtonElement() {
    submitButtonElement.classList.remove(this._object.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
  }

  _toggleButtonState() {
    this._inputElements = Array.from(inputList);
    const hasInvalidInput = this._inputElements.some((inputElement) => {
      return !this._inputElement.validity.valid;
    });
    if (hasInvalidInput) {
      this._disableSubmitButtonElement();
    } else {
      this._enableSubmitButtonElement();
    }
  }

  _setEventListeners() {
    this._inputList = this._formElement.querySelectorAll(
      this._object.inputSelector
    );
    this._submitButtonElement = this._formElement.querySelector(
      this._object.submitButtonSelector
    );
    this._inputListIterator = (inputElement) => {
      this._handleInput = (event) => {
        this._checkValidity();
        this._toggleButtonState();
      };

      this._inputElement.addEventListener('input', () => {
        handleInput;
      });
    };

    this._toggleButtonState();

    this._inputList.forEach(() => {
      this._inputListIterator;
    });
  }

  enableValidation() {
    this._formList = document.querySelectorAll(this._object.formSelector);

    this._formListIteratior = (formElement) => {
      this._handleFormSubmit = (event) => {
        event.preventDefault();
      };

      this._formElement.addEventListener('submit', () => {
        this._handleFormSubmit();
      });

      this._setEventListeners();
    };

    this._formList.forEach(() => {
      this._formListIteratior;
    });
  }
}
