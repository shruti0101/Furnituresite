import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Whatsapp from "@/components/Whatsapp";
import Stickbutton from "@/components/Stickbutton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://officeworkstationmanufacturer.com"),

  title: "India's Best Office Workstation Manufacturer | Office Modular Workstation",

  description:
    "Explore Office Workstation in India, Office Modular Workstation, Office Cluster Workstation, office cubicle workstation, and commercial furniture by DK Modular Contractors, Quality Assured.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.webp",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DK Modular",
  url: "https://officeworkstationmanufacturer.com",
  logo: "https://officeworkstationmanufacturer.com/logo.webp",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9999402424",
    contactType: "Sales",
    areaServed: "IN",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/people/DK-Modular-Contractor/61585018361307/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className="antialiased font-sans">
        <Stickbutton />
        <Whatsapp />

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}