const pupup = document.querySelector('.pupup');
const pupupOpened = document.querySelector('.pupup_opened');
const pupupForm = document.querySelector('.pupup__form');
const openPupupButton = document.querySelector('.profile__edit'); 
const closePupupButton = document.querySelector('.pupup__close-icon');
const profileInfo = document.querySelector('.profile__info');
const profileName = document.querySelector('.profile__name');
const profileHobby = document.querySelector('.profile__hobby');
const nameInput = document.querySelector('.pupup__name');
const jobInput = document.querySelector('.pupup__hobby');

openPupupButton.addEventListener('click', function() {
    pupup.classList.add('pupup_opened');
    nameInput.value = profileName.innerText;
    jobInput.value = profileHobby.innerText;
});

closePupupButton.addEventListener('click', function() {
    pupup.classList.remove('pupup_opened');
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;  
}
pupupForm.addEventListener('submit', formSubmitHandler); 
