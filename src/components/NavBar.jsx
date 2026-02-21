import { useState } from "react"; // 1. استيراد useState
import { BsCart2 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavBar() {
  // 2. حالة القائمة (مفتوحة أو مقفولة)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`relative w-full py-5   bg-[linear-gradient(155deg,#1e1e1e,#FBF5E6)] `}
    >
      <div className="flex items-center text-Main justify-between  px-8 lg:py-7 lg:px-41.25">
        <div className="">
          <h1 className="text-2xl font-sans font-extrabold">
            Abd Elrhman
          </h1>{" "}
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center justify-evenly gap-12 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMiniBars3 className="h-6 w-6 text-MinTextSecondary" />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } h-full text-center lg:hidden   bg-[linear-gradient(155deg,#1e1e1e,#FBF5E6)]  text-Main border-t w-full left-0 z-50 shadow-lg`}
      >
        <ul className="flex flex-col p-4 gap-5 font-medium pl-8">
          <li onClick={() => setIsOpen(false)}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={() => setIsOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
