import { cites } from '@/Data'
import React from 'react'

const page = () => {

  const data = [
    { link: 'https://officeworkstationmanufacturer.com/', name: 'Home', },
    { link: 'https://officeworkstationmanufacturer.com/about-us', name: 'About Us', },
    { link: 'https://officeworkstationmanufacturer.com/contact-us', name: 'Contact Us', },
    { link: 'https://officeworkstationmanufacturer.com/blogs', name: 'Blogs' },
    { link: 'https://officeworkstationmanufacturer.com/categories/modular-office-workstation', name: 'Modular Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/categories/office-workstation', name: ' Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/categories/computer-table', name: 'Computer Table' },
    { link: 'https://officeworkstationmanufacturer.com/categories/office-chairs', name: 'Office Chairs' },
    { link: 'https://officeworkstationmanufacturer.com/categories/wooden-storage-units', name: 'Wooden Storage Units' },
    { link: 'http://localhost:3000/categories/meeting-and-conference-room-table', name: 'Meeting And Conference Room Table' },
    { link: 'https://officeworkstationmanufacturer.com/products/modular-office-workstation', name: 'Modular Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/L-shaped-workstation', name: 'L-Shaped Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/computer-workstation-furniture', name: 'Computer Workstation Furniture' },
    { link: 'https://officeworkstationmanufacturer.com/products/single-seater-modular-office-workstation', name: 'Single Seater Modular Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/modern-office-workstation', name: 'Modern Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/linear-modular-office-workstation', name: 'Linear Modular Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/U-shape-modern-office-workstation', name: 'U-Shape Modern Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/2-seater-corporate-office-workstation', name: '2 Seater Corporate Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/2-seater-office-workstation', name: '2 Seater Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/office-cubicle-workstation', name: 'Office Cubicle Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/wooden-office-workstation', name: 'Wooden Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/office-workstation', name: 'Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/6-seater-linear-office-workstation', name: '6 Seater Linear Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/l-shape-director-table', name: 'L-Shape Director Table' },
    { link: 'https://officeworkstationmanufacturer.com/products/particle-board-office-workstation', name: 'Particle Board Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/single-seater-office-workstation', name: 'Single Seater Office Workstation' },
    { link: 'https://officeworkstationmanufacturer.com/products/modular-wooden-computer-table', name: 'Modular Wooden Computer Table' },
    { link: 'https://officeworkstationmanufacturer.com/products/office-computer-desk', name: 'Office Computer Desk' },
    { link: 'https://officeworkstationmanufacturer.com/products/wooden-computer-table', name: 'Wooden Computer Table' },
    { link: 'https://officeworkstationmanufacturer.com/products/adjustable-height-office-chair', name: 'Adjustable Height Office Chair' },
    { link: 'https://officeworkstationmanufacturer.com/products/executive-office-chair', name: 'Executive Office Chair' },
    { link: 'https://officeworkstationmanufacturer.com/products/high-back-mesh-chair', name: 'High Back Mesh Chair' },
    { link: 'https://officeworkstationmanufacturer.com/products/low-back-office-chair', name: 'Low Back Office Chair' },
    { link: 'https://officeworkstationmanufacturer.com/products/office-director-chair', name: 'Office Director Chair' },
    { link: 'https://officeworkstationmanufacturer.com/products/office-leather-revolving-chair', name: 'Office Leather Revolving Chair' },
    { link: 'https://officeworkstationmanufacturer.com/products/home-wooden-storage-cupboard', name: 'Home Wooden Storage Cupboard' },
    { link: 'https://officeworkstationmanufacturer.com/products/wooden-storage-units', name: 'Wooden Storage Units' },
    { link: 'https://officeworkstationmanufacturer.com/products/smart-wooden-cabinet', name: 'Smart Wooden Cabinet' },
    { link: 'https://officeworkstationmanufacturer.com/products/wooden-storage-cupboard', name: 'Wooden Storage Cupboard' },
    { link: 'https://officeworkstationmanufacturer.com/products/laminated-wooden-storage-cabinet', name: 'Laminated Wooden Storage Cabinet' },
    { link: 'https://officeworkstationmanufacturer.com/products/14-seater-meeting-table', name: '14 Seater Meeting Table' },
    { link: "https://officeworkstationmanufacturer.com/products/executive-meeting-table", name: 'Executive Meeting Table' },
    { link: 'https://officeworkstationmanufacturer.com/products/large-conference-table', name: 'Large Conference Table' },
    { link: 'https://officeworkstationmanufacturer.com/products/oval-meeting-table', name: 'Oval Meeting Table' },
    { link: 'https://officeworkstationmanufacturer.com/products/rectangular-meeting-table', name: 'Rectangular Meeting Table' },
    { link: 'https://officeworkstationmanufacturer.com/products/round-meeting-table', name: 'Round Meeting Table' },
  ]


  return (
    <div>
      <div
        className="relative h-[40vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/test5.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/60 to-slate-800/50" />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-5xl">
          {/* Accent Line */}
          <div className="mx-auto mb-4 h-[2px] w-20 bg-amber-400 rounded-full" />

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Sitemap
          </h2>

        </div>





      </div>

      <div className='grid grid-cols-3 md:grid-cols-5 gap-10'>
        {data.map((item, index) => (
          <div key={index} className='m-4 border text-center p-5 border-gray-300 cursor-pointer rounded hover:bg-amber-100 transition'>
            <a href={item.link} className="text-black font-bold  hover:text-amber-400">
              {item.name}
            </a>
          </div>
        ))}
        {cites.map((item, index) => (
          <div key={index} className='m-4 border text-center p-5 border-gray-300 cursor-pointer rounded hover:bg-amber-100 transition'>
            <a href={item.href} className="text-black font-bold  hover:text-amber-400">
              {"Office Workstation Manufacturer in " + item.label}
            </a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default page