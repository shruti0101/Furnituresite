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
  title: "DK Modular Office Furnitures - Premium Modular Office Solutions",
  description:
    "DK Modular Office Furniture offers premium modular office furniture solutions designed to enhance productivity and comfort in modern workspaces. Explore our range of ergonomic and stylish furniture today.",
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
