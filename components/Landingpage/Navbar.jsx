"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { categories } from "@/Data";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#252531]/60 w-full border-b border-gray-200">

  
{/* 🔹 TOP BAR */}
<div className="border-b border-gray-100">
  <div
    className="
      w-full mx-auto
      px-4
      h-14
      flex items-center justify-between
      bg-[#252531]/95
      lg:px-10 lg:h-16
    "
  >
    {/* LEFT: Logo */}
    <Link href="/" className="flex items-center mt-2">
      <Image
        className="rounded-full"
        src="/logo.webp"
        alt="Logo"
        width={80}
        height={50}
        priority
      />
    </Link>

    {/* RIGHT: Actions (Mobile = row, Desktop = hidden here) */}
    <div className="flex items-center gap-3 lg:hidden">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9999402424"
        target="_blank"
        aria-label="WhatsApp"
        className="rounded-full bg-green-500 p-2 text-white shadow-sm"
      >
        <FaWhatsapp size={16} />
      </a>

      {/* Menu Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        className="text-white"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* DESKTOP LINKS (UNCHANGED) */}
    <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-wide text-white">
      <Link href="/" className="hover:text-amber-500 transition">Home</Link>
      <Link href="/about-us" className="hover:text-amber-500 transition">About Us</Link>
      <Link href="/blogs" className="hover:text-amber-500 transition">Blogs</Link>
      <Link href="/contact-us" className="hover:text-amber-500 transition">Contact Us</Link>

      <a
        href="https://wa.me/9999402424"
        target="_blank"
        className="rounded-full bg-green-500 p-2.5 text-white shadow-sm hover:shadow-md transition animate-pulse"
      >
        <FaWhatsapp size={18} />
      </a>
    </div>
  </div>
</div>



      {/* 🔹 DESKTOP CATEGORY BAR (UNCHANGED) */}
      <div
        className="relative bg-white border-b border-amber-500 hidden lg:block"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl ml-15 mx-auto h-13 flex items-center gap-8 font-semibold tracking-wide text-black text-[13px]">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              onClick={closeMenu}
              onMouseEnter={() => setActiveMenu(cat.id)}
              className="group flex items-center gap-1 hover:text-amber-500"
            >
              <span className="relative">
                {cat.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </span>
              <ChevronDown size={13} className="opacity-60" />
            </Link>
          ))}
        </div>

        {/* Mega Menu (Desktop Only – unchanged) */}
        {activeMenu && (
          <div className="fixed left-0 right-0 top-[118px] h-[calc(100vh-118px)] bg-white overflow-y-auto shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-black">
                {categories.find(c => c.id === activeMenu)?.name}
              </p>

              <div className="grid grid-cols-5 gap-10">
                {categories
                  .find(c => c.id === activeMenu)
                  ?.products.map(prod => (
                    <Link key={prod.id} href={`/products/${prod.id}`} onClick={closeMenu}>
                      <div className="relative h-56 bg-gray-100 overflow-hidden">
                        <Image
                          src={prod.image?.[0]?.src}
                          alt={prod.name}
                          fill
                          className="object-cover hover:scale-110 transition"
                        />
                      </div>
                      <p className="mt-4 text-sm text-center font-medium hover:text-amber-600">
                        {prod.name}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 🔹 MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4 text-sm font-semibold">

            <Link onClick={closeMenu} href="/">Home</Link>
            <Link onClick={closeMenu} href="/about-us">About Us</Link>
            <Link onClick={closeMenu} href="/blogs">Blogs</Link>
            <Link onClick={closeMenu} href="/contact-us">Contact Us</Link>

            {/* Mobile Categories */}
            <div className="pt-4 border-t">
              {categories.map(cat => (
                <details key={cat.id} className="mb-2">
                  <summary className="cursor-pointer flex justify-between items-center py-2">
                    {cat.name}
                    <ChevronDown size={14} />
                  </summary>

                  <div className="pl-4 pt-2 space-y-2">
                    {cat.products?.map(prod => (
                      <Link
                        key={prod.id}
                        href={`/products/${prod.id}`}
                        onClick={closeMenu}
                        className="block text-gray-700"
                      >
                        {prod.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9999402424"
              target="_blank"
              className="flex items-center gap-2 text-green-600 font-bold"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
