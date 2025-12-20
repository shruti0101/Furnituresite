"use client";
import { useState } from "react";
import { FaYoutube, FaPlay } from "react-icons/fa";

export default function YoutubeSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: "1",
      title: "Modern Modular Office Workstations",
      link: "https://youtu.be/3oU5Bc79UqU",
      desc: "See how modular furniture transforms productivity-focused offices.",
    },
    {
      id: "2",
      title: "Premium Office Furniture Installation",
      link: "https://youtu.be/RVRvUvcHIKo",
      desc: "A walkthrough of our furniture execution & finishing quality.",
    },
  ];

  const getYoutubeId = (url) => {
    try {
      const u = new URL(url);
      return u.hostname === "youtu.be"
        ? u.pathname.slice(1)
        : u.searchParams.get("v");
    } catch {
      return null;
    }
  };

  const openModal = (url) => {
    const id = getYoutubeId(url);
    if (id) {
      setActiveVideo(`https://www.youtube.com/embed/${id}?autoplay=1`);
      setIsOpen(true);
    }
  };

  return (
    <section className="py-20 bg-[#F7F7FA]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 text-amber-500 mb-4">
            <FaYoutube className="text-2xl" />
            <span className="uppercase tracking-widest text-sm font-semibold">
              Studio & Projects
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Watch Our Furniture <br /> Come to Life
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Explore real installations, modular workspace designs and premium
            furniture solutions crafted for modern offices.
          </p>
        </div>

        {/* RIGHT VIDEOS */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => {
            const id = getYoutubeId(video.link);
            return (
              <div
                key={video.id}
                onClick={() => openModal(video.link)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-xl bg-white"
              >
                {/* Thumbnail */}
                {id && (
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-xl">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>

                {/* Text */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {video.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[56.25%]">
              <iframe
                src={activeVideo}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/90 text-black px-3 py-1 rounded-full font-semibold hover:bg-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
