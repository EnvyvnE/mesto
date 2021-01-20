import Popup from "./Popup";

export default class PopupConfirm extends Popup {
    constructor({popup, setSubmitAction}){
        super(popup);
        this._handleSubmitCallback = setSubmitAction;
    }

    openPopup(card) {
        super.openPopup();
        this.card = card;
        this.id = card._id;
    }
    setEventListeners() {
        console.log('popupConfirm');
        super.setEventListeners();
       this._popup.querySelector('.popup__container').addEventListener('submit',(evt) => {
            // evt.preventDefault();
            this._handleSubmitCallback(evt);
            // this.closePopup();
        })
        
      }
}