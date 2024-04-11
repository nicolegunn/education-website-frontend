import React from 'react'
// import StudentDashboardSideBar from '../../common/StudentDashboardSideBar'
import SideBar from '../../common/SideBar'
import styles from './SubmitProject.module.css'

import makeProjectScreenshot from "../../assets/StudentDashboard/makeProject-screenshot.png"
import sendPhoto from "../../assets/StudentDashboard/sendPhoto.png"
import submitProjectPhoto from "../../assets/StudentDashboard/submitProject-Photo.png"
import callTeacher from "../../assets/StudentDashboard/callTeacher.png"
import DashboardContent from '../../common/DashboardContent'

export default function SubmitProject() {

  return (
    <>
      {/* <Header /> */}
      <div className={styles.SubmitProjectLayout}>
        <SideBar dashboard="student" />
        <DashboardContent>
          <div className={styles.SubmitProjectContents}>
            <div className={styles.ContentOne}>
              <div>
                <img src={makeProjectScreenshot} alt="" width="100%" />
              </div>

              <div>
                <p className={styles.SubHeading}>Submit project photo</p>
                <br/>
                <p className={styles.Text}>
                  After completing your project, take a screenshot of your
                  project and upload it here.
                </p>
              </div>

              <div className={styles.ButtonContainer}>
                <button className={styles.Button}>
                  <img src={sendPhoto} alt="" width="20%" />
                  <br />
                  Send Photo
                </button>
              </div>
            </div>

            <div className={styles.Line}></div>

            <div className={styles.ContentTwo}>
              <div>
                <img src={submitProjectPhoto} alt="" width="100%" />
              </div>

              <div>
                <p className={styles.SubHeading}>Show your teacher</p>
                <br/>
                <p className={styles.Text}>
                  If your teacher is in the same room as you, click the button
                  below to let them know you are done.
                </p>
              </div>

              <div className={styles.ButtonContainer}>
                <button className={styles.Button}>
                  <img src={callTeacher} alt="" width="20%" />
                  <br />
                  Ask Teacher for Help
                </button>
              </div>
            </div>
          </div>
        </DashboardContent>
      </div>

      {/* <Footer /> */}
    </>
  );
}