"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const clientele = [
  { name: "ABC Corporate", logo: "/clientele/1-6.webp" },
  { name: "TechNova Solutions", logo: "/clientele/brand-10.webp" },
  { name: "Workspace Hub", logo: "/clientele/brand-14.webp" },
  { name: "EduSmart Group", logo: "/clientele/brand-31.webp" },
  { name: "HealthPlus Clinics", logo: "/clientele/brand-32.webp" },
  // { name: "GovBuild PSU", logo: "/clientele/brand-34.webp" },
  { name: "GovBuild PSU", logo: "/clientele/brand-38.webp" },
  { name: "GovBuild PSU", logo: "/clientele/brand-40.webp" },
  { name: "GovBuild PSU", logo: "/clientele/brand-47.webp" },
  { name: "GovBuild PSU", logo: "/clientele/brand-52.webp" },
  { name: "GovBuild PSU", logo: "/clientele/brand-53.webp" },
  { name: "GovBuild PSU", logo: "/clientele/brand-55.webp" },
  { name: "GovBuild PSU", logo: "/clientele/brands.webp" },
  { name: "GovBuild PSU", logo: "/clientele/Daikin.webp" },
  { name: "GovBuild PSU", logo: "/clientele/lenskart.webp" },
];

export default function OurClientele() {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-amber-500">Clientele</span>
          </h2>
          <p className="mt-2 text-black leading-relaxed">
            Trusted by leading brands and institutions for premium,
            high-performance office furniture solutions.
          </p>
        </div>

        {/* Continuous Slider */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={2.5}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            1024: { slidesPerView: 6 },
          }}
          className="clientele-swiper"
        >
          {clientele.map((client, i) => (
            <SwiperSlide key={i}>
              <div className="h-28 flex items-center justify-center rounded-xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-white">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
    </section>
  );
}
