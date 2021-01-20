export default class UserInfo {
  constructor({profileNameSelector, profileJobSelector,profileAvatarSelector}) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
      avatar: this._avatar.url,
      id: this.id
    };
  }
  setUserInfo({name, about,_id,avatar}) {
    this._profileName.textContent = name;
    this._profileJob.textContent = about;
    this._avatar.style.backgroundImage = `URL("${avatar}")`;
    this.id = _id;
  }
}
