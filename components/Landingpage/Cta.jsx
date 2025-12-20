import React from "react";

const Cta = () => {
  return (
    <section
      className="relative w-full h-[45vh] md:h-[60vh] bg-fixed bg-center flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url('officeimage/9.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 md:px-20 max-w-5xl">
        <h2 className="text-white font-serif text-xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">
          Transform Your Workspace with  
          <span className="text-amber-500 font-serif"> DK Modular Office Furniture</span>
        </h2>

        <p className="text-white text-base sm:text-lg  mb-4 leading-relaxed">
          From smart modular workstations to executive desks and ergonomic chairs,  
          we design office furniture that enhances productivity, comfort, and brand image.
        </p>

        <p className="text-white text-lg sm:text-2xl mb-6 font-semibold">
          📞 9999402424
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:9999402424"
            className="inline-block bg-[#F7C600] text-black font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Get a Free Consultation
          </a>

          
        </div>
      </div>
    </section>
  );
};

export default Cta;
