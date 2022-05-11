export default class UserInfo {
  constructor({ titleContainer, subTitleContainer }) {
    this._titleContainer = titleContainer;
    this._subTitleContainer = subTitleContainer;
  }

  getUserInfo() {
    this._profileValues = {};
    this._profileValues.title = this._titleContainer.textContent;
    this._profileValues.subtitle = this._subTitleContainer.textContent;
    return this._profileValues;
  }

  setUserInfo(formData) {
    this._titleContainer.textContent = formData['popup-input-name'];
    this._subTitleContainer.textContent = formData['popup-input-status'];
  }
}
// export default class UserInfo {
//   constructor({ profileName, profileHobby }) {
//     this._profileName = profileName;
//     this._profileHobby = profileHobby;
//   }

//   getUserInfo() {
//     this._profileValue = {};
//     this._profileValue.name = this._profileName.textContent;
//     this._profileValue.about = this._profileHobby.textContent;
//     return this._profileValue;
//     // const userData = {
//     //   profileName: this._profileName.textContent,
//     //   profileHobby: this._profileHobby.textContent,
//     // };
//     // return userData;
//   }

//   setUserInfo(data) {
//     this._profileName.textContent = data.name;
//     this._profileHobby.textContent = data.about;
//   }
// }
