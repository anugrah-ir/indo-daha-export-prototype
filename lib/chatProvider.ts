/**
 * Chat Provider Abstraction Layer
 * Enables CV Indo Daha Export's desk to easily switch between AI providers
 * (Gemini Free Tier, OpenAI, Claude) via environment configuration without frontend changes.
 */

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatProvider {
  sendMessage(messages: ChatMessage[], systemPrompt: string): Promise<string>;
}

export interface GeminiContentPart {
  text: string;
}

export interface GeminiContent {
  role: "user" | "model";
  parts: GeminiContentPart[];
}

export interface GeminiApiPayload {
  system_instruction: {
    parts: GeminiContentPart[];
  };
  contents: GeminiContent[];
  generationConfig?: {
    temperature?: number;
    maxOutputTokens?: number;
    topP?: number;
  };
}

export interface GeminiCandidatePart {
  text?: string;
}

export interface GeminiCandidate {
  content?: {
    parts?: GeminiCandidatePart[];
    role?: string;
  };
  finishReason?: string;
}

export interface GeminiApiResponse {
  candidates?: GeminiCandidate[];
  promptFeedback?: unknown;
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
}

/**
 * Transforms standard ChatMessage[] and systemPrompt into Google Generative Language REST schema.
 */
export function formatGeminiPayload(
  messages: ChatMessage[],
  systemPrompt: string
): GeminiApiPayload {
  const contents: GeminiContent[] = messages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  return {
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents,
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 1024,
    },
  };
}

/**
 * Extracts the reply text from a Gemini API response JSON object.
 */
export function parseGeminiResponse(data: GeminiApiResponse): string {
  if (data.error) {
    throw new Error(`Gemini API Error: ${data.error.message || "Unknown error"}`);
  }

  const candidate = data.candidates?.[0];
  const text = candidate?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Invalid response from Gemini: No text content returned in candidates.");
  }

  return text;
}

export interface GeminiProviderOptions {
  apiKey?: string;
  model?: string;
  timeoutMs?: number;
}

export class GeminiChatProvider implements ChatProvider {
  private apiKey: string;
  private model: string;
  private timeoutMs: number;

  constructor(options?: GeminiProviderOptions) {
    this.apiKey = options?.apiKey ?? process.env.GEMINI_API_KEY ?? "";
    this.model = options?.model ?? process.env.GEMINI_MODEL ?? "gemini-2.5-flash";
    this.timeoutMs = options?.timeoutMs ?? 20000;
  }

  async sendMessage(messages: ChatMessage[], systemPrompt: string): Promise<string> {
    if (!this.apiKey) {
      throw new Error(
        "GEMINI_API_KEY is not configured on the server. Please check your environment configuration."
      );
    }

    const payload = formatGeminiPayload(messages, systemPrompt);
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "Gemini API rate limit exceeded. Please try again shortly or contact our human export desk on WhatsApp."
          );
        }
        let errorDetails = `HTTP ${response.status}`;
        try {
          const errJson = (await response.json()) as GeminiApiResponse;
          if (errJson.error?.message) {
            errorDetails = errJson.error.message;
          }
        } catch {
          // Fall back to status code
        }
        throw new Error(`Gemini API request failed (${response.status}): ${errorDetails}`);
      }

      const json = (await response.json()) as GeminiApiResponse;
      return parseGeminiResponse(json);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        throw new Error(
          "Request to AI export desk timed out after 20 seconds. Please try again or reach us via WhatsApp."
        );
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}

/**
 * Provider factory for clean dependency injection and switching.
 */
export function getChatProvider(options?: GeminiProviderOptions): ChatProvider {
  const providerType = process.env.AI_PROVIDER || "gemini";

  switch (providerType.toLowerCase()) {
    case "gemini":
    default:
      return new GeminiChatProvider(options);
  }
}
