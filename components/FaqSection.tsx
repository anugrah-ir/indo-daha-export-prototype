"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the typical lead time from contract signing to port delivery?",
      a: "For Fresh Raw Shallots, standard lead time is 7–10 days from deposit receipt to vessel loading at Port of Tanjung Perak, Surabaya. This allows for rigorous 100% batch curing, sizing sieving, and packing. For Crispy Fried Shallots, standard lead time is 10–14 days for bulk orders and 15–20 days for custom-printed OEM packaging.",
    },
    {
      q: "Which official export documents are provided with each shipment?",
      a: "Every export shipment includes: (1) Ocean Bill of Lading (B/L), (2) Commercial Invoice, (3) Packing List, (4) Official Phytosanitary Certificate issued by the Indonesian Agricultural Quarantine Agency, (5) Certificate of Origin (COO / Form D for ASEAN, Form AK for Korea, Form E for China, or General Form), (6) Certificate of Fumigation, and (7) Manufacturer's Certificate of Analysis (COA). Third-party inspection (SGS/Sucofindo) is available upon request.",
    },
    {
      q: "Can international buyers request product samples prior to placing a full container order?",
      a: "Yes. We regularly supply 1 kg – 5 kg physical evaluation samples for both Fresh Raw Shallots and Crispy Fried Shallots. Samples are dispatched via DHL Express, FedEx, or air cargo. While sample goods are complimentary for verified corporate buyers, international air courier freight costs are borne by the consignee or credited against your first commercial container invoice.",
    },
    {
      q: "Do you support Private Label (OEM) packaging for our brand?",
      a: "Absolutely. For Crispy Fried Shallots, we support custom printed stand-up barrier pouches (matte, glossy, or kraft with windows) from 100g to 500g with your brand artwork, barcode, nutritional panels, and multi-language labeling (English, Arabic, Mandarin, Japanese, etc.). For fresh shallots, we provide custom tag printing on mesh bags or branded export cartons.",
    },
    {
      q: "What are your standard commercial payment terms?",
      a: "Our standard export payment terms are: 30% T/T (Telegraphic Transfer) deposit upon purchase order confirmation, with the remaining 70% balance payable upon submission of the Bill of Lading and export shipping documents copy. For established long-term importers, we also accept 100% Irrevocable Confirmed Letter of Credit (L/C) at Sight issued by reputable top-tier international banks.",
    },
    {
      q: "How do you preserve shallot freshness and prevent sprout/mold during ocean voyages?",
      a: "Fresh shallots are only loaded after achieving stable moisture (<80%) through our traditional sun-curing process. Shipments are transported inside ventilated refrigerated reefer containers strictly maintained at 12°C–15°C with 65–70% relative humidity and continuous air exchange (25 CBM/hr). This keeps the shallots dormant and rot-free for up to 90–120 days.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#C22B34] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>International Trade Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions by Global Buyers
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about purchasing, shipping, specifications, and logistics from CV Indo Daha Export.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 hover:text-[#C22B34] transition-colors"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-[#C22B34]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
