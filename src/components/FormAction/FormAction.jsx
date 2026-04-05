import React from "react";

const FormAction = () => {
  const handleAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };

  return (
    <div>
      <form action={handleAction}>
        <input className="input" type="text" placeholder="Name" name="name" />
        <br />
        <input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
        />
        <br />
        <input className="btn mt-4" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
