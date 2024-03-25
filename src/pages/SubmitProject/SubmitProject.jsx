import React from 'react'
import StudentDashboardSideBar from '../../common/StudentDashboardSideBar'
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
      <StudentDashboardSideBar />
      <DashboardContent>
      
      <div className={styles.submitProjectContents}>
      <div>
      <img src={makeProjectScreenshot} alt="" width="35%" />
      </div>

      <div>
      <img src={submitProjectPhoto} alt="" width="35%" />
      </div>

      <div>
        <button className={styles.Button}>'<img src={sendPhoto} alt="" width="20%" />Send Photo</button>
        <button className={styles.Button}><img src={callTeacher} alt="" width="20%" />Call Teacher</button>
      </div>
      </div>

      </DashboardContent>
    {/* <Footer /> */}
    </>
  )
}