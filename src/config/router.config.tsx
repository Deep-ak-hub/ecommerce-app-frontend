import { BrowserRouter, Route, Routes } from "react-router";
import { Products } from "../pages/Products";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

const RouterConfig = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          {/* <Route path = "/" Component={Products}/> */}
          <Route path="/" element={<Products search={search} />} />
          <Route path="/login" Component={LoginPage} />
          <Route
            path="*"
            element={
              <ErrorPage code={404} message="Page not found"/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
