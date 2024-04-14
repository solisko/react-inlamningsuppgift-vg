import { NavLink, useNavigate } from "react-router-dom";
import styles from "./account.module.css";
import { useState } from "react";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to create user: ${errorMessage}`);
      }
      console.log("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("There was an error creating the account:", error.message);
    }
  };

  return (
    <div className={styles.container}>
    <form onSubmit={handleCreate}>
      <div className={styles.inputWrapper}>
        <label htmlFor="username" className={styles.labels}>
          Username
        </label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.inputs}
        />
        <label htmlFor="password" className={styles.labels}>
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="6"
          className={styles.inputs}
        />
        <button className={styles.buttons} type="submit">
          Log in
        </button>
        <button>
          <NavLink style={{ textDecoration: "none" }} to="/create">
            Create Account
          </NavLink>
        </button>
      </div>
    </form>
  </div>
  );
}
