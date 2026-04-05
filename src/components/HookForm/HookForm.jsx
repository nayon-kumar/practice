import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnchange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          name="name"
          onChange={nameOnchange}
          defaultValue={name}
        />
        <br />
        <input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          onChange={emailOnChange}
          defaultValue={email}
        />
        <br />
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={passwordOnChange}
          defaultValue={password}
        />
        <br />
        <input className="btn mt-4" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
