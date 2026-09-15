import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/logoPengganti.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Logic Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#15503E]/90 backdrop-blur-md border-white/10 py-1 shadow-lg"
            : "bg-[#15503E] border-transparent py-2"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center text-[#FAE3C3]">
          {/* 1. LOGO & TEKS */}
          <Link
            to="/"
            className="z-50 relative flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="bg-[#FAE3C3] w-36 md:w-44 h-10 md:h-12 transition-all"
              style={{
                maskImage: `url(${logoImage})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center left",
                WebkitMaskImage: `url(${logoImage})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center left",
              }}
            />
            {/* Wrapper Teks Atas-Bawah (Sudah Dikecilkan) */}
            {/* <div className="flex flex-col justify-center font-playfair font-bold tracking-widest text-[#FAE3C3]">
              <span className="text-lg md:text-xs leading-none mb-0.5">
                Aldiora
              </span>
              <span className="text-[10px] md:text-xs leading-none">
                Clinic
              </span>
            </div> */}
          </Link>

          {/* 2. MENU DESKTOP */}
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
            <Link
              to="/"
              className={`${isActive("/") ? "text-white" : "text-[#FAE3C3]"} hover:text-white transition`}
            >
              Home
            </Link>
            <Link
              to="/konsultasi"
              className={`${isActive("/konsultasi") ? "text-white" : "text-[#FAE3C3]"} hover:text-white transition`}
            >
              Consultation
            </Link>
            <Link
              to="/about"
              className={`${isActive("/about") ? "text-white" : "text-[#FAE3C3]"} hover:text-white transition`}
            >
              About
            </Link>
          </div>

          {/* 3. TOMBOL HAMBURGER */}
          <button
            className="md:hidden z-50 text-[#FAE3C3] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* 4. MENU MOBILE DROPDOWN */}
          <div
            className={`fixed inset-0 bg-[#15503E] flex flex-col items-center justify-center gap-8 text-xl font-bold uppercase tracking-widest transition-transform duration-500 ease-in-out md:hidden ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
            style={{ top: "0", left: "0", height: "100vh", width: "100%" }}
          >
            {["Home", "Consultation", "About"].map((item) => {
              let path = "/";
              if (item === "Consultation") path = "/konsultasi";
              else if (item === "About") path = "/about";

              return (
                <Link
                  key={item}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    isActive(path) ? "text-white scale-110" : "text-[#FAE3C3]"
                  } hover:text-white transition-transform hover:scale-110`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
