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
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
//variables for close buttons
const closeBtn = popupAddCard.querySelector('.popup__close-btn');
const closeProfileBtn = popupEditProfile.querySelector('.popup__close-btn');

const container = document.querySelector('.main');
const cardsContainer = container.querySelector('.elements');
const cardElement = cardsContainer.querySelector('.element');
const formElement = document.querySelector('.popup__container');
//variables for big image popup
const cardFormElement = popupAddCard.querySelector('.popup__container');
const popupCardImg = document.querySelector('.popup_type_image-card');
const closeCardImg = popupCardImg.querySelector('.popup__close-btn');
const openPopup = (selector) => {
    selector.classList.add('popup_opened');

}
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach( (item) => {
    const card = addNewCard(item.name,item.link);
    createCard(cardsContainer, card);
})



function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popup);
}
function cardSubmitHandler(evt) {
    evt.preventDefault();
    const newCard = addNewCard(cardNameInput.value,cardLinkInput.value);
    createCard(cardsContainer,newCard);
    closePopup(popupAddCard);
}

function addNewCard(cardName, cardLink) {
    const cardTemplate = document.querySelector('#element').content;
    const cardElement = cardTemplate.cloneNode(true);
    const  cardImage = cardElement.querySelector('.element__image');

    cardElement.querySelector('.element__place').textContent = cardName;
    cardImage.src = cardLink;
    cardImage.alt = cardName;
    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
      }); 
    cardElement.querySelector('.element__trash').addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    })

    cardElement.querySelector('.element__image').addEventListener('click',() =>{
        popupCardImg.querySelector('.popup__image').src = cardLink;
        cardImage.alt = cardName;
        cardImage.textContent = cardName;
        openPopup(popupCardImg);
    })
    return cardElement;
  
}
addBtn.addEventListener('click', () => { openPopup(popupAddCard)});
editBtn.addEventListener('click', () => { openPopup(popupEditProfile)});
closeBtn.addEventListener('click',() => { closePopup(popupAddCard)});
closeProfileBtn.addEventListener('click',() => { closePopup(popupEditProfile)});
formElement.addEventListener('submit', formSubmitHandler);
cardFormElement.addEventListener('submit',cardSubmitHandler);

function createCard(cardsContainer,cardElement) {
    cardsContainer.prepend(cardElement);
}
closeCardImg.addEventListener('click',() => { closePopup(popupCardImg)});