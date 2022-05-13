export default class Popup {
  constructor(container) {
    this._container = container;
    this._profile_input1 = document.querySelector('#profile-input__error1');
    this._profile_input2 = document.querySelector('#profile-input__error2');
    this._profile_span1 = document.querySelector(
      '.popup__input-error_profile-one'
    );
    this._profile_span2 = document.querySelector(
      '.popup__input-error_profile-second'
    );
    this._card_input1 = document.querySelector('#card-input__error1');
    this._card_input2 = document.querySelector('#card-input__error2');
    this._card_span1 = document.querySelector('.popup__input-error_card-one');
    this._card_span2 = document.querySelector(
      '.popup__input-error_card-second'
    );
  }

  // Метод открытия попапа
  open() {
    this._container.classList.add('popup_opened');
    this._profile_input1.classList.remove('popup__input-error_active');
    this._profile_input2.classList.remove('popup__input-error_active');
    this._profile_span1.textContent = '';
    this._profile_span2.textContent = '';
    this._card_input1.classList.remove('popup__input-error_active');
    this._card_input2.classList.remove('popup__input-error_active');
    this._card_span1.textContent = '';
    this._card_span2.textContent = '';
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
