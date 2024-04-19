import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./account.module.css";
import { Button, Form, Card } from "../BootstrapComps/bootstrapComps";

export default function LogIn() {
  const { loggedIn, setLoggedIn, handleLogin } = useContext(ShopContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
        setLoggedIn(data.loggedIn);
      })
      .catch((error) => {
        console.error("Error fetching login data:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin(username, password)
      .then(() => {
        alert(`Hello ${username}! Now get to shopping!`)
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div>
      <h1>Login here</h1>
      <Button variant="outline-warning" onClick={() => window.history.back()}>
        Back
      </Button>
      {loggedIn ? (
        navigate("/")
      ) : (
        <Form onSubmit={handleSubmit} className={styles.forms}>
          <label htmlFor="username" className={styles.labels}>
            Username
          </label>
          <input
            type="text"
            id="username"
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
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            className={styles.inputs}
          />
          <Button variant="warning" type="submit" className={styles.buttons}>
            Log in
          </Button>
          <p>Don't have an account? Create one here!</p>
          <NavLink to="/create" style={{ textDecoration: "none" }}>
            <Button variant="outline-warning">Create Account</Button>
          </NavLink>
        </Form>
      )}
    </div>
  );
}
