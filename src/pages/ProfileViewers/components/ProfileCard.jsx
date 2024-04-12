import styles from "./ProfileCard.module.css";

export default function ProfileCard({ user, cardFields }) {
  return (
    <div className={styles.Card}>
      <h1 className={styles.Title}>{user.name}</h1>

      <ul>
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
