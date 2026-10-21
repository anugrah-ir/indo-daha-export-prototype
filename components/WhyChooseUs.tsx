import {
  Users2,
  ShieldCheck,
  PackageCheck,
  FileCheck2,
  Flame,
  Truck,
  Award,
  CircleDollarSign,
} from "lucide-react";

export default function WhyChooseUs() {
  const valueProps = [
    {
      icon: Users2,
      title: "Direct Kediri Farm Partnerships",
      description:
        "We source directly from contracted grower cooperatives in Kediri. Eliminating redundant middlemen provides competitive FOB rates and 100% farm-gate batch traceability.",
    },
    {
      icon: ShieldCheck,
      title: "Stringent 3-Stage Quality Control",
      description:
        "Every batch passes rigorous pre-curing sorting, automated sizing sieves, and manual visual inspection for rot, double bulbs, neck defects, and insect damage.",
    },
    {
      icon: Flame,
      title: "Signature Aroma & Crispness",
      description:
        "Volcanic soil from Mount Kelud yields shallots with high dry matter and intense pungency. Our fried shallots stay crispy for 12 months with <2% oil retention.",
    },
    {
      icon: PackageCheck,
      title: "OEM & Custom Private Label",
      description:
        "Complete flexibility in packaging: 5/10/20kg red leno mesh bags, neutral brown corrugated cartons, or full-color branded retail pouches printed to your specifications.",
    },
    {
      icon: FileCheck2,
      title: "Export Documentation Guaranteed",
      description:
        "We handle all export compliance: Official Phytosanitary Certificates from Indonesian Quarantine, Certificate of Origin (Form D, Form AK, Form E), B/L, and Lab COAs.",
    },
    {
      icon: Truck,
      title: "Rapid Port Loading (Tanjung Perak)",
      description:
        "Located just 2.5 hours via the Trans-Java tollway to Port of Tanjung Perak, Surabaya, enabling swift container positioning, stuffing, and immediate reefer dispatch.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#C22B34] text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Indo Daha Export Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why International Importers & Distributors Partner With Us
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            International agricultural trade demands consistency, clear communication, and absolute reliability. 
            Here is why buyers across Asia, the Middle East, and beyond trust <strong className="text-slate-900">CV Indo Daha Export</strong>.
          </p>
        </div>

        {/* 6 Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C22B34] group-hover:bg-[#C22B34] group-hover:text-white flex items-center justify-center transition-colors mb-5 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#C22B34] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Global Buyer Trust Quote */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#C22B34] mb-1">
              Commercial Integrity & Transparent Terms
            </div>
            <h4 className="text-lg font-bold text-white">
              Ready to verify our quality with a trial shipment or lab sample?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              We accommodate trial container orders (1 x 20ft FCL) and provide third-party pre-shipment inspection (SGS, Sucofindo, or buyer-appointed surveyor) upon request.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#C22B34] hover:bg-[#A61E26] active:bg-[#78141B] transition-colors shadow-md"
            >
              Contact Our Export Team
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
