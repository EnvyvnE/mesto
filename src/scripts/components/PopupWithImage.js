import {
  imagePopupPicture,
  popupCardImg,
  imagePopupTitle,
} from "../utils/constant.js";
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }
  openPopup(src, alt) {
    imagePopupPicture.src = src;
    imagePopupPicture.alt = alt;
    imagePopupTitle.textContent = alt;
    super.openPopup();
  }
}
