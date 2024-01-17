import { useContext, useEffect, useState } from "react";
import Button from "./UI/button/Button.jsx";
import heart from "../assets/img/heart.svg";
import "../styles/DeviceMain.css";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI.js";
import { Context } from "../main.jsx";

function DeviceMain() {
  const [device, setDevice] = useState({ info: [] });
  const [favourite, setFavourite] = useState(false);
  const { id } = useParams();
  const { basket, user } = useContext(Context);

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <div className="device-main">
      <div className="device-main__content">
        <div className="device-main__images">
          <img src={import.meta.env.VITE_API_URL + device.img} alt="Device" />
          {/* {device.img.map((img) => (
            <img key={img.id} src={img.url} alt="Device" />
          ))} */}
        </div>
        <div className="device-main__content-info">
          <div>
            <h2 className="device-main__title">{device.name}</h2>
            <p className="device-main__desc">{device.desc}</p>
            <p className="device-main__price">{device.price} ₽</p>
          </div>
          <div className="device-main__btns">
            <Button
              style={{ width: "60%" }}
              onClick={() => basket.addBasketDevice(device?.id, user.user.id)}
            >
              Купить
            </Button>
            <button
              className={
                favourite
                  ? "device-main__btn device-main__btn--active"
                  : "device-main__btn"
              }
              onClick={() => setFavourite((favourite) => !favourite)}
            >
              <img src={heart} />
            </button>
          </div>
        </div>
      </div>
      <div className="device-main__info">
        <h2 className="device-main__title">Характеристики</h2>
        <div className="device-main__info-wrapper">
          {device.info.map((desc) => (
            <div key={desc.id} className="device-main__info-item">
              <h4>{desc.title}</h4>
              <p>{desc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeviceMain;
