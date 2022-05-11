export default class Popup {
  constructor(container) {
    this._container = container;
    this._input1 = document.querySelector('#input__error1');
    this._input2 = document.querySelector('#input__error2');
    this._span1 = document.querySelector('.span__error1');
    this._span2 = document.querySelector('.span__error2');
  }

  // Метод открытия попапа
  open() {
    this._container.classList.add('popup_opened');
    this._input1.classList.remove('popup__input-error_active');
    this._input2.classList.remove('popup__input-error_active');
    this._span1.textContent = '';
    this._span2.textContent = '';
  }
  // Метод закрытия попапа
  close() {
    this._container.classList.remove('popup_opened');
  }

  // Метод содержащий функционал нажатия на ESC
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close(this._container);
    }
  };

  // Метод клика по зонам контейнера
  _handleClickContainer = (evt) => {
    if (
      evt.target.classList.contains('popup') ||
      evt.target.classList.contains('popup__button-close-icon')
    ) {
      this.close(this._container);
    }
  };

  // Метод добавляющий слушатели событий
  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._container.addEventListener('click', this.open(this._container));
    this._container.addEventListener('click', this._handleClickContainer);
  }
}
