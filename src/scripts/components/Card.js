export class Card {
  constructor({ data, handleCardClick,handleShowDeleteBtn,handleDeleteClick,handleLikeClick,handleRemoveButton }, cardSelector,userId) {
    this._image = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._bigImage = handleCardClick;
    this._handleRemoveButton = handleRemoveButton;
    this._id =data._id;
    this._userId = userId;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._likes = data.likes;
    this._handleShowDeleBtn = handleShowDeleteBtn;
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
    this.setLikes(this._likes);
    return this._element;
  }
  _handleLikeButton() {
    this._likeSelector = this._element.querySelector(".element__like");
    this._likeSelector.classList.toggle("element__like_active");
  }
  
  _setEventListeners() {
    
    this._imageSelector.addEventListener("click", () => {
        this._bigImage(this._name, this._image);
      });
      this._element.querySelector(".element__like")
      .addEventListener("click", () => {
        this._handleLikeClick(this._id,this._isLiked());
      });
      this._element.querySelector(".element__trash")
      .addEventListener("click", () => {
        // this._handleRemoveButton(this);
        this._handleDeleteClick();
      });
      
  }
 

  
  removeTrashBtn(){
    this._element.querySelector('.element__trash').remove();
  }

  getId(){
    return this._id;
  }
  removeCard(){
    this._element.remove();
    this._element = null;
  }

  _isLiked(){
   if (this._element.querySelector('.element__like').classList.contains('element__like_active')){
     return true
   }
   return false
  }
 
  setLikes(array){
    const likeButton = this._element.querySelector('.element__like');
    this._element.querySelector('.element__counter').textContent = array.length;
    this._likes = array;
    if(this._isLikedByCurrentUser()){
      likeButton.classList.add('element__like_active')
    } else {
      likeButton.classList.remove('element__like_active')
    }
  }
  _isLikedByCurrentUser(){
    for(let i = 0 ; i < this._likes.length; i++){
      if(this._likes[i]._id === this._userId){
        return true
      } 
      }
      return false
    }
}
