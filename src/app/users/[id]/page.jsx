import { getUserByID } from "@/app/lib/data";
import React from "react";

const UserDetails = async ({ params }) => {
  const { id } = await params;
  const user = await getUserByID(id);
  return (
    <div>
      <p>User details page</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
