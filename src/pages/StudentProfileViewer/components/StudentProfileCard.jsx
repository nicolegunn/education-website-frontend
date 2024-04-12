import styles from "./StudentProfileCard.module.css";
import { DateTime } from "luxon";

export default function StudentProfileCard({ student, teacher }) {
  let course;
  let dob;

  if (student.course) {
    course = student.course[0].toUpperCase() + student.course.substring(1);
  }

  if (student.date_of_birth) {
    dob = DateTime.fromISO(student.date_of_birth).toFormat("d LLLL yyyy");
  }

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
          <div className={styles.Value}>{teacher.name}</div>
        </li>
        <li className={styles.ListItem}>
          <div className={styles.Key}>Course</div>
          <div className={styles.Value}>{course}</div>
        </li>
        <li className={styles.ListItem}>
          <div className={styles.Key}>Date of Birth</div>
          <div className={styles.Value}>{dob}</div>
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
