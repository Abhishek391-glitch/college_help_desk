import { useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");

  function submit(event) {
    event.preventDefault();
    const message = value.trim();
    if (!message || disabled) {
      return;
    }
    onSend(message);
    setValue("");
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-teal-accent/40 focus:outline-none"
        placeholder="Ask about courses, fees, placements..."
        value={value}
        disabled={disabled}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="rounded-xl bg-primary px-4 text-white disabled:opacity-50"
        aria-label="Send message"
      >
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}
