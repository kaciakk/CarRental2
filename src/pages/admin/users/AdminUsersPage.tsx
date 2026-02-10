import React, { useEffect, useState } from "react";
import AdminUsersList from "../../../features/admin/adminUsers/ui/AdminUsersList";
import styles from "./AdminUsersPage.module.css";
import { getUsers } from "../../../entities/user/api/usersApi";
import Input from "../../../shared/ui/Input/Input";
import type { User } from "../../../entities/user/api/model/userTypes";
const AdminUsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();
      setUsers(response);
    }
    loadUsers();
  }, []);

  console.log(users);
  const filterUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filterUsers);
  return (
    <>
      <section className={styles.admin__input}>
        <Input
          placeholder={"Search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <div className={styles.admin__users}>
        <AdminUsersList users={filterUsers} />
      </div>
    </>
  );
};

export default AdminUsersPage;
