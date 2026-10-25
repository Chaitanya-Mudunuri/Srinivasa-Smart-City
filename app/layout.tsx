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
  description: {"Official real estate portal for Sri Srinivasa Smart City in Jaggampeta, East Godavari District, AP. Developed by Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju. AP-RERA Approved.",
               "Plots in Jaggampeta", "Sri Srinivasa Smart City", "Plots for Sale in East Godavari", "Plots in East Godavari", "Plots for Sale in East Godavari"
               },
  keywords: ["plots in jaggampeta", "sri srinivasa smart city", "east godavari plots", "ap rera approved plots", "mudunuri seetharamaraju", "mudunuri muralikrishnamraju", "plots near kakinada", "plots near rajahmundry", "dtcp approved layouts"],
  authors: [{ name: "Mudunuri Seetharamaraju" }, { name: "Mudunuri MuraliKrishnamRaju" }],
  metadataBase: new URL("https://srinivasa.smartcity.mudunuri.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sri Srinivasa Smart City | Premium Plotted Layouts in Jaggampeta",
    description: "AP-RERA Approved premium plotted community in Jaggampeta, East Godavari District. Secure your family's future today.",
    url: "https://srinivasa.smartcity.mudunuri.co.in",
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
    "url": "https://srinivasa.smartcity.mudunuri.co.in",
    "image": "https://srinivasa.smartcity.mudunuri.co.in/images/hero.jpg",
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
    "image": "https://srinivasa.smartcity.mudunuri.co.in/images/hero.jpg",
    "@id": "https://srinivasa.smartcity.mudunuri.co.in",
    "url": "https://srinivasa.smartcity.mudunuri.co.in",
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
        "item": "https://srinivasa.smartcity.mudunuri.co.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Project Master Plan",
        "item": "https://srinivasa.smartcity.mudunuri.co.in/project/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Location & Connectivity",
        "item": "https://srinivasa.smartcity.mudunuri.co.in/location/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact & Site Visit",
        "item": "https://srinivasa.smartcity.mudunuri.co.in/contact/"
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
      <body className="font-sans bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 overflow-x-clip">
        <Navbar />
        <main className="min-h-screen overflow-x-clip">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
