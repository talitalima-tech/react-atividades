import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ background: "black", padding: "15px" }}>
      <nav>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "#fff", marginRight: "15px" }}>
          About
        </Link>

        <Link to="/contact" style={{ color: "#fff" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;