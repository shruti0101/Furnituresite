"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const categories = [
  "All",
  "Modular Office Workstation",
  "Office Workstation",
  "Meeting And Conference Room Table",
  "Computer Table",
  "Wooden Storage Unit",
  "Office Chair"
];

const items = [
  { id: 1, title: "Modular Office Workstation", category: "Modular Office Workstation", image: "/gallery/modular1.webp" },
  { id: 2, title: "Modular Office Workstation", category: "Modular Office Workstation", image: "/gallery/modular2.webp" },
  { id: 3, title: "Modular Office Workstation", category: "Modular Office Workstation", image: "/gallery/modular3.webp" },
  { id: 4, title: "Modular Office Workstation", category: "Modular Office Workstation", image: "/gallery/modular4.webp" },

  { id: 5, title: "Office Workstation", category: "Office Workstation", image: "/gallery/workstation1.webp" },
  { id: 6, title: "Office Workstation", category: "Office Workstation", image: "/gallery/workstation2.webp" },
  { id: 7, title: "Office Workstation", category: "Office Workstation", image: "/gallery/workstation.webp" },

  { id: 8, title: "Meeting Table", category: "Meeting And Conference Room Table", image: "/gallery/meeting1.webp" },
  { id: 9, title: "Meeting Table", category: "Meeting And Conference Room Table", image: "/gallery/meeting3.webp" },
  { id: 10, title: "Meeting Table", category: "Meeting And Conference Room Table", image: "/gallery/meeting4.webp" },
  { id: 11, title: "Meeting Table", category: "Meeting And Conference Room Table", image: "/gallery/meeting5.webp" },

  { id: 12, title: "Computer Table", category: "Computer Table", image: "/gallery/comptable1.webp" },
  { id: 13, title: "Computer Table", category: "Computer Table", image: "/gallery/comptable2.webp" },
  { id: 14, title: "Computer Table", category: "Computer Table", image: "/gallery/comptable4.webp" },
  { id: 15, title: "Computer Table", category: "Computer Table", image: "/gallery/comptable3.webp" },

  { id: 16, title: "Wooden Storage Unit", category: "Wooden Storage Unit", image: "/gallery/wooden1.webp" },
  { id: 17, title: "Wooden Storage Unit", category: "Wooden Storage Unit", image: "/gallery/wooden2.webp" },
  { id: 18, title: "Wooden Storage Unit", category: "Wooden Storage Unit", image: "/gallery/wooden3.webp" },
  { id: 19, title: "Wooden Storage Unit", category: "Wooden Storage Unit", image: "/gallery/wooden4.webp" },

  { id: 20, title: "Office Chair", category: "Office Chair", image: "/gallery/chair.webp" },
  { id: 21, title: "Office Chair", category: "Office Chair", image: "/gallery/chair2.webp" },
  { id: 22, title: "Office Chair", category: "Office Chair", image: "/gallery/chair3.webp" },
  { id: 23, title: "Office Chair", category: "Office Chair", image: "/gallery/chair4.webp" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function GalleryPremium() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [showAll, setShowAll] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filtered = useMemo(() => {
    const base = active === "All" ? items : items.filter((i) => i.category === active);

    const searched = query
      ? base.filter((i) =>
          (i.title + " " + i.category).toLowerCase().includes(query.toLowerCase())
        )
      : base;

    if (sort === "alpha") return searched.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "oldest") return searched.slice().reverse();

    return searched;
  }, [active, query, sort]);

  const gridItems = useMemo(() => {
    if (active === "All" && !showAll) return filtered.slice(0, 8);
    return filtered;
  }, [active, filtered, showAll]);

  useEffect(() => {
    setShowAll(false);
  }, [active]);

  const openLightbox = (index) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  return (
    <section className="block py-8 bg-[#e6dcd7]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-black mb-8">
          Our Gallery
        </h2>

        {/* Categories */}
        <div className="flex justify-center mb-6 flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm ${
                active === cat
                  ? "bg-amber-50 text-amber-600"
                  : "text-black bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {gridItems.map((item, idx) => (
            <motion.div key={item.id} variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
              
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-2 flex flex-col justify-center items-center ">
                <h3 className="text-gray-800 text-center font-medium">{item.title}</h3>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/9999402424?text=${encodeURIComponent(
                    `Hi, I want to enquire about ${item.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit px-2 mt-3 flex items-center justify-center gap-2 bg-[#00c950] text-white font-bold py-2 rounded-4xl"
                >
                  WhatsApp <FaWhatsapp />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {active === "All" && filtered.length > 8 && (
          <div className="mt-6 text-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg"
              >
                Load More
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="px-6 py-3 bg-white border rounded-lg"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}