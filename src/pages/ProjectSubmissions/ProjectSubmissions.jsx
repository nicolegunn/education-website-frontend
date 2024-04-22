import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { DateTime } from 'luxon';

// import axios from
import SideBar from "../../common/SideBar";
import DashboardNavbar from "../../common/DashboardNavbar";
import DashboardFooter from "../../common/DashboardFooter";

import styles from './ProjectSubmissions.module.css'
import DashboardContent from '../../common/DashboardContent'
import makeProjectScreenshot from '../../assets/StudentDashboard/makeProject-screenshot.png'
import EnlargePhoto from './components/EnlargePhoto'

export default function ProjectSubmissions({ port }) {
  const [userData, setUserData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    axios
      .get(`http://localhost:${port}/project-submissions`)
      .then((res) => {
        console.log(res.data)
        setUserData(res.data);
      })
      .catch((err) => console.log(err));

  }, []);

  const handleMarkComplete = () => {
    //Filter out selected entries
    const updatedUserData = userData.filter((user) => !selectedIds.includes(user.id));
    // Update userData state
    setUserData(updatedUserData);
    //Clear selectedIds
    setSelectedIds([])
  }

  const handleCheckboxChange = (id) => {
    // check if the clicked checkbox is already selected
    const isSelected = selectedIds.includes(id);

    if (isSelected) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

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
                <button className={styles.ContentButtons} onClick={handleMarkComplete}>
                  Mark as Complete Project
                </button>
              </div>
            </div>

            {/* Main contents inside the scroll container */}
            <div className={styles.ScrollContainer}>
              <div className={styles.SubmittedProjectContainer}>
                  {userData.map((user, index) => {
                    return (
                      <div key={index} className={styles.OuterContainer}>
                        <div className={styles.CheckboxContainer}>
                          <input
                            type="checkbox"
                            id={`checkbox-${user.id}`}
                            className={styles.Checkbox}
                            onChange={() => handleCheckboxChange(user.id)}
                            checked={selectedIds.includes(user.id)}
                          />
                        </div>

                        <div className={styles.CardContainer}>
                          <img
                            src={user.profile_pic}
                            alt="profile picture"
                            className={styles.ProfileImg}
                          />

                          <div className={styles.ContentContainer}>
                          <h5> {user.name} submitted a project.</h5>

                          <img
                            src={makeProjectScreenshot}
                            alt="project submission"
                            className={styles.ScreenshotImg}
                          />

                          <button
                            className={styles.EnlargeButton}
                            onClick={() => {
                              setOpenModal(true);
                            }}
                          >
                            ENLARGE PHOTO
                          </button>
                          {openModal && (
                            <EnlargePhoto closeModal={setOpenModal} />
                            )}
                            </div>

                          {/* <p> {user.date_submitted} </p> */}
                          {/* <p>{DateTime.fromISO(user.date_submitted).toLocaleString(DateTime.DATE_MED)}</p> */}
                          <div className={styles.DateTimeContainer}>
                          <p>{DateTime.fromISO(user.date_submitted).toLocaleString({ weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                          <p>{DateTime.fromISO(user.date_submitted).toLocaleString({ hour: 'numeric', minute: '2-digit', hour12: true })}</p>
                          </div>

                        </div>
                      </div>
                    );
                  })}
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
