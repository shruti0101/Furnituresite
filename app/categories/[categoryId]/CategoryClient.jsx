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

      <section className="py-6 lg:py-11 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
    {/* Heading */}
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
        Modular Work Station for Modern Office Spaces
      </h2>

      <p className="text-gray-700 leading-7">
        A designed modular work station helps companies create a comfortable and
        productive work space. If you are setting up an office, it can really
        make a big difference. It does not matter if you have a startup or a
        big corporate office, a good modular office furniture can help your
        employees work better and make the most of the space you have.
      </p>

      <p className="text-gray-700 leading-7 mt-4">
        As a company that makes <a className="text-blue-600 font-bold" href="https://officeworkstationmanufacturer.com/categories/office-workstation">office work station</a>, we. Build high quality
        office furniture that is both functional and looks good. Our work
        stations are perfect for companies of all sizes. Can be customized to
        fit your office layout and needs.
      </p>
    </div>

    {/* Office Solutions */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Office work station solutions designed for every business
      </h3>

      <p className="text-gray-700 leading-7">
        A planned office work station lets employees work comfortably and
        collaborate with each other when needed. We make our Modular Work
        Stations with quality materials and careful engineering so they can
        withstand the demands of a busy office. Our goal is to help companies be
        more productive without sacrificing style.
      </p>
    </div>

    {/* Applications */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Applications of our modular work stations
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "offices",
          "IT companies",
          "Startups",
          "BPO and call centers",
          "Coworking spaces",
          "institutions",
          "Government offices",
          "Commercial business centers",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:border-amber-500 transition"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-gray-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Features */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Features of our modular work stations
      </h3>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <p className="text-gray-700 leading-7">
          Every work station we make is designed to be comfortable, functional
          and durable.
        </p>
      </div>
    </div>

    {/* Why Choose */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Why businesses choose our workstations
      </h3>

      <p className="text-gray-700 leading-7">
        Companies choose our Modular Work Stations because they are space
        saving. They are also very durable. Can be customized to fit your
        needs. We also offer ergonomic workspace planning and cable management
        solutions to make your office more efficient.
      </p>

      <p className="text-gray-700 leading-7 mt-4">
        Our office & commercial furniture can be easily. Maintained and they
        come in many different finishes and colors. They are also long lasting.
      </p>
    </div>

    {/* Benefits */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Benefits of choosing a professional work station manufacturer
      </h3>

      <p className="text-gray-700 leading-7">
        Choosing the <a className="text-blue-700 font-bold" href="https://officeworkstationmanufacturer.com/">work station manufacturer</a> is important to ensure your
        office furniture meets your current and future needs. We work closely
        with architects, interior designers, contractors and business owners to
        create workstation layouts that optimize your space and support your
        operations.
      </p>

      <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
        Customized office furniture solutions
      </h4>

      <p className="text-gray-700 leading-7">
        Every office is different so we offer customized office workstation
        solutions based on your needs, such as the number of employees, office
        layout and design preferences.
      </p>

      <p className="text-gray-700 leading-7 mt-4">
        Our goal is to deliver a high quality open office workstation that
        meets your needs and budget. We emphasize quality, precision and timely
        delivery to ensure every project is completed to the standards.
      </p>
    </div>

    {/* CTA */}
    <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 lg:p-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Build a smarter workplace
      </h3>

      <p className="text-gray-700 leading-7">
        A good office starts with the furniture. Investing in an employee
        workstation can create a working environment, improve employee
        productivity and support your company's growth. Whether you are setting
        up an office or renovating an existing one our office desk workstation
        solutions are designed to provide lasting value, flexibility and
        superior performance.
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

      {(category.id == "computer-table" || category.id == "modular-office-workstation" || category.id == "office-workstation" || category.id == "meeting-and-conference-room-table") &&
        <CategoryCitySection id={category.id == "meeting-and-conference-room-table" ? "office-tables" :category.id} />}

    </>
  );
}
