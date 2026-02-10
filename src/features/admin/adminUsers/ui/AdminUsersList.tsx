import AdminUsersTile from "./AdminUsersTile";
import styles from "./AdminUsersList.module.css";
const AdminUsersList = ({ users }) => {
  return (
    <div className={styles.list}>
      {users.map((user) => {
        return (
          <AdminUsersTile
            key={user.id}
            avatar={user.avatar}
            id={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
          />
        );
      })}
    </div>
  );
};

export default AdminUsersList;
