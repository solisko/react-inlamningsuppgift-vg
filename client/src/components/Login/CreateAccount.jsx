import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./account.module.css";
import { Button } from "../BootstrapComps/bootstrapComps";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to create user: ${errorMessage}`);
      }
      console.log("Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.error("There was an error creating the account:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create account</h1>
      <Button variant="outline-warning" onClick={() => window.history.back()}>
        Back
      </Button>
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
          <label htmlFor="email" className={styles.labels}>
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputs}
          />
          <label htmlFor="password" className={styles.labels}>
            Password
          </label>
          <input
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            className={styles.inputs}
          />
          <Button variant="warning" className={styles.buttons} type="submit">
            Create account
          </Button>
          <p>Already have an account? Login here!</p>
          <Button variant="outline-warning" href="/login">
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
}
