import {
    Card
} from './Card.js';
import {
    FormValidator
} from './FormValidator.js';
import {
    config,
    initialCards
} from './constant.js'


const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const likeBtn = document.querySelector('.element__like');

const nameInput = document.querySelector('.popup__input-item_el_name');
const jobInput = document.querySelector('.popup__input-item_el_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const cardNameInput = document.querySelector('.popup__input-item_el_card-name');
const cardLinkInput = document.querySelector('.popup__input-item_el_card-link');

const popupAddCard = document.querySelector('.popup_type_add-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
const profileFormElement = popupEditProfile.querySelector('.popup__container');

const closeBtn = popupAddCard.querySelector('.popup__button_close');
const closeProfileBtn = popupEditProfile.querySelector('.popup__button_close');

const container = document.querySelector('.main');
const cardsContainer = container.querySelector('.elements');
const formElement = document.querySelector('.popup__container');

const cardFormElement = popupAddCard.querySelector('.popup__container');
const popupCardImg = document.querySelector('.popup_type_image-card');
const closeCardImg = popupCardImg.querySelector('.popup__button_close');
const imagePopupPicture = popupCardImg.querySelector('.popup__image');
const imagePopupTitle = popupCardImg.querySelector('.popup__title');

const addFormValidation = new FormValidator(cardFormElement, config);
addFormValidation.enableValidation();
const editFormValidation = new FormValidator(profileFormElement, config);
editFormValidation.enableValidation();


const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closeByEscape);
}
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeByEscape);
}


initialCards.forEach((item) => {
    newCard(item);
})

function newCard(item) {
    // const card = new Card(item, '#element', openImagePopup);
    const card = new Card(item, '#element', openImagePopup);
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
}


function openImagePopup(element, name, link) {
    element.addEventListener('click', () => {
        imagePopupPicture.src = link;
        imagePopupPicture.alt = name;
        imagePopupTitle.textContent = name;
        openPopup(popupCardImg);

    });
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

function handleCardSubmit(evt) {
    evt.preventDefault();
    newCard({
        name: cardNameInput.value,
        link: cardLinkInput.value
    });
    closePopup(popupAddCard);
}


addBtn.addEventListener('click', () => {
    openPopup(popupAddCard)
    addFormValidation._resetValidation();
});

function handleEditButtonClick() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupEditProfile);
    editFormValidation._resetValidation();

}
editBtn.addEventListener('click', handleEditButtonClick)
closeBtn.addEventListener('click', () => {
    closePopup(popupAddCard);
});
closeProfileBtn.addEventListener('click', () => {
    closePopup(popupEditProfile);
});
formElement.addEventListener('submit', handleFormSubmit);
cardFormElement.addEventListener('submit', handleCardSubmit);
closeCardImg.addEventListener('click', () => {
    closePopup(popupCardImg);
});

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}))
const closeByEscape = (evt) => {
    if (evt.code === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}