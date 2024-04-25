import React from "react";
import { useState } from "react";
import axios from "axios";
// import { PickerOverlay } from "filestack-react-18";

import SideBar from '../../common/SideBar'
import styles from './SubmitProject.module.css'
import FileStack from './components/FileStack.jsx'

import DashboardNavbar from '../../common/DashboardNavbar'
import DashboardFooter from '../../common/DashboardFooter'

import makeProjectScreenshot from "../../assets/StudentDashboard/makeProject-screenshot.png"
import sendPhoto from "../../assets/StudentDashboard/sendPhoto.png"
import submitProjectPhoto from "../../assets/StudentDashboard/submitProject-Photo.png"
import callTeacher from "../../assets/StudentDashboard/callTeacher.png"
import DashboardContent from '../../common/DashboardContent'

export default function SubmitProject({ port }) {

  // const FileStack = () => {
  //   const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  //   const [imageUrl, setImageUrl] = useState();
  
  //   const FILESTACK_API_KEY = process.env.REACT_APP_FILESTACK_API_KEY
  
  //   const handleVisible = () => {
  //     setIsPickerOverlayVisible(!isPickerOverlayVisible);
  //   };
  // }

  //state for storing the image URL
  const [imageUrl, setImageUrl] = useState(null);

//   const [isSubmitted, setIsSubmitted] = useState(false);
    
//   useEffect(() => {
//     if (isSubmitted) {
//       fetch('/submit-project', {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({})
//       })
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => console.log(err));
//     }
// }, [isSubmitted]);

//   const handleSubmit = () => {
//     setIsSubmitted(true);
//   };

const handleSubmit = () => {
  fetch('/submit-project', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error('Error:', err);
    });
};
  
  return (
    <>
      {/* Header */}
      <DashboardNavbar projectTitle="PROJECT" subTitle="Introduction" />

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
                  <FileStack setImageUrl={setImageUrl} />
                  {/* <img src={sendPhoto} alt="submit project image" width="20%" onClick={handleSubmit} />
                  <br />
                  Send Photo */}
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