import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Queen Elizabeth II Chatbot</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/information">Information</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/accessibility">Accessibility</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;