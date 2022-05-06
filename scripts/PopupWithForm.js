import Popup from './popup.js';

export default class PopupWithForm extends Popup {
  constructor(popup, { renderPopupWithForm }) {
    super(popup);
    this._renderPopupWithForm = renderPopupWithForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelector('.popup__input'));
  }

  _getInputValues() {
    const dataInput = {};
    this._inputList.forEach((input) => {
      dataInput[input.name] = input.value;
    });
    return dataInput;
  }

  setEventListeners(evt) {
    super.setEventListeners();
    this._form.addEventListener('submit', this._formSubmit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
