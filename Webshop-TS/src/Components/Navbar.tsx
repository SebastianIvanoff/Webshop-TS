import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"} className="title-link">
        <h1 className="title">Fruits-TS</h1>
      </Link>
      <Link to={"/cart"} className="title-link">
        <h1 className="title">Cart</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
