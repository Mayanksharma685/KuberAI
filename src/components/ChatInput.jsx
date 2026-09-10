import { Send } from "lucide-react";

export default function ChatInput({ value, setValue, onSend, disabled, loading }) {
  return (
    <form
      className="chat-input"
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={disabled ? "Daily message limit reached" : "Ask your agent something..."}
        disabled={disabled || loading}
        aria-label="Message your agent"
      />
      <button type="submit" disabled={disabled || loading || !value.trim()} aria-label="Send">
        <Send size={16}/>
      </button>
    </form>
  );
}