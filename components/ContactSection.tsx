"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  SendHorizontal,
  CheckCircle2,
  Building2,
  Globe2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface ContactSectionProps {
  initialProduct?: string;
  initialVolume?: string;
  initialIncoterm?: string;
}

export default function ContactSection({
  initialProduct = "Fresh Raw Red Shallots (Grade A)",
  initialVolume = "1 x 20ft Reefer Container (~12-14 MT)",
  initialIncoterm = "FOB Tanjung Perak, Surabaya",
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    country: "",
    destinationPort: "",
    product: initialProduct,
    volume: initialVolume,
    incoterm: initialIncoterm,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello CV Indo Daha Export,\nI would like to request an export quote for ${formData.product}.\nCompany: ${formData.company || "International Buyer"}\nCountry: ${formData.country || "Overseas"}\nTarget Volume: ${formData.volume}\nIncoterm: ${formData.incoterm}`
  );

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#C22B34] text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Commercial Export Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Request an Export Quotation (RFQ)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our international trade desk responds within 12–24 business hours with comprehensive pricing, 
            crop availability, moisture certificate parameters, and ocean freight estimates from Port of Tanjung Perak.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Quotation Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for contacting <strong className="text-slate-900">CV Indo Daha Export</strong>. 
                  Our export manager will review your technical specifications and dispatch a formal proforma quote to 
                  <span className="font-semibold text-slate-900"> {formData.email || "your email"}</span>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors"
                  >
                    <span>Follow Up on WhatsApp Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Henderson"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C22B34]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. procurement@globalfoods.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C22B34]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Agri Imports Pte Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C22B34]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Country & Destination Seaport *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Singapore / Port of Singapore"
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C22B34]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Product of Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#C22B34]"
                    >
                      <option value="Fresh Raw Red Shallots (Grade A)">Fresh Raw Red Shallots (Grade A)</option>
                      <option value="Crispy Fried Shallots (Bawang Goreng)">Crispy Fried Shallots (Bawang Goreng)</option>
                      <option value="Derivative Goods (Flakes / Powder / Paste)">Derivative Goods (Flakes / Powder)</option>
                      <option value="Mixed / Full Container Assortment">Mixed / Full Container Assortment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Volume
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1 x 20ft FCL (~13 MT)"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C22B34]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Incoterms
                    </label>
                    <select
                      value={formData.incoterm}
                      onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#C22B34]"
                    >
                      <option value="FOB Tanjung Perak, Surabaya">FOB Tanjung Perak Surabaya</option>
                      <option value="CIF Destination Port">CIF Destination Port</option>
                      <option value="CFR Destination Port">CFR Destination Port</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Specifications & Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify bulb size calibration (e.g. 28-35mm), packaging preference (10kg mesh bag / OEM printed pouch), target delivery schedule, or sample requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C22B34]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your corporate inquiry is handled with strict confidentiality.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#C22B34] hover:bg-[#A61E26] active:bg-[#78141B] transition-all shadow-md shadow-red-700/20 flex items-center justify-center gap-2"
                  >
                    <SendHorizontal className="w-4 h-4" />
                    <span>Submit RFQ</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Corporate Entity Info & Map Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Entity Card */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C22B34] block mb-1">
                  Official Entity & Head Office
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  CV INDO DAHA EXPORT
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Registered Indonesian Agricultural Exporter
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-[#C22B34] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Registered Address:</strong>
                    <span>Kota Kediri, Jawa Timur 64129, Indonesia</span>
                    <span className="block text-slate-500 text-[11px] mt-0.5">
                      Coordinates: 7.8480° S, 112.0178° E
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-[#C22B34] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Export Inquiries:</strong>
                    <a href="mailto:export@indodaha.com" className="text-[#C22B34] hover:underline">
                      export@indodaha.com
                    </a>
                    <span className="block text-slate-500 text-[11px]">
                      General: contact@indodaha.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Direct WhatsApp & Calling:</strong>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 hover:text-emerald-600 font-medium"
                    >
                      +62 812-3456-7890
                    </a>
                    <span className="block text-slate-500 text-[11px]">
                      English & Indonesian Fluency • Active 24/7
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Facility Operating Hours:</strong>
                    <span>Monday – Saturday: 08:00 – 17:00 (WIB / UTC+7)</span>
                    <span className="block text-slate-500 text-[11px]">
                      Packing & Port Reefer Loading: 24/7 on Vessel Schedules
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Location & Port Proximity Card */}
            <div className="bg-slate-900 text-white p-7 rounded-3xl border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C22B34] bg-red-950/80 px-2 py-0.5 rounded border border-red-900">
                    Seaport Proximity Advantage
                  </span>
                  <span className="text-xs text-slate-400">120 km via Tollway</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Direct Pipeline to Port of Tanjung Perak, Surabaya
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Our facility in Kediri connects seamlessly to Tanjung Perak Container Terminal via the Trans-Java toll expressway. 
                  This guarantees that fresh shallots are stuffed directly into reefer containers and loaded onto ocean vessels without transit delays.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-[11px]">
                  <div>
                    <span className="text-slate-400 block">Transit Time:</span>
                    <span className="text-white font-bold">2.5 Hours to Port</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Major Lines:</span>
                    <span className="text-white font-bold">Maersk, CMA CGM, ONE, MSC</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
