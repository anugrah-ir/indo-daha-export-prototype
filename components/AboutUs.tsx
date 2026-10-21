import Image from "next/image";
import {
  MapPin,
  CheckCircle,
  Users2,
  Leaf,
  Factory,
  Globe,
  Award,
  ArrowUpRight,
} from "lucide-react";

export default function AboutUs() {
  const stats = [
    { label: "Partnered Farmers", value: "350+" },
    { label: "Cultivated Area", value: "200+ Ha" },
    { label: "Monthly Harvest", value: "500+ MT" },
    { label: "Destination Ports", value: "15+" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#C22B34] text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kediri City, East Java • Agricultural Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Rooted in Kediri’s Fertile Volcanic Soil, Dedicated to Global Quality
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-semibold">CV Indo Daha Export</strong> was founded with a singular purpose: 
            to bring Indonesia’s finest red shallots and processed onion goods directly from the agricultural heartland 
            of East Java to the global dining table.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage & Heritage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/process-farming.jpg"
                  alt="Indonesian farmers harvesting shallots in Kediri, East Java"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 bg-slate-900 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C22B34]">
                    Volcanic Mineral Advantage
                  </span>
                  <span className="text-xs text-slate-400">Kediri Basin</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Surrounded by Mount Kelud’s rich volcanic deposits, Kediri shallots feature exceptional firmness, 
                  dense dry-matter solids, and high concentrations of allicin—delivering unmistakable pungency and aroma.
                </p>
              </div>
            </div>

            {/* Overlaid Coordinate Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-200 items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#C22B34] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Registered Indonesian Exporter</div>
                <div className="text-[11px] text-slate-500">CV Indo Daha Export • NIB Verified</div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Core Value Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Empowering Kediri Farmers Through International Trade
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              We partner directly with established farmer groups in Kediri regency and surrounding East Java districts. 
              By providing agricultural advisory on curing, minimizing post-harvest losses, and purchasing at fair, guaranteed prices, 
              we ensure sustainable farmer livelihoods while guaranteeing our international buyers stable volume, total traceability, 
              and consistent export grade.
            </p>

            {/* Pillars */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="p-2 rounded-lg bg-red-100/60 text-[#C22B34] shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct From Source & Zero Middlemen</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    No layered middlemen. Transparent farm-gate pricing, complete batch traceability, and rapid harvest-to-ship cycles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="p-2 rounded-lg bg-emerald-100/60 text-emerald-700 shrink-0">
                  <Factory className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Hygienic Modern Processing</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Food-grade stainless-steel equipment, temperature-calibrated frying, and high-speed centrifugal oil spinners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="p-2 rounded-lg bg-blue-100/60 text-blue-700 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Seamless International Execution</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Experienced in global trade documentation (Bill of Lading, Phytosanitary, Form D/AK/E, Fumigation) and reefer ocean freight.
                  </p>
                </div>
              </div>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              {stats.map((s, idx) => (
                <div key={idx} className="text-left">
                  <div className="text-xl sm:text-2xl font-black text-[#C22B34]">{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
