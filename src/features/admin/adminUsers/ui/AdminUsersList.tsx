import { useEffect, useState } from "react";
import { getUsers } from "../../../../entities/user/api/usersApi";
import AdminUsersTile from "./AdminUsersTile";
import styles from "./AdminUsersList.module.css";
const AdminUsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();
      setUsers(response);
    }
    loadUsers();
  }, []);

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
