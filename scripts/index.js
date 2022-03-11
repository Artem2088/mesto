/*-----------Объявляем переменные----------------------------------*/
const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const closePopupButton = popup.querySelector('.popup__close-icon');
const nameInput = popup.querySelector('.popup__input_write_name');
const jobInput = popup.querySelector('.popup__input_write_hobby');

const profile = page.querySelector('.profile');
const openPopupButton = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileHobby = profile.querySelector('.profile__hobby');
const profileButton = profile.querySelector('.profile__button');

const popupCards = page.querySelector('.popup-cards');
const popupCardsCloseButton = popupCards.querySelector(
  '.popup-cards__close-icon'
);
const popupCardsForm = popupCards.querySelector('.popup-cards__form');

const placeInput = popupCards.querySelector('.popup__input_write_place');
const urlInput = popupCards.querySelector('.popup__input_write_url');

const popupImage = page.querySelector('.popup-image');
const popupImageDescription = popupImage.querySelector(
  '.popup-image__description'
);
const popupImagePicture = popupImage.querySelector('.popup-image__picture');
const popupImageCloseIcon = popupImage.querySelector(
  '.popup-image__close-icon'
);

const elementList = page.querySelector('.elements');
const elementImage = document.querySelector('.element__image');
const elementTitle = document.querySelector('.element__title');

//const elementIcon = document.querySelector('.element__icon');

/*----------------------массив с карточками -------------------------*/
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
/*--------------------------------Функция открытия popup----------------------*/
function open() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
}

/*-----------------------Функция отправки данных пользователя  с кнопки в popup-----------------------*/
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  close();
  popupForm.reset();
}
/*--------------------------------Функция закрытия popup----------------------*/
function close() {
  popup.classList.remove('popup_opened');
}
/*---------------------------------функция открытия попапа с добавлением карточек---------------------*/
function openCards() {
  popupCards.classList.add('popup_opened');
  placeInput.value;
  urlInput.value;
}
/*----------------------------закрытие попапа---------------------*/
function closeCards() {
  popupCards.classList.remove('popup_opened');
}

/*--------------------------------Функция вызова попапа с картинки ---------------------------*/
function openImage() {
  popupImage.classList.add('popup_opened');
}
/*-------------------------------функция закрытия попапа картинки-----------*/
function closeImage() {
  popupImage.classList.remove('popup_opened');
}
/*------------------------------------функция добавления карточек----------------*/
function addCards(itemName, itemLink) {
  const elementTemplate = document.querySelector('#element-template').content;
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardElementImage = elementTemplate.querySelector('.element__image');
  const cardElementTitle = elementTemplate.querySelector('.element__title');

  cardElementTitle.textContent = cardTitle;
  cardElementImage.src = cardImage;
  cardElementImage.alt = cardTitle;
  cardElement
    .querySelector('.element__icon')
    .addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      evt.target.classList.toggle('.element__icon_active');
    });

  cardElement
    .querySelector('.element__delete')
    .addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      evt.target.closest('.element').remove();
    });

  cardElement
    .querySelector('.element__image')
    .addEventListener('click', function () {
      popupImagePicture.src = itemLink;
      popupImage.alt = itemName;
      popupImageDescription.textContent = itemName;
      openImage();
    });
  //return cardElement;
  addCards(item);
}
function renderInitialCards(initialCards) {
  initialCards.forEach((item) => {
    elementList.append(cardElement(item.link, item.name));
  });
}
/*initialCards.forEach(function (item) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = item.name;
  cardElement.querySelector('.element__image').src = item.link;
  elementList.append(cardElement);
});

/*function imageLike(evt) {
  const eventTarget = evt.target;
  evt.target.classList.toggle('element__icon_active');
}
//elementIcon.addEventListener('click', imageLike);

/*функция активации/дезактивации кнопки лайк*/
/*cardElement
  .querySelector('.element__icon')
  .addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    evt.target.classList.toggle('element__icon_active');
  });

/*функция удаления карточки*/
/*cardElement
    .querySelector('.element__delete')
    .addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      evt.target.closest('.element').remove();
    });
  /*открытие попапа с картинки*/
/*cardElement
    .querySelector('.element__image')
    .addEventListener('click', function () {
      popupImagePicture.src = item.link;
      popupImage.alt = item.name;
      popupImageDescription.textContent = item.name;
      openImage();
    });

  elementList.append(cardElement);
});*/

//Добавление карточки с кнопки в popup-cards
function formSubmitCards(evt) {
  evt.preventDefault();
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = urlInput.value;
  cardElement.querySelector('.element__image').alt = placeInput.value;
  cardElement.querySelector('.element__title').textContent = placeInput.value;
  elementList.prepend(cardElement);
  closeCards();
  popupCardsForm.reset();
}

popupCardsForm.addEventListener('submit', formSubmitCards);
/*------------------------------------СОБЫТИЯ--------------------------*/
popupForm.addEventListener('submit', formSubmitHandler);

closePopupButton.addEventListener('click', close);

/*-----------------------------открытие попапа с добавлением карточек с кнопки------------------*/
profileButton.addEventListener('click', openCards);

popupCardsCloseButton.addEventListener('click', closeCards);

/*---------------------------------вешаем событие на закрытие попапа с картинкой----------------------*/
popupImageCloseIcon.addEventListener('click', closeImage);

openPopupButton.addEventListener('click', open);
