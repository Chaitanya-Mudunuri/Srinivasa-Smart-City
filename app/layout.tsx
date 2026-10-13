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
  keywords: ["plots in jaggampeta", "sri srinivasa smart city", "east godavari plots", "ap rera approved plots", "mudunuri seetharamaraju", "mudunuri muralikrishnamraju", "plots near kakinada", "plots near rajahmundry", "dtcp approved layouts"],
  authors: [{ name: "Mudunuri Seetharamaraju" }, { name: "Mudunuri MuraliKrishnamRaju" }],
  metadataBase: new URL("https://srisrinivasasmartcity.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sri Srinivasa Smart City | Premium Plotted Layouts in Jaggampeta",
    description: "AP-RERA Approved premium plotted community in Jaggampeta, East Godavari District. Secure your family's future today.",
    url: "https://srisrinivasasmartcity.com",
    siteName: "Sri Srinivasa Smart City",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Srinivasa Smart City | Premium Plotted Layouts in Jaggampeta",
    description: "AP-RERA Approved premium plotted community in Jaggampeta, East Godavari District.",
  },
  verification: {
    google: "google-site-verification=YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "MS-VERIFICATION-PLACEHOLDER",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdProject = {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    "name": "Sri Srinivasa Smart City",
    "alternateName": ["Sri Venkateswara Smart City", "Srinivasa Smart City Jaggampeta"],
    "description": "AP-RERA Approved premium plotted community in Jaggampeta, East Godavari District, Andhra Pradesh. Developed with elite infrastructure by Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju.",
    "url": "https://srisrinivasasmartcity.com",
    "image": "https://srisrinivasasmartcity.com/images/hero.jpg",
    "identifier": [
      {
        "@type": "PropertyValue",
        "propertyID": "AP-RERA Registration Number",
        "value": "P04180171449"
      },
      {
        "@type": "PropertyValue",
        "propertyID": "AP-RERA Phase 1 Registration Number",
        "value": "P04180173203"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jaggampeta Corridor, NH16 Proximity",
      "addressLocality": "Jaggampeta",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "533435",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.1125,
      "longitude": 82.0722
    },
    "developer": [
      {
        "@type": "Person",
        "name": "Mudunuri Seetharamaraju"
      },
      {
        "@type": "Person",
        "name": "Mudunuri MuraliKrishnamRaju"
      }
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "30 ft & 40 ft Bitumen/CC Roads",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Underground Drainage System",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Electricity & Street Lighting",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parks & Avenue Plantation",
        "value": true
      }
    ]
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sri Srinivasa Smart City Sales Office",
    "image": "https://srisrinivasasmartcity.com/images/hero.jpg",
    "@id": "https://srisrinivasasmartcity.com",
    "url": "https://srisrinivasasmartcity.com",
    "telephone": "+918790189498",
    "email": "satyaramaraju1234@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jaggampeta",
      "addressLocality": "Jaggampeta",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "533435",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.1125,
      "longitude": 82.0722
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "priceRange": "₹₹"
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://srisrinivasasmartcity.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Project Master Plan",
        "item": "https://srisrinivasasmartcity.com/project/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Location & Connectivity",
        "item": "https://srisrinivasasmartcity.com/location/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact & Site Visit",
        "item": "https://srisrinivasasmartcity.com/contact/"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProject) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </head>
      <body className="font-sans bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen pt-20 sm:pt-24 overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
