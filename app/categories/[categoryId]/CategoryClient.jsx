import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CategoryCitySection from "@/components/CategoryCitySection";
import React from "react";

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  const renderText = (content) => {
    if (typeof content === "string") {
      return content;
    }

    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === "string") {
          return item;
        }

        if (item.type === "link") {
          return (
            <a
              key={index}
              href={item.href}
              className="text-blue-600 font-bold hover:underline"
            >
              {item.text}
            </a>
          );
        }

        return null;
      });
    }

    return null;
  };

  if (!category) {
    return (
      <h2 className="text-center text-red-500 mt-10">Category not found</h2>
    );
  }
  console.log(category);
  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[40vh] md:h-[65vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/test5.webp')",
        }}
      >
        <div className="relative z-10 text-white px-6 ">
          <h2 className="max-w-4xl  text-center font-serif  text-2xl md:text-5xl font-bold z-10 ">
            {category.name}
          </h2>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/60 to-slate-800/50" />
      </div>

      {/* 🔹 PRODUCT GRID (LIKE IMAGE SHARED) */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {category.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                {/* Card */}
                <div className=" transition overflow-hidden">
                  {/* Image */}
                  <div className="relative h-[320px] w-full overflow-hidden">
                    <Image
                      src={product.image?.[0]?.src || "/placeholder.webp"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 bg-amber-600/90 p-2 rounded-full shadow">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Button Title (like screenshot) */}
                  <div className="py-6 flex justify-center">
                    <span className="px-6 py-2 border-2 border-amber-700 text-amber-700 rounded-full font-semibold text-sm group-hover:bg-amber-700 group-hover:text-white transition">
                      {product.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-11 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              {category.sections[0].title}
            </h2>

            <ul className="space-y-3">
              {category.sections[0].content.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 leading-7"
                >
                  <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-amber-500" />
                  <span>{renderText(item.text)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Workstation Solutions */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {category.sections[1].title}
            </h3>

            <ul className="space-y-3">
              {category.sections[1].content.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 leading-7"
                >
                  <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-amber-500" />
                  <span>{typeof item === "string" ? item : item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Applications of our modular work stations
            </h3>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Offices",
                "IT companies",
                "Startups",
                "BPO and call centers",
                "Coworking spaces",
                "Institutions",
                "Government offices",
                "Commercial business centers",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:border-amber-500 transition"
                >
                  <span className="w-2 h-2 shrink-0 rounded-full bg-amber-500" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {category.sections[2].title}
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.sections[2].content.map((feature, index) => (
                <div className="flex items-start bg-gray-50 border p-2 rounded-2xl gap-3">
                  <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-amber-500" />

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>

                    <p className="text-gray-700 leading-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            {/* Main Section Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {category.sections[3].title}
            </h3>

            <ul className="space-y-4">
              {category.sections[3].content.map((item, index) => {
                const content = item.text;

                if (typeof content === "string" && item.links?.length) {
                  const parts = content.split("{link}");

                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 leading-7"
                    >
                      <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-amber-500" />

                      <div>
                        {item.title && (
                          <strong className="font-semibold text-gray-900">
                            {item.title}:{" "}
                          </strong>
                        )}

                        {parts.map((part, partIndex) => (
                          <React.Fragment key={partIndex}>
                            {part}

                            {partIndex < parts.length - 1 &&
                              item.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 font-bold hover:underline"
                                >
                                  {link.text}
                                </a>
                              ))}
                          </React.Fragment>
                        ))}
                      </div>
                    </li>
                  );
                }

                return (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 leading-7"
                  >
                    <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-amber-500" />

                    <div>
                      {item.title && (
                        <strong className="font-semibold text-gray-900">
                          {item.title}:{" "}
                        </strong>
                      )}

                      {renderText(item.text)}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {category.sections[4].title}
            </h3>

            <ul className="space-y-5">
              {category.sections[4].content.map((faq, index) => (
                <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-5 items-start gap-3">
                  <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-amber-500" />

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.number}. {faq.question}
                    </h4>

                    <p className="text-gray-700 leading-7">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Build a smarter workplace
            </h3>

            <p className="text-gray-700 leading-7">
              A good office starts with the furniture. Investing in an employee
              workstation can create a working environment, improve employee
              productivity and support your company's growth. Whether you are
              setting up an office or renovating an existing one, our office
              desk workstation solutions are designed to provide lasting value,
              flexibility and superior performance.
            </p>

            <a
              href="https://wa.me/9999402424"
              className="inline-flex mt-8 rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition hover:bg-amber-700"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      {(category.id == "computer-table" ||
        category.id == "modular-office-workstation" ||
        category.id == "office-workstation" ||
        category.id == "meeting-and-conference-room-table") && (
        <CategoryCitySection
          id={
            category.id == "meeting-and-conference-room-table"
              ? "office-tables"
              : category.id
          }
        />
      )}
    </>
  );
}
