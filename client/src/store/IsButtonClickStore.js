import { makeAutoObservable } from "mobx";

export default class IsButtonClickStore {
  constructor() {
    this._isButtonClick = false;
    makeAutoObservable(this);
  }

  setIsButtonClick(isButtonClick) {
    this._isButtonClick = isButtonClick;
  }

  get isButtonClick() {
    return this._isButtonClick;
  }
}
