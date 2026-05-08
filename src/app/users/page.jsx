import React, { use } from "react";
import { getUsers } from "../lib/data";
import UserTable from "@/components/UserTable";
import { createUser, deleteUser } from "../lib/actions";
import AddUser from "@/components/AddUser";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <p>Total users: {users.length}</p>
      <AddUser createUserAction={createUser} />
      <UserTable users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default UsersPage;
