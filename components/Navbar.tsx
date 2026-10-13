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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-x-hidden ${
      isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-2 sm:py-3" : "bg-slate-950/80 backdrop-blur-sm py-3 sm:py-5 border-b border-slate-800/40"
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group max-w-[68%] sm:max-w-none">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="font-outfit font-bold text-xs sm:text-lg text-white tracking-wide truncate block leading-tight group-hover:text-amber-400 transition-colors">
                Sri Srinivasa <span className="text-amber-400">Smart City</span>
              </span>
              <span className="text-[8px] sm:text-[10px] text-slate-400 tracking-wider uppercase block truncate">Jaggampeta • AP-RERA</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteData.contact.phone}`}
              className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:border-amber-500/50 px-3.5 py-2 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteData.contact.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-semibold px-4 py-2 rounded-xl text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 px-5 py-5 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center justify-center gap-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 py-2.5 rounded-xl"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {siteData.contact.phoneDisplay}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs shadow-lg shadow-amber-500/20"
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
