import FormValidator from '../scripts/formValidator.js';
import Card from '../scripts/card.js';
import Section from '../scripts/section.js';
import Popup from '../scripts/popup.js';
import PopupWithImage from '../scripts/popupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';

const createFormValidCards = new FormValidator(object, popupCardsForm);
const createFormValidProfile = new FormValidator(object, popupForm);

createFormValidCards.enableValidation();
createFormValidProfile.enableValidation();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardList.addItem(renderCard(data));
    },
  },
  cardsContainer
);
cardList.renderAllCards(data);

const createPopupOpenProfile = new Popup(popup);
createPopupOpenProfile.open();

const createPopupOpenCards = new Popup(popup);
createPopupOpenCards.open(popupCards);

const createPopupClose = new Popup(popup);
createPopupClose.close();

const createEvtPopup = new Popup();
createEvtPopup.setEventListeners();

const createPopupWithForm = new PopupWithForm(popup, {
  renderPopupWithForm: (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;
    createPopupClose.close();
  },
});
createPopupWithForm.setEventListeners();

const createPopupWithImage = new PopupWithImage(popup);
createPopupWithImage.setEventListeners();

//Функция открытия popup profile
/*function createOpen() {
  createFormValidProfile.resetValidationForm();
  createPopupOpenProfile.open();
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
}*/

//Функция отправки данных пользователя  с кнопки в popup
function createformSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  createPopupClose.close();
}

//функция добавление карточки с кнопки в popup-cards
function createformSubmitCards(e) {
  e.preventDefault();
  data.name = placeInput.value;
  data.link = urlInput.value;
  cardsContainer.prepend(renderCard(data));
  createPopupClose.close();
  popupCardsForm.reset(popupCards);
}

//функция добавления карточки
function renderCard(data) {
  // Создадим экземпляр карточки
  const card = new Card(data);
  // Создаём карточку и возвращаем наружу
  const cardGenerate = card.generateCard();
  return cardGenerate;
}

/*-------------------------------------------------------СОБЫТИЯ--------------------------------------------------------------------*/

popupCardsForm.addEventListener('submit', createformSubmitCards); //добавляем картинку
popupForm.addEventListener('submit', createformSubmitProfile); //меняем информацию в профиле
popupButtonOpen.addEventListener(
  'click',
  () =>
    createPopupOpenProfile.open() ||
    createFormValidProfile.resetValidationForm() /*createOpen*/
); //открытие попапа
profileButton.addEventListener(
  'click',
  () =>
    createPopupOpenCards.open() /*openPopup(popupCards)*/ ||
    createFormValidCards.resetValidationForm()
); //открытие попапа с добавлением карточек с кнопки
