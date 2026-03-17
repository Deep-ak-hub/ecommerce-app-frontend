import {createBrowserRouter, RouterProvider } from "react-router";
import { Products } from "../pages/Products";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";

                                            // Component Based Router
// const RouterConfig = () => {
//   const [search, setSearch] = useState("");
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar search={search} setSearch={setSearch} />
//         <Routes>
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
  {path: "/", element : <Products />},
  {path: "/login", element : <LoginPage />},
  {path: "/register", element : <RegisterPage />},
  {path: "*", Component : ErrorPage},
])

const RouterConfig = () => {
  return (
    <>
    <RouterProvider router={routePaths} />
    </>
  )
}

export default RouterConfig;
