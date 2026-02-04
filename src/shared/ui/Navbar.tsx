import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cars">Car</NavLink>
    </div>
  );
};

export default Navbar;
