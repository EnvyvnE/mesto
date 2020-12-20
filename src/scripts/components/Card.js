export class Card {
    constructor({data ,handleCardClick}, cardSelector) {
        this._image = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._bigImage = handleCardClick;
    }
    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardTemplate;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._image;
        this._element.querySelector('.element__place').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
    _handleLikeButton() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }
    _handleTrashButton() {
        this._element.querySelector('.element__trash').closest('.element').remove();
    }


    _setEventListeners() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._bigImage(this._name, this._image)
        });

        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeButton();
        });

        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._handleTrashButton();
        })
    }
}