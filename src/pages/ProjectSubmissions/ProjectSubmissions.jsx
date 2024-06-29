import { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig"; // Import the Axios instance
import { DateTime } from "luxon";
import { useBackendUrl } from "../../BackendUrlContext.jsx";

import SideBar from "../../common/SideBar";
import DashboardNavbar from "../../common/DashboardNavbar";
import DashboardFooter from "../../common/DashboardFooter";
import DashboardContent from "../../common/DashboardContent";
import EnlargePhoto from "./components/EnlargePhoto";

import styles from "./ProjectSubmissions.module.css";

export default function ProjectSubmissions() {
  const backendUrl = useBackendUrl();
  const [userData, setUserData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`${backendUrl}/project-submissions`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMarkComplete = () => {
    //Filter out selected entries
    const updatedUserData = userData.filter(
      (user) => !selectedIds.includes(user.id)
    );
    // Update userData state
    setUserData(updatedUserData);
    //Clear selectedIds
    setSelectedIds([]);
  };

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevState) => {
      // Check if the clicked checkbox is already selected
      const isSelected = prevState.includes(id);

      // Toggle the selected state based on the previous state
      if (isSelected) {
        return prevState.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  // Modal for 'Enlarge Photo' function
  const openImageModal = (imageSrc) => {
    console.log("image");
    setSelectedImage(imageSrc);
    setOpenModal(true);
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
                <button
                  className={styles.ContentButtons}
                  onClick={handleMarkComplete}
                >
                  Mark as Complete Project
                </button>
              </div>
            </div>

            {/* Main contents inside the scroll container */}
            <div className={styles.ScrollContainer}>
              <div className={styles.SubmittedProjectContainer}>
                {/* Mapping the submissions */}
                {userData.map((user, index) => {
                  return (
                    <div key={index} className={styles.OuterContainer}>
                      <div className={styles.CheckboxContainer}>
                        <input
                          type="checkbox"
                          id={`checkbox-${user.id}-${index}`}
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
                            src={user.submission}
                            alt="project submission"
                            className={styles.ScreenshotImg}
                            onClick={() => openImageModal(user.submission)}
                          />

                          <button
                            className={styles.EnlargeButton}
                            onClick={() => {
                              setOpenModal(index);
                            }}
                          >
                            ENLARGE PHOTO
                          </button>
                          {openModal === index && (
                            <EnlargePhoto
                              closeModal={() => setOpenModal(false)}
                              image={user.submission}
                            />
                          )}
                        </div>

                        <div className={styles.DateTimeContainer}>
                          <p>
                            {DateTime.fromISO(
                              user.date_submitted
                            ).toLocaleString({
                              weekday: "short",
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                          <p>
                            {DateTime.fromISO(
                              user.date_submitted
                            ).toLocaleString({
                              hour: "numeric",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </p>
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

      <DashboardFooter />
    </>
  );
}
