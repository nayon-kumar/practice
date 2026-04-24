export const createPost = async (formData) => {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const bio = formData.get("bio");
  const myObj = {
    name,
    email,
    bio,
  };
  console.log(myObj);
};
