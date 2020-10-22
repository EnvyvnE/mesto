let editBtn = document.querySelector('.edit-btn');
let closeBtn = document.querySelector('.popup__close-btn');
let formElement = document.querySelector('.popup__container');

function togglePopup() {
    let popup = document.querySelector('.popup');
    popup.classList.toggle('popup_opened');

}
editBtn.addEventListener('click', togglePopup);
closeBtn.addEventListener('click', togglePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('.popup__name');
    let jobInput = document.querySelector('.popup__job');
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
