import { Inter, Roboto_Slab, Lato, Lora, Nunito } from "next/font/google";
import "./globals.css";

import { Header, Footer } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export const metadata = {
  title: "Frontend Logistics - Everything Simplified",
  description: "Manage and track your shipments effortlessly with us.",
  icons: {
    icon: [{ url: "/icons/icon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoSlab.variable} ${lato.variable} ${lora.variable} ${nunito.variable} antialiased`}
      >
        <div className="page-container">
          <Header />
          <main className="container-wrap">{children}</main>
          {/* <ScrollArrowBtn /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
