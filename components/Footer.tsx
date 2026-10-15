import React from "react";
import Link from "next/link";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";
import siteData from "../data/site.json";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-outfit font-bold text-xl text-white tracking-wide">
                Sri Srinivasa <span className="text-amber-400">Smart City</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 pr-4">
              Premium AP-RERA approved plotted residential community in Jaggampeta, East Godavari District. Designed for generational wealth, elite infrastructure, and absolute legal transparency.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${siteData.contact.phone}`}
                className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-outfit font-semibold text-base mb-4 tracking-wide">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/project" className="hover:text-amber-400 transition-colors">The Project & Master Plan</Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-amber-400 transition-colors">Location & Neighborhood</Link>
              </li>
              <li>
                <Link href="/buyers-guide" className="hover:text-amber-400 transition-colors">Buyer's Due Diligence Guide</Link>
              </li>
              <li>
                <Link href="/verify-us" className="hover:text-amber-400 transition-colors">Verify AP-RERA & Legal</Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-amber-400 transition-colors">EMI & Returns Calculators</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Promoters & RERA */}
          <div>
            <h3 className="text-white font-outfit font-semibold text-base mb-4 tracking-wide">Promoters & RERA</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-slate-200 block font-medium">Promoters</span>
                <span className="text-xs text-slate-400">{siteData.developers.join(" & ")}</span>
              </li>
              <li>
                <span className="text-slate-200 block font-medium">AP-RERA IDs</span>
                <span className="text-xs text-amber-400 font-mono block">P04180171449</span>
                <span className="text-xs text-amber-400 font-mono block">P04180173203 (Phase 1)</span>
              </li>
              <li>
                <a
                  href="https://rera.ap.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 underline mt-1"
                >
                  <span>Verify on AP-RERA Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Office */}
          <div>
            <h3 className="text-white font-outfit font-semibold text-base mb-4 tracking-wide">Contact Office</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{siteData.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${siteData.contact.phone}`} className="hover:text-amber-400 transition-colors">
                  {siteData.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${siteData.contact.email}`} className="hover:text-amber-400 transition-colors break-all">
                  {siteData.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Sri Srinivasa Smart City. Developed by Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-slate-400 flex-wrap justify-center">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/copyright" className="hover:text-amber-400 transition-colors">Copyright & Disclaimer</Link>
            </div>
          </div>
          <p className="text-center md:text-right max-w-xl text-[11px] leading-relaxed text-slate-600">
            Disclaimer: This website is for informational purposes only and does not constitute a legal offering. Master plans, specifications, and pricing are subject to change without prior notice. AP-RERA registration details can be verified directly at rera.ap.gov.in.
          </p>
        </div>
      </div>
    </footer>
  );
}
