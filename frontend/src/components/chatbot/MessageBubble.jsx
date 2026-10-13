export default function MessageBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-wrap ${
          isUser
            ? "rounded-br-sm bg-primary text-white"
            : "rounded-bl-sm bg-slate-100 text-slate-800"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
