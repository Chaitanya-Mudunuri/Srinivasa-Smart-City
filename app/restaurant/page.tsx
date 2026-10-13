import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kshatriya Restaurant & Royal Dining | Authentic Andhra Cuisine",
  description: "Welcome to Kshatriya Restaurant. Savor authentic royal Andhra delicacies, traditional spices, and our signature chitti muthyalu biryani, rajula biryani, chitti muthyala pulav, and rajula pulav.",
  keywords: [
    "Kshatriya Restaurant",
    "kshatriya.mudunuri.co.in",
    "chitti muthyalu biryani",
    "rajula biryani",
    "chitti muthyala pulav",
    "rajula pulav",
    "authentic andhra restaurant",
    "royal biryani andhra pradesh",
    "jaggampeta restaurants",
    "mudunuri restaurants"
  ],
  metadataBase: new URL("https://kshatriya.mudunuri.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kshatriya Restaurant | Home of Chitti Muthyalu & Rajula Biryani",
    description: "Experience royal Andhra dining at Kshatriya Restaurant. Famous for chitti muthyalu biryani, rajula biryani, chitti muthyala pulav, and rajula pulav.",
    url: "https://kshatriya.mudunuri.co.in",
    siteName: "Kshatriya Restaurant",
    type: "website",
    locale: "en_IN",
  },
};

export default function KshatriyaRestaurantPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Kshatriya Restaurant",
            "url": "https://kshatriya.mudunuri.co.in",
            "servesCuisine": "Authentic Andhra, Royal Biryani, Traditional Pulav",
            "priceRange": "₹₹",
            "menu": "https://menu.kshatriya.mudunuri.co.in",
            "description": "Legendary Andhra royal dining specializing in chitti muthyalu biryani, rajula biryani, chitti muthyala pulav, and rajula pulav."
          })
        }}
      />
      <div className="text-center py-12">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Royal Andhra Dining</span>
        <h1 className="text-4xl sm:text-6xl font-outfit font-extrabold text-white mb-6">
          Kshatriya Restaurant
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          The ultimate destination for authentic flavors. Taste our legendary <span className="text-amber-400 font-semibold">Chitti Muthyalu Biryani</span>, <span className="text-amber-400 font-semibold">Rajula Biryani</span>, <span className="text-amber-400 font-semibold">Chitti Muthyala Pulav</span>, and <span className="text-amber-400 font-semibold">Rajula Pulav</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://menu.kshatriya.mudunuri.co.in" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition">
            View Digital Menu
          </a>
          <a href="tel:+918790189498" className="border border-slate-700 hover:border-amber-500 text-slate-200 px-6 py-3 rounded-xl transition">
            Book Table / Order
          </a>
        </div>
      </div>
    </div>
  );
}
