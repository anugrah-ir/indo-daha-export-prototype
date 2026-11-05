import { SYSTEM_INSTRUCTION } from "../../../lib/companyKnowledge.ts";
import { getChatProvider, type ChatMessage } from "../../../lib/chatProvider.ts";

export async function POST(req: Request) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return Response.json(
        { error: "Invalid JSON in request body." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return Response.json(
        { error: "Invalid request payload. Expected JSON object with 'messages'." },
        { status: 400 }
      );
    }

    const { messages } = body as { messages?: unknown };

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Invalid messages array provided. Must be a non-empty array." },
        { status: 400 }
      );
    }

    // Validate message structure
    const validMessages: ChatMessage[] = [];
    for (const msg of messages) {
      if (
        !msg ||
        typeof msg !== "object" ||
        (msg.role !== "user" && msg.role !== "assistant") ||
        typeof msg.content !== "string"
      ) {
        return Response.json(
          {
            error:
              "Invalid message item. Each message must have role ('user' | 'assistant') and string content.",
          },
          { status: 400 }
        );
      }
      validMessages.push({
        role: msg.role,
        content: msg.content.trim(),
      });
    }

    // Check Gemini API Key before proceeding
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json(
        {
          error:
            "GEMINI_API_KEY is not configured on the server. Please check your environment configuration.",
        },
        { status: 500 }
      );
    }

    const provider = getChatProvider({ apiKey });
    const reply = await provider.sendMessage(validMessages, SYSTEM_INSTRUCTION);

    return Response.json({ reply }, { status: 200 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Internal server error occurred.";
    return Response.json({ error: message }, { status: 500 });
  }
}
