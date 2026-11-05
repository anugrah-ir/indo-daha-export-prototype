/**
 * CV Indo Daha Export - Company Knowledge Base & B2B Export System Instructions
 * Headquarters: Kediri, East Java, Indonesia
 * Port of Loading: Port of Tanjung Perak, Surabaya (SUB)
 */

export const WHATSAPP_PHONE_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";

export interface CommoditySpecification {
  name: string;
  grade: string;
  sizeDiameter?: string;
  moistureContent: string;
  shelfLife: string;
  packagingOptions: string[];
  containerLogistics: string;
  temperature?: string;
  relativeHumidity?: string;
  ventilation?: string;
  ingredients?: string;
  description: string;
}

export interface CompanyKnowledgeBase {
  companyName: string;
  tagline: string;
  legalEntity: string;
  origin: string;
  loadingPort: string;
  commodities: CommoditySpecification[];
  derivativeProducts: string[];
  documents: string[];
  paymentTerms: string[];
  incoterms: string[];
  samplePolicy: string;
  pricingPolicy: string;
}

export const COMPANY_KNOWLEDGE: CompanyKnowledgeBase = {
  companyName: "CV Indo Daha Export",
  tagline: "Premier Indonesian Red Shallots & Crispy Fried Shallots Exporter",
  legalEntity: "CV Indo Daha Export (Registered Indonesian Export Entity)",
  origin: "Kediri City, East Java, Indonesia (Direct sourcing from Kediri, Nganjuk, & Probolinggo farming belts)",
  loadingPort: "Port of Tanjung Perak, Surabaya, Indonesia (Port Code: IDSUB, ~2 hours direct tollway access from Kediri)",
  commodities: [
    {
      name: "Fresh Raw Red Shallots (Grade A / Super Export)",
      grade: "Grade A / Super Export Selected",
      sizeDiameter: "2.5 cm - 3.5+ cm sorted diameter",
      moistureContent: "Sun-cured moisture <80%, firm texture, intact dry purplish-red skin",
      shelfLife: "90-120 days under optimal reefer conditions",
      packagingOptions: [
        "5 kg, 10 kg, 20 kg breathable red raschel mesh bags",
        "10 kg ventilated corrugated export cartons (with moisture absorbing liners)",
        "Custom buyer-branded packaging upon agreement",
      ],
      containerLogistics: "20ft Reefer (approx. 12-14 MT) or 40ft High Cube Reefer (approx. 24-27 MT)",
      temperature: "12°C–15°C (53.6°F–59°F)",
      relativeHumidity: "65-70% RH",
      ventilation: "25 CBM/hr (continuous fresh air exchange)",
      description:
        "Harvested directly from fertile East Java volcanic soils. Pre-cooled and naturally sun-cured to harden outer skins and prevent post-harvest spoilage and sprouting.",
    },
    {
      name: "Crispy Fried Shallots (Bawang Goreng) Premium Grade",
      grade: "Export Premium Grade",
      moistureContent: "Moisture content <2%, ultra-crisp golden texture",
      shelfLife: "12-month guaranteed shelf life at ambient temperature in sealed packaging",
      ingredients: "99% authentic Indonesian shallots, 1% pure cornstarch & refined salt",
      packagingOptions: [
        "100g, 150g, 250g, 500g nitrogen-flushed 4-layer aluminum barrier standing pouches",
        "5 kg and 10 kg heavy-duty vacuum bags in master outer cartons",
        "OEM / Private Label customized retail packaging",
      ],
      containerLogistics: "20ft / 40ft standard dry container (FCL or consolidated LCL)",
      description:
        "Made with automated rotary slicing for uniform thickness, continuous frying in high-grade vegetable oil, and high-speed centrifugal de-oiling (<1% residual surface oil). Zero artificial preservatives or MSG.",
    },
    {
      name: "Value-Added Shallot Derivatives",
      grade: "Industrial / Food Processing Grade",
      moistureContent: "Flakes/Powder <5%, Paste chilled/frozen",
      shelfLife: "12-24 months depending on derivative form",
      packagingOptions: [
        "Dehydrated shallot flakes & fine powder: 25 kg multi-wall craft bags with inner polyethylene liner",
        "Aseptic shallot paste/puree: 200 kg steel drums with aseptic bag liner",
        "Shallot-infused culinary oil: 1L, 5L, or 18L food-grade tins",
      ],
      containerLogistics: "Standard dry or refrigerated containers depending on item",
      description:
        "Tailored for industrial food processors, soup base manufacturers, spice blenders, and commercial culinary chains worldwide.",
    },
  ],
  derivativeProducts: [
    "Dehydrated shallot flakes",
    "Shallot powder (mesh 60-100)",
    "Pure shallot paste / puree (aseptic)",
    "Shallot-infused aromatic oil",
  ],
  documents: [
    "Ocean Bill of Lading (Clean on Board B/L)",
    "Commercial Invoice",
    "Packing List with gross/net weights",
    "Official Phytosanitary Certificate (Issued by the Indonesian Agricultural Quarantine Agency / Badan Karantina Indonesia)",
    "Certificate of Origin (COO Form D for ASEAN, Form AK for South Korea, Form E for China, or General Form A)",
    "Fumigation Certificate (Methyl Bromide or Phosphine treatment)",
    "Manufacturer Certificate of Analysis (COA)",
    "Third-Party Inspection Certificate (SGS, Sucofindo, or Surveyor Indonesia available upon buyer's request)",
  ],
  paymentTerms: [
    "30% T/T deposit upon Proforma Invoice signing + 70% T/T against emailed copy of Original Bill of Lading & export documents",
    "100% Irrevocable Confirmed Letter of Credit (L/C) at Sight issued by a reputable first-class international bank (for full container loads)",
  ],
  incoterms: [
    "FOB Port of Tanjung Perak, Surabaya (ID SUB)",
    "CFR (Cost and Freight) to buyer's destination port",
    "CIF (Cost, Insurance, and Freight) to buyer's destination port",
  ],
  samplePolicy:
    "Free physical product samples (1 kg to 5 kg) are available upon request. International air courier shipping cost (DHL, FedEx) is covered by the prospective consignee or 100% credited back against the consignee's first full container commercial order.",
  pricingPolicy:
    "Shallot spot prices fluctuate weekly based on harvest seasonality, agricultural market supply in East Java, and global ocean freight bunker surcharges. Exact firm pricing is provided via a formal Proforma Quotation tailored to target container volume, Incoterms, and destination port of discharge.",
};

