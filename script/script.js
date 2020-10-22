let editBtn = document.querySelector('.profile__edit-btn');
let closeBtn = document.querySelector('.popup__close-btn');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input-item_el_name');
let jobInput = document.querySelector('.popup__input-item_el_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');

function togglePopup() { 
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup();
}

editBtn.addEventListener('click', togglePopup);
closeBtn.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);