//массив с карточками
export const initialCards = [
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
export const elementTemplate =
  document.querySelector('#element-template').content;
export const root = document.querySelector('.root');
export const page = root.querySelector('.page');

export const popup = page.querySelector('.popup');

export const popupProfile = page.querySelector('.popup-profile');
export const popupForm = popupProfile.querySelector('.popup__form');
export const popupButtonClose =
  popupProfile.querySelector('.popup__close-icon');
export const nameInput = popupProfile.querySelector('.popup__input_write_name');
export const jobInput = popupProfile.querySelector('.popup__input_write_hobby');
export const popupInput = popupProfile.querySelector('.popup__input');
export const popupButton = popupProfile.querySelectorAll('.popup__button');

export const profile = page.querySelector('.profile');
export const popupButtonOpen = profile.querySelector('.profile__edit');
export const profileName = profile.querySelector('.profile__name');
export const profileHobby = profile.querySelector('.profile__hobby');
export const profileButton = profile.querySelector('.profile__button');

export const popupCards = page.querySelector('.popup-cards');
export const popupCardsButton = popupCards.querySelector(
  '.popup-cards__button'
);
export const popupCardsCloseButton = popupCards.querySelector(
  '.popup-cards__close-icon'
);
export const popupCardsForm = popupCards.querySelector('.popup-cards__form');

export const placeInput = popupCards.querySelector('.popup__input_write_place');
export const urlInput = popupCards.querySelector('.popup__input_write_url');

export const popupImage = page.querySelector('.popup-image');
export const popupImageDescription = popupImage.querySelector(
  '.popup-image__description'
);
export const popupImagePicture = popupImage.querySelector(
  '.popup-image__picture'
);
export const popupImageCloseIcon = popupImage.querySelector(
  '.popup-image__close-icon'
);

export const cardsContainer = page.querySelector('.elements');

export const object = {
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
