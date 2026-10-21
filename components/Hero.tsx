"use client";

import Image from "next/image";
import {
  ShieldCheck,
  ChevronRight,
  FileText,
  MapPin,
  CheckCircle2,
  Award,
  TrendingUp,
  PackageCheck,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenSpecsModal?: () => void;
}

export default function Hero({ onOpenSpecsModal }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Origin & Entity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#C22B34] text-xs font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#C22B34] animate-pulse" />
              <MapPin className="w-3.5 h-3.5" />
              <span>Direct Origin: Kediri City, East Java, Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Trusted Indonesian{" "}
              <span className="text-[#C22B34] relative inline-block">
                Red Shallots
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-red-200"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,15 Q50,0 100,15 L100,20 Q50,5 0,20 Z" />
                </svg>
              </span>{" "}
              & Crispy Fried Onions Exporter
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              <strong className="text-slate-800 font-semibold">CV Indo Daha Export</strong> delivers export-grade, hand-sorted 
              fresh red shallots (<em>bawang merah</em>) and spinner-dried crispy fried shallots directly from the fertile volcanic soils of Kediri, 
              East Java to international distributors, supermarkets, and food processors worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#C22B34] hover:bg-[#A61E26] active:bg-[#78141B] rounded-xl shadow-lg shadow-red-700/20 hover:shadow-red-700/30 transition-all duration-200"
              >
                <span>Request Quotation (RFQ)</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm transition-all duration-200"
              >
                <PackageCheck className="w-4 h-4 text-slate-500" />
                <span>Explore Products</span>
              </a>

              {onOpenSpecsModal && (
                <button
                  onClick={onOpenSpecsModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-600 hover:text-[#C22B34] hover:bg-red-50/50 rounded-xl transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Specs Sheet</span>
                </button>
              )}
            </div>

            {/* Trust Badges Bar */}
            <div className="w-full pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Traceable</div>
                  <div className="text-[11px] text-slate-500">Kediri Farmland</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-red-50 text-[#C22B34]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Grade A Export</div>
                  <div className="text-[11px] text-slate-500">3-Stage Sorting</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">500+ MT / Mo</div>
                  <div className="text-[11px] text-slate-500">Supply Capacity</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">FOB / CIF / CFR</div>
                  <div className="text-[11px] text-slate-500">Surabaya Seaport</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hero-shallots.jpg"
                    alt="CV Indo Daha Export - Fresh Indonesian Shallots from Kediri"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Overlaid Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-red-200 border border-white/10">
                        Volcanic Soil Cultivation
                      </span>
                      <p className="mt-2 text-sm font-semibold text-white">
                        Fresh Harvest Red Shallots • Export Packing Station
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> High Aroma
                      </span>
                      <span className="text-[11px] text-slate-200">Allium Cepa L.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metric 1 (Top Left): Curing Moisture */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#C22B34] font-bold text-xs">
                  80%
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900">Proper Sun Cured</div>
                  <div className="text-[10px] text-slate-500">Papery dry skin for ocean voyages</div>
                </div>
              </div>

              {/* Floating Metric 2 (Bottom Right): Centrifuge Oil Spinner */}
              <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  &lt;2%
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900">Centrifuge Spinner-Dried</div>
                  <div className="text-[10px] text-slate-500">Non-greasy crispy fried shallots</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
