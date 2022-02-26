const popup = document.querySelector('.popup');
const popupOpened = document.querySelector('.popup_opened');
const popupForm = document.querySelector('.popup__form');
const openpopupButton = document.querySelector('.profile__edit'); 
const closepopupButton = document.querySelector('.popup__close-icon');
const profileInfo = document.querySelector('.profile__info');
const profileName = document.querySelector('.profile__name');
const profileHobby = document.querySelector('.profile__hobby');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__hobby');

openpopupButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.innerText;
    jobInput.value = profileHobby.innerText;
});

closepopupButton.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;  
}
popupForm.addEventListener('submit', formSubmitHandler); 
