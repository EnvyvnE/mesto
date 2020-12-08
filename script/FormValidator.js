export class FormValidator{
    constructor(form, config){
        this._form = form;
        this._config = config;
        this._forms = document.querySelectorAll(this._config.formSelector);
        this._button = form.querySelector(this._config.submitButtonSelector);
        this._isActive = true;

    }
_showError = (input) => {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
}

_hideError =(input) => {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
}

_checkInputValidity = (input) =>{
    if (!input.validity.valid) {
        this._showError(input);
    } else {
       this._hideError(input);
    }
}

_setButtonState = (button,isActive) => {
    if (isActive) {
        button.classList.remove(this._config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(this._config.inactiveButtonClass);
        button.disabled = true;
    }
}

_setEventListeners = () =>{
    const inputsList = this._form.querySelectorAll(this._config.inputSelector);
    inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            this._checkInputValidity(input);
            this._setButtonState(this._button, this._form.checkValidity(), this._config);
        })
    })
}

enableValidation = () => {
    this._forms.forEach((form) => {
        this._setEventListeners();
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setButtonState(this._button, form.checkValidity(),form)
    });
}

_resetValidation = () => {
    const inputs = this._form.querySelectorAll(this._config.inputSelector);
    inputs.forEach((input) => {
        this._hideError(input);
        
    })
}

}