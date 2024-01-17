import { makeAutoObservable } from "mobx";
import {
  createBasketDevice,
  fetchBasketDevices,
  deleteBasketDevice,
} from "../http/basketAPI";
// import { useContext } from "react";
// import { Context } from "../main";

export default class BasketStore {
  constructor() {
    this._basketDevices = [];
    this._basketTotalCount = this.basketDevices.length;
    this._addBasketDevice = async (deviceId, basketId) => {
      await createBasketDevice(deviceId, basketId);
      fetchBasketDevices(basketId).then((data) => {
        this.setBasketDevices(data);
        this.setBasketTotalCount(this.basketTotalCount);
      });
    };
    this._isDeviceInBasket = (deviceId) => {
      const isDeviceInBasket = this.basketDevices.find(
        (item) => item?.deviceId === deviceId
      );
      return isDeviceInBasket;
    };
    this._removeBasketDevice = (id) => {
      const removingDevice = this._basketDevices.find(
        (device) => device.deviceId === id
      );
      deleteBasketDevice(removingDevice.id);
      this.setBasketDevices(
        this._basketDevices.filter((device) => device.id !== removingDevice.id)
      );
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

  get isDeviceInBasket() {
    return this._isDeviceInBasket;
  }

  get removeBasketDevice() {
    return this._removeBasketDevice;
  }
}
