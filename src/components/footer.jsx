import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <img></img>
      <ul>
        <li><Link to="/">Terms of Service</Link></li>
        <li><Link to="/">Cookies</Link></li>
        <li><Link to="/">Privacy Policy</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;