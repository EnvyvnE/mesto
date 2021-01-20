import Popup from "./Popup.js";
import {cardNameInput,cardLinkInput} from '../utils/constant.js';
export default class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._element = popup;
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener("submit", (evt) => {
      this._handleFormSubmit(evt, this._getInputValues());
      this.closePopup();
    });
  }

  closePopup(){
    super.closePopup();
    cardNameInput.value = '';
    cardLinkInput.value = '';
  }
  _getInputValues() {
    // достаём все элементы полей
    this._inputList = this._element.querySelectorAll(".popup__input-item");

    // создаём пустой объект
    this._formValues = {};

    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return this._formValues;
  }
}
