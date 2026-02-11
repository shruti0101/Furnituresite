"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Building2, Laptop2, Users, Briefcase, Landmark } from "lucide-react";
import CitySection from "@/components/City";

export default function CityPage() {
    const params = useParams();

    const cityName = params?.city?.includes("-in-")
        ? params.city.split("-in-")[1]
        : "India";

    return (<>
        {/* Hero */}
        <section
            style={{
                backgroundImage: "url('/officeimage/9.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="py-20 relative z-10"
        >
            <div className="absolute inset-0 bg-gray-900/60" />

            <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
                Office Workstations in {cityName}
            </h1>
        </section>

        {/* main */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                        Office Workstation Manufacturer in {cityName}
                    </h1>

                    <p className="text-black mb-4">
                        <strong>DK Modular Contractor</strong> is a leading <strong>Office Workstation Manufacturer in {cityName},</strong> delivering modern, ergonomic, and space-efficient workstation solutions for corporate offices, IT companies, coworking spaces, startups, and commercial interiors across {cityName}.
                    </p>

                    <p className="text-black mb-4">
                        We specialize in <strong>high-quality modular office workstations</strong> designed to enhance productivity, optimize floor space, and create a professional working environment. Our workstations are engineered with durable materials, smart layouts, and contemporary designs that suit both small offices and large corporate setups.
                    </p>

                    <p className="text-black">
                        From compact office cubicles to large-scale open-plan workstations, DK Modular Contractor combines <strong>precision manufacturing, premium finishes, and long-term durability,</strong> making us a preferred choice for {cityName} growing commercial and corporate sector.
                    </p>
                </div>

                <div className="w-full h-full">
                    <img
                        src="/officeimage/6.webp"
                        alt="Office Workstation"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>

        {/* why us */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Why Choose DK Modular Office Workstations in {cityName}?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">One-Stop Solution</h3>
                    <p className="text-black text-sm leading-relaxed">
                        Complete range of modular office workstations including linear, L-shaped, U-shaped, cubicles, and customized layouts for corporate offices, IT parks, coworking spaces, and commercial projects.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">Customizable Designs</h3>
                    <p className="text-black text-sm leading-relaxed">
                        Multiple sizes, finishes, panel heights, storage options, cable management, and ergonomic accessories with fully customized workstation solutions.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">Manufacturer Pricing</h3>
                    <p className="text-black text-sm leading-relaxed">
                        Factory-direct pricing ensures cost-effective solutions for businesses, startups, architects, interior designers, and bulk corporate projects.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">End-to-End Support</h3>
                    <p className="text-black text-sm leading-relaxed">
                        Space planning, layout design, manufacturing, installation, and after-sales support for seamless project execution.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">Trusted Brand</h3>
                    <p className="text-black text-sm leading-relaxed">
                        Trusted by corporate offices, IT companies, MNCs, startups, and commercial establishments across {cityName} for quality and timely delivery.
                    </p>
                </div>
            </div>
        </section>

        {/* office */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Office Workstation Supplier in {cityName}, India
                    </h2>

                    <p className="text-black mb-4 leading-relaxed">
                        DK Modular Contractor is among the top office workstation manufacturers and suppliers in {cityName}, providing premium modular furniture solutions that meet modern office design and ergonomic standards.
                    </p>

                    <p className="text-black mb-4 leading-relaxed">
                        With years of expertise, we manufacture sturdy, low-maintenance, and aesthetically appealing office workstations using high-quality boards, metal frameworks, and premium hardware. Each workstation undergoes strict quality checks to ensure structural strength, finish quality, and user comfort.
                    </p>
                </div>

                <div>
                    <p className="text-black mb-6 leading-relaxed">
                        Every workstation is designed for optimal space utilization, employee comfort, and long-term usage, perfectly suited for {cityName} dynamic office environments.
                    </p>

                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h3 className="text-xl font-semibold mb-4">
                            Our office workstations are ideal for:
                        </h3>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">

                            <li className="flex items-center gap-3">
                                <Building2 className="w-5 h-5 text-gray-800" />
                                <span>Corporate offices</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Laptop2 className="w-5 h-5 text-gray-800" />
                                <span>IT & software companies</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-gray-800" />
                                <span>Coworking spaces</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Briefcase className="w-5 h-5 text-gray-800" />
                                <span>Commercial office buildings</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Landmark className="w-5 h-5 text-gray-800" />
                                <span>Government & Institutional offices</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Workstation  */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-3">
                Office Workstation Types We Offer
            </h2>
            <p className="text-center text-black mb-4 text-lg">
                Office Workstation Product Range
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Modular Office Workstations
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Flexible layouts designed for modern office environments.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Cubicle Workstations
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Privacy-focused workstations ideal for corporate offices.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        L-Shaped & U-Shaped Workstations
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Efficient designs for executives and team leaders.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Open Plan Workstations
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Collaborative seating solutions for large teams.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Manager & Executive Workstations
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Premium designs with enhanced storage and aesthetics.
                    </p>
                </div>
            </div>
        </section>

        {/* Key features  */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full">
                    <img
                        src="/officeimage/2.webp"
                        alt="Key Features of DK Modular Office Workstations"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                </div>

                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Key Features of DK Modular Office Workstations
                    </h3>

                    <ul className="space-y-4 text-gray-700">

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                            <span>Ergonomic and space-saving designs</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                            <span>High-quality boards and metal structures</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                            <span>Premium finishes and modern aesthetics</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                            <span>Efficient cable management systems</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                            <span>Customizable layouts and dimensions</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
                            <span>Long-lasting, low-maintenance construction</span>
                        </li>

                    </ul>
                </div>
            </div>
        </section>

        {/* Industries */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Industries & Applications We Serve
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Building2 className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Corporate Offices</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Small, medium, and large corporate setups.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Laptop2 className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">IT & Software Companies</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        High-density seating with modern layouts.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Users className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Coworking Spaces</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Flexible and modular workstation designs.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Briefcase className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Commercial Offices</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Professional and functional office interiors.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Landmark className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Institutional & Government Offices</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Durable and standardized workstation solutions.
                    </p>
                </div>
            </div>
        </section>

        {/* Case Study Card */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Case Study: Office Workstation Installation for {cityName} Corporate Project
                </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-5">
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Client</span>
                            <p className="text-lg font-semibold">IT Services Company</p>
                        </div>

                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Location</span>
                            <p className="text-lg font-semibold">{cityName}</p>
                        </div>

                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Project</span>
                            <p className="text-lg font-semibold">Corporate Office Workspace Setup</p>
                        </div>

                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Scope</span>
                            <ul className="list-disc list-inside text-black space-y-1">
                                <li>Design & manufacture of modular office workstations</li>
                                <li>Open-plan seating for multiple departments</li>
                                <li>On-site installation and execution</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Results</span>
                            <ul className="list-disc list-inside text-black space-y-1">
                                <li>Improved space utilization</li>
                                <li>Enhanced employee productivity</li>
                                <li>Modern and professional office appearance</li>
                                <li>Long-term durability with minimal maintenance</li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            <p className="text-black leading-relaxed">
                                This project highlights <span className="font-semibold">DK Modular Contractor’s</span> expertise as a trusted
                                <span className="font-semibold"> Office Workstation Manufacturer in {cityName}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-gray-900 text-white py-5">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="md:text-left text-center">
                    <p className="text-lg font-semibold">
                        Office Workstation Manufacturer {cityName}
                    </p>
                    <p className="md:text-6xl text-4xl font-semibold">
                        +91-9999402424
                    </p>
                    <p className="text-base text-white">
                        For More Details Contact Us Now!
                    </p>
                </div>

                <div>
                    <a href="tel:+919999402424" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Connect Now
                    </a>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100" >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Office Workstations in {cityName} – FAQs
            </h2>

            <div className="space-y-4">
                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        What is an office workstation?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        An office workstation is a modular furniture system designed to provide employees with a functional, organized, and efficient workspace for daily operations.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Are DK Modular workstations customizable?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes. We offer fully customizable office workstation designs based on your office space, layout planning, operational needs, and client-specific requirements.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Do you handle bulk office workstation projects in {cityName}?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes. We specialize in bulk and turnkey office workstation projects for corporate offices, IT companies, commercial spaces, and large-scale installations in {cityName}.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Are your office workstations durable?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes. Our workstations are built using high-quality boards, metal frameworks, premium hardware, and durable finishes for long-term usage and minimal maintenance.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Do you provide installation services?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes. We provide complete installation services along with after-sales support to ensure seamless execution and long-term performance.
                    </p>
                </details>
            </div>
        </section>

        {/* about */}
        <section section className="mx-auto lg:px-15 px-5 py-8" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full">
                    <img
                        src="/officeimage/form.webp"
                        alt="Best Office Workstation Manufacturer"
                        className="w-full h-96 object-cover rounded-2xl shadow-xl"
                    />
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                        Looking for the Best Office Workstation Manufacturer in {cityName}?
                    </h2>

                    <p className="text-black mb-4 leading-relaxed">
                        Contact <span className="font-semibold">DK Modular Contractor</span> today for pricing, catalogs, or customized office workstation solutions.
                    </p>

                    <p className="text-black mb-6 leading-relaxed">
                        We help you design and install the perfect office workstation layout based on your workspace size, team structure, and business needs — ideal for offices across {cityName}.
                    </p>
                </div>
            </div>
        </section>

        <CitySection></CitySection>
    </>)
}
