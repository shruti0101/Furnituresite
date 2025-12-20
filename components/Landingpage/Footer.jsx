"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  const submitEmail = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setState("error");
      return;
    }
    setState("success");
    setEmail("");
  };

  return (
    <footer className="relative text-white pt-10 pb-7 overflow-hidden">
      {/* BACKGROUND IMAGE - behind everything */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/footerbg.webp')",
        }}
        aria-hidden="true"
      />

      {/* DARK OVERLAY - behind content but above the image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top Accent Line (above bg but below content) */}
      <div className="absolute top-0 left-0 h-1 w-full -z-5 bg-gradient-to-r from-amber-400 to-amber-600" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <div className=" inline-block rounded-full overflow-hidden">
              <Image
                src="/logo.webp"
                width={150}
                height={50}
                alt="DK Modular Furniture"
                className="object-cover"
              />
            </div>

            <p className="leading-relaxed text-sm text-white">
              DK Modular specializes in modern office furniture — workstations,
              conference tables, storage units and ergonomic seating with
              precision, durability and elegant design.
            </p>

         
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-serif font-semibold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-amber-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white hover:text-amber-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white hover:text-amber-400">
               Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white hover:text-amber-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* FURNITURE CATEGORIES */}
          <div>
            <h3 className="text-white font-serif font-semibold text-xl mb-4">
              Furniture Categories
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/categories/modular-office-workstation" className="text-white hover:text-amber-400">
                  Modular Office Workstations
                </Link>
              </li>
              <li>
                <Link href="/categories/office-workstation" className="text-white hover:text-amber-400">
                  Office Workstation
                </Link>
              </li>
              <li>
                <Link href="/categories/meeting-and-conference-room-table" className="text-white hover:text-amber-400">
                  Conference Room Tables
                </Link>
              </li>
              <li>
                <Link href="/categories/computer-table" className="text-white hover:text-amber-400">
                  Computer Tables
                </Link>
              </li>
              <li>
                <Link href="/categories/office-chairs" className="text-white hover:text-amber-400">
                  Office Chairs
                </Link>
              </li>
              <li>
                <Link href="/categories/wooden-storage-units" className="text-white hover:text-amber-400">
                  Wooden Storage Units
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-white font-serif font-semibold text-xl mb-4">
              Contact Us
            </h3>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-amber-400 w-5 h-5" />
              <p className="text-sm text-white/95">
                DK Modular Furniture,
                <br />
                Plot No. 00, Industrial Area,
                <br />
                New Delhi 110039
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:9999402424" className="text-white hover:text-amber-400">
                9999402424
                </a>
  {" "},  {" "}
                <a href="tel:8595063087" className="text-white hover:text-amber-400">
                 8595063087
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:dkmodularcontractor@gmail.com" className="text-white hover:text-amber-400">
                  dkmodularcontractor@gmail.com
                </a>
              </p>
            </div>




   {/* Social icons */}
            <div className="flex text-center gap-4 mt-5">
              


            
          
                
                   <a

                  href="https://www.facebook.com/profile.php?id=61585018361307#"
                  className="flex items-center justify-center  rounded-md transition transform hover:-translate-y-0.5"
                  aria-label="social"
                >
                  <Instagram className="w-5 h-5 text-amber-500 b" />
                </a>
              <a

                  href="https://www.facebook.com/profile.php?id=61585018361307#"
                  className="flex items-center justify-center  rounded-md transition transform hover:-translate-y-0.5"
                  aria-label="social"
                >
                  <Facebook className="w-5 h-5 text-amber-500 " />
                </a>
              
           
               
             
         
            </div>

          </div>



          
        </div>

      

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-white">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <p>  © 2025 DK Modular Furniture. All Rights Reserved.</p>
          <p>Website Designed By Promozione Branding Pvt. Ltd. <a className="underline text-amber-500" href="https://promozionebranding.com/">Website Designing Company.</a> </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
