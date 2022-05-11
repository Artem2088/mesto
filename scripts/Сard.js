export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  // Метод возвращает шаблон карточки из DOM
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  // Метод удаляет карточку из DOM
  _deleteClickHandler = () => {
    this._element.remove();
  };

  // Метод добавляет-удаляет класс на кнопке лайк
  _likeClickHandler = () => {
    this._placeButtonLike.classList.toggle('element__icon_active');
  };

  // Метод вешает слушатели событий
  _setEventListeners = () => {
    this._placeButtonRemove.addEventListener('click', this._deleteClickHandler);
    this._placeButtonLike.addEventListener('click', this._likeClickHandler);
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  // Метод генерирует и возвращает карточку
  generateCard = () => {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._placeButtonLike = this._element.querySelector(
      '.element__button-like'
    );
    this._placeButtonRemove = this._element.querySelector('.element__delete');
    this._setEventListeners();

    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = 'Фотография местности ' + this._name;

    return this._element;
  };
}
