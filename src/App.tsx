import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Products } from "./pages/Products";

export function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  )
}