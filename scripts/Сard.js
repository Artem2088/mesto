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

// //класс карточки
// export default class Card {
//   // в конструкторе будут динамические данные,
//   // для каждого экземпляра свои
//   constructor(data, handleCardClick) {
//     // name и link — приватные поля,
//     // они нужны только внутри класса
//     this._name = data.name;
//     this._link = data.link;
//     this._handleCardClick = handleCardClick;
//   }

//   _getTemplate() {
//     // забираем разметку из HTML и клонируем элемент
//     const cardElement = elementTemplate
//       .querySelector('.element')
//       .cloneNode(true);
//     // вернём DOM-элемент карточки
//     return cardElement;
//   }

//   //функция лайка
//   _createLikeCards() {
//     this._element
//       .querySelector('.element__icon')
//       .classList.toggle('element__icon_active');
//   }

//   //функция удаления карточки
//   _deleteCard() {
//     this._element
//       .querySelector('.element__delete')
//       .closest('.element')
//       .remove();
//   }

//   //функция открытия попапа с картинкой
//   _createOpenImage() {
//     this._handleCardClick();
//     /*popupImagePicture.src = this._link;
//     popupImagePicture.alt = this._name;
//     popupImageDescription.textContent = this._name;*/
//     createPopupOpen.open(popupImage);
//     //openPopup(popupImage);
//   }
//   //слушатели
//   _setEventListeners() {
//     this._element
//       .querySelector('.element__icon')
//       .addEventListener('click', () => {
//         this._createLikeCards();
//       }); //слушатель лайка
//     this._element
//       .querySelector('.element__delete')
//       .addEventListener('click', () => {
//         this._deleteCard(); //удаление карточки
//       });
//     this._element
//       .querySelector('.element__image')
//       .addEventListener('click', () => {
//         createPopupOpenCards.open(popupImage);
//       }); //открытие попапа с картинкой
//   }

//   //функция добавления карточек
//   generateCard() {
//     // Запишем разметку в приватное поле _element.
//     // Так у других элементов появится доступ к ней.
//     this._element = this._getTemplate();
//     //добавим слушатель
//     this._setEventListeners();

//     // Добавим данные
//     this._element.querySelector('.element__title').textContent = this._name;
//     this._element.querySelector('.element__image').alt = this._name;
//     this._element.querySelector('.element__image').src = this._link;

//     // Вернём элемент наружу
//     return this._element;
//   }
// }
