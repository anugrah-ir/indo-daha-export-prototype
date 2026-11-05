/**
 * Chat Provider Abstraction Layer
 * Enables CV Indo Daha Export's desk to seamlessly switch between AI providers
 * (Gemini Free Tier, Groq Free Tier, OpenAI) via environment variables without frontend changes.
 */

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatProvider {
  sendMessage(messages: ChatMessage[], systemPrompt: string): Promise<string>;
}

// ---------------------------------------------------------------------------
// Google Gemini Provider Types & Helpers
// ---------------------------------------------------------------------------

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

export interface ProviderOptions {
  apiKey?: string;
  model?: string;
  timeoutMs?: number;
}

// ---------------------------------------------------------------------------
// Gemini Provider with Automatic 503 Retry
// ---------------------------------------------------------------------------

export class GeminiChatProvider implements ChatProvider {
  private apiKey: string;
  private model: string;
  private timeoutMs: number;

  constructor(options?: ProviderOptions) {
    this.apiKey = options?.apiKey ?? process.env.GEMINI_API_KEY ?? "";
    this.model = options?.model ?? process.env.GEMINI_MODEL ?? "gemini-3.8-flash";
    this.timeoutMs = options?.timeoutMs ?? 20000;
  }

  private async executeFetch(modelName: string, payload: GeminiApiPayload): Promise<Response> {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${this.apiKey}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      return await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async sendMessage(messages: ChatMessage[], systemPrompt: string): Promise<string> {
    if (!this.apiKey) {
      throw new Error(
        "GEMINI_API_KEY is not configured on the server. Please check your .env.local configuration."
      );
    }

    const payload = formatGeminiPayload(messages, systemPrompt);

    try {
      let response = await this.executeFetch(this.model, payload);

      // Automatic Retry on 503 (High Demand / Service Unavailable)
      if (response.status === 503) {
        console.warn(`[Gemini] Encountered 503 high demand on model ${this.model}. Retrying after 1500ms...`);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        response = await this.executeFetch(this.model, payload);

        // If primary model is still overloaded, attempt fallback to gemini-1.5-flash
        if (response.status === 503 && this.model !== "gemini-1.5-flash") {
          console.warn("[Gemini] Retrying with fallback model gemini-1.5-flash...");
          response = await this.executeFetch("gemini-1.5-flash", payload);
        }
      }

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "Gemini API rate limit exceeded. Please try again shortly or contact our human export desk on WhatsApp."
          );
        }
        if (response.status === 503) {
          throw new Error(
            "Gemini free tier is temporarily experiencing high global traffic spikes (503). Please retry in a few seconds or reach our WhatsApp desk directly."
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
    }
  }
}

// ---------------------------------------------------------------------------
// OpenAI-Compatible Provider (Powers both Groq & OpenAI)
// ---------------------------------------------------------------------------

export interface OpenAiCompatibleOptions extends ProviderOptions {
  baseURL: string;
  providerName: string;
  defaultModel: string;
}

export class OpenAiCompatibleChatProvider implements ChatProvider {
  protected apiKey: string;
  protected model: string;
  protected baseURL: string;
  protected providerName: string;
  protected timeoutMs: number;

  constructor(options: OpenAiCompatibleOptions) {
    this.apiKey = options.apiKey ?? "";
    this.model = options.model ?? options.defaultModel;
    this.baseURL = options.baseURL;
    this.providerName = options.providerName;
    this.timeoutMs = options.timeoutMs ?? 20000;
  }

  async sendMessage(messages: ChatMessage[], systemPrompt: string): Promise<string> {
    if (!this.apiKey) {
      throw new Error(
        `${this.providerName.toUpperCase()}_API_KEY is not configured on the server. Please check your .env.local configuration.`
      );
    }

    const endpoint = `${this.baseURL}/chat/completions`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    const formattedMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ];

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages: formattedMessages,
          temperature: 0.4,
          max_tokens: 1024,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            `${this.providerName} rate limit reached. Please try again shortly or reach our export desk on WhatsApp.`
          );
        }
        let errorDetails = `HTTP ${response.status}`;
        try {
          const errData = await response.json();
          if (errData?.error?.message) {
            errorDetails = errData.error.message;
          }
        } catch {
          // fallback
        }
        throw new Error(`${this.providerName} API request failed (${response.status}): ${errorDetails}`);
      }

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content;
      if (!reply) {
        throw new Error(`Invalid response from ${this.providerName}: No text content returned in choices.`);
      }
      return reply;
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        throw new Error(
          `Request to ${this.providerName} timed out after 20 seconds. Please try again or reach us via WhatsApp.`
        );
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}

// ---------------------------------------------------------------------------
// Groq Provider (Ultra-fast, 100% Free Tier, No Credit Card)
// ---------------------------------------------------------------------------

export class GroqChatProvider extends OpenAiCompatibleChatProvider {
  constructor(options?: ProviderOptions) {
    super({
      apiKey: options?.apiKey ?? process.env.GROQ_API_KEY ?? "",
      model: options?.model ?? process.env.GROQ_MODEL ?? "openai/gpt-oss-120b",
      baseURL: "https://api.groq.com/openai/v1",
      providerName: "Groq",
      defaultModel: "openai/gpt-oss-120b",
      timeoutMs: options?.timeoutMs ?? 20000,
    });
  }
}

// ---------------------------------------------------------------------------
// OpenAI Provider (Standard Paid Option: GPT-4o-mini / GPT-4o)
// ---------------------------------------------------------------------------

export class OpenAIChatProvider extends OpenAiCompatibleChatProvider {
  constructor(options?: ProviderOptions) {
    super({
      apiKey: options?.apiKey ?? process.env.OPENAI_API_KEY ?? "",
      model: options?.model ?? process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      baseURL: "https://api.openai.com/v1",
      providerName: "OpenAI",
      defaultModel: "gpt-4o-mini",
      timeoutMs: options?.timeoutMs ?? 20000,
    });
  }
}

// ---------------------------------------------------------------------------
// Provider Factory
// ---------------------------------------------------------------------------

export function getChatProvider(options?: ProviderOptions): ChatProvider {
  const providerType = (process.env.AI_PROVIDER || "gemini").toLowerCase().trim();

  switch (providerType) {
    case "groq":
      return new GroqChatProvider(options);
    case "openai":
      return new OpenAIChatProvider(options);
    case "gemini":
    default:
      return new GeminiChatProvider(options);
  }
}
