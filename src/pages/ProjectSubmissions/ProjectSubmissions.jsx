import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context";

// import axios from
import SideBar from "../../common/SideBar";
import DashboardNavbar from "../../common/DashboardNavbar";
import DashboardFooter from "../../common/DashboardFooter";

import styles from "./ProjectSubmissions.module.css";
import DashboardContent from "../../common/DashboardContent";
import makeProjectScreenshot from "../../assets/StudentDashboard/makeProject-screenshot.png";

export default function ProjectSubmissions({ port }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${port}/project-submissions`)
      .then((res) => {
        console.log(res.data)
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
      {/* Header */}
      <DashboardNavbar />

      <div className={styles.ProjectSubmissionsLayout}>
        <SideBar dashboard="teacher" />
        <DashboardContent>
          <div className={styles.ProjectSubmissionsContents}>
            <div className={styles.ContentHeader}>
              <div className={styles.ContentTitle}>
                <span className={styles.ContentTitleText}>
                  PROJECT SUBMISSIONS
                </span>
              </div>

              <div className={styles.ContentButtonsContainer}>
                <button className={styles.ContentButtons}>
                  Download Files
                </button>
                <button className={styles.ContentButtons}>
                  Mark as Complete Project
                </button>
              </div>
            </div>

            {/* Main contents inside the scroll container */}
            <div className={styles.ScrollContainer}>
              <ul className={styles.SubmissionList}>
                <li>
                  <input type="checkbox" id="checkbox" />

                  <div className={styles.SubmittedProjectContainer}>
                    <div className={styles.SubmittedProjectInfo}>
                      {userData.map((user, index) => {
                        return (
                          <div key={index}>
                            <img
                              src={user.profile_pic}
                              alt="profile picture"
                              style={{ borderRadius: "50%" }}
                            />
                            <h5> {user.name} submitted a project.</h5>
                            <img
                              src={user.submission}
                              alt="project submission"
                              style={{ borderRadius: "20%" }}
                            />
                            <button className={styles.EnlargeButton}>
                              ENLARGE PHOTO
                            </button>
                            <p> {user.date_submitted} </p>
                          </div>
                        );
                      })}
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

      {/* Footer */}
      <DashboardFooter />
    </>
  );
}
