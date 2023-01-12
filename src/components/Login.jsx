import React, { useState } from "react";
import { previousUser } from "../api/Auth";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    return (
        <div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            console.log(password, username);
            const token = await previousUser(username, password);
            setToken(token);
            localStorage.setItem("token", token);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label htmlFor="username">Enter Username: </label>
        <input
          value={username}
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password :</label>
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </div>
    )
}

export default Login;
