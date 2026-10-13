"use client";

import React, { useState } from "react";
import { ShieldCheck, ExternalLink, FileCheck, Check, Copy } from "lucide-react";
import siteData from "../../data/site.json";

export default function VerifyUsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Legal Authentication</span>
        <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-4">
          Verify Our Credentials
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          We encourage every prospective buyer to independently verify our AP-RERA registration numbers and government land records on official portals.
        </p>
      </div>

      {/* RERA Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {siteData.rera.map((item, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  AP-RERA Certified
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                  {item.id}
                </span>
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-3">{item.name}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Official RERA registration ensures strict adherence to timelines, escrow account compliance, and transparent disclosure of all project specifications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800">
              <button
                onClick={() => handleCopy(item.id)}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2.5 rounded-xl text-xs font-medium border border-slate-700 transition-all"
              >
                {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copiedId === item.id ? "Copied ID!" : "Copy RERA ID"}</span>
              </button>

              <a
                href={item.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-amber-500/20 ml-auto"
              >
                <span>Verify on RERA Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Government Land Portals Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl mb-16">
        <h2 className="text-2xl font-outfit font-bold text-white mb-6 text-center">Official AP Government Land Portals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="https://registration.ap.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-outfit font-bold text-white mb-2">AP Registration Portal</h3>
            <p className="text-xs text-slate-400 mb-4">Check market value, encumbrance certificates, and stamp duty.</p>
            <span className="text-xs text-amber-400 font-semibold inline-flex items-center gap-1">
              <span>Visit Portal</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://meebhoomi.ap.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-outfit font-bold text-white mb-2">Meebhoomi Portal</h3>
            <p className="text-xs text-slate-400 mb-4">Verify Adangal, 1-B village land records and ownership details.</p>
            <span className="text-xs text-blue-400 font-semibold inline-flex items-center gap-1">
              <span>Visit Portal</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://bhunaksha.ap.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-outfit font-bold text-white mb-2">AP Bhunaksha Portal</h3>
            <p className="text-xs text-slate-400 mb-4">Inspect cadastral survey maps and layout boundaries online.</p>
            <span className="text-xs text-emerald-400 font-semibold inline-flex items-center gap-1">
              <span>Visit Portal</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>
      </div>

    </div>
  );
}
