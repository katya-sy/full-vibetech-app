import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._basketDevices = [];
    this._basketTotalCount = this.basketDevices.length;
    makeAutoObservable(this);
  }

  setBasketDevices(devices) {
    this._basketDevices = devices;
    this.setBasketTotalCount(devices.length);
  }

  setBasketTotalCount(count) {
    this._basketTotalCount = count;
  }

  get basketDevices() {
    return this._basketDevices;
  }

  get basketTotalCount() {
    return this._basketTotalCount;
  }
}
