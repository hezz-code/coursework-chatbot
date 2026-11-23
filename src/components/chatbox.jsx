import { useState, useRef, useEffect } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // Keep the newest message in view
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages([...messages, { role: "user", content: text }]);
    setInput("");
  }

  return (
    <div className="chatbox">
      <div className="chatbox-messages" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.role}`}>
            {m.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form className="chatbox-input" onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          aria-label="Message"
        />
        <button type="submit" disabled={!input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}