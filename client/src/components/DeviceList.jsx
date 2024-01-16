import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../main";
import DeviceCard from "./DeviceCard";
import "../styles/DeviceList.css";

const DeviceList = observer(({ deviceCount }) => {
  const { device } = useContext(Context);

  return (
    <div className="device-list">
      {!device.devices.length && (
        <h2 className="title" style={{ textAlign: "center" }}>
          Товары не найдены!
        </h2>
      )}
      {device.devices.slice(0, deviceCount).map((device) => (
        <DeviceCard key={device.id} device={device} />
      ))}
    </div>
  );
});

export default DeviceList;
