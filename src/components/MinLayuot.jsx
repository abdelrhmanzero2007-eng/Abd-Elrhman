import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function MinLayuot() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
