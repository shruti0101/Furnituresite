"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";

const categories = [
  { name: "Computer Chair", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226487/computer-chair_ljyiwy.png", link: "/categories/office-chairs" },

  { name: "Ergonomic Chair", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226487/ergonomic_cyx4wz.png", link: "/categories/office-chairs" },

  { name: "Executive Chair", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226487/executive_he9cqi.png", link: "/categories/office-chairs" },
  
  { name: "Leather Chair", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226488/leather_yzlpfc.png", link: "/categories/office-chairs" },

  { name: "Modular Workstations", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226490/modular_izavd8.png", link: "/categories/modular-office-workstation" },

  { name: "Wooden Storage Units", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226489/wooden_rrscub.png", link: "/categories/wooden-storage-units" },

  { name: "Meeting Tables", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226498/meeting_jxuviu.png", link: "/categories/meeting-and-conference-room-table" },

  

  { name: "Computer Tables", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226489/computer_gvah83.png", link: "/categories/computer-table" },


   { name: "Office Workstations", icon: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766226490/modular_izavd8.png", link: "/categories/office-workstation" },
];

export default function HeroCategorySlider() {
  return (
    <div className=" w-full -mt-24 sm:-mt-30  mb-20 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop
        spaceBetween={16} // mobile tighter spacing
        slidesPerView={2.2} // mobile swipe-friendly
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 24 },
          1024: { slidesPerView: 6, spaceBetween: 24 }, // DESKTOP UNCHANGED
        }}
        className="px-3 sm:px-4"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.name}>
            <Link
              href={item.link}
              className="group flex flex-col items-center cursor-pointer select-none"
            >
              {/* Icon */}
              <div
                className="
                  relative
                  h-12 w-12
                  sm:h-14 sm:w-14
                  md:h-16 md:w-16
                  opacity-90
                  transition-transform duration-300
                  group-hover:scale-110
                  group-hover:opacity-100
                "
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Label */}
              <p
                className="
                  mt-2
                  text-[10px]
                  sm:text-[11px]
                  tracking-[0.18em]
                  uppercase
                  text-white/85
                  text-center
                  leading-snug
                  group-hover:text-amber-300
                  transition
                "
              >
                {item.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
