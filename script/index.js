import {Card} from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import {FormValidator} from './FormValidator.js';
import UserInfo from './UserInfo.js';
import Popup from "./Popup.js";
import Section from "./Section.js";
import {config,initialCards,profileName,profileJob,nameInput,jobInput,cardFormElement,profileFormElement,cardsContainer,addBtn,editBtn,popupAddCard,popupCardImg,popupEditProfile} from "./constant.js"

//валидация форм
const addFormValidation = new FormValidator(cardFormElement, config);
addFormValidation.enableValidation();
const editFormValidation = new FormValidator(profileFormElement, config);
editFormValidation.enableValidation();

// обработка массива с карточками
const cardList = new Section({
    items : initialCards,
    renderer : (item) => {
        const card = new Card({
            data: item,
            handleCardClick: () => {  
              const imagePopupClass = new PopupWithImage(popupCardImg);
              imagePopupClass.setEventListeners();
              imagePopupClass.openPopup(item.link,item.name)
            }
          },
          '#element');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
},cardsContainer)

//выводим массив на экран
cardList.renderItems();


// обработка кнопки открытия попапа для новых карточек
const popupAddCardElement = new Popup(popupAddCard);
popupAddCardElement.setEventListeners();

addBtn.addEventListener('click', () => {
    popupAddCardElement.openPopup();
    addFormValidation._resetValidation();
});
const profile = document.querySelectorAll('.profile__info');
console.log(profile);
// получаем информацию о пользователе
const user = new UserInfo();

// обработка кнопки открытия попапа для данных пользователя
const popupEditProfileElement = new PopupWithForm(popupEditProfile);
popupEditProfileElement.setEventListeners();
editBtn.addEventListener('click', (popup) => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupEditProfileElement.getUserInfo();
    popupEditProfileElement.openPopup();
    editFormValidation._resetValidation();
})
