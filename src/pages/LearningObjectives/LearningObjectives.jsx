import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { useBackendUrl } from "../../BackendUrlContext.jsx";
import DashboardNavbar from "../../common/DashboardNavbar";
import SideBar from "../../common/SideBar";
import DashboardFooter from "../../common/DashboardFooter";
import styles from "./LearningObjectives.module.css";

export default function LearningObjectives() {
  const backendUrl = useBackendUrl();

  const [projectObjectives, setProjectObjectives] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/projects/1/learning_objective`)
      .then((response) => response.json())
      .then((result) => {
        setProjectObjectives(result[0].learning_objective);
      });
  }, []);

  return (
    <>
      {/*Displays StudentDashboard Navigation bar */}
      <DashboardNavbar projectTitle="PROJECT" subTitle="Introduction" />
      {/*Displays Sidebar and buttons */}
      <div className={styles.Layout}>
        <div className={styles.Colunmn}>
          <SideBar dashboard="student" />
        </div>

        {/*Displays main content on student Dashboard */}
        <div className={styles.Colunmn}>
          <div className={styles.CentreArea}>
            <div className={styles.Dashboard}>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(projectObjectives),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/*Displays Footer */}
        <DashboardFooter />
      </div>
    </>
  );
}
