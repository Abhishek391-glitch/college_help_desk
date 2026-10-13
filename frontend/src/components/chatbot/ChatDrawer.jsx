import { useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

const quickLinks = [
  "What is the placement package?",
  "What are the admission requirements?",
  "Which courses do you offer?",
];

export default function ChatDrawer({
  open,
  messages,
  loading,
  error,
  onClose,
  onSend,
  onNewChat,
}) {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  return (
    <aside
      className={`fixed top-0 right-0 z-[60] flex h-full w-full max-w-80 flex-col bg-white shadow-2xl transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!open}
    >
      <div className="flex items-center gap-4 border-b border-slate-100 px-4 py-6">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-surface-container">
          <div className="flex h-full w-full items-center justify-center bg-teal-50 text-teal-accent">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              smart_toy
            </span>
          </div>
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-slate-900">College Help Desk</h5>
          <p className="text-caption text-slate-500">Knowledgeable & Approachable</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close chat" className="text-slate-500">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <nav className="space-y-2 px-4 py-3">
        <div className="flex items-center gap-3 border-r-4 border-teal-500 bg-teal-50 p-3 text-teal-700">
          <span className="material-symbols-outlined">smart_toy</span>
          Assistant
        </div>
        <div className="flex items-center gap-3 p-3 text-slate-500">
          <span className="material-symbols-outlined">bolt</span>
          Quick Links
        </div>
      </nav>

      <div className="flex flex-wrap gap-2 px-4 pb-3">
        {quickLinks.map((link) => (
          <button
            key={link}
            type="button"
            onClick={() => onSend(link)}
            className="rounded-full border border-slate-200 px-3 py-1 text-left text-xs text-slate-600 hover:bg-slate-50"
          >
            {link}
          </button>
        ))}
      </div>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-2">
        {messages.map((message) => (
          <MessageBubble key={message.id} role={message.role} text={message.text} />
        ))}
        {loading ? <MessageBubble role="assistant" text="Looking that up..." /> : null}
        {error ? (
          <p className="rounded-lg bg-error-container px-3 py-2 text-sm text-error">{error}</p>
        ) : null}
      </div>

      <div className="space-y-3 border-t border-slate-100 p-4">
        <ChatInput onSend={onSend} disabled={loading} />
        <button
          type="button"
          onClick={onNewChat}
          className="w-full rounded-xl bg-primary py-4 text-label-bold font-semibold text-on-primary shadow-lg"
        >
          Start New Chat
        </button>
      </div>
    </aside>
  );
}
