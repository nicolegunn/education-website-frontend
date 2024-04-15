import React from "react";
import DashboardNavbar from "../../common/DashboardNavbar";
import DashboardFooter from "../../common/DashboardFooter";
import SideBar from "../../common/SideBar";
import styles from "./VideoTutorial.module.css";
export default function VideoTutorial() {
  const src = "https://www.youtube.com/embed/sb-wF35TuvQ?si=nBY6Laaje2I4P-fM";
  return (
    <>
      {/*Displays StudentDashboard Navigation bar */}
      <DashboardNavbar projectTitle="Project" subTitle="Introduction" />
      {/*Displays Sidebar and buttons */}

      <div className={styles.Layout}>
        <div className={styles.Colunmn}>
          {/* <div className={styles.Sidebar}></div> */}
          <SideBar dashboard="student" />
        </div>

        {/*Displays main content on student Dashboard */}
        <div className={styles.Colunmn}>
          <div className={styles.CentreArea}>
            <div className={styles.Dashboard}>
              <div className={styles.VideoContainer}>
                <div className={styles.Video}>
                  <iframe
                   width="800"
                   height="500"
                    src="https://www.youtube.com/embed/-SjuiawRMU4?si=hnkMTC3_DWBKWrmq"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </>
  );
}
