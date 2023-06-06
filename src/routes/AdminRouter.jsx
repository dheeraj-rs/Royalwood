import { Route, Routes } from "react-router-dom";
import AdminHome from "../pages/admin/AdminHome";

function AdminRouter() {
  return (
    <Routes>
      <Route element={<AdminHome />} path="/" />
    </Routes>
  );
}
export default AdminRouter;
