import { useState } from "react";
import styles from "./account.module.css";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = async () => {
    try {
      const response = await fetch("http://localhost:3000/accounts", {
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
      console.log("Account created successfully!");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("There was an error creating the account:", error.message);
    }
  };

  return (
    <div className={styles.container} >
      <div className={styles.inputWrapper}>
        <label htmlFor="username" className={styles.labels}>
          Användarnamn/Epost
        </label>
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.inputs}
        />
        <label htmlFor="password" className={styles.labels}>
          Lösenord
        </label>
        <input
          type="text"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.inputs}
        />
        <button className={styles.buttons} type="button" onClick={handleCreate}>
          Skapa konto
        </button>
      </div>
    </div>
  );
}
