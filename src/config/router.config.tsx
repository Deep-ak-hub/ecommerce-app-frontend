import { createBrowserRouter, RouterProvider } from "react-router";
import { Products } from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
import ForgetPasswrodPage from "@/pages/ForgetPasswrodPage";
import AuthLayoutPage from "@/pages/layouts/AuthLayoutPage";
import AdminLayoutPage from "@/pages/layouts/admin/AdminLayoutPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminBannerPage from "@/pages/admin/AdminBannerPage";
import AdminBrandPage from "@/pages/admin/AdminBrandPage";
import AdminCategoryPage from "@/pages/admin/AdminCategoryPage";
import AdminUserPage from "@/pages/admin/AdminUserPage";
import AdminProductPage from "@/pages/admin/AdminProductPage";
import AdminOrderPage from "@/pages/admin/AdminOrderPage";
import AdminTransactionPage from "@/pages/admin/AdminTransactionPage";
import AdminChatPage from "@/pages/admin/AdminChatPage";

const routePaths = createBrowserRouter([
  { path: "/", element: <Products /> },
  {
    path: "/auth",
    element: <AuthLayoutPage />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forget-password", element: <ForgetPasswrodPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayoutPage />,
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "banner", element: <AdminBannerPage /> },
      { path: "brand", element: <AdminBrandPage /> },
      { path: "category", element: <AdminCategoryPage /> },
      { path: "user", element: <AdminUserPage /> },
      { path: "product", element: <AdminProductPage /> },
      { path: "order", element: <AdminOrderPage /> },
      { path: "transaction", element: <AdminTransactionPage /> },
      { path: "chat", element: <AdminChatPage /> },
    ],
  },
  { path: "*", Component: ErrorPage },
]);

const RouterConfig = () => {
  return (
    <>
      <RouterProvider router={routePaths} />
    </>
  );
};

export default RouterConfig;
