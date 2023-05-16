import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/user/Homepage";
import SearchPage from "../pages/user/SearchPage";
import ShopPage from "../pages/user/ShopPage";
function UserRouter() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/*" />
      <Route element={<SearchPage />} path="/search" />
      <Route element={<ShopPage />} path="/shop" />
    </Routes>
  );
}

export default UserRouter;
