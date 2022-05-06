import Popup from './popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._imagePopup = data.link; //popup.querySelector('.popup-image__picture');
    this._descriptionPopup = data.name; //popup.querySelector('.popup-image__description');
  }

  open(data) {
    super.open();
    this._imagePopup.src = data.link;
    this._imagePopup.alt = data.name;
    this._descriptionPopup.textContent = data.name;
  }
}