export interface WhatsAppAction {
  product: string;
  volume: string;
  destination: string;
}

/**
 * System instruction tailored for Google Gemini Free Tier models (gemini-2.5-flash / gemini-1.5-flash)
 */
export const SYSTEM_INSTRUCTION = `You are the official 24/7 Senior AI Export Desk Representative of CV Indo Daha Export, a premier B2B Indonesian agricultural export trading company headquartered in Kediri City, East Java, Indonesia.

Company Profile & Logistics:
- Legal Entity: CV Indo Daha Export (Kediri, East Java, Indonesia).
- Primary Loading Port: Port of Tanjung Perak, Surabaya (SUB / IDSUB), ~2 hours via direct tollway.
- Core Commodities:
  1. Fresh Raw Red Shallots (Grade A / Super Export): 2.5-3.5+ cm sorted diameter; sun-cured moisture <80%; 5/10/20kg red mesh bags or ventilated cartons.
     Logistics: 20ft Reefer (~12-14 MT) or 40ft Reefer (~24-27 MT) at 12°C–15°C, 65-70% RH, 25 CBM/hr ventilation. Shelf life: 90-120 days.
  2. Crispy Fried Shallots (Bawang Goreng) Premium: 99% shallots, 1% cornstarch & salt; spun de-oiled (moisture <2%); 12-month shelf life. Packaging: 100g-500g nitrogen-flushed standing pouches, bulk vacuum bags, OEM / Private Label.
  3. Derivative Goods: Dehydrated flakes, shallot powder, shallot paste/puree, shallot infused oil.
- Export Documents: Clean Ocean B/L, Commercial Invoice, Packing List, Phytosanitary Certificate (Indonesian Agricultural Quarantine Agency), Certificate of Origin (COO Form D/AK/E/General), Fumigation Certificate, COA. Third-party inspection (SGS/Sucofindo) available.
- Commercial Payment Terms: 30% T/T deposit + 70% against B/L copy, or 100% Irrevocable Confirmed L/C at Sight. Incoterms: FOB Tanjung Perak, CFR, CIF.
- Sample Policy: Free 1-5 kg sample; courier paid by consignee or credited back upon first container order.

Conversation & Sales Guidelines:
1. Maintain a professional, knowledgeable, courteous, and crisp B2B export desk tone.
2. Answer inquiries thoroughly based strictly on the verified company knowledge base above.
3. Pricing Rule: Do not invent static spot prices. Always explain clearly that Indonesian shallot prices fluctuate weekly according to regional harvest yields, seasonality, and global ocean freight indexes. Inform the buyer that a formal Proforma Quotation will be issued by the trade desk.
4. Intent Detection & WhatsApp Action Tag:
   Whenever the buyer expresses commercial purchase intent—such as requesting a price quote, proforma invoice, container order, OEM private label inquiry, or sample shipment—you must:
   a) Acknowledge and qualify their request (mention product, target volume, and destination port).
   b) Conclude your message with this exact tag on its own line:
      [WHATSAPP_ACTION: Product | Target Volume | Destination Port]
   Examples of the tag format:
   - [WHATSAPP_ACTION: Fresh Raw Red Shallots (Grade A) | 1x40ft Reefer (~26 MT) | Jebel Ali, Dubai, UAE]
   - [WHATSAPP_ACTION: Crispy Fried Shallots Premium | 500kg Bulk Vacuum | Rotterdam, Netherlands]
   - [WHATSAPP_ACTION: Fresh Raw Red Shallots Sample | 2 kg Express Courier | Singapore]
   If any parameter is unspecified by the buyer, use reasonable defaults or indicate "To Be Confirmed" (e.g. "[WHATSAPP_ACTION: Fresh Raw Red Shallots | 1x20ft Reefer (~13 MT) | Port to be confirmed]").
5. Keep explanations structured, easy to read on mobile and desktop, utilizing concise bullet points where appropriate.`;

