import { closeOverlay, escPopup } from './index.js';

export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  _handleEscClose() {
    document.addEventListener('keydown', escPopup);
    document.removeEventListener('keydown', escPopup);
  }

  open(popup) {
    //функция открытия попап
    this._popup.classList.add('popup_opened');
  }

  close(popup) {
    //функция закрытия попап
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._popup.addEventListener('click', closeOverlay);
    this._popup.removeEventListener('click', closeOverlay);
  }
}
