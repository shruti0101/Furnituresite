"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Dk Modular Contractor transformed our office into a modern, efficient workspace. Their modular workstations are not only visually premium but also extremely comfortable for our team. From design planning to final installation, everything was handled professionally and delivered on time.",
    name: "Corporate Office – Delhi",
  },
  {
    text: "We were looking for customized office furniture that matched our brand identity and space constraints. Dk Modular Contractor understood our requirements perfectly and delivered high-quality workstations and storage units that improved both aesthetics and productivity.",
    name: "IT Company – Delhi",
  },
  {
    text: "The executive cabins and conference tables designed by Dk Modular Contractor have elevated the overall look of our office. The material quality, finish, and detailing clearly reflect their expertise in modular office furniture solutions.",
    name: "Real Estate & Infrastructure Firm – Delhi-NCR",
  },
  {
    text: "Dk Modular Contractor provided us with a complete office setup including workstations, partitions, and reception furniture. Their ergonomic designs and smart space planning helped us utilize our floor area efficiently without compromising comfort.",
    name: "Co-Working Space – Delhi-NCR",
  },
  {
    text: "What sets Dk Modular Contractor apart is their commitment to timelines and quality. The installation team was skilled, disciplined, and ensured everything was perfectly aligned. We highly recommend them for any corporate office furniture project.",
    name: "Manufacturing Company – Delhi-NCR",
  },
];


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  const nextSlide = () =>
    setIndex((index + 1) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="relative w-full py-10 bg-gradient-to-b from-[#FAF7F0] via-[#F7DF86]/40 to-white overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-black max-w-2xl mx-auto mb-8">
          Trusted by manufacturers across India for quality, consistency, and reliability.
        </p>
      </div>

      {/* Slider Card */}
      <div className="relative max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl px-6 sm:px-10 py-5 text-center"
          >
            {/* Quote Icon */}
            <div className="text-6xl text-[#F7C600]/40 font-serif ">“</div>

            <p className="text-black italic text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {current.text}
            </p>

            <div className="mt-8">
              <h4 className="text-sm sm:text-lg font-semibold font-serif text-gray-900">
                {current.name}
              </h4>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="hidden md:flex justify-between items-center absolute inset-y-0 left-0 right-0 px-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-5 gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-[#F7C600] w-6"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
