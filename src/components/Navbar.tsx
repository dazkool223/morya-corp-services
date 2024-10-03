"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            Morya Corp Services
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent z-50`}
          >
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-800 block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-gray-800 block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-600 hover:text-gray-800 block"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-800 block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
