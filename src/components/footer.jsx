import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, ChevronDown } from "lucide-react";
import logo from "../assets/Logo.png";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    // UBAH WARNA: bg-[#15503E] (Hijau Tua) dan text-white
    <footer className="bg-[#15503E] text-white font-sans py-12 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* === KOLOM 1: LOGO === */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-2">
              {/* Filter logo agar jadi Putih Bersih */}
              <img
                src={logo}
                alt="Aldiora Logo"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>

            {/* Tambahan Slogan Kecil */}
            <p className="text-white/60 leading-relaxed max-w-xs">
              Bringing out your natural beauty through advanced technology and
              personalized care.
            </p>

            <div className="flex items-center gap-2 mt-2">
              <a
                href="https://www.instagram.com/aldioraclinic/"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* === KOLOM 2: QUICK LINKS === */}
          <div className="flex flex-col items-start md:items-center w-full md:w-auto">
            <button
              onClick={() => toggleSection("quickLinks")}
              className="flex justify-between items-center w-full md:w-auto py-2 md:py-0 font-bold uppercase tracking-widest text-xs focus:outline-none border-b border-white/10 md:border-none md:mb-6 text-left text-yellow-200">
              <span>Quick Links</span>
              <ChevronDown
                size={16}
                className={`md:hidden transition-transform duration-300 ${
                  openSection === "quickLinks" ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`text-left md:text-center space-y-3 overflow-hidden transition-all duration-300 ease-in-out w-full md:w-auto
              ${
                openSection === "quickLinks"
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:mt-0"
              }
            `}>
              <li>
                <Link to="/" className="hover:text-yellow-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/konsultasi"
                  className="hover:text-yellow-200 transition">
                  Consul
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-200 transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* === KOLOM 3: CONTACT === */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto md:text-right">
            <button
              onClick={() => toggleSection("contact")}
              className="flex justify-between items-center w-full md:w-auto py-2 md:py-0 font-bold uppercase tracking-widest text-xs focus:outline-none border-b border-white/10 md:border-none md:mb-6 text-left text-yellow-200">
              <span>Contact</span>
              <ChevronDown
                size={16}
                className={`md:hidden transition-transform duration-300 ${
                  openSection === "contact" ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`space-y-4 text-left md:text-right overflow-hidden transition-all duration-300 ease-in-out w-full md:w-auto
              ${
                openSection === "contact"
                  ? "max-h-60 opacity-100 mt-2"
                  : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:mt-0"
              }
            `}>
              <li className="flex flex-col md:items-end gap-1">
                <div className="flex items-center gap-2 md:flex-row-reverse justify-start md:justify-end">
                  <MapPin size={16} className="text-yellow-200 shrink-0" />
                  <span className="font-semibold">Visit Us</span>
                </div>
                <span className="text-white/70 leading-relaxed md:w-48">
                  Jl. Wolter Monginsidi No.88P, Kebayoran Baru
                </span>
              </li>

              <li className="flex flex-col md:items-end gap-1">
                <div className="flex items-center gap-2 md:flex-row-reverse justify-start md:justify-end">
                  <Phone size={16} className="text-yellow-200" />
                  <span className="font-semibold">Call Us</span>
                </div>
                <span className="text-white/70">0812-2631-6899</span>
              </li>

              <li className="flex flex-col md:items-end gap-1">
                <div className="flex items-center gap-2 md:flex-row-reverse justify-start md:justify-end">
                  <Mail size={16} className="text-yellow-200" />
                  <span className="font-semibold">Email Us</span>
                </div>
                <span className="text-white/70">Aldioraclinic@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-[10px] font-medium text-white/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Aldiora Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
