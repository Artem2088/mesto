import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({ name, link }, container) {
    super(container);
    this._popupElemImg = document.querySelector('.popup-image__picture');
    this._popupElemCaptain = document.querySelector(
      '.popup-image__description'
    );
    this._name = name;
    this._link = link;
  }

  // Наследуем и доплняем метод из Popup
  open() {
    this._popupElemImg.src = this._link;
    this._popupElemCaptain.textContent = this._name;
    super.open();
  }
}
// export default class PopupWithImage extends Popup {
//   constructor(popupContainer) {
//     super(popupContainer);
//     this._imagePopup = this._container.querySelector('.popup-image__picture');
//     this._descriptionPopup = this._container.querySelector(
//       '.popup-image__description'
//     );
//   }

//   open(name, link) {
//     super.open();
//     this._imagePopup.src = link;
//     // this._imagePopup.alt = data.name;
//     this._descriptionPopup.textContent = name;
//   }
// }
