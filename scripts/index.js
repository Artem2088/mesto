import FormValidator from './formValidator.js';
import Card from './card.js';

/*-------------------------------------------------------ФУНКЦИИ------------------------------------------------------------*/
const createFormValidCards = new FormValidator(object, popupCardsForm);
const createFormValidProfile = new FormValidator(object, popupForm);

createFormValidCards.enableValidation();
createFormValidProfile.enableValidation();

//функция открытия всех попап
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
}

//Функция открытия popup
function createOpen() {
  createFormValidProfile.resetValidationForm();
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
  openPopup(popupProfile);
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
  cardsContainer.prepend(renderCards(data));
  closePopup(popupCards);
  popupCardsForm.reset();
}

//функция добавления карточки
function renderCards(data) {
  // Создадим экземпляр карточки
  const card = new Card(data);
  // Создаём карточку и возвращаем наружу
  const cardGenerate = card.generateCard();
  return cardGenerate;
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

//функция добавления карточек с массива
initialCards.forEach((item) => {
  renderCards(item);
  // Добавляем в DOM
  cardsContainer.append(renderCards(item));
});

/*-------------------------------------------------------СОБЫТИЯ--------------------------------------------------------------------*/

popupCardsForm.addEventListener('submit', createformSubmitCards); //добавляем картинку
popupForm.addEventListener('submit', createformSubmitProfile); //меняем информацию в профиле
popupButtonOpen.addEventListener('click', createOpen); //открытие попапа
profileButton.addEventListener(
  'click',
  () => openPopup(popupCards) || createFormValidCards.resetValidationForm()
); //открытие попапа с добавлением карточек с кнопки

popupButtonClose.addEventListener('click', () => closePopup(popupProfile)); //закрытие попапа
popupCardsCloseButton.addEventListener('click', () => closePopup(popupCards)); //закрытие попапа с картинкой
popupImageCloseIcon.addEventListener('click', () => closePopup(popupImage)); //закрытие попапа с картинкой
