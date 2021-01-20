(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o){var r=e.data,i=e.handleCardClick,c=e.handleShowDeleteBtn,u=e.handleDeleteClick,a=e.handleLikeClick,l=e.handleRemoveButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._image=r.link,this._name=r.name,this._cardSelector=n,this._bigImage=i,this._handleRemoveButton=l,this._id=r._id,this._userId=o,this._handleLikeClick=a,this._handleDeleteClick=u,this._likes=r.likes,this._handleShowDeleBtn=c}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imageSelector=this._element.querySelector(".element__image"),this._imageSelector.src=this._image,this._element.querySelector(".element__place").textContent=this._name,this._setEventListeners(),this.setLikes(this._likes),this._element}},{key:"_handleLikeButton",value:function(){this._likeSelector=this._element.querySelector(".element__like"),this._likeSelector.classList.toggle("element__like_active")}},{key:"_handleTrashButton",value:function(){this._element.querySelector(".element__trash").closest(".element").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._imageSelector.addEventListener("click",(function(){e._bigImage(e._name,e._image)})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeClick(e._id,e._isLiked())})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleDeleteClick()}))}},{key:"removeTrashBtn",value:function(){document.querySelector(".element__trash").remove()}},{key:"getId",value:function(){return this._id}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_isLiked",value:function(){return!!this._element.querySelector(".element__like").classList.contains("element__like_active")}},{key:"setLikes",value:function(e){var t=this._element.querySelector(".element__like");this._element.querySelector(".element__counter").textContent=e.length,this._likes=e,this._isLikedByCurrentUser()?t.classList.add("element__like_active"):t.classList.remove("element__like_active")}},{key:"_isLikedByCurrentUser",value:function(){for(var e=0;e<this._likes.length;e++)if(this._likes[e]._id===this._userId)return!0;return!1}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,o;return t=e,(o=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.code&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;console.log(this._popup),this._popup.querySelector(".popup__button_close").addEventListener("click",(function(){e.closePopup()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.closePopup()}))}}])&&n(t.prototype,o),e}(),r={formSelector:".popup__container",inputSelector:".popup__input-item",submitButtonSelector:".popup__button_add",inactiveButtonClass:"popup__button_invalid",inputErrorClass:"popup__input_state_invalid",errorClass:".error"},i=document.querySelector(".profile__edit-btn"),c=document.querySelector(".profile__add-btn"),u=document.querySelector(".profile__name"),a=document.querySelector(".profile__job"),l=document.querySelector(".profile__avatar"),s=document.querySelector(".popup__input-item_el_name"),f=document.querySelector(".popup__input-item_el_job"),p=document.querySelector(".popup__input-item_el_card-name"),_=document.querySelector(".popup__input-item_el_card-link"),h=document.querySelector(".popup_type_add-card"),d=document.querySelector(".popup_type_edit"),y=(document.querySelector(".popup_type_submit"),document.querySelector(".popup_type_profile-image")),m=d.querySelector(".popup__container"),v=(document.querySelector(".popup__input-item_el_avatar-link"),h.querySelector(".popup__button_close"),document.querySelector(".popup__button_add")),b=(document.querySelector(".element__trash"),d.querySelector(".popup__button_close"),document.querySelector(".elements")),k=(document.querySelector(".popup__container"),h.querySelector(".popup__container")),g=document.querySelector(".popup_type_image-card");function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}g.querySelector(".popup__button_close"),g.querySelector(".popup__image"),g.querySelector(".popup__title"),document.querySelector(".popup__container");var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(o);if(r){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function c(e){var t,n=e.popup,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n))._element=n,t._handleFormSubmit=o,t}return t=c,(n=[{key:"setEventListeners",value:function(){var e=this;E(P(c.prototype),"setEventListeners",this).call(this),this._element.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._getInputValues()),e.closePopup()}))}},{key:"closePopup",value:function(){E(P(c.prototype),"closePopup",this).call(this),p.value="",_.value=""}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._element.querySelectorAll(".popup__input-item"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}}])&&C(t.prototype,n),c}(o);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(o);if(r){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._image=e.querySelector(".popup__image"),t._title=e.querySelector(".popup__title"),t}return t=c,(n=[{key:"openPopup",value:function(e,t){this._image.src=e,this._image.alt=t,this._title.textContent=t,I(x(c.prototype),"openPopup",this).call(this)}},{key:"setEventListeners",value:function(){I(x(c.prototype),"setEventListeners",this).call(this)}}])&&O(t.prototype,n),c}(o);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function V(e,t,n){return(V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(o);if(r){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function c(e){var t,n=e.popup,o=e.setSubmitAction;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n))._handleSubmitCallback=o,t}return t=c,(n=[{key:"openPopup",value:function(e){V(J(c.prototype),"openPopup",this).call(this),this.card=e,this.id=e._id}},{key:"setEventListeners",value:function(){var e=this;console.log("popupConfirm"),V(J(c.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__container").addEventListener("submit",(function(t){e._handleSubmitCallback(t)}))}}])&&U(t.prototype,n),c}(o);function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,"_showError",(function(e){o._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(o._config.inputErrorClass)})),F(this,"_hideError",(function(e){o._form.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(o._config.inputErrorClass)})),F(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideError(e):(o._showError(e),console.log(o._button))})),F(this,"_setButtonState",(function(e,t){t?(e.classList.remove(o._config.inactiveButtonClass),e.disabled=!1):(e.classList.add(o._config.inactiveButtonClass),e.disabled=!0)})),F(this,"_setEventListeners",(function(){o._form.querySelectorAll(o._config.inputSelector).forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._setButtonState(o._button,o._form.checkValidity(),o._config)}))}))})),F(this,"enableValidation",(function(){o._setEventListeners(),o._form.addEventListener("submit",(function(e){e.preventDefault()})),o._setButtonState(o._button,o._form.checkValidity(),o._form)})),F(this,"_resetValidation",(function(){o._form.querySelectorAll(o._config.inputSelector).forEach((function(e){o._hideError(e),o._setButtonState(o._button,!1)}))})),this._form=t,this._config=n,this._forms=document.querySelectorAll(this._config.formSelector),this._button=t.querySelector(this._config.submitButtonSelector),this._isActive=!0};function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var G=function(){function e(t){var n=t.profileNameSelector,o=t.profileJobSelector,r=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(o),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent,avatar:this._avatar.url,id:this.id}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,o=e._id,r=e.avatar;this._profileName.textContent=t,this._profileJob.textContent=n,this._avatar.style.backgroundImage='URL("'.concat(r,'")'),this.id=o}}])&&M(t.prototype,n),e}();function K(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Q=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&K(t.prototype,n),e}();function W(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var X,Y=function(){function e(t){var n=t.address,o=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/v1/cohort-19/users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/v1/cohort-19/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._address,"/v1/cohort-19/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.profileNameInput,about:e.profileJobInput})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._address,"/v1/cohort-19/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.cardAvatarLinkInput})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._address,"/v1/cohort-19/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.cardNameInput,link:e.cardLinkInput})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/v1/cohort-19/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._address,"/v1/cohort-19/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._address,"/v1/cohort-19/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&W(t.prototype,n),e}(),Z=new G({profileNameSelector:".profile__name",profileJobSelector:".profile__job",profileAvatarSelector:".profile__avatar"}),$=new Y({address:"https://mesto.nomoreparties.co",token:"d641b335-afef-4975-a138-0ff6dd855c3f"}),ee=new H(k,r);ee.enableValidation();var te=new H(m,r);function ne(e){var n=new t({data:e,handleCardClick:function(){var t=new D(g);t.setEventListeners(),t.openPopup(e.link,e.name)},handleRemoveButton:function(){$.removeCard(n.getId()).then((function(){n.removeCard()})).catch((function(e){console.log(e)}))},handleLikeClick:function(e,t){t?$.removeLike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){console.log(e)})):$.addLike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){console.log(e)}))},handleDeleteClick:function(){oe.openPopup(n)}},"#element",X),o=n.generateCard();re.addItem(o),e.owner._id!==Z.getUserInfo().id&&n.removeTrashBtn()}te.enableValidation();var oe=new z({popup:document.querySelector(".popup_type_submit"),setSubmitAction:function(e){e.preventDefault(),$.removeCard(oe.id).then((function(){console.log(oe.card),oe.card.removeCard(),oe.closePopup()})).catch((function(e){console.log(e.message)}))}});oe.setEventListeners();var re=new Q({renderer:function(e){ne(e)}},b);Promise.all([$.getUserInfo(),$.getInitialCards()]).then((function(e){var t=e[0];X=e[0]._id;var n=e[1];console.log(t),Z.setUserInfo(t),re.renderItems(n)})).catch((function(e){console.log(e)}));var ie=new j({popup:h,handleFormSubmit:function(e,t){e.preventDefault(),v.textContent="Сохраняю...",$.postNewCard(t).then((function(e){ne(e)})).then((function(){ie.closePopup()})).catch((function(e){console.log(e)})).finally((function(){v.textContent="Сохранить"}))}});ie.setEventListeners(),c.addEventListener("click",(function(){ie.openPopup(),ee._resetValidation()}));var ce=new j({popup:y,handleFormSubmit:function(e,t){e.preventDefault(),v.textContent="Сохраняю...",$.patchAvatar(t).then((function(e){Z.setUserInfo(e),ce.closePopup()})).catch((function(e){console.log(e)})).finally((function(){v.textContent="Сохранить"}))}});ce.setEventListeners();var ue=new j({popup:d,handleFormSubmit:function(e,t){e.preventDefault(),v.textContent="Сохраняю...",$.patchUserInfo(t).then((function(e){Z.setUserInfo(e),ue.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){console.log(v),v.textContent="Сохранить"}))}});ue.setEventListeners(),l.addEventListener("click",(function(){ce.openPopup(Z.getUserInfo().avatar)})),i.addEventListener("click",(function(){ue.openPopup(Z.getUserInfo()),s.value=u.textContent,f.value=a.textContent,te._resetValidation()}))})();