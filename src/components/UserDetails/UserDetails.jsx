import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone, website } = user;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email} </p>
      <p>Phone: {phone} </p>
      <p>Website: {website} </p>
    </div>
  );
};

export default UserDetails;
