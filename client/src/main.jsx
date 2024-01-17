import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserStore from "./store/UserStore.js";
import DeviceStore from "./store/DeviceStore.js";
import IsButtonClickStore from "./store/IsButtonClickStore.js";
import BasketStore from "./store/BasketStore.js";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
      isButtonClick: new IsButtonClickStore(),
      basket: new BasketStore(),
    }}
  >
    <App />
  </Context.Provider>
);
