import {
  Ship,
  Boxes,
  FileCheck2,
  ThermometerSnowflake,
  ShieldAlert,
  Scale,
} from "lucide-react";

export default function TrustBar() {
  const highlights = [
    {
      icon: Ship,
      title: "Loading Port: Tanjung Perak (ID SUB)",
      desc: "East Java's deepest international container port, only 2.5 hours from our Kediri sorting facility.",
    },
    {
      icon: ThermometerSnowflake,
      title: "Active Cold Chain & Reefer (12°-15°C)",
      desc: "Controlled atmosphere & humidity for fresh shallots to eliminate sprout and moisture mold risk.",
    },
    {
      icon: FileCheck2,
      title: "Full Export Compliance & Certifications",
      desc: "Phytosanitary Certificate, Form D/AK/E Certificate of Origin, Fumigation Certificate, & Lab COA.",
    },
    {
      icon: Boxes,
      title: "Export Flexible Packaging & OEM",
      desc: "5/10/20 kg red leno mesh bags, corrugated master cartons, and custom printed retail pouches.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-10 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-[#C22B34]/60 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-slate-700/80 text-[#C22B34] group-hover:bg-[#C22B34] group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
