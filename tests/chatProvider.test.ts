import test from "node:test";
import assert from "node:assert";
import {
  GeminiChatProvider,
  formatGeminiPayload,
  parseGeminiResponse,
  getChatProvider,
} from "../lib/chatProvider.ts";
import type { ChatMessage } from "../lib/chatProvider.ts";

test("formatGeminiPayload transforms ChatMessage array and system instruction to Gemini REST format", () => {
  const messages: ChatMessage[] = [
    { role: "user", content: "What are your shallot specs?" },
    { role: "assistant", content: "Our shallots are Grade A with 2.5-3.5cm diameter." },
    { role: "user", content: "Can you quote 1x40ft container to Dubai?" },
  ];
  const systemPrompt = "You are the export desk of CV Indo Daha Export.";

  const payload = formatGeminiPayload(messages, systemPrompt);

  assert.strictEqual(payload.system_instruction.parts[0].text, systemPrompt);
  assert.strictEqual(payload.contents.length, 3);
  assert.strictEqual(payload.contents[0].role, "user");
  assert.strictEqual(payload.contents[0].parts[0].text, "What are your shallot specs?");
  // Verify assistant role is mapped to 'model' for Gemini API compatibility
  assert.strictEqual(payload.contents[1].role, "model");
  assert.strictEqual(payload.contents[1].parts[0].text, "Our shallots are Grade A with 2.5-3.5cm diameter.");
  assert.strictEqual(payload.contents[2].role, "user");
});

test("parseGeminiResponse correctly extracts candidate text", () => {
  const mockApiResponse = {
    candidates: [
      {
        content: {
          parts: [{ text: "Hello! We are CV Indo Daha Export." }],
          role: "model",
        },
        finishReason: "STOP",
      },
    ],
  };

  const text = parseGeminiResponse(mockApiResponse);
  assert.strictEqual(text, "Hello! We are CV Indo Daha Export.");
});

test("parseGeminiResponse throws descriptive error when response has no candidates", () => {
  const badResponse = { candidates: [] };
  assert.throws(() => parseGeminiResponse(badResponse), /Invalid response from Gemini/);
});

test("GeminiChatProvider throws error when API key is missing", async () => {
  const provider = new GeminiChatProvider({ apiKey: "" });
  await assert.rejects(
    async () => {
      await provider.sendMessage([{ role: "user", content: "Hello" }], "System prompt");
    },
    /GEMINI_API_KEY is not configured/
  );
});

test("getChatProvider returns a provider instance", () => {
  const provider = getChatProvider({ apiKey: "test-key" });
  assert.ok(provider);
  assert.strictEqual(typeof provider.sendMessage, "function");
});
