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
          <div className={styles.submitProjectContents}>
            <div className={styles.contentOne}>
              <div>
                <img src={makeProjectScreenshot} alt="" width="100%" />
              </div>

              <div>
                <p className={styles.subHeading}>Submit project photo</p>
                <br/>
                <p className={styles.text}>
                  After completing your project, take a screenshot of your
                  project and upload it here.
                </p>
              </div>

              <div className={styles.buttonContainer}>
                <button className={styles.Button}>
                  <img src={sendPhoto} alt="" width="20%" />
                  <br />
                  Send Photo
                </button>
              </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.contentTwo}>
              <div>
                <img src={submitProjectPhoto} alt="" width="100%" />
              </div>

              <div>
                <p className={styles.subHeading}>Show your teacher</p>
                <br/>
                <p className={styles.text}>
                  If your teacher is in the same room as you, click the button
                  below to let them know you are done.
                </p>
              </div>

              <div className={styles.buttonContainer}>
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