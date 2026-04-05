import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border-2 border-gray-300 mt-5 p-5 rounded-2xl">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/users/${id}`} className="btn btn-primary mt-5">
        Show Details
      </Link>
    </div>
  );
};

export default User;
