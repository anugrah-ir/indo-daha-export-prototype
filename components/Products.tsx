"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Package,
  Layers,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  FileText,
  BadgePercent,
  SlidersHorizontal,
} from "lucide-react";

interface ProductsProps {
  onOpenSpecsModal?: () => void;
  onSelectProductForInquiry?: (productName: string) => void;
}

export default function Products({
  onOpenSpecsModal,
  onSelectProductForInquiry,
}: ProductsProps) {
  const [activeTab, setActiveTab] = useState<"all" | "fresh" | "fried" | "derivatives">("all");

  const handleInquire = (productTitle: string) => {
    if (onSelectProductForInquiry) {
      onSelectProductForInquiry(productTitle);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#C22B34] text-xs font-semibold mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Certified Indonesian Export Commodities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Export-Grade Red Shallots & Processed Onion Goods
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Sourced directly from our Kediri grower network, meticulously cured and sorted to meet strict 
              quarantine and phytosanitary requirements of international importing countries.
            </p>
          </div>

          {/* Action & Filter buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === "all"
                  ? "bg-[#C22B34] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveTab("fresh")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === "fresh"
                  ? "bg-[#C22B34] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Fresh Raw Shallots
            </button>
            <button
              onClick={() => setActiveTab("fried")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === "fried"
                  ? "bg-[#C22B34] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Crispy Fried Shallots
            </button>
            <button
              onClick={() => setActiveTab("derivatives")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === "derivatives"
                  ? "bg-[#C22B34] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Derivatives / OEM
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Fresh Raw Red Onions */}
          {(activeTab === "all" || activeTab === "fresh") && (
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/product-fresh-shallots.jpg"
                  alt="Fresh Raw Red Shallots from Kediri, Indonesia"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#C22B34] text-white shadow-sm">
                    Grade A Export
                  </span>
                  <span className="px-2 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200">
                    HS: 0703.10
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-black/60 backdrop-blur-md text-emerald-300">
                    Sun-Cured 10-14 Days
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-[#C22B34] uppercase tracking-wider mb-1">
                  Primary Raw Commodity
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#C22B34] transition-colors mb-2">
                  Fresh Indonesian Red Shallots
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Hand-selected, thoroughly sun-cured Indonesian red shallots (<em>Allium Cepa L. var. Aggregatum</em>). 
                  Firm bulbs with papery dry purplish-red skin, high dry matter, and pungent allicin aroma.
                </p>

                {/* Technical Specs List */}
                <div className="space-y-2 py-4 border-y border-slate-100 text-xs text-slate-700 mb-6 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Origin</span>
                    <span className="font-semibold text-slate-900">Kediri City, East Java</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Bulb Caliber</span>
                    <span className="font-semibold text-slate-900">25 mm - 35 mm+ uniform</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Moisture</span>
                    <span className="font-semibold text-emerald-700">&lt; 80% (Properly cured)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Packaging</span>
                    <span className="font-semibold text-slate-900">5 / 10 / 20 kg Mesh Bags</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Min Order (MOQ)</span>
                    <span className="font-semibold text-slate-900">1 x 20ft Reefer (~12 MT)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Shelf Life</span>
                    <span className="font-semibold text-slate-900">90 - 120 Days (Reefer 12-15°C)</span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleInquire("Fresh Raw Red Shallots (Grade A)")}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#C22B34] hover:bg-[#A61E26] active:bg-[#78141B] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Inquire Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  {onOpenSpecsModal && (
                    <button
                      onClick={onOpenSpecsModal}
                      className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      title="View Technical Specs"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Crispy Fried Red Onions */}
          {(activeTab === "all" || activeTab === "fried") && (
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/product-crispy-fried.jpg"
                  alt="Crispy Fried Shallots from Kediri, Indonesia"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-600 text-white shadow-sm">
                    100% Pure Shallots
                  </span>
                  <span className="px-2 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200">
                    HS: 2005.99
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-black/60 backdrop-blur-md text-emerald-300">
                    Oil Spin-Dried (&lt;2% oil)
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
                  Value-Added Gourmet Condiment
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#C22B34] transition-colors mb-2">
                  Crispy Fried Shallots (Bawang Goreng)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Made from pure Kediri shallots fried in refined vegetable oil and spun in high-speed centrifuges. 
                  Golden-brown, extra crispy, non-greasy, and completely free of artificial preservatives, flour fillers, or MSG.
                </p>

                {/* Technical Specs List */}
                <div className="space-y-2 py-4 border-y border-slate-100 text-xs text-slate-700 mb-6 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Ingredients</span>
                    <span className="font-semibold text-slate-900">100% Pure Shallots, Oil, Salt &lt;1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Residual Oil</span>
                    <span className="font-semibold text-emerald-700">&lt; 2% Centrifuge Extracted</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Texture</span>
                    <span className="font-semibold text-slate-900">Crispy, airy, non-oily flake</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Packaging</span>
                    <span className="font-semibold text-slate-900">100g/150g/250g Pouch, 10kg Carton</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Min Order (MOQ)</span>
                    <span className="font-semibold text-slate-900">500 kg (LCL) or 1x20ft FCL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Shelf Life</span>
                    <span className="font-semibold text-slate-900">12 Months (Sealed Barrier Pouch)</span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleInquire("Crispy Fried Shallots (Bawang Goreng Renyah)")}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#C22B34] hover:bg-[#A61E26] active:bg-[#78141B] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Inquire Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  {onOpenSpecsModal && (
                    <button
                      onClick={onOpenSpecsModal}
                      className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      title="View Technical Specs"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Derivative Goods (Custom Order) */}
          {(activeTab === "all" || activeTab === "derivatives") && (
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/product-derivative-goods.jpg"
                  alt="Derivative Red Shallot Export Products"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white shadow-sm">
                    Upcoming / Custom Order
                  </span>
                  <span className="px-2 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200">
                    OEM Formulations
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-black/60 backdrop-blur-md text-amber-300">
                    Flakes • Powder • Paste
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Food Manufacturing & Spice Line
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#C22B34] transition-colors mb-2">
                  Derivative Shallot Products
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Engineered for commercial food manufacturers, seasoning compounders, and global culinary brands. 
                  Formulated to custom moisture, grind mesh, and packaging requirements upon B2B request.
                </p>

                {/* Technical Specs List */}
                <div className="space-y-2 py-4 border-y border-slate-100 text-xs text-slate-700 mb-6 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Dehydrated Flakes</span>
                    <span className="font-semibold text-slate-900">Moisture &lt; 6%, 180g / 5kg / 25kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Fine Shallot Powder</span>
                    <span className="font-semibold text-slate-900">60-80 Mesh, No anti-caking agent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Shallot Paste / Puree</span>
                    <span className="font-semibold text-slate-900">Chilled or Frozen (IQF)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Packaging</span>
                    <span className="font-semibold text-slate-900">Foil Bags, Drums, Vacuum Pouch</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Production</span>
                    <span className="font-semibold text-amber-700">Contract Manufacturing / OEM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Sample Policy</span>
                    <span className="font-semibold text-slate-900">Available by Air Courier (DHL)</span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleInquire("Derivative Goods (Flakes / Powder / Paste)")}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 active:bg-black transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Request Custom Spec</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  {onOpenSpecsModal && (
                    <button
                      onClick={onOpenSpecsModal}
                      className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      title="View Technical Specs"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* B2B Private Label & Sample Request Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C22B34] flex items-center justify-center shrink-0">
              <BadgePercent className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Need OEM / Private Label or Commercial Lab Samples?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We provide custom retail pouch printing, bespoke cardboard master cartons, and expedited air courier samples for your lab or sensory evaluation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full md:w-auto text-center px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Order Lab Samples
            </a>
            <button
              onClick={onOpenSpecsModal}
              className="w-full md:w-auto text-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C22B34] hover:bg-[#A61E26] transition-colors"
            >
              Download Full Catalog
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
