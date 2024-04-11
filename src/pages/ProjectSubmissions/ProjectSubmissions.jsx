// import NavBar from "../../common/NavBar.jsx";
// import Footer from "../../common/Footer.jsx";
// import Button from "../../common/Button.jsx";


import React from 'react'
// import axios from 
import SideBar from '../../common/SideBar'
import styles from './ProjectSubmissions.module.css'
import DashboardContent from '../../common/DashboardContent'
import makeProjectScreenshot from '../../assets/StudentDashboard/makeProject-screenshot.png'


export default function ProjectSubmissions() {
  
  return (
    <>
    <div className={styles.ProjectSubmissionsLayout}>
      <SideBar dashboard="teacher"/>
      <DashboardContent>
        <div className={styles.ProjectSubmissionsContents}>
        <div className={styles.ContentHeader}>
          <span className={styles.ContentTitle}>PROJECT SUBMISSIONS</span>
          <button className={styles.ContentButtons}>Download Files</button>
          <button className={styles.ContentButtons}>
            Mark as Complete Project
          </button>
        </div>

        {/* Main contents inside the scroll container */}
        <div className={styles.ScrollContainer}>
          <ul className={styles.SubmissionList}>
            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.SubmittedProjectContainer}>
                <div className={styles.SubmittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.SubmittedProjectContainer}>
                <div className={styles.SubmittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.SubmittedProjectContainer}>
                <div className={styles.SubmittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.SubmittedProjectContainer}>
                <div className={styles.SubmittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.SubmittedProjectContainer}>
                <div className={styles.SubmittedProjectInfo}>
                  <img src={makeProjectScreenshot} alt="" width="20%" />
                </div>
              </div>
            </li>

            <li>
              <input type="checkbox" id="checkbox" />
              <div className={styles.SubmittedProjectContainer}>
                <div className={styles.SubmittedProjectInfo}>
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
