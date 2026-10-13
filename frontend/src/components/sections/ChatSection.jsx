import { useEffect, useRef, useState } from "react";
import ChatDrawer from "../chatbot/ChatDrawer";
import { sendChatMessage } from "../../services/api";

const welcome = {
  id: "welcome",
  role: "assistant",
  text: "Hi! I can help with courses, admissions, fees, and placements. Ask me anything.",
};

export default function ChatSection({ open, onOpenChange, pendingQuestion, onQuestionConsumed }) {
  const [messages, setMessages] = useState([welcome]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const lastAsked = useRef("");

  async function send(message) {
    const trimmed = message.trim();
    if (!trimmed) {
      return;
    }

    onOpenChange(true);
    setError("");
    const userMessage = { id: crypto.randomUUID(), role: "user", text: trimmed };
    setMessages((current) => [...current, userMessage]);
    setLoading(true);

    try {
      const data = await sendChatMessage(trimmed);
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: data.reply || "I found some information, but the reply was empty.",
        },
      ]);
    } catch {
      const friendly = "I couldn't reach the help desk right now. Please try again in a moment.";
      setError(friendly);
      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: "assistant", text: friendly },
      ]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!pendingQuestion || lastAsked.current === pendingQuestion) {
      return;
    }
    lastAsked.current = pendingQuestion;
    send(pendingQuestion);
    onQuestionConsumed?.();
  }, [pendingQuestion]);

  function resetChat() {
    setMessages([welcome]);
    setError("");
    setLoading(false);
  }

  return (
    <>
      <div className="fixed right-8 bottom-8 z-[70] flex flex-col items-end gap-4">
        {!open ? (
          <div className="animate-bounce rounded-lg border border-teal-100 bg-white px-4 py-2 text-sm font-medium shadow-xl">
            Ask me anything!
          </div>
        ) : null}
        <button
          type="button"
          onClick={() => onOpenChange(!open)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-accent text-white shadow-[0_20px_50px_rgba(45,212,191,0.3)] transition-transform active:scale-95"
          aria-label={open ? "Close assistant" : "Open assistant"}
        >
          <span
            className="material-symbols-outlined text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {open ? "close" : "smart_toy"}
          </span>
        </button>
      </div>
      <ChatDrawer
        open={open}
        messages={messages}
        loading={loading}
        error={error}
        onClose={() => onOpenChange(false)}
        onSend={send}
        onNewChat={resetChat}
      />
    </>
  );
}
