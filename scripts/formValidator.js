export default class FormValidator {
  constructor(object, formElement) {
    this._object = object;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._object.inputSelector)
    );
    this._submitButtonElement = this._formElement.querySelector(
      this._object.submitButtonSelector
    );
    this._formList = Array.from(
      document.querySelectorAll(this._object.formSelector)
    );
    this._inputElements = Array.from(this._inputList);
  }

  _getErrorElement(inputElement, object) {
    return inputElement
      .closest(this._object.labelSelector)
      .querySelector(this._object.inputError);
  }
  //функция, которая добовляет класс с ошибкой
  _showError(formElement, inputElement, errorMessage, object) {
    this._errorElement = this._getErrorElement(inputElement, object);

    this._errorElement.textContent = this._errorMessage;
    this._errorElement.classList.add(this._object.errorClass);
    this._errorElement.classList.add(this._object.inputErrorButtonLine);
  }
  // Функция, которая удаляет класс с ошибкой
  _hideError(formElement, inputElement, object) {
    this._errorElement = this._getErrorElement(inputElement, object);

    this._errorElement.textContent = '';
    this._errorElement.classList.remove(this._object.errorClass);
  }
  // Функция, которая проверяет валидность поля
  _checkValidity(formElement, inputElement) {
    this._isInputNotValid = !inputElement.validity.valid;

    if (this._isInputNotValid) {
      this._errorMessage = inputElement.validationMessage;
      // Если поле не проходит валидацию, покажем ошибку
      this._showError(formElement, inputElement, object);
    } else {
      // Если проходит, скроем
      this._hideError(formElement, inputElement, object);
    }
  }

  _disableSubmitButtonElement(submitButtonElement, object) {
    this._submitButtonElement.classList.add(this._object.inactiveButtonClass);
    this._submitButtonElement.setAttribute('disabled', true);
  }

  _enableSubmitButtonElement(submitButtonElement, object) {
    this._submitButtonElement.classList.remove(
      this._object.inactiveButtonClass
    );
    this._submitButtonElement.removeAttribute('disabled');
  }

  _toggleButtonState(inputList, submitButtonElement, object) {
    this._hasInvalidInput = this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
    if (this._hasInvalidInput) {
      this._disableSubmitButtonElement(submitButtonElement, object);
    } else {
      this._enableSubmitButtonElement(submitButtonElement, object);
    }
  }
  //добавляем слушатель события всем полям формы
  _setEventListeners(formElement, object) {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем checkValidity,
        // передав ей форму и проверяемый элемент
        this._checkValidity(formElement, inputElement);
        this._toggleButtonState(
          this._inputList,
          this._submitButtonElement,
          object
        );
      });
    });
  }
  // сама валидация
  enableValidation(object) {
    this._formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(formElement, object);
    });
  }
  //сброс ошибок и очистка полей инпутов
  resetValidationForm() {
    this._toggleButtonState(this._inputList, this._submitButtonElement, object);

    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }
}
