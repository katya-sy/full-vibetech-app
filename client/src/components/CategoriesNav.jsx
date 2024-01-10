import { useContext } from "react";
import { Context } from "../main";
import "../styles/CategoriesNav.css";
import { observer } from "mobx-react-lite";
import close from "../assets/img/close.svg";

const CategoriesNav = observer(() => {
  const { device, isButtonClick } = useContext(Context);

  return (
    <div
      className={
        isButtonClick.isButtonClick
          ? "categories-nav categories-nav--active"
          : "categories-nav"
      }
    >
      <button
        className="close-icon"
        onClick={() => isButtonClick.setIsButtonClick(false)}
      >
        <img src={close} />
      </button>
      <ul>
        {device.types.map((type) => (
          <li
            key={type.id}
            onClick={() => {
              device.setSelectedType(type);
            }}
          >
            {/* <img src={type.img} /> */}
            <span>{type.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CategoriesNav;
