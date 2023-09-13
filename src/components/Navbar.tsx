import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ position: "fixed", left: 0, top: 0 }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}
