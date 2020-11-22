//buttons 
const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const likeBtn = document.querySelector('.element__like');
// variables for profile popup
const nameInput = document.querySelector('.popup__input-item_el_name');
const jobInput = document.querySelector('.popup__input-item_el_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
// variables for Card section 
const cardName = document.querySelector('.element__place');
const cardLink = document.querySelector('.element__image');
const cardNameInput = document.querySelector('.popup__input-item_el_card-name');
const cardLinkInput = document.querySelector('.popup__input-item_el_card-link');
// Variables for popup elements
const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
//variables for close buttons
const closeBtn = popupAddCard.querySelector('.popup__button_close');
const closeProfileBtn = popupEditProfile.querySelector('.popup__button_close');

const container = document.querySelector('.main');
const cardsContainer = container.querySelector('.elements');
const formElement = document.querySelector('.popup__container');
//variables for big image popup
const cardFormElement = popupAddCard.querySelector('.popup__container');
const popupCardImg = document.querySelector('.popup_type_image-card');
const closeCardImg = popupCardImg.querySelector('.popup__button_close');
const imagePopupPicture = popupCardImg.querySelector('.popup__image');
const imagePopupTitle = popupCardImg.querySelector('.popup__title');


// open and close popup functions
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closeByEscape);
}
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeByEscape);
}
// array of objects for Cards


initialCards.forEach((item) => {
    const card = createCard(item.name, item.link);
    addCard(cardsContainer, card);
})

// submit handlers for profile and card popups

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}

function cardSubmitHandler(evt) {
    evt.preventDefault();
    const newCard = createCard(cardNameInput.value, cardLinkInput.value);
    addCard(cardsContainer, newCard);
    closePopup(popupAddCard);
}
// function for adding new card element and description
function createCard(cardName, cardLink) {
    const cardTemplate = document.querySelector('#element').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');

    cardElement.querySelector('.element__place').textContent = cardName;
    cardImage.src = cardLink;
    cardImage.alt = cardName;
    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });
    cardElement.querySelector('.element__trash').addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    })

    cardImage.addEventListener('click', () => {
        imagePopupPicture.src = cardLink;
        imagePopupPicture.alt = cardName;
        imagePopupTitle.textContent = cardName;
        openPopup(popupCardImg);
    })
    return cardElement;

}
//function for creating a card on website
function addCard(cardsContainer, cardElement) {
    cardsContainer.prepend(cardElement);
}
// event listeners for different buttons
addBtn.addEventListener('click', () => {
    openPopup(popupAddCard)
    resetValidation(popupAddCard.querySelector(config.formSelector), config);

});

function handleEditButtonClick() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupEditProfile);
    resetValidation(popupEditProfile.querySelector(config.formSelector), config);

}
editBtn.addEventListener('click', handleEditButtonClick)
closeBtn.addEventListener('click', () => {
    closePopup(popupAddCard);
});
closeProfileBtn.addEventListener('click', () => {
    closePopup(popupEditProfile);
});
formElement.addEventListener('submit', formSubmitHandler);
cardFormElement.addEventListener('submit', cardSubmitHandler);
closeCardImg.addEventListener('click', () => {
    closePopup(popupCardImg);
});

const popupOverlay = document.querySelectorAll('.popup');
popupOverlay.forEach((popupOverlay) => popupOverlay.addEventListener('click', (evt) => {
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