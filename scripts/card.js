import { openPopup } from './index.js';
//класс карточки
export default class Card {
  // в конструкторе будут динамические данные,
  // для каждого экземпляра свои
  constructor(data) {
    // name и link — приватные поля,
    // они нужны только внутри класса
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = elementTemplate
      .querySelector('.element')
      .cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }

  //функция лайка
  _createLikeCards() {
    this._element
      .querySelector('.element__icon')
      .classList.toggle('element__icon_active');
  }

  //функция удаления карточки
  _deleteCard() {
    this._element
      .querySelector('.element__delete')
      .closest('.element')
      .remove();
  }

  //функция открытия попапа с картинкой
  _createOpenImage() {
    popupImagePicture.src = this._link;
    popupImagePicture.alt = this._name;
    popupImageDescription.textContent = this._name;
    openPopup(popupImage);
  }
  //слушатели
  _setEventListeners() {
    this._element
      .querySelector('.element__icon')
      .addEventListener('click', () => {
        this._createLikeCards();
      }); //слушатель лайка
    this._element
      .querySelector('.element__delete')
      .addEventListener('click', () => {
        this._deleteCard(); //удаление карточки
      });
    this._element
      .querySelector('.element__image')
      .addEventListener('click', () => {
        this._createOpenImage();
      }); //открытие попапа с картинкой
  }

  //функция добавления карточек
  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    //добавим слушатель
    this._setEventListeners();

    // Добавим данные
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__image').src = this._link;

    // Вернём элемент наружу
    return this._element;
  }
}
