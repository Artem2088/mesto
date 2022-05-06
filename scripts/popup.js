export default class Popup {
  constructor(popup) {
    this._popup = document.querySelector('.popup-cards');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupCloseIcon = this._popup.querySelector('.popup__close-icon');
    this.close = this.close.bind(this);
  }

  _handleEscClose(evt) {
    //Функция закрытия попапа с ESC
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    //функция открытия попап
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    //функция закрытия попап
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners(evt) {
    //функция закрытия попапа на крестик
    this._popupCloseIcon.addEventListener('click', () => {
      this.close();
    });
    //функция закрытия попапа на оверлей
    this._popup.addEventListener('click', (evt) => {
      if (
        !evt.target.closest('.popup__container') &&
        !evt.target.closest('.popup-image__block')
      )
        if (this._popup.classList.contains('popup_opened')) {
          this.close();
        }
    });
  }
}
