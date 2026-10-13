import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import siteData from "../data/site.json";

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={siteData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-current" />
        <span className="absolute right-full mr-3 bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
          Chat with Promoters
        </span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold animate-pulse">
          1
        </span>
      </a>

      {/* Quick Call Button */}
      <a
        href={`tel:${siteData.contact.phone}`}
        className="group relative flex items-center justify-center w-12 h-12 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full shadow-xl shadow-amber-500/30 hover:scale-110 transition-all duration-300"
        aria-label="Call Promoters"
      >
        <Phone className="w-5 h-5 text-slate-950" />
        <span className="absolute right-full mr-3 bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
          Call Now
        </span>
      </a>
    </div>
  );
}
