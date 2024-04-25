import React from "react";
import styles from "./LearningObjectives.module.css";
import DashboardNavbar from "../../common/DashboardNavbar";
import SideBar from "../../common/SideBar";
import DashboardFooter from "../../common/DashboardFooter";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

export default function LearningObjectives({ port }) {
  {/*Fetching data from backend */}
  const [projectObjectives, setProjectObjectives] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${port}/projects/1/learning_objective`)
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

