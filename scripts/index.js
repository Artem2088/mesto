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
      evt.target.classList.toggle('element__icon_active');
    });
  //удалить карточку
  cardElement
    .querySelector('.element__delete')
    .addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
    });
  //открыть попап с картинкой
  cardElementImage.addEventListener('click', function () {
    popupImagePicture.src = cardImage;
    popupImage.alt = cardTitle;
    popupImageDescription.textContent = cardTitle;
    openPopup(popupImage);
  });
  return cardElement;
}

//функция добавление карточки с кнопки в popup-cards
function createformSubmitCards(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createAddCards(urlInput.value, placeInput.value));
  closePopup(popupCards);
  popupCardsForm.reset();
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
  // Создадим экземпляр карточки
  const card = new Card(item);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement);
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
