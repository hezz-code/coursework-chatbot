import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Queen Elizabeth II Chatbot</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/chat">Chat</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;