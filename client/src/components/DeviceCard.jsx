import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Promo.css";
import fav from "../assets/img/add-fav.svg";
import cart from "../assets/img/add-cart.svg";
import minus from "../assets/img/delete.svg";
import "../styles/DeviceCard.css";
import { DEVICE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

const DeviceCard = observer(({ device }) => {
  const router = useNavigate();
  const [favourite, setFavourite] = useState(false);
  const { user, basket } = useContext(Context);

  return (
    <div className="device-card">
      <div onClick={() => router(`${DEVICE_ROUTE}/${device?.id}`)}>
        <picture>
          <img
            className="device-card__img"
            src={import.meta.env.VITE_API_URL + device?.img}
            alt="Device"
          />
        </picture>
        <h4 className="device-card__title">{device?.name}</h4>
      </div>
      <div>
        <p className="device-card__price">{device?.price + " ₽"}</p>
        <div className="device-card__btns">
          <button
            className={favourite ? "device-card__btn-active" : undefined}
            onClick={() => setFavourite((favourite) => !favourite)}
          >
            <img src={fav} />
          </button>
          <button>
            <img
              src={cart}
              onClick={() => basket.addBasketDevice(device?.id, user.user.id)}
            />
          </button>
          {basket.isDeviceInBasket(device?.id) && (
            <button>
              <img
                src={minus}
                onClick={() => basket.removeBasketDevice(device?.id)}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default DeviceCard;
