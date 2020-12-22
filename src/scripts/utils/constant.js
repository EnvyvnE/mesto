//array of cards
export const initialCards = [{
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
//validation configuration variables
export const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input-item',
    submitButtonSelector: '.popup__button_add',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_state_invalid',
    errorClass: '.error',

};
export const profileNameSelector = '.profile__name';
export const profileJobSelector= '.profile__job';
export const editBtn = document.querySelector('.profile__edit-btn');
export const addBtn = document.querySelector('.profile__add-btn');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const nameInput = document.querySelector('.popup__input-item_el_name');
export const jobInput = document.querySelector('.popup__input-item_el_job');
export const cardNameInput = document.querySelector('.popup__input-item_el_card-name');
export const cardLinkInput = document.querySelector('.popup__input-item_el_card-link');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupEditProfile = document.querySelector('.popup_type_edit');
export const profileFormElement = popupEditProfile.querySelector('.popup__container');
export const closeBtn = popupAddCard.querySelector('.popup__button_close');
export const closeProfileBtn = popupEditProfile.querySelector('.popup__button_close');
export const cardsContainer = document.querySelector('.elements');
export const formElement = document.querySelector('.popup__container');
export const cardFormElement = popupAddCard.querySelector('.popup__container');
export const popupCardImg = document.querySelector('.popup_type_image-card');
export const closeCardImg = popupCardImg.querySelector('.popup__button_close');
export const imagePopupPicture = popupCardImg.querySelector('.popup__image');
export const imagePopupTitle = popupCardImg.querySelector('.popup__title');
export const form = document.querySelector(".popup__container");
