"use client";

import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import Enquiry from "@/components/Enquiry";
import { ArrowUpRight } from "lucide-react";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);

  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  const [activeImage, setActiveImage] = useState(product?.image?.[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!product) {
    return (
      <h2 className="mt-10 text-center text-red-500">Product not found</h2>
    );
  }

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      {/* ================= BANNER ================= */}
      <div
        className="relative flex h-[50vh] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-center md:h-[65vh]"
        style={{
          backgroundImage: "url('/footerbg.webp')",
        }}
      >
        <div className="relative z-10 px-6 text-white">
          <h1 className="max-w-4xl text-center font-serif text-2xl font-bold md:text-5xl">
            {product.name}
          </h1>
        </div>

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* ================= MAIN ================= */}
      <section className="mx-auto max-w-7xl space-y-20 px-6 py-10">
        {/* ================= IMAGE + INFO ================= */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          {/* IMAGE */}
          <div>
            <div className="overflow-hidden rounded-2xl border shadow-sm">
              {activeImage && (
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt || product.name}
                  width={600}
                  height={600}
                  className="bg-white object-contain"
                  unoptimized
                />
              )}
            </div>

            {/* IMAGE THUMBNAILS */}
            {product.image?.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.image.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`h-20 w-20 overflow-hidden rounded-lg border ${
                      activeImage?.src === img.src
                        ? "border-black"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || product.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-black md:text-3xl">
                {product.name}
              </h2>

              <p className="mt-2 text-black">
                Premium modular furniture solution by Dk Modular Contractor
              </p>
            </div>

            {/* SPECS */}
            {product.specs?.length > 0 && (
              <div className="overflow-hidden rounded-2xl border">
                <h3 className="border-b bg-amber-500/30 px-6 py-3 text-lg font-semibold">
                  Specifications
                </h3>

                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={i} className="border-b last:border-none">
                        <td className="w-1/2 px-6 py-4 font-bold text-black">
                          {spec.label}
                        </td>

                        <td className="px-6 py-4 font-medium text-black">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* PRODUCT CTA BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-900"
              >
                Enquire Now
              </button>

              <a
                href={`https://wa.me/+919999402424?text=Hello, I am interested in ${encodeURIComponent(
                  product.name,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-400"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="rounded-2xl border bg-white p-3 md:p-8">
         {!product?.cta && (
           <h2 className="mb-8 font-serif text-2xl font-semibold text-black md:text-3xl">
            Product Description
          </h2>
         )}

          <div className="space-y-6 leading-relaxed text-black">
            {product.description?.map((block, i) => {
              /* H2 */
              if (block.type === "h2") {
                return (
                  <h3
                    key={i}
                    className="pt-2 text-xl font-semibold text-black md:text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: block.text,
                    }}
                  />
                );
              }

              /* H3 */
              if (block.type === "h3") {
                return (
                  <h4
                    key={i}
                    className="pt-2 text-lg font-semibold text-black"
                    dangerouslySetInnerHTML={{
                      __html: block.text,
                    }}
                  />
                );
              }

              /* PARAGRAPH */
              if (block.type === "p") {
                return (
                  <p
                    key={i}
                    className="
                      text-base
                      [&_strong]:font-bold
                      [&_a]:font-medium
                      [&_a]:text-amber-600
                      [&_a]:underline
                      [&_a:hover]:text-amber-700
                    "
                    dangerouslySetInnerHTML={{
                      __html: block.text,
                    }}
                  />
                );
              }

              /* UNORDERED LIST */
              if (block.type === "ul") {
                return (
                  <ul
                    key={i}
                    className="
                      md:ml-6
                      list-disc
                      space-y-3
                      [&_strong]:font-bold
                      [&_a]:font-medium
                      [&_a]:text-amber-600
                      [&_a]:underline
                      [&_a:hover]:text-amber-700
                    "
                  >
                    {block.items?.map((item, j) => (
                      <li
                        key={j}
                        dangerouslySetInnerHTML={{
                          __html: item,
                        }}
                      />
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        {product.cta && (
          <div className="rounded-2xl bg-black px-6 py-10 text-center text-white md:px-12 md:py-14">
            <h2 className="font-serif text-2xl font-bold md:text-4xl">
              {product.cta.title}
            </h2>

            <p
              className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/80"
              dangerouslySetInnerHTML={{
                __html: product.cta.text,
              }}
            />

            <a
              href="tel:+919999402424"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3 font-semibold text-black transition hover:bg-amber-400"
            >
              Get a Quote
              <ArrowUpRight size={18} />
            </a>
          </div>
        )}

        {/* ================= RELATED PRODUCTS ================= */}
        <div>
          <h2 className="mb-10 font-serif text-2xl font-semibold text-black md:text-3xl">
            Related Products
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories
              .find((c) => c.products.some((p) => p.id === product.id))
              ?.products.filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <a
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group rounded-2xl border p-4 transition hover:shadow-md"
                >
                  <div className="relative mb-4 h-48">
                    <Image
                      src={item.image?.[0]?.src}
                      alt={item.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>

                  <h3 className="text-sm font-semibold text-black">
                    {item.name}
                  </h3>

                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-amber-600">
                    View Details
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              ))}
          </div>
        </div>

        {/* ================= ENQUIRY ================= */}
        {isFormOpen && (
          <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        )}
      </section>
    </>
  );
}
