import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Why it matter", href: "#why" },
    { label: "Our Advantage", href: "#advantage" },
    { label: "Stay Updated", href: "#updates" },
  ];

 
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-white border-b-2 border-purple-800 shadow z-50 fixed w-full">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-purple-900">
          <span className="text-purple-700">Pedi</span>
          <span className="text-gray-800">-Tracker</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-purple-900 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-purple-700 transition duration-200"
              onClick={e => handleSmoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple-900">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${
          menuOpen ? "max-h-60 py-2" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-purple-900 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-purple-700"
              onClick={e => handleSmoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;