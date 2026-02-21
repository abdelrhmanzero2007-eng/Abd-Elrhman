import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function MinLayuot() {
  return (
    <div className="w-full h-dvh items-center justify-start flex flex-col">
      <NavBar />
      <Outlet />
      <Footer className="w-full" />
    </div>
  );
}
