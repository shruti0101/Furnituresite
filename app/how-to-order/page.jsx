"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
const steps = [
  {
    title: "Select Your Design and Share Your Design via WhatsApp",
    image:"/process/1.webp",
    desc: "Tell us about your office size, team strength, layout, and furniture requirements. Our experts will understand your needs in detail.Browse our website to choose the office furniture design that best suits your needs. Send us the design you’ve selected via WhatsApp for easy communication.",
  },
  {
    title: " Provide Quantity and Sizes and Send Your Area’s Pin Code",
    image:"/process/2.webp",
    desc: "Let us know the required quantity and dimensions for each piece of furniture. Share your location’s pin code so we can calculate shipping costs.",
  },
  {
    title: " Receive a Price Quote and Approve the Quote",
      image:"/process/3.webp",
    desc: "We’ll send you a rough price estimate or a detailed quote on an Excel sheet based on your requirements. Review and approve the prices provided.",
  },
  {
    title: " Confirm Shades/Finishes and Make Advance Payment",
       image:"/process/4.webp",
    desc: "Choose and approve the fabric, color, or finish for your furniture. Proceed with an advance payment to confirm your order.",
  },
  {
    title: " View Pictures of Ready Furniture and Complete the Payment",
        image:"/process/5.webp",
    desc: "Once your furniture is ready, we will send pictures for your approval. Send the remaining balance, and we’ll arrange for the delivery of your office furniture.",
  },
];

export default function HowToOrderStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (

    <>

     {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/footerbg.webp')",
        }}
      >
   
<div className="relative z-10 text-white px-6 mt-8">
  <h2 className="text-2xl md:text-5xl font-bold tracking-wide">
 Let's Elevate Your Workspace
  </h2>

  <p className="mt-4 max-w-3xl mx-auto text-xs md:text-lg text-white">
    Planning to upgrade your office with modern workstations, meeting room tables, director desks, ergonomic chairs, wooden storage units, or custom-designed boss cabin furniture? Scroll down to see how easy it is to place your order.
  </p>

  <div className="mt-6 flex flex-col justify-center items-center  gap-4 ">

   <button className=" bg-amber-600 hover:bg-amber-500 text-white px-5 py-3 rounded-lg font-semibold transition flex items-center gap-2">
  Scroll down
   </button>
   
 
<ChevronDown className="w-8 h-8 animate-bounce text-white mt-1" />
 
  </div>
</div>
<div className="absolute inset-0 bg-gradient-to-b bg-black/60"></div>
      
      </div>
        
    
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-10">
          How to Order Office Furniture From <br></br> Dk Modular Contractor
        </h2>

        {/* Process Bar */}
        <div className="relative flex items-center justify-between max-w-4xl mx-auto mb-6">

          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-200 -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-[3px] bg-amber-500 -translate-y-1/2 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          {/* Steps */}
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm transition-all
                ${
                  i === activeStep
                    ? "bg-amber-500 text-white ring-4 ring-amber-200"
                    : "bg-amber-600 text-white hover:bg-amber-600"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white  px-8 py-10"
          >
            <h3 className="text-xl  font-semibold text-gray-900 mb-7">
              Step {activeStep + 1}: {steps[activeStep].title}
            </h3>
        <Image width={500} height={500} src={steps[activeStep].image} alt={steps[activeStep].title} className="w-full h-auto  mb-8" />
            <p className="text-black text-base md:text-lg leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
    </>
  );
}
