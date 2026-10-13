"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, ShieldCheck, MapPin, Building2, Phone, Mail, CheckCircle2 } from "lucide-react";
import siteData from "../../data/site.json";

export default function BrochureViewerPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Project Vault</span>
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>

        {/* Brochure Document Canvas */}
        <div className="bg-[#090d16] border border-slate-800 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden print:border-none print:shadow-none print:bg-white print:text-slate-950">

          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-10 mb-10 print:border-slate-300">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
              Official Project Brochure 2026
            </span>
            <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-3 print:text-slate-900">
              {siteData.projectName}
            </h1>
            <p className="text-slate-400 text-base sm:text-lg print:text-slate-600">
              {siteData.tagline}
            </p>
          </div>

          {/* Developers & Promoters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl print:bg-slate-100 print:border-slate-300">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">Developed & Managed By</span>
              <h3 className="text-lg font-outfit font-bold text-white print:text-slate-900">
                {siteData.developers[0]} & {siteData.developers[1]}
              </h3>
              <p className="text-xs text-slate-400 mt-2 print:text-slate-600">
                Commitment to absolute transparency, clear titles, and world-class plotted infrastructure in East Godavari.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl print:bg-slate-100 print:border-slate-300">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">AP-RERA Compliance</span>
              <div className="space-y-2 mt-2">
                {siteData.rera.map((r, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 print:text-slate-800 font-medium">{r.name}</span>
                    <span className="font-mono text-amber-400 print:text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">{r.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Infrastructure & Amenities */}
          <div className="mb-10">
            <h2 className="text-xl font-outfit font-bold text-white mb-6 flex items-center gap-2 print:text-slate-900">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>World-Class Infrastructure Standards</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-xl print:bg-slate-50 print:border-slate-200">
                <h4 className="text-sm font-outfit font-bold text-white mb-1 print:text-slate-900">Bitumen & CC Roads</h4>
                <p className="text-xs text-slate-400 print:text-slate-600">{siteData.infrastructure.roads}</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-xl print:bg-slate-50 print:border-slate-200">
                <h4 className="text-sm font-outfit font-bold text-white mb-1 print:text-slate-900">Underground Drainage</h4>
                <p className="text-xs text-slate-400 print:text-slate-600">{siteData.infrastructure.drainage}</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-xl print:bg-slate-50 print:border-slate-200">
                <h4 className="text-sm font-outfit font-bold text-white mb-1 print:text-slate-900">Power Supply</h4>
                <p className="text-xs text-slate-400 print:text-slate-600">{siteData.infrastructure.electricity}</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-xl print:bg-slate-50 print:border-slate-200">
                <h4 className="text-sm font-outfit font-bold text-white mb-1 print:text-slate-900">Parks & Green Spaces</h4>
                <p className="text-xs text-slate-400 print:text-slate-600">{siteData.infrastructure.parks}</p>
              </div>
            </div>
          </div>

          {/* Location & Investment */}
          <div className="mb-10 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 p-6 rounded-2xl print:bg-amber-50 print:border-amber-300">
            <h2 className="text-lg font-outfit font-bold text-white mb-2 flex items-center gap-2 print:text-slate-900">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Prime Strategic Location in Jaggampeta</span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed print:text-slate-700">
              Situated in the fastest-growing economic corridor of East Godavari district, Sri Srinivasa Smart City provides direct connectivity to Kakinada, Rajahmundry, and NH-16. Designed for families looking for secure, high-yield land investments with immediate construction readiness.
            </p>
          </div>

          {/* Contact Footer */}
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 print:border-slate-300">
            <div>
              <span className="text-xs text-slate-400 print:text-slate-600 block">For Site Visits & Bookings</span>
              <span className="text-lg font-outfit font-bold text-white print:text-slate-900">{siteData.contact.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold transition-all"
              >
                Call Now
              </a>
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
