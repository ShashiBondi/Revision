import React, { useState } from "react";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  function inputEmail(event) {
    setEmail(event.target.value);
  }
  function inputPassword(event) {
    setPassword(event.target.value);
  }
  return (
    <div className="login">
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
        />
      </div>
      <div>
        <button>LOGIN</button>
      </div>
    </div>
  );
}
