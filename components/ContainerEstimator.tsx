"use client";

import { useState } from "react";
import {
  Calculator,
  Ship,
  Boxes,
  Thermometer,
  Scale,
  SendHorizontal,
  Info,
  CheckCircle2,
} from "lucide-react";

interface EstimatorProps {
  onApplyEstimateToForm?: (data: {
    product: string;
    packaging: string;
    containerType: string;
    estimatedMT: string;
    incoterm: string;
  }) => void;
}

export default function ContainerEstimator({
  onApplyEstimateToForm,
}: EstimatorProps) {
  const [productType, setProductType] = useState<"fresh" | "fried">("fresh");
  const [containerSize, setContainerSize] = useState<"20ft" | "40ft" | "trial">("20ft");
  const [packagingOption, setPackagingOption] = useState<string>("mesh-10kg");
  const [incoterm, setIncoterm] = useState<string>("FOB");

  // Dynamic calculations
  let estimatedMT = 14;
  let unitCount = "1,400 bags (10 kg)";
  let pallets = 10;
  let reeferTemp = "12°C - 15°C (Controlled Ventilation)";
  let hsCode = "0703.10";

  if (productType === "fresh") {
    hsCode = "0703.10";
    reeferTemp = "12°C - 15°C (65-70% RH, 25 CBM air exchange)";
    if (containerSize === "20ft") {
      estimatedMT = 13;
      pallets = 10;
      unitCount = packagingOption === "mesh-10kg" ? "1,300 bags (10kg)" : packagingOption === "mesh-20kg" ? "650 bags (20kg)" : "1,300 cartons (10kg)";
    } else if (containerSize === "40ft") {
      estimatedMT = 26;
      pallets = 20;
      unitCount = packagingOption === "mesh-10kg" ? "2,600 bags (10kg)" : packagingOption === "mesh-20kg" ? "1,300 bags (20kg)" : "2,600 cartons (10kg)";
    } else {
      estimatedMT = 3;
      pallets = 2;
      unitCount = "Trial Pallet Order (~3 MT)";
    }
  } else {
    // Fried shallots
    hsCode = "2005.99";
    reeferTemp = "Ambient Dry Container (20°C - 26°C, dry stowage)";
    if (containerSize === "20ft") {
      estimatedMT = 7;
      pallets = 10;
      unitCount = packagingOption === "retail-150g" ? "46,600 pouches (150g)" : "700 cartons (10kg bulk)";
    } else if (containerSize === "40ft") {
      estimatedMT = 15;
      pallets = 20;
      unitCount = packagingOption === "retail-150g" ? "100,000 pouches (150g)" : "1,500 cartons (10kg bulk)";
    } else {
      estimatedMT = 0.5;
      pallets = 1;
      unitCount = "Sample / LCL Order (~500 kg)";
    }
  }

  const handleApply = () => {
    const productLabel =
      productType === "fresh"
        ? "Fresh Raw Red Shallots (Grade A)"
        : "Crispy Fried Shallots (Bawang Goreng)";

    if (onApplyEstimateToForm) {
      onApplyEstimateToForm({
        product: productLabel,
        packaging: packagingOption,
        containerType: containerSize,
        estimatedMT: `${estimatedMT} MT`,
        incoterm,
      });
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#C22B34] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive B2B Logistics Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Container Volume & Shipment Estimator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Quickly estimate container load weights, recommended stowage temperatures, and pallet configurations 
            for shipping out of Port of Tanjung Perak, Surabaya (ID SUB).
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl border border-slate-200/80 shadow-lg p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Export Commodity
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setProductType("fresh");
                      setPackagingOption("mesh-10kg");
                    }}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-left border ${
                      productType === "fresh"
                        ? "bg-white border-[#C22B34] text-[#C22B34] shadow-sm ring-2 ring-red-100"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Fresh Raw Shallots
                    <span className="block text-[10px] font-normal text-slate-500 mt-0.5">
                      Bawang Merah Segar (HS 0703.10)
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setProductType("fried");
                      setPackagingOption("retail-150g");
                    }}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-left border ${
                      productType === "fried"
                        ? "bg-white border-[#C22B34] text-[#C22B34] shadow-sm ring-2 ring-red-100"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Crispy Fried Shallots
                    <span className="block text-[10px] font-normal text-slate-500 mt-0.5">
                      Bawang Goreng Renyah (HS 2005.99)
                    </span>
                  </button>
                </div>
              </div>

              {/* Container / Order Scale */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Container Size / Target Volume
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setContainerSize("20ft")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                      containerSize === "20ft"
                        ? "bg-white border-[#C22B34] text-[#C22B34] shadow-sm ring-2 ring-red-100"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    20ft Container (FCL)
                  </button>
                  <button
                    type="button"
                    onClick={() => setContainerSize("40ft")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                      containerSize === "40ft"
                        ? "bg-white border-[#C22B34] text-[#C22B34] shadow-sm ring-2 ring-red-100"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    40ft High-Cube (FCL)
                  </button>
                  <button
                    type="button"
                    onClick={() => setContainerSize("trial")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                      containerSize === "trial"
                        ? "bg-white border-[#C22B34] text-[#C22B34] shadow-sm ring-2 ring-red-100"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Trial Pallet / Sample
                  </button>
                </div>
              </div>

              {/* Packaging Format */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Preferred Packaging Format
                </label>
                {productType === "fresh" ? (
                  <select
                    value={packagingOption}
                    onChange={(e) => setPackagingOption(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#C22B34] focus:outline-none"
                  >
                    <option value="mesh-10kg">10 kg Breathable Red Leno Mesh Bag (Standard Export)</option>
                    <option value="mesh-20kg">20 kg Red Leno Mesh Bag (Bulk Market)</option>
                    <option value="carton-10kg">10 kg Vented Corrugated Master Carton (Supermarket Grade)</option>
                  </select>
                ) : (
                  <select
                    value={packagingOption}
                    onChange={(e) => setPackagingOption(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#C22B34] focus:outline-none"
                  >
                    <option value="retail-150g">150g Stand-up Kraft/Barrier Zip Pouch (Retail OEM)</option>
                    <option value="retail-250g">250g Stand-up Barrier Pouch</option>
                    <option value="bulk-10kg">10 kg Master Carton (Foodservice / Industrial Catering)</option>
                  </select>
                )}
              </div>

              {/* Trade Term / Incoterm */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  4. Commercial Incoterms
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["FOB (Surabaya)", "CIF (Destination Port)", "CFR (Cost & Freight)"].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setIncoterm(term.split(" ")[0])}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border text-center ${
                        incoterm === term.split(" ")[0]
                          ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Calculated Load Spec
                  </span>
                  <span className="text-[10px] font-bold text-[#C22B34] bg-red-50 px-2 py-0.5 rounded-full">
                    {incoterm} Tanjung Perak
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs text-slate-500 block">Estimated Net Weight</span>
                    <span className="text-3xl font-black text-slate-900">
                      ~{estimatedMT} <span className="text-base font-semibold text-slate-500">Metric Tons</span>
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Boxes className="w-3.5 h-3.5 text-slate-400" /> Units Approx:
                      </span>
                      <span className="font-semibold text-slate-900">{unitCount}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Ship className="w-3.5 h-3.5 text-slate-400" /> Pallet Loading:
                      </span>
                      <span className="font-semibold text-slate-900">{pallets} ISPM-15 Pallets</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Thermometer className="w-3.5 h-3.5 text-slate-400" /> Recommended Temp:
                      </span>
                      <span className="font-semibold text-emerald-700 text-right">{reeferTemp}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5 text-slate-400" /> Export Tariff HS:
                      </span>
                      <span className="font-mono font-semibold text-slate-900">{hsCode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#C22B34] hover:bg-[#A61E26] active:bg-[#78141B] transition-colors flex items-center justify-center gap-2 shadow-md shadow-red-700/20"
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>Lock in & Submit as RFQ</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Transfers these specifications directly into the inquiry form below.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
