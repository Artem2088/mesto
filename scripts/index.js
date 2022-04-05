//Импорт
import { Card } from '../scripts/card.js';
import {
  popupCardsForm,
  popupForm,
  popupButtonOpen,
  profileButton,
  popupButtonClose,
  popupCardsCloseButton,
  popupImageCloseIcon,
  popupCards,
  nameInput,
  jobInput,
  profileName,
  profileHobby,
  popupProfile,
  cardsContainer,
  urlInput,
  placeInput,
  elementTemplate,
  popupCardsButton,
  popupImagePicture,
  popupImage,
  popupImageDescription,
} from '../utils/constant.js';
export { popupImagePicture, popupImage, popupImageDescription, openPopup };
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
  disableSubmitButtonElement(popupCardsButton, object);
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
popupCardsForm.addEventListener('submit', createformSubmitCards); //добавляем картинку
popupForm.addEventListener('submit', createformSubmitProfile); //меняем информацию в профиле
popupButtonOpen.addEventListener('click', createOpen); //открытие попапа
profileButton.addEventListener('click', () => openPopup(popupCards)); //открытие попапа с добавлением карточек с кнопки

popupButtonClose.addEventListener('click', () => closePopup(popupProfile)); //закрытие попапа
popupCardsCloseButton.addEventListener('click', () => closePopup(popupCards)); //закрытие попапа с картинкой
popupImageCloseIcon.addEventListener('click', () => closePopup(popupImage)); //закрытие попапа с картинкой
