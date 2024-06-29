import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBackendUrl } from "../../BackendUrlContext.jsx";

import SideBar from "../../common/SideBar";
import Footer from "../../common/DashboardFooter";
import TeacherDashboardNavbar from "../../common/TeacherDashboardNavbar";

import styles from "./StudentProfile.module.css";

function StudentProfiles() {
  const backendUrl = useBackendUrl();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/students`)
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
        {/*creating div to map through data to populate the student cards */}
        <div className={styles.Rectangle}>
          {students.map((student, index) => (
            <Link
              to="/student-profile-viewer"
              style={{ textDecoration: "none" }}
              key={`studentCard-${index + 1}`}
            >
              <div className={styles.StudentCard}>
                <img
                  className={styles.StudentImg}
                  src={student.profile_pic}
                  alt={student.name}
                />
                <h2 className={styles.StudentName}>{student.name}</h2>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default StudentProfiles;
