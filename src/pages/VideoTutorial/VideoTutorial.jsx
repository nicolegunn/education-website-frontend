import React, { useState, useEffect } from "react";
import DashboardNavbar from "../../common/DashboardNavbar";
import DashboardFooter from "../../common/DashboardFooter";
import SideBar from "../../common/SideBar";
import styles from "./VideoTutorial.module.css";

export default function VideoTutorial() {
  // const src = "https://www.youtube.com/embed/sb-wF35TuvQ?si=nBY6Laaje2I4P-fM";
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/projects/1/video_tutorial")
      .then((response) => response.json())
      .then((result) => {
        console.log(result.video);
        setUrls(result);
      })
      .catch((err)=>console.log(err));
  }, []);

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
                  {/* <iframe>
                   width="800"
                   height="500" */}
                  {/* //----------------------------------------------- */}
                  {/* // src="https://www.youtube.com/embed/-SjuiawRMU4?si=hnkMTC3_DWBKWrmq" */}

                  {urls.map((url, index) => {
                return (
                  <iframe src={url.video}
                    width="800"
                    height="500" 
                    title="YouTube video player"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    >
                  </iframe>
                );
              })}

                  {/* //-------------------------------------------------- */}
                  {/* title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  </iframe>  */}
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
