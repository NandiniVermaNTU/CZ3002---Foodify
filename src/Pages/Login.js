import React, { useState } from "react";
import {Link} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      {/* <h3>Sign In</h3> */}

      {/* <div className="mb-3">
          <label>Username or Email Address: </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div> */}

      <div className="login-container">
        {/* Username or Email Addess: */}
        <input
          type="email"
          className="login-textbox"
          value={email}
          onChange ={(e)=>setEmail(e.target.value)}
          placeholder="abc@email.com"
        />
      
        <input
          type="password"
          className="login-textbox"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="minimum 8 characters"
        />

        <button type="submit" className="login_btn">
          Sign In
        </button>

        <div>
          <Link to="/reset" className="forget__password">
            Forgot Password
          </Link>
        </div>

        <div>
            New to Foodify? {""}
            <Link to="/signup" className="sign_up">
            Create an Account
            </Link>{""}
        </div>

    </div>

    </div>
  );
}

export default Login;
