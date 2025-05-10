"use client";
import React, { useState, useEffect, useRef } from "react";

function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeDrawer = () => setMobileOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        mobileOpen
      ) {
        closeDrawer();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileOpen]);

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9FBFF] shadow-md px-2 sm:px-2 md:px-32 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex-shrink-0 text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform hover:scale-105 cursor-pointer">
          Auto<span className="text-[#00BFFF]">Bg</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="bg-[#5CD6FF] border border-[#00BFFF] text-black rounded-full px-4 py-1 text-sm transition-transform hover:scale-105 active:scale-95 hover:bg-[#3acaf8] hover:cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleDrawerToggle}
          className="sm:hidden fixed right-3 top-3 z-50 text-black"
        >
          <svg
            className="w-6 h-6 transition-transform hover:scale-110 active:scale-95"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Backdrop */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white/10 z-40 transition-opacity duration-300" />
      )}

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-60 bg-[#F9FBFF] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-4 p-4 mt-8">
          <button className="bg-[#5CD6FF] border border-[#00BFFF] text-black rounded-full px-4 py-1 text-sm transition-transform hover:scale-105 active:scale-95 hover:bg-[#3acaf8] hover:cursor-pointer" onClick={handleDrawerToggle}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
