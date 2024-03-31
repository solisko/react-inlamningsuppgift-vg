import styles from "../Footer/footer.module.css"


export default function Footer() {
  return (
    <div className={styles.footerContainer} >
        <span>Adress: Ingenstans 8, 987 65 Järbo </span>
        <span>Kontakt: 0765 74 83 </span>
        <span>Trustpilot</span>
    </div>
  )
}