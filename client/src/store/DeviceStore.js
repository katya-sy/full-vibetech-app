import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "byt technica", img: "/assets/img/appliances.svg" },
      { id: 2, name: "phones", img: "/assets/img/phones.svg" },
      { id: 3, name: "pc", img: "/assets/img/pc.svg" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Sumsung A20",
        price: 30000,
        desc: "lorem iosum dolor sit amet",
        img: [
          "https://c.dns-shop.ru/thumb/st4/fit/320/250/4e4e2dde43b93f00fadf7469170939a3/5563fc08ad6cc591c2fcb652c354e31efed782350452a3573fb83a3846af35fd.jpg",
          "https://c.dns-shop.ru/thumb/st1/fit/320/250/3564920f3bd4276b5731f9aa4766d118/0ccac1c4f7508fce521881ae2788ec7f737241c7dfedb2f196253eed7061ec60.jpg",
        ],
      },
      {
        id: 2,
        name: "Sumsung A2093487",
        price: 34500,
        desc: "lorem iosum dolor sit amet",
        img: [
          "https://c.dns-shop.ru/thumb/st4/fit/320/250/4e4e2dde43b93f00fadf7469170939a3/5563fc08ad6cc591c2fcb652c354e31efed782350452a3573fb83a3846af35fd.jpg",
          "https://c.dns-shop.ru/thumb/st1/fit/320/250/3564920f3bd4276b5731f9aa4766d118/0ccac1c4f7508fce521881ae2788ec7f737241c7dfedb2f196253eed7061ec60.jpg",
        ],
      },
      {
        id: 3,
        name: "Lenovo",
        price: 9000,
        desc: "lorem iosum dolor sit amet",
        img: [
          "https://c.dns-shop.ru/thumb/st4/fit/320/250/4e4e2dde43b93f00fadf7469170939a3/5563fc08ad6cc591c2fcb652c354e31efed782350452a3573fb83a3846af35fd.jpg",
          "https://c.dns-shop.ru/thumb/st1/fit/320/250/3564920f3bd4276b5731f9aa4766d118/0ccac1c4f7508fce521881ae2788ec7f737241c7dfedb2f196253eed7061ec60.jpg",
        ],
      },
      {
        id: 4,
        name: "AAAAAAAAAA",
        price: 70000,
        desc: "lorem iosum dolor sit amet",
        img: [
          "https://c.dns-shop.ru/thumb/st4/fit/320/250/4e4e2dde43b93f00fadf7469170939a3/5563fc08ad6cc591c2fcb652c354e31efed782350452a3573fb83a3846af35fd.jpg",
          "https://c.dns-shop.ru/thumb/st1/fit/320/250/3564920f3bd4276b5731f9aa4766d118/0ccac1c4f7508fce521881ae2788ec7f737241c7dfedb2f196253eed7061ec60.jpg",
        ],
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
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
}
