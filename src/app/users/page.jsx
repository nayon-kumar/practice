import React from "react";

const getUsers = async () => {
  const res = await fetch("http://localhost:8000/users");
  return res.json();
};

const UsersPage = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <p>Total users: {users.length}</p>
      {users.map((user) => (
        <div className="border-2 rounded-xl p-5 m-5" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
