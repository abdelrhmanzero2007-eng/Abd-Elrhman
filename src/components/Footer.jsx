import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer({ className }) {
  return (
    <div className={className}>
      <footer className="bg-[#1e1e1e] text-[#F2EFE9] py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Abd <span className="text-[#d9b46a]">Elrhman</span>
              </h3>
              <p className="text-[#8b8b8b] mb-4 leading-relaxed">
                A passionate Frontend Developer creating beautiful, responsive,
                and user-friendly web applications.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#4A592C] rounded-full flex items-center justify-center text-[#F2EFE9] hover:bg-[#d9b46a] transition-colors duration-300"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#4A592C] rounded-full flex items-center justify-center text-[#F2EFE9] hover:bg-[#d9b46a] transition-colors duration-300"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#4A592C] rounded-full flex items-center justify-center text-[#F2EFE9] hover:bg-[#d9b46a] transition-colors duration-300"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="https://wa.me/201014050596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#4A592C] rounded-full flex items-center justify-center text-[#F2EFE9] hover:bg-[#25D366] transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#d9b46a]">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-[#8b8b8b] hover:text-[#d9b46a] transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[#8b8b8b] hover:text-[#d9b46a] transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[#8b8b8b] hover:text-[#d9b46a] transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-[#8b8b8b] hover:text-[#d9b46a] transition-colors duration-300"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#d9b46a]">
                Services
              </h4>
              <ul className="space-y-2">
                <li className="text-[#8b8b8b]">Web Development</li>
                <li className="text-[#8b8b8b]">React Development</li>
                <li className="text-[#8b8b8b]">Responsive Design</li>
                <li className="text-[#8b8b8b]">UI/UX Design</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#d9b46a]">
                Get In Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#8b8b8b]">
                  <FaEnvelope className="text-[#d9b46a]" />
                  abdelrhman.zero.2007@gmail.com
                </li>
                <li className="flex items-center gap-3 text-[#8b8b8b]">
                  <FaPhone className="text-[#d9b46a]" />
                  +20 1014050596
                </li>
                <a
                  href="https://wa.me/201014050596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#8b8b8b] hover:text-[#d9b46a] transition-colors duration-300"
                >
                  <FaWhatsapp className="text-[#d9b46a]" />
                  +20 1014050596
                </a>
                <li className="text-[#8b8b8b]">Egypt</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#4A592C] mt-12 pt-8 text-center">
            <p className="text-[#8b8b8b]">
              © {new Date().getFullYear()} Abd Elrhman. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
