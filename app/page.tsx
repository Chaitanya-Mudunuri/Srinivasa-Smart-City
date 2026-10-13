"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ShieldCheck,
  MapPin,
  ArrowRight,
  Building2,
  Phone,
  CheckCircle2,
  Sparkles,
  Award,
  TrendingUp,
  Compass,
  FileCheck,
  Check
} from "lucide-react";
import siteData from "../data/site.json";

const HeroScene3D = dynamic(() => import("../components/HeroScene3D"), { ssr: false });

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyRera = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">

      {/* Hero Section with 3D Canvas */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <HeroScene3D />

        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* AP-RERA Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-amber-500/10">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>AP-RERA Approved Premium Plotted Community</span>
            <span className="hidden sm:inline bg-amber-500/20 px-2 py-0.5 rounded text-[11px] font-mono">
              P04180171449
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Sri Srinivasa <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Smart City</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Generational wealth & luxury plotted layouts in <span className="text-white font-semibold">Jaggampeta, East Godavari District</span>. Developed with elite DTCP & RERA standards by <span className="text-white font-semibold">Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 text-base hover:scale-105 active:scale-95 transition-all"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/project"
              className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-xl hover:border-amber-500/50 transition-all"
            >
              <Compass className="w-5 h-5 text-amber-400" />
              <span>Explore Master Plan</span>
            </Link>
          </div>

          {/* Quick RERA Banner */}
          <div className="mt-14 max-w-2xl mx-auto bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-medium">Official AP-RERA ID</span>
              <span className="text-sm font-mono text-amber-400 font-bold">P04180171449 / P04180173203</span>
            </div>
            <button
              onClick={() => copyRera("P04180171449")}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-medium border border-slate-700 transition-all w-full sm:w-auto justify-center"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <FileCheck className="w-4 h-4 text-amber-400" />}
              <span>{copied ? "Copied RERA ID!" : "Copy RERA ID"}</span>
            </button>
          </div>

        </div>
      </section>

      {/* Trust & Transparency Pillars */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Uncompromising Standards</span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-white mb-4">
              Built on Absolute Trust & Legal Clarity
            </h2>
            <p className="text-slate-400 text-base">
              Every square yard at Sri Srinivasa Smart City is meticulously vetted, legally sound, and engineered for high appreciation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800/80 p-8 rounded-3xl shadow-xl hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-3">100% AP-RERA Approved</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fully registered with AP-RERA (IDs: P04180171449 & P04180173203). Zero legal ambiguity, clear titles, and DTCP layout compliance.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800/80 p-8 rounded-3xl shadow-xl hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-3">Elite Infrastructure</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Featuring 30 ft and 40 ft bitumen & CC internal roads, underground storm water drainage, 3-phase electricity provisions, and avenue plantation.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800/80 p-8 rounded-3xl shadow-xl hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-3">Strategic Jaggampeta Location</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Just minutes from NH16, connecting Rajahmundry, Kakinada, and Samalkot. High growth corridor with booming commercial & residential demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promoters Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-2 block">Visionary Leadership</span>
              <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-white mb-4">
                Managed by Mudunuri Seetharamaraju & Mudunuri MuraliKrishnamRaju
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                With a deep-rooted commitment to ethical land development and community excellence, our promoters bring decades of integrity and transparent dealings to every family investing in Sri Srinivasa Smart City.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded-xl text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Transparent Title Deeds</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded-xl text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Immediate Registration Ready</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col gap-4 text-center lg:text-left">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Ready to inspect?</span>
              <h3 className="text-xl font-outfit font-bold text-white">Schedule a Guided Site Tour</h3>
              <p className="text-xs text-slate-400">Experience the infrastructure and location firsthand with our dedicated team.</p>
              <Link
                href="/contact"
                className="mt-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition-all text-center shadow-lg shadow-amber-500/20"
              >
                Book Visit Now
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
