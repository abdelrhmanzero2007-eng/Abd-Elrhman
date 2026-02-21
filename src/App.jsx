import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Regstir from "./pages/Regstir";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import MinLayuot from "./components/MinLayuot";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MinLayuot />}>
            <Route index element={<Home />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="shop" element={<Shop />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Regstir />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
