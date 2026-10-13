"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Download,
  MapPin,
  CheckCircle2,
  Building2,
  ExternalLink,
  Lock,
  Unlock,
  Check
} from "lucide-react";
import siteData from "../../data/site.json";
import documentsData from "../../data/documents.json";
import DocumentVault from "../../components/DocumentVault";

export default function ProjectPage() {
  const [unlockedVault, setUnlockedVault] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    // Check sessionStorage for 10-minute validity
    const unlockData = sessionStorage.getItem("sri_srinivasa_vault_unlock");
    if (unlockData) {
      try {
        const { timestamp } = JSON.parse(unlockData);
        const TEN_MINUTES = 10 * 60 * 1000;
        if (Date.now() - timestamp < TEN_MINUTES) {
          setUnlockedVault(true);
          setSuccessMsg("Document Vault is unlocked (Active session valid for 10 minutes).");
        } else {
          sessionStorage.removeItem("sri_srinivasa_vault_unlock");
        }
      } catch (e) {
        sessionStorage.removeItem("sri_srinivasa_vault_unlock");
      }
    }
  }, []);

  const handleVaultUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: siteData.web3formsKey,
          subject: "New Document Vault Access - Sri Srinivasa Smart City",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      });
    } catch (err) {
      // Offline / static export fallback
    }

    const now = Date.now();
    sessionStorage.setItem("sri_srinivasa_vault_unlock", JSON.stringify({ timestamp: now }));
    setUnlockedVault(true);
    setSuccessMsg("Document Vault unlocked successfully! Valid for the next 10 minutes.");
    setSubmitting(false);
  };

  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Project Master Plan & Specifications</span>
        <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-4">
          Sri Srinivasa Smart City
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Explore infrastructure standards, RERA compliance badges, and secure document downloads for our premier plotted layout in Jaggampeta.
        </p>
      </div>

      {/* RERA Badge Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {siteData.rera.map((item, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  AP-RERA Registered
                </span>
                <span className="text-xs font-mono text-slate-400">{item.id}</span>
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-2">{item.name}</h3>
              <p className="text-xs text-slate-400 mb-6">Verified legal compliance and DTCP layout approval under Andhra Pradesh RERA regulations.</p>
            </div>
            <a
              href={item.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-4 py-2.5 rounded-xl text-xs border border-slate-700 transition-all"
            >
              <span>Verify on Official AP-RERA Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        ))}
      </div>

      {/* Infrastructure Specs */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white mb-8 text-center">
          World-Class Infrastructure & Amenities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-outfit font-bold text-white mb-2">Internal Roads</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{siteData.infrastructure.roads}</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-outfit font-bold text-white mb-2">Drainage System</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{siteData.infrastructure.drainage}</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-outfit font-bold text-white mb-2">Power Supply</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{siteData.infrastructure.electricity}</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-outfit font-bold text-white mb-2">Parks & Open Space</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{siteData.infrastructure.parks}</p>
          </div>
        </div>
      </div>

      {/* Document Vault Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              {unlockedVault ? <Unlock className="w-4 h-4 text-emerald-400" /> : <Lock className="w-4 h-4 text-amber-400" />}
              <span>{unlockedVault ? "Vault Unlocked (10-Min Session)" : "Secure Document Vault"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white">
              Official Brochures & RERA Certificates
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            {unlockedVault
              ? "All documents are unlocked. Your access is valid for 10 minutes on this device."
              : "Enter your contact details below once to instantly unlock master layout plans, RERA certificates, and the interactive brochure for 10 minutes."}
          </p>
        </div>

        {!unlockedVault ? (
          <form onSubmit={handleVaultUnlock} className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl">
            <input
              type="text"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <input
              type="tel"
              placeholder="Phone Number (WhatsApp)"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <span>{submitting ? "Unlocking..." : "Unlock Vault"}</span>
            </button>
          </form>
        ) : (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-300 text-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem("sri_srinivasa_vault_unlock");
                setUnlockedVault(false);
              }}
              className="text-xs text-slate-400 hover:text-white underline"
            >
              Lock Vault
            </button>
          </div>
        )}

        {/* Document Vault Component */}
        <DocumentVault documents={documentsData} unlocked={unlockedVault} />

      </div>

    </div>
  );
}
