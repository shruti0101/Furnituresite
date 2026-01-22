"use client";

import Image from "next/image";

import Link from "next/link";
import { Truck, Headset, ShieldCheck, BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
  // Carousel images (place images in /public/officeimage/)
  const slides = [
      "/gallery/modular2.webp",
    "/aboutusimg2.webp",
  "/aboutusimg3.webp",
    "/gallery/modular4.webp",
  ];

  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const goTo = (i) => setIndex(i);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    stopAutoplay();
    touchStartX.current = e.touches ? e.touches[0].clientX : null;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches ? e.touches[0].clientX : null;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) {
      startAutoplay();
      return;
    }
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // swipe threshold px
    if (diff > threshold) next();
    else if (diff < -threshold) prev();

    touchStartX.current = null;
    touchEndX.current = null;
    startAutoplay();
  };

  return (
    <>
      

      <section className="relative bg-white md:py-4 mb-4">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6">
          {/* Left - carousel */}
          <div className="flex items-center justify-center">
            <div
              className="w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white/20 backdrop-blur-sm relative"
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Slides container */}
              <div className="relative h-[320px] md:h-[420px]">
                {slides.map((src, i) => (
                  <div
                    key={src + i}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                      i === index ? "translate-x-0 z-10" : i < index ? "-translate-x-full z-0" : "translate-x-full z-0"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`slide-${i}`}
                      fill
                      className="object-cover"
                      priority={i === index}
                    />
                  </div>
                ))}
              </div>

              {/* Left / Right arrows */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 text-black rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-105 transition"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 text-black rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-105 transition"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-3 h-3 rounded-full transition ${i === index ? "bg-[#F7C600]" : "bg-white/60"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - content */}
          <div className="text-left text-white">
            <h3 className="font-serif text-sm tracking-widest text-black uppercase mb-2">About Dk Modular Contractor</h3>

            <h1 className="text-3xl font-extrabold leading-tight mb-4 text-amber-600">
              Premium Modular Office Furniture
            </h1>

            <p className="text-base  text-black leading-relaxed ">
             As an experienced <Link className="font-bold" href="/categories/modular-office-workstation">Office Workstation Manufacturer</Link>  , Dk Modular Contractor designs and manufactures workstations that enhance employee comfort, optimize space utilization, and reflect a professional brand image. <br /> Our modular office workstations are engineered using premium materials and advanced manufacturing techniques to ensure durability and long-term performance. From compact office layouts to large corporate floors, we offer customized workstation solutions tailored to your specific requirements.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/contact-us"


                
                className="inline-flex items-center gap-3 px-5 py-3 bg-[#0b2545] text-white font-semibold rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>

              <a href="tel:9999402424" className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 text-black rounded-lg">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F7C600] text-[#0b2545]">📞</span>
                <div className="text-left">
                  <div className="text-xs text-black">Call 24/7</div>
                  <div className="font-semibold text-md animate-pulse">9999402424</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* trust bar */}
        <div className="relative max-w-7xl mx-auto mt-8 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-black">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 ">
              <div className="w-8 h-8 flex items-center border border-black justify-center rounded-full bg-white/10">🏅</div>
              <div>
                <div className="font-bold">15+ years </div>
                <div className="text-xs">of experience</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex border border-black  items-center justify-center rounded-full bg-white/10">🏢</div>
              <div>
                <div className="font-bold">600+ </div>
                <div className="text-xs">clients</div>
              </div>
            </div>
          </div>

          <div className="text-sm text-black ">Made in India • Warranty & Aftercare • Free site survey</div>
        </div>


        
      </section>


      <section className="hidden md:block w-full my-8 bg-white">
        <div className="max-w-7xl px-3 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <img src="officeimage/icon1.webp" alt="Fast Delivery" className="w-12 h-12" />
            <div>
              <h3 className="text-md font-semibold">Fast Delivery</h3>
              <p className="text-gray-600">Quick dispatch for all office furniture orders</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <img src="officeimage/icon2.webp" alt="Design Support" className="w-12 h-12" />
            <div>
              <h3 className="text-md font-semibold">Design Assistance</h3>
              <p className="text-gray-600">Expert guidance for workspace planning</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <img src="officeimage/icon3.webp" alt="Professional Installation" className="w-12 h-12" />
            <div>
              <h3 className="text-md font-semibold">Professional Installation</h3>
              <p className="text-gray-600">End-to-end assembly by trained technicians</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <img src="officeimage/icon4.webp" alt="Warranty Guarantee" className="w-12 h-12" />
            <div>
              <h3 className="text-md font-semibold">Warranty Guarantee</h3>
              <p className="text-gray-600">Reliable after-sales support & product warranty</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
