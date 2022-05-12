import Section from './scripts/Section.js';
import Card from './scripts/Сard.js';
import FormValidator from './scripts/FormValidator.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import {
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
} from '../src/scripts/utils/Constants.js';
import '../src/pages/index.css'; // добавьте импорт главного файла стилей

//Import картинок для Webpack
const Arhiz = new URL('../../images/arkhyz.jpg', import.meta.url);
const Chelybinsk = new URL(
  '../../images/chelyabinsk-oblast.jpg',
  import.meta.url
);
const Ivanovo = new URL('../../images/ivanovo.jpg', import.meta.url);
const Kamchatka = new URL('../../images/Kamchatka.jpg', import.meta.url);
const Holmogorskiy = new URL(
  '../../images/kholmogorsky-rayon.jpg',
  import.meta.url
);
const Baykal = new URL('../../images/baikal.jpg', import.meta.url);
//массив 6 стандартных карточек для Webpack
export const initialCards = [
  { name: 'Архыз', link: Arhiz },
  { name: 'Челябинская область', link: Chelybinsk },
  { name: 'Иваново', link: Ivanovo },
  { name: 'Камчатка', link: Kamchatka },
  { name: 'Холмогорский район', link: Holmogorskiy },
  { name: 'Байкал', link: Baykal },
];

// Константа содержащая в себе все карточки
const cardsList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(
        {
          data: item,
          handleCardClick: (name, link) => {
            const popupImage = new PopupWithImage(
              {
                name: name,
                link: link,
              },
              popupImageContainer
            );
            popupImage.open();
            popupImage.setEventListeners();
          },
        },
        '.elements-template'
      );
      const cardElement = card.generateCard();
      cardsList.setItem(cardElement);
    },
  },
  placesListContainer
);

// Константа содержащая в себе карточку с данными из формы
const formAddCard = new PopupWithForm({
  submitForm: (formData) => {
    formData['name'] = formData['popup-input-place-name'];
    formData['link'] = formData['popup-input-url'];
    delete formData['popup-input-place-name'];
    delete formData['popup-input-url'];
    const card = new Card(
      {
        data: formData,
        handleCardClick: (name, link) => {
          const popupImage = new PopupWithImage(
            {
              name: name,
              link: link,
            },
            popupImageContainer
          );
          popupImage.open();
          popupImage.setEventListeners();
        },
      },
      '.elements-template'
    );
    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
  },
  container: popupAddCardContainer,
});

// Экземпляр класса с информацией юзера
const userInfo = new UserInfo({
  titleContainer: profileTitleContainer,
  subTitleContainer: profileSubtitleContainer,
});

const formProfile = new PopupWithForm({
  submitForm: (formData) => {
    userInfo.setUserInfo(formData);
  },
  container: popupProfileContainer,
});

// Отрисовка карточек
cardsList.renderItems();

// Создаем валидацию для формы редактирования профиля
const editPupupValidator = new FormValidator(
  validationConfigPopup,
  popupFormEditContainer
);
editPupupValidator.enableValidation();

// Создаем валидацию для формы добавления новой картоки
const addPupupValidator = new FormValidator(
  validationConfigPopup,
  popupFormAddContainer
);
addPupupValidator.enableValidation();

// Отслеживаем событие клика кнопки "редактировать"
profileEditButton.addEventListener('click', () => {
  popupNameField.value = userInfo.getUserInfo().title;
  popupStatusField.value = userInfo.getUserInfo().subtitle;
  formProfile.open();
  formProfile.setEventListeners();
});

// Отслеживаем событие клика кнопки "добавить карточку"
profileAddButton.addEventListener('click', () => {
  formAddCard.open();
  formAddCard.setEventListeners();
});
