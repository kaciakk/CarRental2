import { useEffect, useState } from "react";
import { getUsers } from "../../../../entities/user/api/usersApi";

const AdminUsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();
      setUsers(response);
    }
    loadUsers();
  }, []);
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            {user.name} {user.role}
          </div>
        );
      })}
    </div>
  );
};

export default AdminUsersList;
