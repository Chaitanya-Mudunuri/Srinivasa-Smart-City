"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Clock, Compass, ExternalLink } from "lucide-react";
import locationData from "../../data/location";
import siteData from "../../data/site.json";

export default function LocationPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "City & Airport", "Industrial & Port", "Transit", "Highway", "Education", "Healthcare"];

  const filteredLocations = selectedCategory === "All"
    ? locationData
    : locationData.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Strategic Growth Corridor</span>
        <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-4">
          Location & Neighborhood
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Situated in Jaggampeta, East Godavari District — connected seamlessly to NH16, Rajahmundry airport, and Kakinada port industrial hub.
        </p>
      </div>

      {/* Map & Directions Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Jaggampeta, East Godavari - 533435</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white mb-3">
            At the Crossroads of Connectivity
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Sri Srinivasa Smart City enjoys exceptional road connectivity. Just 2 minutes from National Highway 16 (Golden Quadrilateral), ensuring rapid commutes to major employment, commercial, and transportation centers.
          </p>
          <a
            href={`https://maps.google.com/?q=Jaggampeta+Andhra+Pradesh+533435`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Navigation className="w-6 h-6 text-amber-400" />
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Address</span>
              <span className="text-sm font-semibold text-white">{siteData.contact.address}</span>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-4">
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Highway Proximity</span>
            <span className="text-sm font-medium text-amber-400">2 km from NH16 Artery</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((loc) => (
          <div key={loc.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-[10px] font-semibold uppercase tracking-wider">
                  {loc.category}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">{loc.distance}</span>
              </div>
              <h3 className="text-lg font-outfit font-bold text-white mb-2">{loc.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">{loc.description}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium pt-3 border-t border-slate-800">
              <Clock className="w-3.5 h-3.5" />
              <span>Travel Time: {loc.travelTime}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
