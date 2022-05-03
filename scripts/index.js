import FormValidator from './formValidator.js';
import Card from './card.js';
import Section from './section.js';
import Popup from './popup.js';

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

const createPopupOpen = new Popup(popup);
createPopupOpen.open();

const createPopupClose = new Popup(popup);
createPopupClose.close();

/*//функция открытия всех попап
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', escPopup);
}
//функция закрытия всех попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeOverlay);
  document.removeEventListener('keydown', escPopup);
}*/

//Функция открытия popup profile
function createOpen() {
  createFormValidProfile.resetValidationForm();
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
  createPopupOpen.open();
  //openPopup(popupProfile);
}

//Функция отправки данных пользователя  с кнопки в popup
function createformSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  closePopup(popupProfile);
}

//функция добавление карточки с кнопки в popup-cards
function createformSubmitCards(e) {
  e.preventDefault();
  data.name = placeInput.value;
  data.link = urlInput.value;
  cardsContainer.prepend(renderCard(data));
  closePopup(popupCards);
  popupCardsForm.reset();
}

//функция добавления карточки
function renderCard(data) {
  // Создадим экземпляр карточки
  const card = new Card(data);
  // Создаём карточку и возвращаем наружу
  const cardGenerate = card.generateCard();
  return cardGenerate;
}

//Функция закрытия попапа с ESC
export function escPopup(evt) {
  const key = evt.key;
  if (key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//Функция закрытия попапа на оверлей
export function closeOverlay(evt) {
  if (
    !evt.target.closest('.popup__container') &&
    !evt.target.closest('.popup-image__block')
  ) {
    closePopup(evt.target.closest('.popup'));
  }
}

/*-------------------------------------------------------СОБЫТИЯ--------------------------------------------------------------------*/

popupCardsForm.addEventListener('submit', createformSubmitCards); //добавляем картинку
popupForm.addEventListener('submit', createformSubmitProfile); //меняем информацию в профиле
popupButtonOpen.addEventListener('click', createOpen); //открытие попапа
profileButton.addEventListener(
  'click',
  () =>
    createPopupOpen.open() /*openPopup(popupCards)*/ ||
    createFormValidCards.resetValidationForm()
); //открытие попапа с добавлением карточек с кнопки

popupButtonClose.addEventListener(
  'click',
  () => createPopupClose.close(popupProfile) /*closePopup(popupProfile)*/
); //закрытие попапа
popupCardsCloseButton.addEventListener(
  'click',
  () => createPopupClose.close(popupCards) /*closePopup(popupCards)*/
); //закрытие попапа с картинкой
popupImageCloseIcon.addEventListener(
  'click',
  () => createPopupClose.close(popupImage) /*closePopup(popupImage)*/
); //закрытие попапа с картинкой
