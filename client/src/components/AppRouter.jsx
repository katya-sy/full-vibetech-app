import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../router";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../main";

function AppRouter() {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;
