import { useState } from "react";

import SideBar from "../../common/SideBar";
import DashboardNavbar from "../../common/DashboardNavbar";
import DashboardFooter from "../../common/DashboardFooter";
import DashboardContent from "../../common/DashboardContent";
import FileStack from "./components/FileStack.jsx";

import makeProjectScreenshot from "../../assets/StudentDashboard/makeProject-screenshot.png";
import submitProjectPhoto from "../../assets/StudentDashboard/submitProject-Photo.png";
import callTeacher from "../../assets/StudentDashboard/callTeacher.png";

import styles from "./SubmitProject.module.css";

export default function SubmitProject() {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <>
      <DashboardNavbar projectTitle="PROJECT" subTitle="Introduction" />
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
                <br />
                <p className={styles.Text}>
                  After completing your project, take a screenshot of your
                  project and upload it here.
                </p>
              </div>

              <div className={styles.ButtonContainer}>
                <button className={styles.Button}>
                  <FileStack setImageUrl={setImageUrl} />
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
                <br />
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
      <DashboardFooter />
    </>
  );
}
