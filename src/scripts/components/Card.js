export class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._image = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._bigImage = handleCardClick;
    
    
  }
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardTemplate;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._imageSelector = this._element.querySelector(".element__image")
    this._imageSelector.src = this._image;
    this._element.querySelector(".element__place").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
  _handleLikeButton() {
    this._likeSelector.classList.toggle("element__like_active");
  }
  _handleTrashButton() {
    this._element.querySelector(".element__trash").closest(".element").remove();
  }

  _setEventListeners() {
    this._likeSelector = this._element.querySelector(".element__like");
    
    this._imageSelector.addEventListener("click", () => {
        this._bigImage(this._name, this._image);
      });
      this._likeSelector.addEventListener("click", () => {
        this._handleLikeButton();
      });
      this._trashSelector = this._element.querySelector(".element__trash");
      this._trashSelector.addEventListener("click", () => {
        this._handleTrashButton();
      });
  }
}
