import Image from "next/image";
import {
  Sprout,
  Filter,
  Flame,
  Truck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function ProductionProcess() {
  const steps = [
    {
      number: "01",
      title: "Sustainable Farming & Field Harvest",
      location: "Kediri Regency, East Java",
      icon: Sprout,
      image: "/images/process-farming.jpg",
      badge: "Step 1: Cultivation",
      summary:
        "Cultivated in volcanic soil enriched by Mount Kelud deposits. Shallots are hand-harvested at optimal 60–70 day maturity when bulb necks begin to soften, preserving natural sugars and allicin pungency.",
      keyPoints: [
        "Volcanic mineral-rich soil with natural drainage",
        "Empowering 350+ local family smallholder farmers",
        "Harvested at peak moisture and color intensity",
      ],
    },
    {
      number: "02",
      title: "Curing, Sorting & Multi-Stage Grading",
      location: "Kediri Post-Harvest Facility",
      icon: Filter,
      image: "/images/process-sorting.jpg",
      badge: "Step 2: Quality Selection",
      summary:
        "Harvested bulbs undergo 10–14 days of traditional sun-curing on ventilated bamboo drying racks to form firm papery skins. Then, trained technicians sort by bulb caliber (25–35mm+) and remove defects.",
      keyPoints: [
        "Traditional curing reduces moisture to stable <80%",
        "Mechanical sieve + manual conveyor grading",
        "Removal of skin rot, double bulbs, and foreign debris",
      ],
    },
    {
      number: "03",
      title: "Hygienic Frying & Centrifuge Oil Removal",
      location: "Food-Grade Processing Facility",
      icon: Flame,
      image: "/images/process-processing.jpg",
      badge: "Step 3: Processing",
      summary:
        "For crispy fried shallots, raw bulbs are precision-sliced, fried in clean vegetable oil at calibrated temperatures, and immediately transferred to food-grade centrifugal spinners to extract excess surface oil.",
      keyPoints: [
        "Automated continuous stainless-steel frying line",
        "High-speed centrifuge extraction (oil content <2%)",
        "Zero MSG, zero preservatives, zero starch fillers",
      ],
    },
    {
      number: "04",
      title: "Export Packaging & Reefer Port Dispatch",
      location: "Logistics Hub -> Tanjung Perak Port",
      icon: Truck,
      image: "/images/process-packaging.jpg",
      badge: "Step 4: Logistics",
      summary:
        "Products are packed in breathable red leno mesh bags (5/10/20kg) or multi-layer barrier foil pouches, palletized on fumigated ISPM-15 wooden pallets, and transferred via reefer trucking to Port of Tanjung Perak.",
      keyPoints: [
        "ISPM-15 heat-treated fumigated wooden pallets",
        "Continuous cold-chain monitoring (12°C–15°C, 65-70% RH)",
        "Prompt customs clearance & phytosanitary release",
      ],
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#C22B34] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>End-to-End Traceability & Quality Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our 4-Stage Farm-to-Port Production Pipeline
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every export shipment follows a rigorous, standardized workflow to ensure that fresh shallots arrive crisp and dormant, 
            and crispy fried shallots maintain peak shelf stability across international ocean voyages.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Side */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 group">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm border border-slate-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C22B34]" />
                      <span>{step.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Text Explanation Side */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-black text-[#C22B34] opacity-80">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {step.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {step.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#C22B34] hover:text-[#A61E26] group"
                  >
                    <span>Request Audit & Facility Documentation</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
