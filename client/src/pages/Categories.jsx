import CategoriesNav from "../components/CategoriesNav";
import DeviceFilter from "../components/DeviceFilter";
import DeviceList from "../components/DeviceList";
import Pagination from "../components/UI/pagination/Pagination";

const Categories = () => {
  return (
    <div className="wrapper">
      <CategoriesNav />
      <div className="wrapper__content">
        <DeviceFilter />
        <DeviceList />
        <Pagination />
      </div>
    </div>
  );
};

export default Categories;
