import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  return (
    <div>
      <p>Users 2</p>
    </div>
  );
};

export default Users2;
