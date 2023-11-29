import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  function inputEmail(event) {
    setEmail(event.target.value);
  }
  function inputPassword(event) {
    setPassword(event.target.value);
  }
  function inputName(event) {
    setName(event.target.value);
  }

  return (
    <div className="signup">
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inputName}
          value={name}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your emailId"
          onChange={inputEmail}
          value={Email}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={inputPassword}
          value={Password}
        />
      </div>
      <div>
        <button>SIGNUP</button>
      </div>
    </div>
  );
}
