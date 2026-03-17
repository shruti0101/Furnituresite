import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CategoryCitySection from "@/components/CategoryCitySection";

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <h2 className="text-center text-red-500 mt-10">Category not found</h2>
    );
  }
  console.log(category)
  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[40vh] md:h-[65vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/test5.webp')",
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

      {(category.id == "computer-table" || category.id == "modular-office-workstation" || category.id == "office-workstation" || category.id == "meeting-and-conference-room-table") &&
        <CategoryCitySection id={category.id == "meeting-and-conference-room-table" ? "office-tables" :category.id} />}

    </>
  );
}
