import { useContext } from "react";
import { UserContext } from "../../../context";
import styles from "./ProfileCard.module.css";

export default function ProfileCard({ cardFields }) {
  return (
    <div className={styles.Card}>
      <h1 className={styles.Title}>{useContext(UserContext).name}</h1>

      <ul className={styles.List}>
        {cardFields.map((field, index) => (
          <li key={index} className={styles.ListItem}>
            <div className={styles.Key}>{field.label}</div>
            <div className={styles.Value}>{field.value}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
