import test from "node:test";
import assert from "node:assert";
import {
  COMPANY_KNOWLEDGE,
  SYSTEM_INSTRUCTION,
  parseWhatsAppAction,
  generateWhatsAppLink,
  WHATSAPP_PHONE_NUMBER,
} from "../lib/companyKnowledge.ts";

test("COMPANY_KNOWLEDGE contains core export facts", () => {
  assert.ok(COMPANY_KNOWLEDGE.companyName.includes("Indo Daha Export"));
  assert.ok(COMPANY_KNOWLEDGE.origin.includes("Kediri"));
  assert.ok(COMPANY_KNOWLEDGE.loadingPort.includes("Tanjung Perak"));
  assert.strictEqual(COMPANY_KNOWLEDGE.commodities.length, 3);
  
  // Commodity 1: Fresh Raw Red Shallots specs
  const freshShallot = COMPANY_KNOWLEDGE.commodities[0];
  assert.strictEqual(freshShallot.name, "Fresh Raw Red Shallots (Grade A / Super Export)");
  assert.ok(freshShallot.temperature?.includes("12°C–15°C"));
  assert.ok(freshShallot.relativeHumidity?.includes("65-70%"));
  assert.ok(freshShallot.ventilation?.includes("25 CBM/hr"));
  assert.ok(freshShallot.shelfLife.includes("90-120 days"));

  // Commodity 2: Crispy Fried Shallots specs
  const friedShallot = COMPANY_KNOWLEDGE.commodities[1];
  assert.strictEqual(friedShallot.name, "Crispy Fried Shallots (Bawang Goreng) Premium Grade");
  assert.ok(friedShallot.shelfLife.includes("12-month"));
  assert.ok(friedShallot.ingredients?.includes("99%"));

  // Documents & Payment Terms
  assert.ok(COMPANY_KNOWLEDGE.documents.some((doc) => doc.includes("Phytosanitary")));
  assert.ok(COMPANY_KNOWLEDGE.documents.some((doc) => doc.includes("Certificate of Origin")));
  assert.ok(COMPANY_KNOWLEDGE.paymentTerms.some((term) => term.includes("30% T/T")));
});

test("SYSTEM_INSTRUCTION includes B2B export desk rules and WhatsApp trigger format", () => {
  assert.ok(SYSTEM_INSTRUCTION.includes("CV Indo Daha Export"));
  assert.ok(SYSTEM_INSTRUCTION.includes("[WHATSAPP_ACTION: Product | Target Volume | Destination Port]"));
  assert.ok(SYSTEM_INSTRUCTION.includes("weekly"));
  assert.ok(SYSTEM_INSTRUCTION.includes("proforma"));
});

test("parseWhatsAppAction detects action tag and extracts fields correctly", () => {
  const rawReply =
    "We can supply 1 x 40ft reefer container of Fresh Raw Red Shallots to Dubai. Weekly prices fluctuate based on season. [WHATSAPP_ACTION: Fresh Raw Red Shallots | 1x40ft Reefer (~26 MT) | Dubai, UAE]";

  const result = parseWhatsAppAction(rawReply);
  assert.ok(result.action !== null);
  assert.strictEqual(result.action?.product, "Fresh Raw Red Shallots");
  assert.strictEqual(result.action?.volume, "1x40ft Reefer (~26 MT)");
  assert.strictEqual(result.action?.destination, "Dubai, UAE");
  assert.strictEqual(
    result.cleanText,
    "We can supply 1 x 40ft reefer container of Fresh Raw Red Shallots to Dubai. Weekly prices fluctuate based on season."
  );
});

test("parseWhatsAppAction returns null action when no tag is present", () => {
  const rawReply = "Our fresh shallots require 12°C–15°C reefer temperature with 65-70% relative humidity.";
  const result = parseWhatsAppAction(rawReply);
  assert.strictEqual(result.action, null);
  assert.strictEqual(result.cleanText, rawReply);
});

test("parseWhatsAppAction handles edge case with extra spaces or variations", () => {
  const rawReply =
    "Here is your request. [WHATSAPP_ACTION: Crispy Fried Shallots  |  500kg Bulk  |  Hamburg Port ] Thank you.";
  const result = parseWhatsAppAction(rawReply);
  assert.ok(result.action !== null);
  assert.strictEqual(result.action?.product, "Crispy Fried Shallots");
  assert.strictEqual(result.action?.volume, "500kg Bulk");
  assert.strictEqual(result.action?.destination, "Hamburg Port");
  assert.strictEqual(result.cleanText, "Here is your request. Thank you.");
});

test("generateWhatsAppLink produces valid wa.me URL with encoded parameters", () => {
  const action = {
    product: "Fresh Raw Red Shallots",
    volume: "1x20ft Reefer (~13 MT)",
    destination: "Jebel Ali, UAE",
  };
  const link = generateWhatsAppLink(WHATSAPP_PHONE_NUMBER, action);
  assert.ok(link.startsWith("https://wa.me/6281234567890?text="));
  assert.ok(link.includes(encodeURIComponent("Fresh Raw Red Shallots")));
  assert.ok(link.includes(encodeURIComponent("1x20ft Reefer (~13 MT)")));
  assert.ok(link.includes(encodeURIComponent("Jebel Ali, UAE")));
});
