import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import sortIcon from "../assets/img/sort.svg";
import "../styles/DeviceFilter.css";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../main";
import Select from "./UI/select/Select";
import { SORT } from "../utils/consts";
import { useEffect } from "react";

const DeviceFilter = observer(() => {
  const options = [
    { value: SORT.NAME, label: "По названию" },
    { value: SORT.PRICE, label: "По цене" },
    { value: SORT.TYPE, label: "По типу" },
  ];

  const { device } = useContext(Context);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    device.setSelectedSort(selectedOption.value);
  });

  console.log(selectedOption);

  return (
    <div className="device-filter">
      <Input
        placeholder={"Поиск..."}
        value={device.search}
        onChange={(e) => device.setSearch(e.target.value)}
      />
      <div className="device-filter__btns">
        <Select
          options={options}
          onChange={(e) => {
            setSelectedOption(
              options.find((option) => option.value === e.target.value)
            );
          }}
        ></Select>
        <Button
          onClick={() =>
            device.setSelectedOrder(
              device.selectedOrder === "ASC" ? "DESC" : "ASC"
            )
          }
        >
          <div className="device-filter__btn">
            <img src={sortIcon} />
            <span className="device-filter__title">
              {device.selectedOrder === "ASC"
                ? "По возрастанию"
                : "По убыванию"}
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
});

export default DeviceFilter;
