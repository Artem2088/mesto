/*-----------------------------------------------------ПЕРЕМЕННЫЕ--------------------------------------------------------------*/
const root = document.querySelector('.root');
const page = root.querySelector('.page');

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

//массив с карточками
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
/*-------------------------------------------------------ФУНКЦИИ------------------------------------------------------------*/
//Функция открытия popup
function createOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
}
//Функция отправки данных пользователя  с кнопки в popup
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  createClose();
  popupForm.reset();
}
//Функция закрытия popup
function createClose() {
  popup.classList.remove('popup_opened');
}
//функция открытия попапа с добавлением карточек
function createOpenCards() {
  popupCards.classList.add('popup_opened');
  placeInput.value;
  urlInput.value;
}
//закрытие попапа
function createCloseCards() {
  popupCards.classList.remove('popup_opened');
}
//Функция вызова попапа с картинки
function createOpenImage() {
  popupImage.classList.add('popup_opened');
}
//функция закрытия попапа картинки
function createCloseImage() {
  popupImage.classList.remove('popup_opened');
}
//функция добавления карточки
function createAddCards(cardImage, cardTitle) {
  const elementTemplate = document.querySelector('#element-template').content;
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.element__image');
  const cardElementTitle = cardElement.querySelector('.element__title');

  cardElementTitle.textContent = cardTitle;
  cardElementImage.src = cardImage;
  cardElementImage.alt = cardTitle;
  //лайк для карточки
  cardElement
    .querySelector('.element__icon')
    .addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      evt.target.classList.toggle('element__icon_active');
    });
  //удалить карточку
  cardElement
    .querySelector('.element__delete')
    .addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      evt.target.closest('.element').remove();
    });
  //открыть попап с картинкой
  cardElement
    .querySelector('.element__image')
    .addEventListener('click', function () {
      popupImagePicture.src = cardImage;
      popupImage.alt = cardTitle;
      popupImageDescription.textContent = cardTitle;
      createOpenImage();
    });
  return cardElement;
}
createAddCards();
//функция добавления карточек с массива
function showInitialCards(initialCards) {
  initialCards.forEach((item) => {
    elementList.append(createAddCards(item.link, item.name));
  });
}
showInitialCards(initialCards);

//функция добавление карточки с кнопки в popup-cards
function formSubmitCards(evt) {
  evt.preventDefault();
  elementList.prepend(createAddCards(urlInput.value, placeInput.value));
  createCloseCards();
  popupCardsForm.reset();
}

/*-------------------------------------------------------СОБЫТИЯ--------------------------------------------------------------------*/
popupCardsForm.addEventListener('submit', formSubmitCards); //добавляем картинку
popupForm.addEventListener('submit', formSubmitHandler); //меняем информацию в профиле
closePopupButton.addEventListener('click', createClose); //закрытие попапа
profileButton.addEventListener('click', createOpenCards); //открытие попапа с добавлением карточек с кнопки
popupCardsCloseButton.addEventListener('click', createCloseCards); //закрытие попапа с картинкой
popupImageCloseIcon.addEventListener('click', createCloseImage); //закрытие попапа с картинкой
openPopupButton.addEventListener('click', createOpen); //открытие попапа
