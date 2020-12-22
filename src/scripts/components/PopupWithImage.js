import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = popup.querySelector('.popup__image');
    this._title = popup.querySelector('.popup__title');
  }
  openPopup(src, alt) {
    this._image.src = src;
    this._image.alt = alt;
    this._title.textContent = alt;
    super.openPopup();
  }
  setEventListeners() {
    super.setEventListeners();
  
  }
}
