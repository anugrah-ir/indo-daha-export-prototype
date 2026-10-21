"use client";

import { X, CheckCircle2, Download, Printer, ShieldCheck, ExternalLink, HelpCircle } from "lucide-react";

interface ProductSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (productName: string) => void;
}

export default function ProductSpecsModal({
  isOpen,
  onClose,
  onSelectProduct,
}: ProductSpecsModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C22B34] text-white flex items-center justify-center font-bold text-sm">
              ID
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Official Export Product Specification Sheet
              </h3>
              <p className="text-xs text-slate-500">
                CV Indo Daha Export • Kediri City, East Java, Indonesia
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8 text-sm">
          
          {/* Section 1: Fresh Shallots */}
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
              <h4 className="text-base font-bold text-[#C22B34] flex items-center gap-2">
                1. Fresh Raw Red Shallots (Allium Cepa L. var. Aggregatum)
              </h4>
              <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                HS Code: 0703.10
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><strong>Botanical Origin:</strong> Kediri City & Regency, East Java, Indonesia</li>
                  <li><strong>Cultivar Type:</strong> Indonesian Bawang Merah (Bima / Bauji / Super Philip)</li>
                  <li><strong>Export Grade:</strong> Grade A (Super Select, uniform diameter)</li>
                  <li><strong>Bulb Diameter:</strong> 25 mm - 35 mm+ (Custom sieving on request)</li>
                  <li><strong>Skin Condition:</strong> Papery dry, firm, brilliant purplish-red skin</li>
                  <li><strong>Moisture Content:</strong> Cured to &lt; 80% to resist transit rot</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><strong>Packaging:</strong> 5kg, 10kg, 20kg red breathable leno mesh bags; or 10kg cartons</li>
                  <li><strong>Transit Storage:</strong> Reefer container at 12°C - 15°C, 65% - 70% RH</li>
                  <li><strong>Shelf Life:</strong> 90 - 120 days under continuous ventilation</li>
                  <li><strong>Minimum Order (MOQ):</strong> 1 x 20ft Reefer FCL (~12 - 14 MT)</li>
                  <li><strong>Port of Loading:</strong> Tanjung Perak, Surabaya (ID SUB)</li>
                  <li><strong>Certifications:</strong> Phytosanitary, Form D/AK/E (COO), Lab COA</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Crispy Fried Shallots */}
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
              <h4 className="text-base font-bold text-[#C22B34] flex items-center gap-2">
                2. Premium Crispy Fried Shallots (Bawang Goreng Renyah Super)
              </h4>
              <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                HS Code: 2005.99 / 2103.90
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><strong>Ingredients:</strong> 100% Pure Kediri Shallots, Refined Cooking Oil, Salt &lt; 1%</li>
                  <li><strong>Additives:</strong> Zero MSG, zero flour/starch fillers, zero chemical preservatives</li>
                  <li><strong>Color & Appearance:</strong> Uniform golden amber-brown flakes, no scorching</li>
                  <li><strong>Oil Drainage:</strong> Food-grade centrifugal spinner extraction (Residual oil &lt; 2%)</li>
                  <li><strong>Texture:</strong> Crisp, airy, highly aromatic, no bitter aftertaste</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li><strong>Retail Packaging:</strong> 100g, 150g, 250g barrier zip pouches (OEM available)</li>
                  <li><strong>Foodservice / Bulk:</strong> 1kg, 5kg vacuum bags, 10kg master corrugated carton</li>
                  <li><strong>Shelf Life:</strong> 12 months at ambient cool, dry storage</li>
                  <li><strong>Minimum Order (MOQ):</strong> 500 kg (LCL) or 1 x 20ft FCL (~6 - 8 MT)</li>
                  <li><strong>Private Label (OEM):</strong> Full custom pouch printing and buyer labeling supported</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Value-Added Derivatives */}
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
              <h4 className="text-base font-bold text-[#C22B34] flex items-center gap-2">
                3. Derivative Red Shallot Goods (Custom Order)
              </h4>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Custom Formulation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-slate-200 bg-white">
                <div className="font-bold text-xs text-slate-900 mb-1">Dehydrated Flakes</div>
                <p className="text-[11px] text-slate-600">Low moisture (&lt;6%), long ambient shelf life. Ideal for instant soups, seasoning blends, and spice packaging.</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-white">
                <div className="font-bold text-xs text-slate-900 mb-1">Pure Shallot Powder</div>
                <p className="text-[11px] text-slate-600">60-80 mesh fine milling, 100% pure aroma without clumping agents. High-demand for snack seasonings.</p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-white">
                <div className="font-bold text-xs text-slate-900 mb-1">Shallot Paste / Puree</div>
                <p className="text-[11px] text-slate-600">Fresh ground paste, chilled or frozen. Designed for industrial culinary saucing and ready-meal factories.</p>
              </div>
            </div>
          </div>

          {/* Export Terms Summary */}
          <div className="p-4 rounded-xl bg-slate-900 text-slate-300 text-xs">
            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Standard Commercial & Trade Terms
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
              <div>
                <span className="text-slate-400 block font-semibold">Payment Terms:</span>
                T/T (Telegraphic Transfer) 30% Deposit, 70% against B/L copy; or Irrevocable Confirmed L/C at Sight.
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Export Incoterms:</span>
                FOB Tanjung Perak Surabaya (ID SUB), CIF, or CFR to any designated international port.
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Documentation:</span>
                B/L, Commercial Invoice, Packing List, Phytosanitary, Form D/AK/E (COO), Certificate of Fumigation.
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            For specific moisture thresholds, custom mesh bag sizing, or lab testing, contact our export desk.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-white bg-[#C22B34] hover:bg-[#A61E26] rounded-lg transition-colors w-full sm:w-auto text-center"
            >
              Request Custom RFQ
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
