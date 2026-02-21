import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative w-full bg-[#F2EFE9] shadow-md">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo - Your Name */}
        <div className="flex items-center">
          <Link to="/" className="group">
            <h1 className="text-2xl font-bold text-[#1e1e1e] group-hover:text-[#4A592C] transition-colors duration-300">
              Abd <span className="text-[#4A592C]">Elrhman</span>
            </h1>
            <p className="text-xs text-[#8b8b8b] -mt-1">Frontend Developer</p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-evenly gap-8">
          <ul className="flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-[#1e1e1e] hover:text-[#4A592C] transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4A592C] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="px-6 py-2 bg-[#d9b46a] text-[#1e1e1e] font-semibold rounded-lg hover:bg-[#b88a3b] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="block lg:hidden cursor-pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6 text-[#4A592C]" />
          ) : (
            <HiMiniBars3 className="h-6 w-6 text-[#1e1e1e]" />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-full left-0 w-full z-50 bg-[#F2EFE9] shadow-lg border-t border-[#e8e1d7]`}
      >
        <ul className="flex flex-col p-6 gap-4 font-medium">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => setIsOpen(false)}
              className="border-b border-[#e8e1d7] pb-3 last:border-0"
            >
              <Link
                to={link.path}
                className="text-[#1e1e1e] hover:text-[#4A592C] transition-colors duration-300 block py-2"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full px-6 py-3 bg-[#d9b46a] text-[#1e1e1e] font-semibold rounded-lg text-center hover:bg-[#b88a3b] transition-all duration-300"
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
