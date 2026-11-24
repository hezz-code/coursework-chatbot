import ChatBox from "../components/chatbox.jsx";
import "./chatbot.css";

function Chat() {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px" }}>
      <h2>Chat with the Queen Elizabeth II</h2>
      <ChatBox />
    </section>
  );
}

export default Chat;