import {
  Card
} from "../scripts/components/Card.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupConfirm from "../scripts/components/PopupConfirm.js"
import {
  FormValidator
} from "../scripts/components/FormValidator.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Section from "../scripts/components/Section.js";
import Api from "../scripts/components/Api.js";
import {
  config,
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
  profileNameSelector,
  profileJobSelector,
  saveBtn,
  popupEditAvatar,
  profileAvatarBtn,
  profileAvatarSelector
} from "../scripts/utils/constant.js";
import "./index.css";
const userInfo = new UserInfo({
  profileNameSelector,
  profileJobSelector,
  profileAvatarSelector
});
let userId;
// инициализация API
const api = new Api({
  address: 'https://mesto.nomoreparties.co',
  token: 'd641b335-afef-4975-a138-0ff6dd855c3f',

})

//валидация форм
const addFormValidation = new FormValidator(cardFormElement, config);
addFormValidation.enableValidation();
const editFormValidation = new FormValidator(profileFormElement, config);
editFormValidation.enableValidation();


//функция создания карточек
function createCard(item) {
  const card = new Card({
      data: item,
      handleCardClick: () => {
        const imagePopupClass = new PopupWithImage(popupCardImg);
        imagePopupClass.setEventListeners();
        imagePopupClass.openPopup(item.link, item.name);
      },
      handleRemoveButton: () => {
        api.removeCard(card.getId())
          .then(() => {
            card.removeCard();
          })
          .catch((err) => {
            console.log(err)
          })
      },
      handleLikeClick: (id, isLiked) => {
        if (isLiked) {
          api.removeLike(id)
            .then((res) => {
              card.setLikes(res.likes)
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          api.addLike(id)
            .then((res) => {
              card.setLikes(res.likes)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
      handleDeleteClick: () => {
        popupConfirm.openPopup(card);
      }
    }, "#element",
    userId,
  );

  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
  if (item.owner._id !== userInfo.getUserInfo().id) {
    card.removeTrashBtn();
  }
}

const popupConfirm = new PopupConfirm({
  popup: document.querySelector('.popup_type_submit'),
  setSubmitAction: (evt) => {
    evt.preventDefault();
    api.removeCard(popupConfirm.id)
      .then(() => {
        console.log(popupConfirm.card);
        popupConfirm.card.removeCard();
        popupConfirm.closePopup();
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
})
popupConfirm.setEventListeners();

// обработка массива с карточками
const cardList = new Section({
    renderer: (item) => {
      createCard(item)
    },
  },
  cardsContainer
);
// подгружаем информацию при загрузке ст
Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
  ])
  .then((values) => {
    const profileInfo = values[0];
    userId = values[0]._id;
    const initialCards = values[1];
    console.log(profileInfo)
    userInfo.setUserInfo(profileInfo);
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  })

// обработка кнопки открытия попапа для новых карточек
const popupAddCardElement = new PopupWithForm({
  popup: popupAddCard,
  handleFormSubmit: (evt, item) => {
    evt.preventDefault();
    saveBtn.textContent = "Сохраняю...";
    api.postNewCard(item)
      .then((res) => {
        createCard(res);
      })
      .then(() => {
        popupAddCardElement.closePopup();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        saveBtn.textContent = "Сохранить";
      })
  },
});

popupAddCardElement.setEventListeners();


addBtn.addEventListener("click", () => {
  popupAddCardElement.openPopup();
  addFormValidation._resetValidation();
});

const popupEditAvatarElement = new PopupWithForm({
  popup: popupEditAvatar,
  handleFormSubmit: (evt, info) => {
    evt.preventDefault();
    saveBtn.textContent = "Сохраняю...";
    api.patchAvatar(info)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditAvatarElement.closePopup()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        saveBtn.textContent = "Сохранить";
      })
  }
})
popupEditAvatarElement.setEventListeners();

// обработка кнопки открытия попапа для данных пользователя
const popupEditProfileElement = new PopupWithForm({
  popup: popupEditProfile,
  handleFormSubmit: (evt, info) => {
    evt.preventDefault();
    saveBtn.textContent = "Сохраняю...";
    api.patchUserInfo(info)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditProfileElement.closePopup()
      })

      .catch((err) => (console.log(err)))

      .finally(() => {
        console.log(saveBtn)
        saveBtn.textContent = "Сохранить"
      })
  },
});

popupEditProfileElement.setEventListeners();

profileAvatarBtn.addEventListener('click', () => {
  popupEditAvatarElement.openPopup(userInfo.getUserInfo().avatar)
})

editBtn.addEventListener("click", () => {
  popupEditProfileElement.openPopup(userInfo.getUserInfo());
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editFormValidation._resetValidation();
});