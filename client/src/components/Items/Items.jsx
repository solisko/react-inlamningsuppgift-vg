import { useContext } from "react";
import styles from "./items.module.css";

const Items = () => {

  return (
    <div>
      <div className={styles.itemCard}>
        <img src="" alt="" />
        <h2>Namn</h2>
        <h3>Kategori: </h3>
        <p>Färger:</p>
        <ul>
            <li>Färg1</li>
            <li>Färg2</li>
        </ul>
        <p>Pris: </p>
        <section className="detailsSection">
            <table>
                <thead>
                    <tr>
                        <th>Vikt</th>
                        <th>Löplängd</th>
                        <th>Viktgrupp</th>
                        <th>Nålar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
      </div>
    </div>
  );
};
export default Items;
