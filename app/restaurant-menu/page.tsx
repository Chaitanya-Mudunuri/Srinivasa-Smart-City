import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Kshatriya Restaurant - Chitti Muthyalu & Rajula Biryani",
  description: "Explore the royal menu of Kshatriya Restaurant featuring authentic chitti muthyalu biryani, rajula biryani, chitti muthyala pulav, and rajula pulav crafted with traditional spices.",
  keywords: [
    "Kshatriya Restaurant Menu",
    "menu.kshatriya.mudunuri.co.in",
    "chitti muthyalu biryani price menu",
    "rajula biryani menu",
    "chitti muthyala pulav specials",
    "rajula pulav recipes",
    "andhra biryani menu"
  ],
  metadataBase: new URL("https://menu.kshatriya.mudunuri.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Menu | Kshatriya Restaurant - Legendary Biryani & Pulav",
    description: "Discover our royal menu featuring chitti muthyalu biryani, rajula biryani, chitti muthyala pulav, and rajula pulav.",
    url: "https://menu.kshatriya.mudunuri.co.in",
    siteName: "Kshatriya Restaurant Menu",
    type: "website",
    locale: "en_IN",
  },
};

export default function KshatriyaMenuPage() {
  const menuItems = [
    {
      name: "Chitti Muthyalu Biryani",
      desc: "Fragrant small-grain aromatic rice slow-cooked with tender meat and royal spices.",
      price: "₹349",
      tag: "Signature Bestseller"
    },
    {
      name: "Rajula Biryani",
      desc: "The royal feast of Andhra landlords, rich with ghee, dry fruits, and succulent spiced mutton/chicken.",
      price: "₹399",
      tag: "Chef's Special"
    },
    {
      name: "Chitti Muthyala Pulav",
      desc: "Traditional aromatic dum pulav cooked with heritage Chitti Muthyalu rice and secret spices.",
      price: "₹329",
      tag: "Traditional"
    },
    {
      name: "Rajula Pulav",
      desc: "An extravagant royal culinary heritage dish prepared with authentic flavors and ghee.",
      price: "₹379",
      tag: "Royal Choice"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "Kshatriya Restaurant Royal Menu",
            "url": "https://menu.kshatriya.mudunuri.co.in",
            "description": "Menu for Kshatriya Restaurant highlighting chitti muthyalu biryani, rajula biryani, chitti muthyala pulav, and rajula pulav.",
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Signature Royal Biryanis & Pulavs",
                "hasMenuItem": menuItems.map(item => ({
                  "@type": "MenuItem",
                  "name": item.name,
                  "description": item.desc,
                  "offers": {
                    "@type": "Offer",
                    "price": item.price.replace("₹", ""),
                    "priceCurrency": "INR"
                  }
                }))
              }
            ]
          })
        }}
      />
      <div className="text-center mb-12">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Digital Menu & Pricing</span>
        <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-4">
          Kshatriya Restaurant Menu
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto">
          Immerse yourself in authentic tastes with our legendary <span className="text-amber-400">chitti muthyalu biryani</span>, <span className="text-amber-400">rajula biryani</span>, <span className="text-amber-400">chitti muthyala pulav</span>, and <span className="text-amber-400">rajula pulav</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-amber-500/50 transition">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-outfit font-bold text-white">{item.name}</h3>
              <span className="text-amber-400 font-bold text-lg">{item.price}</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
            <span className="inline-block bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded-full font-medium">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
