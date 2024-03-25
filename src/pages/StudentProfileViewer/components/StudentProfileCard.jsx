import styles from "./StudentProfileCard.module.css";

export default function StudentProfileCard({ student }) {
  return (
    <div className={styles.Card}>
      <h1 className={styles.Title}>{student.name}</h1>
      <ul>
        <li className={styles.ListItem}>
          <div className={styles.Key}>School</div>
          <div className={styles.Value}>{student.school}</div>
        </li>
        <li className={styles.ListItem}>
          <div className={styles.Key}>Teacher</div>
          <div className={styles.Value}>{student.teacher}</div>
        </li>
        <li className={styles.ListItem}>
          <div className={styles.Key}>Course</div>
          <div className={styles.Value}>{student.course}</div>
        </li>
        <li className={styles.ListItem}>
          <div className={styles.Key}>Date of Birth</div>
          <div className={styles.Value}>{student.date_of_birth}</div>
        </li>
        <li className={styles.ListItem}>
          <div className={styles.Key}>Contact No</div>
          <div className={styles.Value}>{student.contact_number}</div>
        </li>
        <li className={styles.ListItem}>
          <div className={styles.Key}>Email Address</div>
          <div className={styles.Value}>{student.email}</div>
        </li>
      </ul>
    </div>
  );
}
