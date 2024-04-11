import styles from "./account.module.css";

export default function LogIn() {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <label htmlFor="username" className={styles.labels}>
          Användarnamn/Epost
        </label>
        <input
          type="text"
          placeholder="Användarnamn"
          className={styles.inputs}
        />
        <label htmlFor="password" className={styles.labels}>
          Lösenord
        </label>
        <input type="text" placeholder="Lösenord" className={styles.inputs} />
        <button className={styles.buttons} type="button">
          Logga in
        </button>
      </div>
    </div>
  );
}
