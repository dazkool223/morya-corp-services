"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full transition-all duration-300 ease-in-out z-50
        ${isVisible ? "top-0" : "-top-full"}
        ${isScrolled ? "" : "bg-transparent"}
        md:flex md:justify-center`}
    >
      <div
        className={`container mx-auto px-4 md:mx-2
        ${isScrolled ? "py-2" : "py-4"}
        md:max-w-3xl lg:max-w-4xl
        md:bg-white md:bg-opacity-90 md:rounded-full md:shadow-md
        transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/placeholder.svg?height=40&width=40&text=Logo"
              alt="Company Logo"
              className="h-10 w-10 mr-3"
            />
            <span className="text-xl font-bold text-gray-800">
              Morya Corp Services
            </span>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 bg-white md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
