import { NavLink } from "react-router-dom";
import styles from "./account.module.css";

export default function LogIn() {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <label htmlFor="username" className={styles.labels}>
          Username
        </label>
        <input type="text" placeholder="Username" className={styles.inputs} />
        <label htmlFor="password" className={styles.labels}>
          Password
        </label>
        <input type="text" placeholder="Password" className={styles.inputs} />
        <button className={styles.buttons} type="button">
          Log in
        </button>
        <button>
          <NavLink style={{ textDecoration: "none" }} to="/create">
            Create Account
          </NavLink>
        </button>
      </div>
    </div>
  );
}
