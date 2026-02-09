import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Car</NavLink>
        <NavLink to="/admin/cars">Admin Cars</NavLink>
        <NavLink to="/admin/users">Admin Users</NavLink>
        <NavLink to="/admin/booking">Admin Booking</NavLink>
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <span className={styles.logoName1}>kacia</span>
          <span className={styles.logoName2}>CAR</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
