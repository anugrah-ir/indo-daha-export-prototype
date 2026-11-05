import test from "node:test";
import assert from "node:assert";
import { POST } from "../app/api/chat/route.ts";

test("POST /api/chat returns 400 when request body is empty or invalid", async () => {
  const req = new Request("http://localhost:3000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });

  const res = await POST(req);
  assert.strictEqual(res.status, 400);
  const data = await res.json();
  assert.ok(data.error.includes("Invalid messages"));
});

test("POST /api/chat returns 400 when messages array is empty", async () => {
  const req = new Request("http://localhost:3000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: [] }),
  });

  const res = await POST(req);
  assert.strictEqual(res.status, 400);
  const data = await res.json();
  assert.ok(data.error.includes("Invalid messages"));
});

test("POST /api/chat returns 500 when GEMINI_API_KEY is missing", async () => {
  const originalKey = process.env.GEMINI_API_KEY;
  delete process.env.GEMINI_API_KEY;

  try {
    const req = new Request("http://localhost:3000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: "What is your MOQ?" }],
      }),
    });

    const res = await POST(req);
    assert.strictEqual(res.status, 500);
    const data = await res.json();
    assert.ok(data.error.includes("GEMINI_API_KEY is not configured"));
  } finally {
    if (originalKey) {
      process.env.GEMINI_API_KEY = originalKey;
    }
  }
});
