/*-----------Объявляем переменные----------------------------------*/
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const openPopupButton = document.querySelector('.profile__edit');
const closePopupButton = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileHobby = document.querySelector('.profile__hobby');
const nameInput = document.querySelector('.popup__input_write_name');
const jobInput = document.querySelector('.popup__input_write_hobby');

/*--------------------------------Функция открытия popup----------------------*/
function open() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
}
openPopupButton.addEventListener('click', open);
/*-----------------------Отправка данных с кнопки в popup-----------------------*/
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  close();
}

popupForm.addEventListener('submit', formSubmitHandler);
closePopupButton.addEventListener('click', close);

/*--------------------------------Функция закрытия popup----------------------*/
function close() {
  popup.classList.remove('popup_opened');
}
