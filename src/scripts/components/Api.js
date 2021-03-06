export default class Api {
    constructor({
        address,
        token
    }) {
        this._address = address;
        this._token = token;
    }
    _getResponseData(res) {
        if (!res.ok){
            return Promise.reject(`Ошибка: ${res.status}`)
        }
        return res.json();
    }
    getUserInfo() {
        return fetch(`${this._address}/v1/cohort-19/users/me`, {
                headers: {
                    authorization: this._token
                }
            })
            .then(this._getResponseData);

    }
    getInitialCards() {
        return fetch(`${this._address}/v1/cohort-19/cards`, {
                headers: {
                    authorization: this._token
                }
            })
            .then(this._getResponseData);

    }


    patchUserInfo(data) {
        return fetch(`${this._address}/v1/cohort-19/users/me`, {
                method: 'PATCH',
                headers: {
                    authorization: this._token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.profileNameInput,
                    about: data.profileJobInput
                })

            })
            .then(this._getResponseData);
    }

    patchAvatar(data){
        return fetch(`${this._address}/v1/cohort-19/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.cardAvatarLinkInput
            })

        })
        .then(this._getResponseData);
    }

    postNewCard(data) {
        return fetch(`${this._address}/v1/cohort-19/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.cardNameInput,
                link: data.cardLinkInput
            })

        })
        .then(this._getResponseData);

    }
    removeCard(id) {
        return fetch(`${this._address}/v1/cohort-19/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then(this._getResponseData);
}
    addLike(id){
        return fetch(`${this._address}/v1/cohort-19/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
            }
        })
        .then(this._getResponseData);
    }
    removeLike(id){
        return fetch(`${this._address}/v1/cohort-19/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then(this._getResponseData);
    }
    
}