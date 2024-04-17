import { NavLink, useNavigate } from "react-router-dom";
import styles from "./account.module.css";
import { useEffect, useState } from "react";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
        navigate("/profile", { state: { username } });
      } else {
        const errorMessage = await response.json();
        if (errorMessage.error === "Invalid username.") {
          alert("Invalid username. Please try again.");
        } else if (errorMessage.error === "Incorrect password.") {
          alert("Incorrect password. Please try again.");
        } else {
          throw new Error("Failed to log in.");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/login", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching login data:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin}>
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
