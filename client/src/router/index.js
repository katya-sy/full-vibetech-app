import { CATEGORIES_ROUTE, DEVICE_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Shop from "../pages/Shop";
import Categories from "../pages/Categories";
import DevicePage from "../pages/DevicePage";

export const authRoutes = [];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: CATEGORIES_ROUTE,
    Component: Categories,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
];
