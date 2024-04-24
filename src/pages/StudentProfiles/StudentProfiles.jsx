import { useState, useEffect } from "react";
import styles from "./StudentProfile.module.css";
import SideBar from "../../common/SideBar";
import Footer from "../../common/DashboardFooter";
import TeacherDashboardNavbar from "../../common/TeacherDashboardNavbar";

function StudentProfiles({ port }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${port}/students`)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <TeacherDashboardNavbar />
      <div className={styles.App}>
        <SideBar dashboard="teacher" />
        <div className={styles.Rectangle}>
          {students.map((student, index) => (
            <div className={styles.StudentCard} key={index} >
              <img
                className={styles.StudentImg}
                src={student.profile_pic}
                alt={`Student ${index + 1}`}
              />
              <h2 className={styles.StudentName}>{student.name}</h2>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default StudentProfiles;
