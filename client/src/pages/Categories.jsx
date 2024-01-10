import CategoriesNav from "../components/CategoriesNav";
import DeviceFilter from "../components/DeviceFilter";
import DeviceList from "../components/DeviceList";

const Categories = () => {
  return (
    <div className="wrapper">
      <CategoriesNav />
      <div className="wrapper__content">
        <DeviceFilter />
        <DeviceList />
      </div>
    </div>
  );
};

export default Categories;
