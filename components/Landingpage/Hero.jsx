"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeroCategorySlider from "@/components/Landingpage/HeroCategorySlider";
import Enquiry from "@/components/Enquiry";

const slides = [
  {
    id: 1,
    title: "Modern Office Workstations",
    subtitle:
      "Ergonomically designed modular workstation setups that enhance employee comfort, improve workflow efficiency and deliver a clutter-free, stylish corporate environment.",
    badge: "Best Seller",
    image: "/10.webp",
  },
  {
    id: 2,
    title: "Ergonomic Office Chairs",
    subtitle:
      "Smart posture-support seating engineered for long working hours — ensuring reduced fatigue, enhanced productivity, and a healthier work lifestyle.",
    badge: "Ergonomic Comfort",
    image: "/officeimage/9.webp",
  },
  {
    id: 3,
    title: "Meeting & Conference Tables",
    subtitle:
      "Professional meeting room solutions featuring durable finishes, cable-management systems and luxury aesthetics to elevate every client interaction.",
    badge: "Corporate Choice",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1765358833/4_umribc.webp",
  },

  
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIndex];

  return (


    <>
    
    
    <section className="relative h-[60vh] md:h-[90vh] overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[900ms]
              ${
                index === activeIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-[1.06]"
              }
            `}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/55 to-slate-900/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center 
        px-4 sm:px-6 lg:px-8 ">
        <div
          key={activeSlide.id}
          className="max-w-3xl space-y-3 px-4 sm:px-0"
          style={{
            animation: "heroContentIn 900ms cubic-bezier(0.22,1,0.36,1)",
            animationFillMode: "both",
          }}
        >
          {/* Badge */}
          <span className="  hidden md:inline-flex items-center rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-200 ring-1 ring-amber-300/40">
            {activeSlide.badge}
          </span>

          {/* Title */}
          <h1 className="text-center md:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
            {activeSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-center md:text-start text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
            {activeSlide.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 pt-3 sm:flex-row mb-0 md:mb-20">
            <Link
              href="/products"
              className="inline-flex justify-center rounded-full bg-amber-500 px-3 md:px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_14px_40px_rgba(251,191,36,0.55)] hover:bg-amber-400 transition"
            >
              Explore Furniture
            </Link>

            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex justify-center rounded-full border border-slate-500/70 bg-white/85 px-5 py-2.5 text-sm font-semibold text-[#974899] hover:border-[#974899] transition"
            >
              Get a Free Quote
            </button>
          </div>




          
        </div>

       
      </div>




       {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
 
    </section>

      {/* CATEGORY SLIDER (VISIBLE NOW) */}
  <section className=" z-20 relative px-2 sm:px-0">
    <HeroCategorySlider />
  </section>



    </>
  

  );
}
