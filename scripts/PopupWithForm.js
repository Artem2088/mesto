import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ submitForm, container }) {
    super(container);
    this._submitForm = submitForm;
    this._formSelector = this._container.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._formSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
    this._formSelector.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', this._handleSubmitForm);
  }

  _handleSubmitForm = (evt) => {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
    this.close(this._container);
  };
}
// export default class PopupWithForm extends Popup {
//   constructor({ callbackWithForm }, popupContainer) {
//     super(popupContainer);
//     this._callbackWithForm = callbackWithForm;
//     this._form = this._container.querySelector('.popup__form');
//     this.formButton = this._container.querySelector('.profile__edit');
//   }

//   _getInputValues() {
//     this._inputList = this._form.querySelectorAll('.popup__input');
//     this._dataInput = {};
//     this._inputList.forEach((input) => {
//       this._dataInput[input.name] = input.value;
//     });
//     return this._dataInput;
//   }

//   _handleClickForm = (evt) => {
//     evt.preventDefault();
//     this._callbackWithForm(this._getInputValues());
//     this.close(this._container);
//   };

//   setEventListeners() {
//     super.setEventListeners();
//     this._form.addEventListener('submit', this._handleClickForm);
//   }

//   close() {
//     super.close();
//     this._form.reset();
//   }
// }
