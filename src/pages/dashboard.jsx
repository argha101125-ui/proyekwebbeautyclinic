import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Pastikan ini di-import
import {
  ArrowRight,
  ArrowLeft,
  Star,
  CalendarCheck,
  ShieldCheck,
  UserCheck,
  HeartHandshake,
  Tag,
} from "lucide-react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import doctorConsul from "../assets/doctorConsul.webp";
import bodyTreat from "../assets/bodyTreat.webp";
import peelingTreat from "../assets/peelingTreat.webp";
import laserTreat from "../assets/laserTreat.webp";
import facialTreat from "../assets/facialTreat.webp";

// --- KOMPONEN KARTU LUXURY (SUDAH DIPERBAIKI) ---
// Perubahan: Menggunakan <Link> agar bisa diklik menuju halaman detail
const LuxuryServiceCard = ({ data }) => {
  return (
    <Link
      to={`/konsultasi/${data.slug}`} // <-- INI KUNCI UTAMANYA (Menggunakan slug)
      className="group relative w-full h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100 block"
    >
      <img
        src={data.image}
        alt={data.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#15503E] via-[#15503E]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute top-6 left-6 bg-[#FAE3C3]/90 backdrop-blur-sm px-4 py-1.5 rounded-full z-10">
        <span className="text-[#15503E] text-xs font-bold uppercase tracking-widest">
          {data.category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-3xl font-playfair font-bold text-[#FAE3C3] mb-3 leading-tight">
          {data.title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
          {data.description}
        </p>
        <div className="flex gap-2 mb-6 overflow-hidden flex-wrap">
          {data.features.slice(0, 2).map((feature, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-white/70 border border-white/20 px-3 py-1 rounded-full"
            >
              <Star size={10} className="fill-[#FAE3C3] text-[#FAE3C3]" />{" "}
              {feature}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 group/btn">
          <span className="text-white font-bold uppercase tracking-widest text-xs group-hover/btn:text-[#FAE3C3] transition-colors">
            View Details
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-[#FAE3C3] group-hover/btn:text-[#15503E] transition-all duration-300">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Dashboard = () => {
  // --- STATE & DATA ---
  const images = [hero1, hero2, hero3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const treatments = [
    {
      id: 1,
      slug: "doctor-consultation",
      image: doctorConsul,
      category: "Professional Treatment",
      title: "Doctor Consultation",
      description:
        "Professional consultation for accurate skin condition analysis.",
      features: [],
    },
    {
      id: 2,
      slug: "peeling-treatments",
      image: peelingTreat,
      category: "Aesthetic Care",
      title: "Peeling Treatment",
      description:
        "Exfoliation and brightening treatment to remove dead skin cells.",
      features: [],
    },
    {
      id: 3,
      slug: "laser-treatments",
      image: laserTreat,
      category: "Aesthetic Care",
      title: "Laser Treatment",
      description:
        "Advanced laser technology for pigmentation, acne scars, and pores.",
      features: [],
    },
    {
      id: 4,
      slug: "body-treatments",
      image: bodyTreat,
      category: "Body Wellness",
      title: "Body Treatment",
      description: "Non-invasive face and body tightening with no downtime.",
      features: [],
    },
    {
      id: 5,
      slug: "prp-microneedling",
      image: facialTreat,
      category: "Facial Treatment",
      title: "PRP Microneedling",
      description:
        "Natural skin regeneration using platelet-rich plasma and microneedling.",
      features: [],
    },
  ];

  // Data Keunggulan
  const advantages = [
    {
      icon: <UserCheck size={32} />,
      title: "Professional",
      desc: "Performed by experienced specialist doctors and certified professional therapists.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Safe And Sterile",
      desc: "Medical-grade procedures using advanced technology to ensure maximum safety.",
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Comfortable",
      desc: "A relaxing clinic environment with personalized and friendly care.",
    },
  ];

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.firstChild.clientWidth + 32;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.firstChild.clientWidth + 32;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // --- STYLE UNTUK MARGIN KONSISTEN ---
  const commonContainerClass = "max-w-7xl mx-auto px-6 md:px-12 w-full";

  return (
    <div className="bg-white overflow-x-hidden font-sans text-[#15503E]">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="w-full min-h-screen bg-[#FAE3C3]/40 flex items-center relative overflow-hidden pt-15">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-bl-full filter blur-3xl z-0"></div>
        <div
          className={`${commonContainerClass} py-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 relative z-10`}
        >
          <div className="flex-1 max-w-xl text-center md:text-left animate-fadeIn">
            <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-[#15503E]/60">
              Welcome to Aldiora
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-[#15503E] leading-[1.1] mb-6">
              Where Health <br className="hidden md:block" />
              Meets Aesthetics <br className="hidden md:block" />
              <span className="text-[#15503E] drop-shadow-md italic font-light">
                From Within
              </span>
            </h1>

            <p className="text-[#15503E]/80 text-lg leading-relaxed max-w-md mx-auto md:mx-0 mb-8 font-light">
              Empowering your confidence with personalized skin solutions that
              prioritize your health and enhance your authentic beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/konsultasi"
                className="bg-[#15503E] text-[#FAE3C3] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#0f3a2d] hover:scale-105 transition-all duration-300 shadow-xl inline-block"
              >
                Consult Now
              </Link>
              <a
                href="https://maps.app.goo.gl/9TbhAQwdPTDGuDw58"
                className="bg-transparent border border-[#15503E] text-[#15503E] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#15503E] hover:text-white transition-all duration-300"
              >
                Visit Us
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md relative">
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[600px] mx-auto">
              <div className="absolute inset-0 bg-[#15503E]/10 rounded-[3rem] transform rotate-6 scale-95 z-0 transition-transform duration-500 hover:rotate-3"></div>
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl z-10 border-4 border-white/50">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Slide ${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15503E]/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-[#FAE3C3] w-8"
                        : "bg-white/40 w-2 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION TREATMENT */}
      <section className="w-full py-24 flex flex-col justify-center bg-white">
        <div className={commonContainerClass}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#15503E]/60 text-sm font-bold uppercase tracking-widest mb-2">
                Our Services
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#15503E] mb-4">
                Featured Treatments
              </h2>
              <p className="text-[#15503E]/70 text-lg max-w-xl font-light">
                Discover our range of premium treatments tailored for you.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={slideLeft}
                className="p-4 rounded-full border border-[#15503E]/20 text-[#15503E] hover:bg-[#15503E] hover:text-[#FAE3C3] transition-all duration-300 active:scale-95 flex items-center justify-center"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={slideRight}
                className="p-4 rounded-full border border-[#15503E]/20 text-[#15503E] hover:bg-[#15503E] hover:text-[#FAE3C3] transition-all duration-300 active:scale-95 flex items-center justify-center"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-12"
          >
            {treatments.map((item) => (
              <div
                key={item.id}
                className="snap-center md:snap-start min-w-[85%] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] flex-shrink-0"
              >
                <LuxuryServiceCard data={item} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/konsultasi"
              className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#15503E] text-[#15503E] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest overflow-hidden hover:text-[#88BFA9] transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#15503E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10"></span>
              <span>View All Treatments</span>
              <CalendarCheck
                size={18}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECTION KEUNGGULAN */}
      <section className="bg-[#F8FCFA] py-24">
        <div className={`${commonContainerClass}`}>
          <div className="text-center mb-16">
            <p className="text-[#15503E]/60 text-sm font-bold uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#15503E]">
              Experience the Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default border border-[#15503E]/5"
              >
                <div className="w-20 h-20 rounded-full bg-[#E5F0EB] flex items-center justify-center text-[#15503E] mb-6 group-hover:scale-110 group-hover:bg-[#15503E] group-hover:text-[#FAE3C3] transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-playfair font-bold text-[#15503E] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#15503E]/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION LOCATION */}
      <section className="bg-[#15503E] w-full py-24 text-[#FAE3C3]">
        <div className={`${commonContainerClass} flex flex-col items-center`}>
          <div className="mb-12 text-center max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-white/70 text-lg font-light">
              Experience the finest treatments at our conveniently located
              clinic. Visit Aldiora Clinic for a personalized consultation.
            </p>
          </div>

          <div className="w-full max-w-5xl h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#FAE3C3]/20 bg-gray-200 relative group">
            <iframe
              title="Peta Aldiora Clinic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.336495687645!2d106.81160311476906!3d-6.237435295484898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e5bd1910d1%3A0x94f9d8a4e8d3feec!2sJl.%20Wolter%20Monginsidi%20No.88P%2C%20RT.1%2FRW.4%2C%20Petogogan%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1626123456789!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(70%) contrast(1.2) opacity(0.9)",
              }}
              allowFullScreen=""
              loading="lazy"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>

            <div className="absolute bottom-6 left-6 bg-white/90 text-[#15503E] px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm pointer-events-none">
              <p className="font-bold text-sm">Aldiora Clinic</p>
              <p className="text-xs">Jakarta Selatan</p>
              <p className="text-xs">Mon - Sat: 09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
