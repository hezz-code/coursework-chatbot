import ChatBox from "../components/ChatBox";
import "./chatbot.css";

function Chat() {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px" }}>
      <h2>Chat with the Chatbot</h2>
      <ChatBox />
    </section>
  );
}

export default Chat;