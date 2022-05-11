export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  // Публичная функция запуска валидации
  enableValidation = () => {
    this._inputsList = this._form.querySelectorAll(this._config.inputSelector); // Ищем в DOM все поля ввода
    this._submitButton = this._form.querySelector(
      this._config.submitButtonSelector
    ); // выбираем в DOM кнопку формы
    this._setEventListeners(this._form, this._config, this._submitButton);

    // Вешаем слушатель на сабытие отправки формы
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault(); // убираем дефолтное поведение кнопки отправить форму
      this._disabledButton(this._submitButton, this._config);
    });

    this._setButtonState(
      this._submitButton,
      this._form.checkValidity(),
      this._config
    ); // определяем стартовое состояние кропки
  };

  // Функция вешает слушатели событий на поля ввода и кнокпи в указаной форме
  _setEventListeners = (form, config, button) => {
    // обходим все поля ввода и вешаем на них слушатели
    this._inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(form, input, config); // проверям валидность формы
        this._setButtonState(button, form.checkValidity(), config); // проверяем состояние кнопки
      });
    });
  };

  // Фунция проверки состояния кнопки форм
  _setButtonState = (button, isActive, config) => {
    // Если кнопка активна убираем класс и состояние, и наоборот
    if (isActive) {
      button.classList.remove(config.buttonInvalidClass);
      button.disabled = false;
    } else {
      this._disabledButton(button, config);
    }
  };

  // Функция дизейбла кнопки
  _disabledButton = (button, config) => {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  };

  // Функция проверяющая валидность поля ввода
  _checkInputValidity = (form, input, config) => {
    // проверяем если не валидно запускаем показ ошибки, если валидно убираем
    if (!input.validity.valid) {
      this._showError(form, input, config);
    } else {
      this._hideError(form, input, config);
    }
  };

  // Функция убирающая показал ошибки
  _hideError = (form, input, config) => {
    const error = form.querySelector(`#${input.name}-error`); // Ищем в DOM поле ошибки по Name
    error.textContent = ''; // Убираем текст ошибки
    input.classList.remove(config.inputInvalidClass); // Удаляем класс невалидного инпута
  };

  // Функция показа ошибки
  _showError = (form, input, config) => {
    const error = form.querySelector(`#${input.name}-error`); // Ищем в DOM поле ошибки по Name
    error.textContent = input.validationMessage; // Текст ошибки равен дефолтному значению ошибок браузера
    input.classList.add(config.inputInvalidClass); // Добавляем класс невалидного инпута
  };
}

// export default class FormValidator {
//   constructor(object, formElement) {
//     this._object = object;
//     this._formElement = formElement;
//     this._inputList = Array.from(
//       this._formElement.querySelectorAll(this._object.inputSelector)
//     );
//     this._submitButtonElement = this._formElement.querySelector(
//       this._object.submitButtonSelector
//     );
//     this._formList = Array.from(
//       document.querySelectorAll(this._object.formSelector)
//     );
//     this._inputElements = Array.from(this._inputList);
//   }

//   _getErrorElement(inputElement, object) {
//     return inputElement
//       .closest(this._object.labelSelector)
//       .querySelector(this._object.inputError);
//   }
//   //функция, которая добовляет класс с ошибкой
//   _showError(formElement, inputElement, errorMessage, object) {
//     this._errorElement = this._getErrorElement(inputElement, object);

//     this._errorElement.textContent = this._errorMessage;
//     this._errorElement.classList.add(this._object.errorClass);
//     this._errorElement.classList.add(this._object.inputErrorButtonLine);
//   }
//   // Функция, которая удаляет класс с ошибкой
//   _hideError(formElement, inputElement, object) {
//     this._errorElement = this._getErrorElement(inputElement, object);

//     this._errorElement.textContent = '';
//     this._errorElement.classList.remove(this._object.errorClass);
//   }
//   // Функция, которая проверяет валидность поля
//   _checkValidity(formElement, inputElement) {
//     this._isInputNotValid = !inputElement.validity.valid;

//     if (this._isInputNotValid) {
//       this._errorMessage = inputElement.validationMessage;
//       // Если поле не проходит валидацию, покажем ошибку
//       this._showError(formElement, inputElement, object);
//     } else {
//       // Если проходит, скроем
//       this._hideError(formElement, inputElement, object);
//     }
//   }

//   _disableSubmitButtonElement(submitButtonElement, object) {
//     this._submitButtonElement.classList.add(this._object.inactiveButtonClass);
//     this._submitButtonElement.setAttribute('disabled', true);
//   }

//   _enableSubmitButtonElement(submitButtonElement, object) {
//     this._submitButtonElement.classList.remove(
//       this._object.inactiveButtonClass
//     );
//     this._submitButtonElement.removeAttribute('disabled');
//   }

//   _toggleButtonState(inputList, submitButtonElement, object) {
//     this._hasInvalidInput = this._inputElements.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//     if (this._hasInvalidInput || !inputList) {
//       this._disableSubmitButtonElement(submitButtonElement, object);
//     } else {
//       this._enableSubmitButtonElement(submitButtonElement, object);
//     }
//   }
//   //добавляем слушатель события всем полям формы
//   _setEventListeners(formElement, object) {
//     this._toggleButtonState();

//     this._inputList.forEach((inputElement) => {
//       // каждому полю добавим обработчик события input
//       inputElement.addEventListener('input', () => {
//         // Внутри колбэка вызовем checkValidity,
//         // передав ей форму и проверяемый элемент
//         this._checkValidity(formElement, inputElement);
//         this._toggleButtonState(
//           this._inputList,
//           this._submitButtonElement,
//           object
//         );
//       });
//     });
//   }
//   //сброс ошибок и очистка полей инпутов
//   resetValidationForm() {
//     this._toggleButtonState();

//     this._inputList.forEach((inputElement) => {
//       inputElement.value = '';
//       this._hideError(this._formElement, inputElement, this._object);
//     });
//   }
//   // сама валидация
//   enableValidation(object) {
//     this._formList.forEach((formElement) => {
//       formElement.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//       });
//       this._setEventListeners(formElement, object);
//     });
//   }
// }
