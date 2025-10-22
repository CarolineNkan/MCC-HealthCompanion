import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Your deployed API Gateway endpoint
  const API_URL = "https://4n4sx9tgwc.execute-api.us-east-1.amazonaws.com/prod/mcc";

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { role: "user", content: message };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        {
          userId: "user_001",
          message: message,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // ✅ Handle Lambda proxy JSON body safely
      const body =
        typeof response.data.body === "string"
          ? JSON.parse(response.data.body)
          : response.data;

      const aiReply = {
        role: "assistant",
        content: body.ai_message || body.reply || "MCC is thinking...",
      };

      // 🕐 Simulate short delay for realism
      setTimeout(() => {
        setChat((prev) => [...prev, aiReply]);
        setLoading(false);
      }, 800);
    } catch (err) {
      console.error("❌ API Error:", err);
      setChat((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ API error. Try again later." },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>
        MCC 💧 <span className="title-text">Health Companion</span>
      </h1>

      <div className="chat-box">
        {chat.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            <b>{msg.role === "user" ? "You:" : "MCC:"}</b> {msg.content}
          </div>
        ))}

        {loading && (
          <div className="chat-message assistant typing">
            <b>MCC:</b> <span className="dots">● ● ●</span>
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
