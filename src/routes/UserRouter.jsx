import { Route, Routes } from "react-router-dom";
import ShopPage from "../pages/user/ShopPage";
import Homepage from "../pages/user/Homepage";
import CartPage from "../pages/user/CartPage";
import FvtPage from "../pages/user/FvtPage";
import MenuPage from "../pages/user/MenuPage";
import ProductDetailsPage from "../pages/user/ProductDetailsPage";
import GalleryPage from "../pages/user/GalleryPage";
import LoginPage from "../pages/user/LoginPage";

function UserRouter() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<ShopPage />} path="/shop" />
      <Route element={<GalleryPage />} path="/gallery" />
      <Route element={<CartPage />} path="/cart" />
      <Route element={<FvtPage />} path="/fav" />
      <Route element={<MenuPage />} path="/menu" />
      <Route element={<ProductDetailsPage />} path="/productpage" />
    </Routes>
  );
}
export default UserRouter;
