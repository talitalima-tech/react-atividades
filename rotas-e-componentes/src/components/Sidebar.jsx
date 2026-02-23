import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "200px",
        background: "#f4f4f4",
        padding: "20px",
        minHeight: "80vh"
      }}
    >
      <h3>Menu Lateral</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/user/1">Usuário 1</Link>
        </li>

        <li>
          <Link to="/user/2">Usuário 2</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;