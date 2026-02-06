import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cars">Car</NavLink>
      <NavLink to="/admin/cars">Admin Cars</NavLink>
      <NavLink to="/admin/users">Admin Users</NavLink>
      <NavLink to="/admin/booking">Admin Booking</NavLink>
    </div>
  );
};

export default Navbar;
