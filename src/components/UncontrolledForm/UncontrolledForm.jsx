import React, { useRef } from "react";

const UncontrolledForm = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          ref={emailRef}
        />
        <br />
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="name"
          ref={passRef}
        />
        <br />
        <input className="btn mt-4" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontrolledForm;
