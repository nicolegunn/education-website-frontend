import { useState, useEffect } from "react";
import styles from "./StudentProfile.module.css";
import SideBar from "../../common/SideBar";

function StudentProfiles({ port }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${port}/student`)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.App}>
      <SideBar dashboard="teacher" />
      <div className={styles.Rectangle}>
        {students.map((student, index) => (
          <div className={styles.StudentCard}>
            <h2 className={styles.StudentName}>{student.name}</h2>
            <img
              className={styles.StudentImg}
              key={index}
              src={student.profile_pic}
              alt={`Student ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentProfiles;
