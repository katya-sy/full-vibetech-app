import Promo from "../components/Promo";
import CategoriesNav from "../components/CategoriesNav";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <div className="wrapper">
      <CategoriesNav />
      <div className="wrapper__content">
        <Promo />
        <h2 className="title">Товары недели!</h2>
        <DeviceList deviceCount={3} />
        <h2 className="title">Рекомендуем</h2>
        <DeviceList deviceCount={3} />
      </div>
    </div>
  );
};

export default Shop;
