"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const defaultText = encodeURIComponent(
    "Hello CV Indo Daha Export, I would like to inquire about exporting Indonesian red shallots (bawang merah) and crispy fried shallots."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip */}
      <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span>Chat with Export Desk</span>
        <div className="text-[10px] text-emerald-400 font-normal">Online • Kediri, East Java</div>
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/6281234567890?text=${defaultText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact CV Indo Daha Export on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1EBE5D] hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        
        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
        </span>
      </a>
    </div>
  );
}
