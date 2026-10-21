"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  PhoneCall,
  FileDown,
  Globe2,
  ChevronRight,
  ShieldCheck,
  SendHorizontal,
} from "lucide-react";

interface NavbarProps {
  onOpenSpecsModal?: () => void;
}

export default function Navbar({ onOpenSpecsModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "Estimator", href: "#estimator" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#C22B34] text-white tracking-wide uppercase">
              Export Ready
            </span>
            <span className="text-slate-300">
              Harvest Season Contract Available • Port of Tanjung Perak, Surabaya, Indonesia
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-[#C22B34]" />
              FOB • CIF • CFR Worldwide
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href="mailto:export@indodaha.com"
              className="hidden md:inline hover:text-white transition-colors"
            >
              export@indodaha.com
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href="https://wa.me/6281234567890?text=Hello%20CV%20Indo%20Daha%20Export,%20I%20am%20interested%20in%20your%20red%20shallots."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] font-medium hover:underline"
            >
              <PhoneCall className="w-3 h-3" />
              +62 812-3456-7890
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Entity Name */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-11 w-32 sm:w-36 flex items-center">
              <Image
                src="/logo-red.png"
                alt="Indo Daha Export Logo"
                width={160}
                height={55}
                className="object-contain max-h-11 transition-transform group-hover:scale-105 duration-200"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-[10px] font-bold tracking-widest text-[#C22B34] uppercase">
                CV INDO DAHA EXPORT
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Kediri, East Java, Indonesia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-[#C22B34] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenSpecsModal && (
              <button
                onClick={onOpenSpecsModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              >
                <FileDown className="w-3.5 h-3.5 text-slate-600" />
                <span>Specs & Catalog</span>
              </button>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C22B34] hover:bg-[#A61E26] active:bg-[#78141B] rounded-lg shadow-sm hover:shadow transition-all duration-200 group"
            >
              <span>Request Quote</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-white bg-[#C22B34] rounded-md"
            >
              Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#C22B34] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
              <div className="text-xs font-bold text-[#C22B34] px-3 py-1">
                CV INDO DAHA EXPORT • KEDIRI
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-[#C22B34] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-2.5">
              {onOpenSpecsModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSpecsModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg"
                >
                  <FileDown className="w-4 h-4" />
                  View Product Specifications
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C22B34] rounded-lg"
              >
                <SendHorizontal className="w-4 h-4" />
                Submit B2B Inquiry (RFQ)
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                Chat via WhatsApp (+62 812-3456-7890)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
