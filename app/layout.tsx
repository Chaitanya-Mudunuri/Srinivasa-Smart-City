import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Srinivasa Smart City | Premium Plotted Layouts in Jaggampeta",
  description: "Official real estate portal for Sri Srinivasa Smart City in Jaggampeta, East Godavari District, AP. Developed by Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju. AP-RERA Approved.",
  keywords: ["plots in jaggampeta", "sri srinivasa smart city", "east godavari plots", "ap rera approved plots", "mudunuri seetharamaraju", "mudunuri muralikrishnamraju"],
  authors: [{ name: "Mudunuri Seetharamaraju" }, { name: "Mudunuri MuraliKrishnamRaju" }],
  openGraph: {
    title: "Sri Srinivasa Smart City | Premium Plotted Layouts in Jaggampeta",
    description: "AP-RERA Approved premium plotted community in Jaggampeta, East Godavari District. Secure your family's future today.",
    url: "https://srisrinivasasmartcity.com",
    siteName: "Sri Srinivasa Smart City",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
