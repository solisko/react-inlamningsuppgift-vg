import Navigation from "./Navigation";
import styles from "../Header/header.module.css";
import Switch from "./Switch";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>YarnHub</h1>
      <Navigation />
      {/* <Switch /> */}
    </div>
  );
}