/**
 * Parses assistant reply for [WHATSAPP_ACTION: Product | Target Volume | Destination Port]
 * Returns clean text (with the tag removed) and the structured action payload.
 */
export function parseWhatsAppAction(reply: string): {
  cleanText: string;
  action: WhatsAppAction | null;
} {
  if (!reply) {
    return { cleanText: "", action: null };
  }

  const actionRegex =
    /\[WHATSAPP_ACTION:\s*([^|\]]+?)\s*\|\s*([^|\]]+?)\s*\|\s*([^\]]+?)\s*\]/i;
  const match = reply.match(actionRegex);

  if (!match) {
    return { cleanText: reply.trim(), action: null };
  }

  const [fullMatch, product, volume, destination] = match;
  const cleanText = reply
    .replace(fullMatch, "")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n\s*\n/g, "\n\n")
    .trim();

  return {
    cleanText,
    action: {
      product: product.trim(),
      volume: volume.trim(),
      destination: destination.trim(),
    },
  };
}

/**
 * Generates an official WhatsApp click-to-chat URL with pre-filled inquiry text.
 */
export function generateWhatsAppLink(
  phoneNumber: string,
  action: WhatsAppAction,
  customIntro?: string
): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const intro =
    customIntro ||
    "Hello CV Indo Daha Export Desk, I would like to request an official proforma quote based on my consultation with your AI Export Desk:";

  const messageText = `${intro}\n\n• Product: ${action.product}\n• Target Volume: ${action.volume}\n• Destination Port: ${action.destination}\n\nPlease share current weekly spot FOB/CIF pricing and reefer shipping schedule.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;
}
