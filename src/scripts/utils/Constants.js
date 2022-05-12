// конфиг селекторов Popup
const validationConfigPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputInvalidClass: 'popup__input-error_active',
  buttonInvalidClass: 'popup__button_inactive',
};

// Выбираем элементы Popup's
const popupProfileContainer = document.querySelector('#popup-profile');
const popupAddCardContainer = document.querySelector('#popup-add-card');
const popupImageContainer = document.querySelector('#popup-image');
// Выбираем формы по id
const popupFormAddContainer = document.querySelector('#popup-form-add');
const popupFormEditContainer = document.querySelector('#popup-form-edit');
// Выбираем елементы форм
const popupNameField = document.querySelector('.popup__input_write_name');
const popupStatusField = document.querySelector('.popup__input_write_hobby');

// Выбираем элементы блока Profile
const profileTitleContainer = document.querySelector('.profile__name');
const profileSubtitleContainer = document.querySelector('.profile__hobby');
const profileEditButton = document.querySelector('.profile__edit');
const profileAddButton = document.querySelector('.profile__button');
// Выбираем контейнер для карточек
const placesListContainer = document.querySelector('.elements');

export {
  validationConfigPopup,
  popupProfileContainer,
  popupAddCardContainer,
  popupImageContainer,
  popupFormAddContainer,
  popupFormEditContainer,
  popupNameField,
  popupStatusField,
  profileTitleContainer,
  profileSubtitleContainer,
  profileEditButton,
  profileAddButton,
  placesListContainer,
};
