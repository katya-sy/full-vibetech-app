import { makeAutoObservable } from "mobx";
import { createBasketDevice, fetchBasketDevices } from "../http/basketAPI";

export default class BasketStore {
  constructor() {
    this._basketDevices = [];
    this._basketTotalCount = this.basketDevices.length;
    this._addBasketDevice = (deviceId, basketId) => {
      createBasketDevice(deviceId, basketId);
      fetchBasketDevices(basketId).then((data) => {
        this.setBasketDevices(data);
        this.setBasketTotalCount(this.basketTotalCount + 1);
      });
    };
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

  get addBasketDevice() {
    return this._addBasketDevice;
  }
}
