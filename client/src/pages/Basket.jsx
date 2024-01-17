import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../main";
import { fetchBasketDevices } from "../http/basketAPI";
import DeviceCard from "../components/DeviceCard";

const Basket = observer(() => {
  const { basket, user } = useContext(Context);

  useEffect(() => {
    fetchBasketDevices(user.user.id).then((data) => {
      basket.setBasketDevices(data);
    });
  }, []);

  return (
    <div>
      <h2 className="title">Корзина</h2>
      <div className="device-list">
        {!basket.basketDevices.length && (
          <h2 className="title" style={{ textAlign: "center" }}>
            Корзина пуста!
          </h2>
        )}
        {basket.basketDevices.map((device) => (
          <DeviceCard key={device?.id} device={device?.device} />
        ))}
      </div>
    </div>
  );
});

export default Basket;
