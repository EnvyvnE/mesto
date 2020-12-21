export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  //открытие попапа
  openPopup() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }
  //закрытие попапа
  closePopup() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  //закрытие по кнопке escape
  _handleEscClose(evt) {
    if (evt.code === "Escape") {
      this.closePopup();
    }
  }
  setEventListeners() {
    //закрытие по крестику
    const closeBtn = this._popup.querySelector(".popup__button_close");
    closeBtn.addEventListener("click", () => {
      this.closePopup();
    });
    //закрытие по оверлею
    this._popup.addEventListener("click", (evt) => {
      if (evt.target !== evt.currentTarget) {
        return;
      }
      this.closePopup();
    });
    
  }
}
