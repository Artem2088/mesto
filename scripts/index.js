import Section from './Section.js';
import Card from './Сard.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
// import {
//   initialCards,
//   validationConfigPopup,
//   profileEditButton,
//   profileAddButton,
//   popupFormAddContainer,
//   popupFormEditContainer,
//   popupImageContainer,
//   placesListContainer,
//   popupAddCardContainer,
//   popupProfileContainer,
//   profileTitleContainer,
//   profileSubtitleContainer,
//   popupNameField,
//   popupStatusField,
// } from './constants.js';

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

// import FormValidator from './formValidator.js';
// import Card from './card.js';
// import Section from './section.js';
// import Popup from './popup.js';
// import PopupWithImage from './popupWithImage.js';
// import PopupWithForm from './PopupWithForm.js';
// import UserInfo from './UserInfo.js';

// const createFormValidCards = new FormValidator(object, popupCardsForm);
// const createFormValidProfile = new FormValidator(object, popupForm);

// createFormValidCards.enableValidation();
// createFormValidProfile.enableValidation();

// const cardList = new Section(
//   {
//     items: initialCards,
//     renderer: (data) => {
//       cardList.addItem(renderCard(data));
//     },
//   },
//   cardsContainer
// );
// cardList.renderAllCards(data);

// const createPopupOpenCards = new Popup(popupContainer);
// createPopupOpenCards.open(popupContainer);

// /*const createPopupOpenCards = new Popup(popupCards);
// createPopupOpenCards.open(popupCards);*/

// function handleCardClick() {
//   popupImagePicture.src = this._link;
//   popupImagePicture.alt = this._name;
//   popupImageDescription.textContent = this._name;
// }

// const createPopupClose = new Popup();
// createPopupClose.close();

// // const createEvtPopup = new Popup();
// // createEvtPopup.setEventListeners();

// /*const createPopupWithFormCards = new PopupWithForm(popupCards);
// createPopupWithFormCards.setEventListeners();*/

// // const createPopupWithForm = new PopupWithForm({
// //   popupProfile,
// //   callbackWithForm: (evt) => {
// //     evt.preventDefault();
// //     profileName.textContent = nameInput.value;
// //     profileHobby.textContent = jobInput.value;
// //     createPopupClose.close();
// //   },
// // });
// // createPopupWithForm.setEventListeners();

// const popupAddCard = new PopupWithForm({
//   callbackWithForm: (formData) => {
//     const cardElem = renderCard.generateCard();
//     cardList.addItem(cardElem);
//   },
// });

// /*const createPopupWithImage = new PopupWithImage(popup);
// createPopupWithImage.setEventListeners();*/

// const userinfo = new UserInfo({
//   profileName: profileName,
//   profileHobby: profileHobby,
// });

// const profielAddCard = new PopupWithForm({
//   callbackWithForm: (formData) => {
//     userinfo.setUserInfo(data);
//   },
// });

// //Функция открытия popup profile
// /*function createOpen() {
//   createFormValidProfile.resetValidationForm();
//   createPopupOpenProfile.open();
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileHobby.textContent;
// }*/

// //Функция отправки данных пользователя  с кнопки в popup
// function createformSubmitProfile(evt) {
//   evt.preventDefault();
//   //profileName.textContent = nameInput.value;
//   // profileHobby.textContent = jobInput.value;
//   createPopupClose.close();
// }

// //функция добавление карточки с кнопки в popup-cards
// function createformSubmitCards(e) {
//   e.preventDefault();
//   data.name = placeInput.value;
//   data.link = urlInput.value;
//   cardsContainer.prepend(renderCard(data));
//   createPopupClose.close();
//   popupCardsForm.reset(popupCards);
// }

// //функция добавления карточки
// function renderCard(data) {
//   // Создадим экземпляр карточки
//   const card = new Card(data);
//   // Создаём карточку и возвращаем наружу
//   const cardGenerate = card.generateCard();
//   return cardGenerate;
// }

// /*-------------------------------------------------------СОБЫТИЯ--------------------------------------------------------------------*/

// popupAddCard.setEventListeners();
// profielAddCard.setEventListeners();

// popupCardsForm.addEventListener('submit', createformSubmitCards); //добавляем картинку
// popupForm.addEventListener('submit', createformSubmitProfile); //меняем информацию в профиле
// // popupButtonOpen.addEventListener('click', () => {
// //   createPopupWithForm.open(popupProfile) ||
// //     createFormValidProfile.resetValidationForm(); /*createOpen*/
// // });

// popupButtonOpen.addEventListener('click', () => {
//   const dataUserInfo = userinfo.getUserInfo();
//   profileName.value = dataUserInfo.name;
//   profileHobby.value = dataUserInfo.about;
//   profielAddCard.open();
// });

// popupButtonOpen.addEventListener('click', () => {
//   popupAddCard.open();
// });

// //открытие попапа
// profileButton.addEventListener('click', () => {
//   createPopupOpenCards.open(popupCards) /*openPopup(popupCards)*/ ||
//     createFormValidCards.resetValidationForm();
// }); //открытие попапа с добавлением карточек с кнопки
