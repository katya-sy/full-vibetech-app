import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import filterIcon from "../assets/img/filter.svg";
import sortIcon from "../assets/img/sort.svg";
import "../styles/DeviceFilter.css";

function DeviceFilter() {
  return (
    <div className="device-filter">
      <Input placeholder={"Поиск..."} />
      <div className="device-filter__btns">
        <Button>
          <div className="device-filter__btn">
            <img src={filterIcon} />
            <span className="device-filter__title">Фильтры</span>
          </div>
        </Button>
        <Button>
          <div className="device-filter__btn">
            <img src={sortIcon} />
            <span className="device-filter__title">Сортировка</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default DeviceFilter;
