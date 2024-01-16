import { makeAutoObservable } from "mobx";
import { SORT } from "../utils/consts";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._devices = [];
    this._selectedType = {};
    this._search = "";
    this._selectedSort = SORT.RATING;
    this._selectedOrder = "ASC";
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }

  setSearch(search) {
    this.setPage(1);
    this._search = search;
  }

  setSelectedSort(sort) {
    this.setPage(1);
    this._selectedSort = sort;
  }

  setSelectedOrder(order) {
    this.setPage(1);
    this._selectedOrder = order;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  get types() {
    return this._types;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get search() {
    return this._search;
  }

  get selectedSort() {
    return this._selectedSort;
  }

  get selectedOrder() {
    return this._selectedOrder;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
