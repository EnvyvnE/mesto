export default class UserInfo{
    constructor({profileName, profileJob}){
this._profileName = profileName;
this._profileJob = profileJob;
    }
    getUserInfo(){
        return {
            profileName: this._profileName.textContent,
            profileJob: this._profileJob.textContent
        }
    }
}
