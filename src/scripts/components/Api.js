export default class Api {
    constructor({
        address,
        token
    }) {
        this._address = address;
        this._token = token;
    }
    getUserInfo() {
        return fetch(`${this._address}/v1/cohort-19/users/me`, {
                headers: {
                    authorization: this._token
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            });

    }
    getInitialCards() {
        return fetch(`${this._address}/v1/cohort-19/cards`, {
                headers: {
                    authorization: this._token
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })

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
            .then((result) => {
               return result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`)
            });
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
        .then((result) => {
           return result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`)
        });
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
        .then((result) => {
            return result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`)
         });

    }
    removeCard(id) {
        return fetch(`${this._address}/v1/cohort-19/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then((result) => {
            return result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`)
         });
}
    addLike(id){
        return fetch(`${this._address}/v1/cohort-19/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
            }
        })
        .then((result) => {
            return result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`)
         });
    }
    removeLike(id){
        return fetch(`${this._address}/v1/cohort-19/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then((result) => {
            return result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`)
         });
    }
    
}