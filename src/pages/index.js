import { Card } from "../scripts/components/Card.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Section from "../scripts/components/Section.js";
import {
  config,
  initialCards,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  cardFormElement,
  profileFormElement,
  cardsContainer,
  addBtn,
  editBtn,
  popupAddCard,
  popupCardImg,
  popupEditProfile,
} from "../scripts/utils//constant.js";
import "./index.css";
const userInfo = new UserInfo(".profile__name", ".profile__job");

//валидация форм
const addFormValidation = new FormValidator(cardFormElement, config);
addFormValidation.enableValidation();
const editFormValidation = new FormValidator(profileFormElement, config);
editFormValidation.enableValidation();

// обработка массива с карточками
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        {
          data: item,
          handleCardClick: () => {
            const imagePopupClass = new PopupWithImage(popupCardImg);

            imagePopupClass.setEventListeners();
            imagePopupClass.openPopup(item.link, item.name);
          },
        },
        "#element"
      );
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  cardsContainer
);

//выводим массив на экран
cardList.renderItems();

// обработка кнопки открытия попапа для новых карточек
const popupAddCardElement = new PopupWithForm({
  popup: popupAddCard,
  handleFormSubmit: (evt, item) => {
    evt.preventDefault();
    console.log(item);
    const addCard = new Card(
      {
        data: { name: item.cardNameInput, link: item.cardLinkInput },
        handleCardClick: () => {
          const imagePopupClass = new PopupWithImage(popupCardImg);
          imagePopupClass.setEventListeners();
          imagePopupClass.openPopup(item.cardLinkInput, item.cardNameInput);
        },
      },
      "#element"
    );
    const cardElement = addCard.generateCard();

    cardList.addItem(cardElement);
  },
});

popupAddCardElement.setEventListeners();

addBtn.addEventListener("click", () => {
  popupAddCardElement.openPopup();

  addFormValidation._resetValidation();
});

// обработка кнопки открытия попапа для данных пользователя
const popupEditProfileElement = new PopupWithForm({
  popup: popupEditProfile,
  handleFormSubmit: (evt, info) => {
    evt.preventDefault();
    userInfo.setUserInfo(info.profileNameInput, info.profileJobInput);
  },
});

popupEditProfileElement.setEventListeners();
editBtn.addEventListener("click", () => {
  popupEditProfileElement.openPopup(userInfo.getUserInfo());
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editFormValidation._resetValidation();
});
