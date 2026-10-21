import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Globe2,
  ShieldCheck,
  ArrowUp,
  Award,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-900">
          
          {/* Col 1: Brand & Entity Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-36">
                <Image
                  src="/logo-white.png"
                  alt="CV Indo Daha Export"
                  width={160}
                  height={50}
                  className="object-contain max-h-12 brightness-110"
                />
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">CV INDO DAHA EXPORT</strong> is a premier Indonesian agricultural export company 
              specializing in farm-fresh red shallots (<em>bawang merah</em>) and crispy fried shallots directly 
              from Kediri City, East Java to worldwide destinations.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Official Entity: CV Indo Daha Export
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Reg: Kediri City, East Java
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                Port of Loading: Tanjung Perak (ID SUB)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About CV Indo Daha
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Export Products
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Farm & Quality Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Container Estimator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Buyer FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Export Commodities */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Commodities
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Fresh Red Shallots (Grade A)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Crispy Fried Shallots (100% Pure)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Dehydrated Shallot Flakes
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Pure Shallot Powder
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Private Label OEM Pouches
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Mesh Bag Bulk Supply (5/10/20kg)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Head Office & Contact
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C22B34] shrink-0 mt-0.5" />
                <span>Kota Kediri, Jawa Timur 64129, Indonesia</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C22B34] shrink-0 mt-0.5" />
                <a href="mailto:export@indodaha.com" className="hover:text-white">
                  export@indodaha.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  +62 812-3456-7890 (WhatsApp)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Globe2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Shipping via Port of Tanjung Perak, Surabaya</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 <strong className="text-slate-300">CV Indo Daha Export</strong>. All rights reserved. 
            Official Entity: CV Indo Daha Export, Kediri City, East Java, Indonesia.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400">Export Terms: FOB / CIF / CFR</span>
            <span className="hover:text-slate-400">Phytosanitary & COO Certified</span>
            <a
              href="#hero"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
