import React from "react";
import AdminUsersList from "../../../features/admin/adminUsers/ui/AdminUsersList";
import styles from "./AdminUsersPage.module.css";
const AdminUsersPage = () => {
  return (
    <div className={styles.admin__users}>
      <AdminUsersList />
    </div>
  );
};

export default AdminUsersPage;
