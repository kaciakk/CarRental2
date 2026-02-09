import Button from "../../../../shared/ui/Button/Button";
import styles from "./AdminUsersTile.module.css";
const AdminUsersTile = ({ avatar, id, name, email, role }) => {
  return (
    <div className={styles.user}>
      <div className={styles.user__image}>
        <img src={avatar} />
      </div>

      <div>
        <h4>ID: {id}</h4>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>Role: {role}</h4>
        <h4>Bookings: 0</h4>
      </div>
      <Button style={{ height: "3rem" }}>More</Button>
    </div>
  );
};

export default AdminUsersTile;
