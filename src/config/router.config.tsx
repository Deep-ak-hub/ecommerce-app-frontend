import { createBrowserRouter, RouterProvider } from "react-router";
import { Products } from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
import ForgetPasswrodPage from "@/pages/ForgetPasswrodPage";
import AuthLayoutPage from "@/pages/layouts/AuthLayoutPage";
import UserLayoutPage from "@/pages/layouts/admin layout/UserLayoutPage";
import AdminDashboardPage from "@/pages/layouts/admin layout/AdminDashboardPage";
import AdminPlaceholderPage from "@/pages/layouts/admin layout/AdminPlaceholderPage";

// Component Based Router
// const RouterConfig = () => {
//   const [search, setSearch] = useState("");
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/">
//            <Route path= "" element={}/>
//           </Route>
//           {/* <Route path = "/" Component={Products}/> */}
//           <Route path="/" element={<Products search={search} />} />
//           <Route path="/login" Component={LoginPage} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route
//             path="*"
//             element={
//               <ErrorPage code={404} message="Page not found"/>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// Provider Based Router
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
    element: <UserLayoutPage />,
    children: [
      { index: true, element: <AdminDashboardPage /> },
      {
        path: "banner",
        element: <AdminPlaceholderPage title="Banner" />,
      },
      {
        path: "brand",
        element: <AdminPlaceholderPage title="Brand" />,
      },
      {
        path: "category",
        element: <AdminPlaceholderPage title="Category" />,
      },
      {
        path: "user",
        element: <AdminPlaceholderPage title="User" />,
      },
      {
        path: "product",
        element: <AdminPlaceholderPage title="Product" />,
      },
      {
        path: "order",
        element: <AdminPlaceholderPage title="Order" />,
      },
      {
        path: "transaction",
        element: <AdminPlaceholderPage title="Transaction" />,
      },
      {
        path: "chat",
        element: <AdminPlaceholderPage title="Chat" />,
      },
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
