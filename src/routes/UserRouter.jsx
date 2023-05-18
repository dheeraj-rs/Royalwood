import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/user/Homepage";
import SearchPage from "../pages/user/SearchPage";
import ShopPage from "../pages/user/ShopPage";
// import Cart from "../firebase/Cart";
function UserRouter() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/*" />
      <Route element={<SearchPage />} path="/search" />
      <Route element={<ShopPage />} path="/shop" />
      {/* <Route element={<Cart />} path="/cart" /> */}

    </Routes>
  );
}

export default UserRouter;
