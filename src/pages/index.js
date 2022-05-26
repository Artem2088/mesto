import './index.css';
import {
  validationConfigPopup,
  profileAvatarEditButton,
  profileAvatarSelector,
  profileNameSelector,
  profileAboutSelector,
  profileEditButton,
  addCardButton,
  popupProfileSelector,
  popupNewPlaceSelector,
  popupViewerSelector,
  popupConfirmSelector,
  popupUpdateAvatarSelector,
  cardsContainerSelector,
  cardSelector,
} from '../scripts/utils/Constants.js';
import Api from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirm from '../scripts/components/PopupWithConfirm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: '5f9407a9-a0bd-4092-b98d-e17e22763f4f',
    'Content-Type': 'application/json',
  },
});

const userInfo = new UserInfo({
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector,
});

api
  .getPageNeedData()
  .then((responses) => {
    const [cardData, userData] = responses;
    userInfo.setUserInfo({
      userName: userData.name,
      userDescription: userData.about,
    });
    userInfo.setUserAvatar({ userAvatarLink: userData.avatar });
    userInfo.saveUserId(userData._id);
    cards.renderItems(cardData);
  })
  .catch((err) => {
    console.error(err);
  });

const cards = new Section(
  {
    renderer: (item) => {
      const cardElement = createNewCard(item, cardSelector);
      cards.addItem(cardElement);
    },
  },
  cardsContainerSelector
);

const popupUpdateAvatar = new PopupWithForm(
  popupUpdateAvatarSelector,
  (evt) => {
    evt.preventDefault();
    popupUpdateAvatar.renderLoading(true);
    const formValues = popupUpdateAvatar.getFormValues();
    api
      .updateProfileAvatar({ avatar: formValues.url })
      .then((data) => {
        userInfo.setUserAvatar({ userAvatarLink: data.avatar });
        popupUpdateAvatar.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        popupUpdateAvatar.renderLoading(false);
      });
  }
);
popupUpdateAvatar.setEventListener();
const popupUpdateAvatarValidator = new FormValidator(
  validationConfigPopup,
  popupUpdateAvatar.getFormElement()
);
popupUpdateAvatarValidator.enableValidation();
document
  .querySelector(profileAvatarEditButton)
  .addEventListener('click', () => {
    popupUpdateAvatarValidator.resetValidation();
    popupUpdateAvatar.open();
  });

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  popupProfile.renderLoading(true);
  const formValues = popupProfile.getFormValues();
  api
    .updateUserInfo({ name: formValues.title, about: formValues.subtitle })
    .then((data) => {
      userInfo.setUserInfo({
        userName: data.name,
        userDescription: data.about,
      });
      popupProfile.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    });
});
popupProfile.setEventListener();
const popupProfileValidator = new FormValidator(
  validationConfigPopup,
  popupProfile.getFormElement()
);
popupProfileValidator.enableValidation();

const popupNewPlace = new PopupWithForm(popupNewPlaceSelector, (evt) => {
  evt.preventDefault();
  popupNewPlace.renderLoading(true);
  const formValues = popupNewPlace.getFormValues();
  const item = { name: formValues.name, link: formValues.url };
  api
    .addNewCard(item)
    .then((newCardItem) => {
      const cardElement = createNewCard(newCardItem, cardSelector);
      cards.addNewItem(cardElement);
      popupNewPlace.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      popupNewPlace.renderLoading(false);
    });
});
popupNewPlace.setEventListener();
const popupNewPlaceValidator = new FormValidator(
  validationConfigPopup,
  popupNewPlace.getFormElement()
);
popupNewPlaceValidator.enableValidation();

const popupConfirm = new PopupWithConfirm(popupConfirmSelector);
popupConfirm.setEventListener();

const popupViewer = new PopupWithImage(popupViewerSelector);
popupViewer.setEventListener();

profileEditButton.addEventListener('click', () => {
  const userInfoData = userInfo.getUserInfo();
  const profileForm = popupProfile.getFormElement();
  profileForm.elements.name.value = userInfoData.userName;
  profileForm.elements.description.value = userInfoData.userDescription;
  popupProfileValidator.resetValidation();
  popupProfile.open();
});

addCardButton.addEventListener('click', () => {
  popupNewPlaceValidator.resetValidation();
  popupNewPlace.open();
});

function createNewCard(item, cardSelector) {
  const card = new Card({
    data: item,
    cardSelector,
    userId: userInfo.getUserId(),
    handleCardClick: () => {
      popupViewer.open(item.link, item.name);
    },
    handleLikeButtonClick: () => {
      if (card.isLiked) {
        api
          .deleteCardLike(card.getCardId())
          .then((data) => {
            card.resetLike();
            card.updatelikesCounter(data.likes);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        api
          .addCardLike(card.getCardId())
          .then((data) => {
            card.setLike();
            card.updatelikesCounter(data.likes);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    handleRemoveButtonClick: (evt) => {
      const cardElement = evt.target.closest('.element');
      const cardId = card.getCardId();
      popupConfirm.changeHandlerSubmitForm((evt) => {
        evt.preventDefault();
        api
          .removeCard(cardId)
          .then(() => {
            cardElement.remove();
            popupConfirm.close();
          })
          .catch((err) => {
            console.error(err);
          });
      });
      popupConfirm.open();
    },
  });
  return card.generateCard();
}
