import Popup from './Popup.js';
import UserInfo from './UserInfo.js';
import {popupEditProfile,profileName,profileJob} from './constant.js' 
export default class PopupWithForm extends Popup {
    constructor(popup){
        super(popup);
        this._element = popupEditProfile.querySelectorAll('.popup__input-item');
    }
    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', () => {
        this._handleFormSubmit(this._getInputValues());
        })
      }
  _handleFormSubmit(items){
    profileName.textContent = items.profileNameInput;
    profileJob.textContent = items.profileJobInput;
  }
    _getInputValues(){
     // достаём все элементы полей
  this._inputList = this._element;

  // создаём пустой объект
  this._formValues = {};

  // добавляем в этот объект значения всех полей
  this._inputList.forEach(input => {
      console.log(input)
    this._formValues[input.name] = input.value;
  });
console.log(this._formValues)
  // возвращаем объект значений
  return this._formValues;
    }
}