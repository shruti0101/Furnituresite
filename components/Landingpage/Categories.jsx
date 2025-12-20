"use client";

import Image from "next/image";
import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

export const categories = [
  {
    id: "modular",
    title: "Modular Office Workstation",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="10" rx="2" />
        <path d="M12 8v10" />
        <path d="M7 12h2M15 12h2" />
      </svg>
    ),
    image: "/gallery/modular3.webp",
    description:
      "Our modular workstation series is engineered for scale, flexibility and productivity. Designed for fast-growing teams, the system adapts to different spaces with effortless reconfiguration, cable management integration and high-performance materials.",
    highlights: [
      "Scratch-resistant worktops with premium laminate finishes",
      "Acoustic privacy panels for noise-controlled environments",
      "Integrated wire management with concealed routing",
      "Modular extensions for team expansion"
    ],
  
    cta: "Explore Modular Series" ,link:"/categories/modular-office-workstation",
  },

  {
    id: "office",
    title: "Office Workstation",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <rect x="6" y="12" width="6" height="6" rx="1" />
        <path d="M14 12v6h4v-4h-2" />
        <path d="M6 10V6h6v4" />
      </svg>
    ),
    image: "/gallery/workstation1.webp",
    description:
      "High-performance office workstations designed for long hours of comfortable and focused work. Ideal for corporate spaces, co-working environments, and premium home offices.",
    highlights: [
      "Ergonomic dimensions to support posture",
      "Optional pedestal storage drawers",
      "Matte or gloss desktop finish",
      "Available in L-shaped or straight workstation models"
    ],

    cta: "Browse Workstations",link:"/categories/office-workstation",
  },

  {
    id: "meeting",
    title: "Conference Room Table",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="6" rx="2" />
        <path d="M7 9v-2M17 9v-2" />
        <path d="M7 15v2M17 15v2" />
      </svg>
    ),
    image: "/gallery/meeting1.webp",
    description:
      "Statement-grade conference tables crafted for leadership discussions, presentations and client meetings. Designed with integrated power modules and aesthetic finishes.",
    highlights: [
      "Premium wood or stone textured surfaces",
      "Built-in cable trays with optional power hubs",
      "Available in 6, 8, 10 and 12-seater configurations",
      "Ideal for boardrooms and collaborative zones"
    ],
   
    cta: "Discover Conference Tables",link:"/categories/meeting-and-conference-room-table",
  },

  {
    id: "computer",
    title: "Computer Table",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="10" rx="1.5" />
        <path d="M10 17h4" />
        <path d="M12 13v4" />
      </svg>
    ),
    image: "/gallery/comptable1.webp",
    description:
      "A compact, functional and modern desk solution for computing and productivity. Perfect for the home office, study area, or professional workspace.",
    highlights: [
      "Strong engineered wood tabletop",
      "Dedicated CPU & accessory space",
      "Smooth-edge ergonomic design",
      "Compact form factor for smaller rooms"
    ],
    
    cta: "Shop Computer Desks ",link:"/categories/computer-table",
  },

  {
    id: "wooden-storage",
    title: "Wooden Storage Unit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M9 4v16M15 4v16" />
        <circle cx="12" cy="12" r="0.8" fill="currentColor" />
      </svg>
    ),
    image: "/gallery/wooden1.webp",
    description:
      "Beautifully crafted wooden storage units designed to elevate interiors while providing maximum organisation. Built using durable boards and premium hardware.",
    highlights: [
      "Soft-close hinges with metal runners",
      "Adjustable shelving for flexible storage",
      "Premium wooden textures and laminates",
      "High-load capacity for files & office items"
    ],
  
    cta: "Explore Storage Solutions ",link:"/categories/wooden-storage-units",
  },

  // ---- NEW: Office Chair ----
  {
    id: "office-chair",
    title: "Office Chair",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 7a6 6 0 0112 0v2h-12V7z" />
        <rect x="7" y="11" width="10" height="6" rx="1.2" />
        <path d="M12 17v4" />
        <path d="M9 21h6" />
      </svg>
    ),
    image: "/gallery/chair2.webp",
    description:
      "Ergonomic office chairs engineered for all-day comfort with adjustable lumbar support, multi-tilt mechanisms, and breathable upholstery. Designed to reduce fatigue and improve posture during long work sessions.",
    highlights: [
      "Adjustable lumbar & headrest",
      "Multi-tilt locking mechanism",
      "Breathable mesh or premium leather options",
      "5-star base with smooth casters"
    ],
   
    cta: "Shop Office Chairs" ,link:"/categories/office-chairs",
  },
];


export default function CategoryShowcase() {
  const [activeId, setActiveId] = useState(categories[0].id);


  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = categories.findIndex((c) => c.id === activeId);
      const nextIndex = (currentIndex + 1) % categories.length;
      setActiveId(categories[nextIndex].id);
    }, 4000); 

    return () => clearInterval(interval);
  }, [activeId]);

 
  const contentVariants = {
    enter: { opacity: 1, x: 0, transition: { duration: 0.45 } },
    exit: { opacity: 0, x: 12, transition: { duration: 0.25 } },
  };

  return (
    <section className="bg-[#252531] text-gray-100 py-10">
      <div className="w-full mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mb-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-amber-400">Category Range</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Discover our complete range of modular office furniture designed to
            enhance productivity, comfort, and aesthetics across modern workspaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT NAVIGATION */}
          <nav className="lg:col-span-3">
            <div
              className="
                flex lg:block
                overflow-x-auto lg:overflow-visible
                border-b lg:border-b-0 lg:border-r border-gray-800
                pb-4 lg:pb-0 pr-0 lg:pr-6
                gap-2 lg:gap-0
              "
            >
              {categories.map((cat) => {
                const active = activeId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveId(cat.id)}
                    className={`
                      min-w-[220px] lg:min-w-0
                      w-full flex items-center gap-4 h-20 px-2
                      transition-colors focus:outline-none
                      ${active
                        ? "text-amber-300 font-bold"
                        : "text-gray-300 hover:text-white"}
                    `}
                  >
                    <span
                      className={`w-1 h-10 rounded-md mr-2 transition-colors ${
                        active ? "bg-amber-400" : "bg-transparent"
                      }`}
                    />

                    <span className="w-10 flex items-center justify-center text-amber-300 shrink-0">
                      {cat.icon}
                    </span>

                    <span className="text-sm uppercase tracking-wider text-left">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait" initial={false}>
              {categories.map((cat) =>
                cat.id === activeId ? (
                  <motion.div
                    key={cat.id}
                    initial="exit"
                    animate="enter"
                    exit="exit"
                    variants={contentVariants}
                    className="
                      flex flex-col md:flex-row
                      items-center gap-8
                      bg-gray-800/40
                      p-5 md:p-8
                      rounded-xl
                    "
                  >
                    {/* IMAGE */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="rounded-xl bg-gray-100/90 w-full max-w-[420px] aspect-square flex items-center justify-center overflow-hidden shadow-2xl">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          width={520}
                          height={520}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white">
                        {cat.title}
                      </h3>

                      <p className="mt-4 text-gray-300 leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="mt-6 flex justify-center md:justify-start">
                        {cat.cta && (
                          <Link
                            href={cat.link}
                            className="px-5 py-2 rounded-md bg-amber-400 text-gray-900 font-medium shadow hover:brightness-105"
                          >
                            {cat.cta}
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>


  );
}

