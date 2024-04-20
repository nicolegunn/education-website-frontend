import { useState, useEffect } from "react";
import styles from "./StudentProfile.module.css";
import SideBar from "../../common/SideBar";
import Footer from "../../common/DashboardFooter";
import TeacherDashboardNavbar from "../../common/TeacherDashboardNavbar";

function StudentProfiles({ port }) {
  const [students, setStudents] = useState([]);

<<<<<<< HEAD
function StudentProfiles() {
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:4000/student')
        .then((response) => response.json())
        .then((data) => {
          setStudents(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
    <>
    <TeacherDashboardNavbar />
      <div className={styles.App}>
        <SideBar dashboard="teacher" />
        <div className={styles.Rectangle}>
          {students.map((student, index) => (
            <div className={styles.StudentCard}>
            <img className={styles.StudentImg} key={index} src={student.profile_pic} alt={`Student ${index + 1}`} />
            <h2 className={styles.StudentName}>{student.name}</h2>
            </div>
          ))}
          
        </div>
        <Footer />
      </div>
    </>
    );
  };
  
  
=======
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
>>>>>>> 2fbdeb727daed8ddb31cfcfaa880b33ca33fa88f

export default StudentProfiles;
