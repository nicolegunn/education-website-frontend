import React from "react";
import { useState } from "react";
import axios from "axios";
import { PickerOverlay } from "filestack-react-18";

import SideBar from '../../common/SideBar'
import styles from './SubmitProject.module.css'

import DashboardNavbar from '../../common/DashboardNavbar'
import DashboardFooter from '../../common/DashboardFooter'

import makeProjectScreenshot from "../../assets/StudentDashboard/makeProject-screenshot.png"
import sendPhoto from "../../assets/StudentDashboard/sendPhoto.png"
import submitProjectPhoto from "../../assets/StudentDashboard/submitProject-Photo.png"
import callTeacher from "../../assets/StudentDashboard/callTeacher.png"
import DashboardContent from '../../common/DashboardContent'

export default function SubmitProject({port}) {

  // const FileStack = () => {
  //   const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  //   const [imageUrl, setImageUrl] = useState();
  
  //   //About using environment variables in react => https://create-react-app.dev/docs/adding-custom-environment-variables/
  //   const FILESTACK_API_KEY = process.env.REACT_APP_FILESTACK_API_KEY
  
  //   const handleVisible = () => {
  //     setIsPickerOverlayVisible(!isPickerOverlayVisible);
  //   };  

  return (
    <>
      {/* Header */}
      <DashboardNavbar />

      {/* Side Bar + Main Contents */}
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
                  <img src={sendPhoto} alt="submit project image" width="20%" />
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

      {/* Footer */}
      <DashboardFooter />
    </>
  );
}