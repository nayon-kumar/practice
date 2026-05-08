export const getUsers = async () => {
  const res = await fetch("http://localhost:8000/users");
  return res.json();
};

export const getUserByID = async (userID) => {
  const res = await fetch(`http://localhost:8000/users/${userID}`);
  return res.json();
};
