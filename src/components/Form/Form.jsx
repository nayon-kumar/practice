import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

export default Form;
