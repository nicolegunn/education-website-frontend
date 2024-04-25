import React, { useState, useEffect } from "react";
import DashboardNavbar from "../../common/DashboardNavbar";
import DashboardFooter from "../../common/DashboardFooter";
import SideBar from "../../common/SideBar";
import styles from "./VideoTutorial.module.css";

export default function VideoTutorial({ port }) {
  {/*Fetching data from backend */}
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:${port}/projects/1/video_tutorial`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result[0].video);
        setUrls(result[0].video);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/*Displays StudentDashboard Navigation bar */}
      <DashboardNavbar projectTitle="PROJECT" subTitle="Introduction" />
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
                <iframe
                  src={urls}
                  width="800"
                  height="500"
                  title="YouTube video player"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/*Displays Footer */}
        <DashboardFooter />
      </div>
    </>
  );
}
