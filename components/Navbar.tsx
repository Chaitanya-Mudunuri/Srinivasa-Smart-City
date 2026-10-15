"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  MapPin,
  ShieldCheck,
  Calculator,
  FileText,
  Phone,
  Menu,
  X,
  ArrowRight,
  Compass
} from "lucide-react";
import siteData from "../data/site.json";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Project", href: "/project" },
    { name: "Location", href: "/location" },
    { name: "Buyer's Guide", href: "/buyers-guide" },
    { name: "Verify Us", href: "/verify-us" },
    { name: "Calculators", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
      isScrolled ? "bg-slate-950/98 backdrop-blur-md border-b border-slate-800 shadow-xl py-2.5" : "bg-slate-950/95 backdrop-blur-sm py-3 border-b border-slate-800/40"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4 xl:gap-8">

          {/* Logo / Business Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="font-outfit font-bold text-sm sm:text-base xl:text-lg text-white tracking-wide truncate block leading-tight group-hover:text-amber-400 transition-colors">
                Sri Srinivasa <span className="text-amber-400">Smart City</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider uppercase block truncate">Jaggampeta • AP-RERA</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-900/60 border border-slate-800/80 px-2 py-1 xl:px-3 xl:py-1.5 rounded-full backdrop-blur-sm shrink-0">
            {navLinks.map((link) => {
              const cleanPath = pathname?.replace(/\/$/, "") || "";
              const cleanHref = link.href.replace(/\/$/, "");
              const isActive = cleanPath === cleanHref;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${siteData.contact.phone}`}
              className="flex items-center gap-1.5 xl:gap-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:border-amber-500/50 px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">{siteData.contact.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 xl:gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-semibold px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-xl text-xs xl:text-sm shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <span>Site Visit</span>
              <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button - High z-index & touch target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-50 text-amber-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 focus:outline-none shrink-0 shadow-md transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu in normal document flow - moves page content down when expanded */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full border-t border-slate-800/80 px-5 pt-4 pb-6 transition-all duration-300">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const cleanPath = pathname?.replace(/\/$/, "") || "";
              const cleanHref = link.href.replace(/\/$/, "");
              const isActive = cleanPath === cleanHref;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                      : "text-slate-200 hover:bg-slate-900 hover:text-amber-400 border border-slate-800/60"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-slate-500"}`} />
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center justify-center gap-2.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:border-amber-500/40 py-3 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {siteData.contact.phoneDisplay}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
              >
                <span>Book Free Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
