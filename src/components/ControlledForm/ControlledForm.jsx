import React, { useState } from "react";

const ControlledForm = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 8) {
      setError("Password must be 8 character!");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
        />
        <br />
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="name"
          defaultValue={password}
          onChange={handlePassword}
        />
        <br />
        <input className="btn mt-4" type="submit" value="Submit" />
      </form>
      <p className="text-red-500 mt-5">{error}</p>
    </div>
  );
};

export default ControlledForm;
