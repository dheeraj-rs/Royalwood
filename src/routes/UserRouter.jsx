import { Route, Routes } from "react-router-dom";
import SearchPage from "../pages/user/SearchPage";
import ShopPage from "../pages/user/ShopPage";
import Homepage from "../pages/user/Homepage";
import CategoriPage from "../pages/user/CategoriPage";
import CartPage from "../pages/user/CartPage";
import FvtPage from "../pages/user/FvtPage";
import MenuPage from "../pages/user/MenuPage";
import ProductDetailsPage from "../pages/user/ProductDetailsPage";
function UserRouter() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/*" />
      <Route element={<SearchPage />} path="/search" />
      <Route element={<ShopPage />} path="/shop" />
      <Route element={<CategoriPage />} path="/categori" />
      <Route element={<CartPage />} path="/cart" />
      <Route element={<FvtPage />} path="/fvt" />
      <Route element={<MenuPage />} path="/menu" />
      <Route element={<ProductDetailsPage />} path="/productpage" />
    </Routes>
  );
}
export default UserRouter;
