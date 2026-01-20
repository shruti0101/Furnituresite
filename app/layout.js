import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Script from "next/script";
import Whatsapp from "@/components/Whatsapp";
import Stickbutton from "@/components/Stickbutton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Office Workstation Manufacturer | Modular Office Furniture",
  description:
    "Trusted office workstation manufacturer offering modular, ergonomic, and custom workstations for modern corporate offices. Quality assured.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@5"
          rel="stylesheet"
          type="text/css"
        />
      </head>

      <body className="antialiased font-sans">
        <Stickbutton />
        <Whatsapp />
        <main>
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>

        <Script
          src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
