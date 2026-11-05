"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageCircle,
  MessageSquareText,
  X,
  Send,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  parseWhatsAppAction,
  generateWhatsAppLink,
  WHATSAPP_PHONE_NUMBER,
  type WhatsAppAction,
} from "@/lib/companyKnowledge";

interface ChatMessageItem {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  action?: WhatsAppAction | null;
}

const INITIAL_MESSAGE: ChatMessageItem = {
  id: "welcome-message",
  role: "assistant",
  content:
    "Hello! Welcome to **CV Indo Daha Export**. I am your 24/7 AI Export Desk representative based in Kediri, East Java.\n\nHow can I assist you with our Grade A fresh red shallots, crispy fried shallots, reefer shipping specs, or export documentation today?",
  timestamp: "Just now",
  action: null,
};

const QUICK_ACTIONS = [
  "What is your Minimum Order Quantity (MOQ)?",
  "What temperature & humidity is required for reefer transport?",
  "Which export certificates & quarantine documents do you provide?",
  "I need a quote for 1 x 40ft container to Jebel Ali, Dubai",
];

function generateMessageId(role: "user" | "assistant"): string {
  return `${role}-${Math.random().toString(36).slice(2, 9)}`;
}

function getCurrentTimeFormatted(): string {
  const now = new Date();
  return now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageItem[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback((smooth = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(false);
      inputRef.current?.focus();
    }
  }, [isOpen, scrollToBottom]);

  useEffect(() => {
    scrollToBottom(true);
  }, [messages, isLoading, scrollToBottom]);

  const handleSendMessage = async (textToSend?: string) => {
    const rawContent = (textToSend ?? inputValue).trim();
    if (!rawContent || isLoading) return;

    setErrorMessage(null);
    const userMessage: ChatMessageItem = {
      id: generateMessageId("user"),
      role: "user",
      content: rawContent,
      timestamp: getCurrentTimeFormatted(),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    if (!textToSend) setInputValue("");
    setIsLoading(true);

    // Prepare payload for backend (filter out initial welcome greeting if it's the canned one)
    const apiPayload = nextMessages
      .filter((m) => m.id !== "welcome-message")
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiPayload }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to reach the AI Export Desk. Please verify your connection or reach out on WhatsApp."
        );
      }

      const { cleanText, action } = parseWhatsAppAction(data.reply || "");

      const assistantMessage: ChatMessageItem = {
        id: generateMessageId("assistant"),
        role: "assistant",
        content: cleanText,
        timestamp: getCurrentTimeFormatted(),
        action,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: unknown) {
      const errText =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(errText);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorMessage(null);
    setInputValue("");
  };

  const defaultEscapeWhatsAppUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
    "Hello CV Indo Daha Export Desk, I would like to inquire about exporting Indonesian red shallots and crispy fried shallots."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <div className="flex items-center group">
          {/* Tooltip */}
          <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Chat with 24/7 AI Export Desk</span>
            </div>
            <div className="text-[10px] text-emerald-400 font-normal">
              Live specs, reefer logistics & proforma quotes
            </div>
          </div>

          {/* Launcher Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open 24/7 AI Export Desk Chat"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#C22B34] text-white shadow-2xl hover:bg-[#A61E26] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            <MessageSquareText className="w-7 h-7 text-white stroke-[2.2]" />

            {/* Pulsing indicator */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
            </span>
          </button>
        </div>
      )}

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-slate-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#C22B34] flex items-center justify-center text-white font-bold shadow-inner">
                  <MessageSquareText className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    CV Indo Daha Export
                  </h3>
                  <span className="text-[10px] font-semibold bg-red-950/80 text-red-300 px-1.5 py-0.5 rounded border border-red-800">
                    AI Desk
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Kediri, East Java • Port of Tanjung Perak
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1">
              {/* Direct WhatsApp Escape */}
              <a
                href={defaultEscapeWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Direct WhatsApp Human Desk"
                aria-label="Direct WhatsApp Human Desk"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>

              {/* Reset Conversation */}
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat window"
                aria-label="Close chat window"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/60 text-sm">
            {messages.map((msg) => {
              const isUser = msg.role === "user";

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm text-sm ${
                      isUser
                        ? "bg-[#C22B34] text-white rounded-br-xs font-medium"
                        : "bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs"
                    }`}
                  >
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {msg.content}
                    </div>

                    {/* WhatsApp Action Card */}
                    {msg.action && (
                      <div className="mt-3 p-3 bg-emerald-50/90 border border-emerald-300 rounded-xl text-slate-800 shadow-sm">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Proforma Quotation Request Ready</span>
                        </div>

                        <div className="text-xs space-y-1 mb-3 text-slate-700 bg-white/70 p-2 rounded-lg border border-emerald-200/50">
                          <div>
                            <span className="font-semibold text-slate-900">Product:</span>{" "}
                            {msg.action.product}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">Volume:</span>{" "}
                            {msg.action.volume}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">Destination:</span>{" "}
                            {msg.action.destination}
                          </div>
                        </div>

                        <a
                          href={generateWhatsAppLink(WHATSAPP_PHONE_NUMBER, msg.action)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                          <span>Continue on WhatsApp with Quotation</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </a>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Quick Actions (only show initially or when conversation is fresh) */}
            {messages.length === 1 && (
              <div className="pt-2">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Frequently Asked Export Topics:
                </p>
                <div className="flex flex-col gap-1.5">
                  {QUICK_ACTIONS.map((action, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSendMessage(action)}
                      className="text-left text-xs text-slate-700 bg-white hover:bg-red-50 hover:text-[#C22B34] hover:border-red-200 border border-slate-200/90 rounded-xl px-3 py-2 transition-all cursor-pointer shadow-2xs font-medium"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Loading / Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-500 text-xs bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5 w-fit shadow-xs">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C22B34]" />
                <span className="font-medium">Export Desk is generating response...</span>
              </div>
            )}

            {/* Error Message Box */}
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Notice:</span> {errorMessage}
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-1">
                  <a
                    href={defaultEscapeWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-2 py-1 rounded transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 fill-emerald-700 stroke-none" />
                    <span>Open WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about specs, reefer, or proforma quote..."
              disabled={isLoading}
              className="flex-1 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C22B34]/30 focus:border-[#C22B34] transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              aria-label="Send Message"
              className="w-10 h-10 rounded-xl bg-[#C22B34] text-white flex items-center justify-center hover:bg-[#A61E26] disabled:opacity-40 disabled:hover:bg-[#C22B34] transition-all cursor-pointer shadow-sm shrink-0 focus:outline-none"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
