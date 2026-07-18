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

  title: "Office Workstation Manufacturer | Modular Office Furniture",

  description:
    "Trusted office workstation manufacturer offering modular, ergonomic, and custom workstations for modern corporate offices. Quality assured.",

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