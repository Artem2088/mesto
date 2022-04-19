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

const elementTemplate = document.querySelector('#element-template').content;
const root = document.querySelector('.root');
const page = root.querySelector('.page');

const popup = page.querySelector('.popup');

const popupProfile = page.querySelector('.popup-profile');
const popupForm = popupProfile.querySelector('.popup__form');
const popupButtonClose = popupProfile.querySelector('.popup__close-icon');
const nameInput = popupProfile.querySelector('.popup__input_write_name');
const jobInput = popupProfile.querySelector('.popup__input_write_hobby');
const popupInput = popupProfile.querySelector('.popup__input');
const popupButton = popupProfile.querySelectorAll('.popup__button');

const profile = page.querySelector('.profile');
const popupButtonOpen = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileHobby = profile.querySelector('.profile__hobby');
const profileButton = profile.querySelector('.profile__button');

const popupCards = page.querySelector('.popup-cards');
const popupCardsButton = popupCards.querySelector('.popup-cards__button');
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

const object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  labelSelector: '.popup__label',
  inputError: '.popup__input-error',
  inputErrorButtonLine: 'popup__input_type_error',
};
