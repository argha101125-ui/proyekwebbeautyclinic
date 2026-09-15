import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/footer";
import { SERVICES_DATA } from "../data/services"; // Import data terpusat

const Consultation = () => {
  return (
    // CONTAINER UTAMA (Scroll Biasa)
    <div className="min-h-screen w-full bg-[#FAE3C3]/60">
      {/* SECTION 1: HERO */}
      <section className="min-h-[100vh] w-full bg-[#15503E] text-[#FAE3C3] flex items-center justify-center relative overflow-hidden py-24 md:py-32 px-6">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FAE3C3]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#FAE3C3]/5 rounded-full blur-[80px]"></div>

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">
            Treatments Menu
          </p>
          <h1 className="text-5xl md:text-8xl font-playfair font-medium mb-8 leading-tight">
            Curated <br /> Treatments
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Discover skin care solutions designed specifically for your needs.
          </p>
        </div>
      </section>

      {/* SECTION 2: SERVICE LIST (Grid Catalog) */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#15503E]/10 pb-6 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#15503E]">
                Our Services
              </h2>
              <p className="text-[#15503E]/60 text-sm mt-2">
                Click on a card to see pricing details and procedures.
              </p>
            </div>
            <div className="text-[#15503E]/40 text-sm font-bold tracking-widest">
              {SERVICES_DATA.length} TREATMENTS AVAILABLE
            </div>
          </div>

          {/* GRID CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// COMPONENT CARD (Link Wrapper)
const ServiceCard = ({ data }) => {
  return (
    // Link mengarah ke /konsultasi/slug-nya
    <Link to={`/konsultasi/${data.slug}`} className="block h-full">
      <div className="group bg-white rounded-[2rem] border border-[#15503E]/5 hover:border-[#15503E] transition-all duration-300 hover:shadow-xl flex flex-col h-full transform hover:-translate-y-1 overflow-hidden cursor-pointer">
        {/* Gambar di Atas */}
        <div className="h-56 w-full relative overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#15503E]/10 mix-blend-multiply"></div>
        </div>

        {/* Konten Text */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-6">
            <span className="text-4xl font-playfair text-[#15503E]/20 group-hover:text-[#15503E] transition-colors font-bold">
              {data.id}
            </span>
            <div className="p-3 bg-[#FAE3C3]/30 rounded-full text-[#15503E] group-hover:bg-[#15503E] group-hover:text-[#FAE3C3] transition-colors">
              {data.icon}
            </div>
          </div>

          <h3 className="text-2xl font-playfair font-bold text-[#15503E] mb-4 leading-tight">
            {data.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
            {data.shortDesc}
          </p>

          <div className="inline-flex items-center gap-2 text-[#15503E] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all mt-auto">
            View Details <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Consultation;
