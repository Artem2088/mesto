import 'pages/index.css'; // добавьте импорт главного файла стилей
/*-----------------------------------------------------ПЕРЕМЕННЫЕ--------------------------------------------------------------*/
const root = document.querySelector('.root');
const page = root.querySelector('.page');

const popup = page.querySelector('.popup');

const popupProfile = page.querySelector('.popup-profile');
const popupForm = popupProfile.querySelector('.popup__form');
const popupButtonClose = popupProfile.querySelector('.popup__close-icon');
const nameInput = popupProfile.querySelector('.popup__input_write_name');
const jobInput = popupProfile.querySelector('.popup__input_write_hobby');
const popupInput = popupProfile.querySelector('.popup__input');
const popupOverlay = popup.querySelector('.popup__overlay');

const profile = page.querySelector('.profile');
const popupButtonOpen = profile.querySelector('.profile__edit');
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

const cardsContainer = page.querySelector('.elements');

const elementTemplate = document.querySelector('#element-template').content;

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
//функция открытия всех попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', escPopup);
}
//функция закрытия всех попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeOverlay);
  document.removeEventListener('keydown', escPopup);
}

//Функция открытия popup
function createOpen() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
  openPopup(popupProfile);
}
//Функция отправки данных пользователя  с кнопки в popup
function formSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  closePopup(popupProfile);
  popupForm.reset();
}

//функция добавления карточки
function createAddCards(cardImage, cardTitle) {
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
      openPopup(popupImage);
    });
  return cardElement;
}

//функция добавления карточек с массива
function showInitialCards(initialCards) {
  initialCards.forEach((item) => {
    cardsContainer.append(createAddCards(item.link, item.name));
  });
}
showInitialCards(initialCards);

//функция добавление карточки с кнопки в popup-cards
function formSubmitCards(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createAddCards(urlInput.value, placeInput.value));
  closePopup(popupCards);
}

//Функция закрытия попапа с ESC
function escPopup(evt) {
  const key = evt.key;
  if (key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}
//Функция закрытия попапа на оверлей
function closeOverlay(evt) {
  if (
    !evt.target.closest('.popup__container') &&
    !evt.target.closest('.popup-image__block')
  ) {
    closePopup(evt.target.closest('.popup'));
  }
}

/*-------------------------------------------------------СОБЫТИЯ--------------------------------------------------------------------*/
popupCardsForm.addEventListener('submit', formSubmitCards); //добавляем картинку
popupForm.addEventListener('submit', formSubmitProfile); //меняем информацию в профиле
popupButtonOpen.addEventListener('click', createOpen); //открытие попапа
profileButton.addEventListener('click', () => openPopup(popupCards)); //открытие попапа с добавлением карточек с кнопки

popupButtonClose.addEventListener('click', () => closePopup(popupProfile)); //закрытие попапа
popupCardsCloseButton.addEventListener(
  'click',
  () => closePopup(popupCards),
  popupForm.reset()
); //закрытие попапа с картинкой
popupImageCloseIcon.addEventListener('click', () => closePopup(popupImage)); //закрытие попапа с картинкой
