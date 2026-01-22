"use client";

export const dynamic = "force-dynamic";
import React from "react";

// import Link from "next/link";
import Image from "next/image";

import Clientele from "../../components/Landingpage/Clientele";

const AboutPage = () => {







 



  return (
    <div>
   
<div
  className="relative h-[40vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage: "url('/test5.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/60 to-slate-800/50" />

  {/* Content */}
  <div className="relative z-10 px-6 max-w-5xl">
    {/* Accent Line */}
    <div className="mx-auto mb-4 h-[2px] w-20 bg-amber-400 rounded-full" />

    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
      About Us
    </h2>

    <p className="mt-4 text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
      Crafting functional, elegant and ergonomic workspaces that inspire
      productivity and elevate modern office environments.
    </p>
  </div>


</div>

<section className="w-full bg-white py-10 md:py-16">
  <div className=" mx-auto px-2 md:px-7">

    {/* ===== TOP HEADING ===== */}
    <div className="md:text-center mb-8 md:mb-17">
      <h1 className="text-xl md:text-4xl font-semibold text-amber-600">
        About Us – Dk Modular Contractor Office Furniture
      </h1>

      <p className=" mt-3 md:text-center text-black text-sm md:text-base leading-relaxed">
        Founded with a vision to redefine modern workspaces, Dk Modular Contractor Office
        Furniture is a trusted manufacturer and supplier of premium modular
        office furniture solutions. We specialize in creating functional,
        ergonomic, and aesthetically refined furniture that enhances workplace
        productivity and comfort.
      </p>
    </div>

    {/* ===== MAIN CONTENT GRID ===== */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

      {/* ===== LEFT CONTENT ===== */}
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold text-amber-600 leading-tight mb-5">
          We are the experts in modular design
        </h2>

        <p className="text-black text-sm md:text-md leading-relaxed">
          Dk Modular Contractor Office Furniture began its journey with a commitment to
          deliver reliable, durable, and innovative office furniture solutions.
          From compact workstations to large corporate setups, we have grown
          into a preferred partner for offices across diverse industries.
        </p>

        <p className="text-black text-sm md:text-md leading-relaxed">
          Our designs blend modern aesthetics with practical functionality,
          ensuring optimal space utilization and long-lasting performance. We
          continuously innovate to meet evolving workplace needs, offering
          customized modular furniture that adapts to every business environment.
        </p>

        <p className="text-black text-sm md:text-md leading-relaxed mb-2">
          Client satisfaction is at the core of everything we do. We carefully
          understand your requirements, deliver precise solutions, and ensure
          timely execution. Quality manufacturing, professional installation,
          and dependable after-sales support define our work culture.
        </p>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-3 gap-3 text-center font-serif md:text-start">
          <div>
            <h3 className="text-2xl font-semibold text-[#962292]">700+</h3>
            <p className="text-gray-900 text-sm">
              Workspaces Delivered
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#962292]">15+</h3>
            <p className="text-gray-900 text-sm">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#962292]">600+</h3>
            <p className="text-gray-900 text-sm">Clients</p>
          </div>
        </div>
      </div>

      {/* ===== RIGHT IMAGES ===== */}
      <div className="grid grid-cols-3 gap-3 ">
        <div className="relative h-[400px] w-full">
          <Image
            src="/aboutusimg1.webp"
            alt="Modular Office Workstations"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-[400px] w-full">
          <Image
            src="/gallery/chair2.webp"
            alt="Ergonomic Office Chairs"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-[400px] w-full">
          <Image
            src="/gallery/wooden1.webp"
            alt="Conference Table Furniture"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

    


<section className="w-full bg-[#f9f9f9] py-8 md:py-10">
  <div className="max-w-7xl mx-auto px-6">

    {/* ===== SECTION HEADER ===== */}
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
        Why Choose <span className="text-amber-600">Dk Modular Contractor</span>
      </h2>
      <p className="mt-2 text-black text-sm md:text-base leading-relaxed">
        We combine thoughtful design, precision manufacturing, and reliable
        service to create modular office furniture that performs beautifully
        for years.
      </p>
    </div>

    {/* ===== FEATURES GRID ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Feature 1 */}
      <div className="bg-white  p-8 rounded-xl border border-amber-600 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Premium Build Quality
        </h3>
        <p className="text-black text-sm leading-relaxed">
          Crafted using high-grade materials, durable finishes, and precision
          engineering to ensure long-lasting performance.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-8 rounded-xl border border-amber-600 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Ergonomic & Functional Design
        </h3>
        <p className="text-black text-sm leading-relaxed">
          Our designs prioritize comfort, posture, and productivity, creating
          workspaces that truly support people.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-8 rounded-xl border border-amber-600 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Custom Modular Solutions
        </h3>
        <p className="text-black text-sm leading-relaxed">
          Flexible modular systems tailored to your space, workflow, and brand
          aesthetics — from startups to enterprises.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="bg-white p-8 rounded-xl border border-amber-600 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Reliable Delivery & Support
        </h3>
        <p className="text-black text-sm leading-relaxed">
          Committed timelines, professional installation, and dependable
          after-sales support you can trust.
        </p>
      </div>

    </div>
  </div>
</section>

 <section className="w-full bg-white py-15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[420px]">
            <Image
              src="/aboutusimg2.webp" 
              alt="Modern Office Workspace"
              fill
              className="object-cover rounded-xs"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-amber-600 mb-4">
              Our Vision
            </h2>

            <p className="text-black text-[15px] leading-7 ">
              At <strong>Dk Modular Contractor Office Furniture</strong>, our vision is driven
              by a commitment to redefine modern workspaces through thoughtful
              design, superior craftsmanship, and functional excellence. We aim
              to deliver modular office furniture solutions that seamlessly blend
              aesthetics, ergonomics, and durability.
            </p>

            <p className="text-black text-[15px] leading-7 ">
              Our focus is to create work environments that enhance productivity,
              comfort, and collaboration. By combining innovative manufacturing
              techniques with premium materials, we ensure that every product
              reflects precision, reliability, and long-term value.
            </p>

            <p className="text-black text-[15px] leading-7">
              With a team of experienced designers, engineers, and production
              specialists, we continuously strive to deliver customized office
              furniture solutions that align with evolving workplace needs.
              Our ultimate goal is to help organizations build inspiring
              workspaces where people feel motivated, comfortable, and empowered
              to perform at their best.
            </p>
          </div>

        </div>
      </div>
    </section>

<Clientele></Clientele>

     
    </div>
  );
};

export default AboutPage;
