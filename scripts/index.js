/*-----------Объявляем переменные----------------------------------*/
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const openPopupButton = document.querySelector('.profile__edit');
const closePopupButton = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileHobby = document.querySelector('.profile__hobby');
const nameInput = document.querySelector('.popup__input_write_name');
const jobInput = document.querySelector('.popup__input_write_hobby');
const profileButton = document.querySelector('.profile__button');
const popupCards = document.querySelector('.popup-cards');
const popupCardsCloseButton = document.querySelector(
  '.popup-cards__close-icon'
);
const elementImage = document.querySelector('.element__image');
const elementTitle = document.querySelector('.element__title');
const placeInput = document.querySelector('.popup__input_write_place');
const urlInput = document.querySelector('.popup__input_write_url');
const popupImage = document.querySelector('.popup-image');
const popupImageCloseIcon = document.querySelector('.popup-image__close-icon');
const elementList = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;

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
openPopupButton.addEventListener('click', open);
/*-----------------------Функция отправки данных пользователя  с кнопки в popup-----------------------*/
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  close();
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
/*-----------------------Отправка данных с кнопки в popup-cards-----------------------*/
function formSubmitCards(evt) {
  evt.preventDefault();
  elementTitle.textContent = placeInput.value;
  elementImage.textContent = urlInput.value;
  closeCards();
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

initialCards.forEach(function (item) {
  const cardElement = elementTemplate.cloneNode(true);

  cardElement.querySelector('.element__title').textContent = item.name;
  cardElement.querySelector('.element__image').src = item.link;
  cardElement
    .querySelector('.element__icon')
    .addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      evt.target.classList.toggle('element__icon_active'); //функция активации/дезактивации кнопки лайк
    });
  elementList.append(cardElement);
});
/*---------------------функция добавления  иконки удаления------------------*/
function addElementDelete() {
  const elementDelete = document.createElement('button');
  elementDelete.classList.add('element__delete');
  cardElement.append(elementDelete);
}
/*------------------------------------СОБЫТИЯ--------------------------*/
popupForm.addEventListener('submit', formSubmitHandler);

closePopupButton.addEventListener('click', close);
/*-----------------------------открытие попапа с добавлением карточек с кнопки------------------*/
profileButton.addEventListener('click', openCards);

popupCardsCloseButton.addEventListener('click', closeCards);

/*-----------------------------------вешаем событие на картинку-----------------*/
cardElement.addEventListener('click', openImage);

/*---------------------------------вешаем событие на закрытие попапа с картинкой----------------------*/
popupImageCloseIcon.addEventListener('click', closeImage);
