// import NavBar from "../../common/NavBar.jsx";
// import Footer from "../../common/Footer.jsx";
// import Button from "../../common/Button.jsx";


import React from 'react'
// import TeacherDashboardSideBar from '../../common/TeacherDashboardSideBar'
import SideBar from '../../common/SideBar'
import styles from './ProjectSubmissions.module.css'
import DashboardContent from '../../common/DashboardContent'
import makeProjectScreenshot from '../../assets/StudentDashboard/makeProject-screenshot.png'


export default function ProjectSubmissions() {
  
  return (
    <>
    <div className={styles.layout}>
      <SideBar dashboard="teacher"/>
      <DashboardContent>
        <div className={styles.projectSubmissionsContents}>
        <div className={styles.contentHeader}>
          <span className={styles.contentTitle}>PROJECT SUBMISSIONS</span>
          <button className={styles.contentButtons}>Download Files</button>
          <button className={styles.contentButtons}>
            Mark as Complete Project
          </button>
        </div>

        {/* Main contents inside the scroll container */}
        <div className={styles.scrollContainer}>
          <ul className={styles.submissionList}>
            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.submittedProjectContainer}>
                <div className={styles.submittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.submittedProjectContainer}>
                <div className={styles.submittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.submittedProjectContainer}>
                <div className={styles.submittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.submittedProjectContainer}>
                <div className={styles.submittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.submittedProjectContainer}>
                <div className={styles.submittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.submittedProjectContainer}>
                <div className={styles.submittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </DashboardContent>
    </div>
    </>
  );
}
