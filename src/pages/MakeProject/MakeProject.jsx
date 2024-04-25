import React from "react";
import makeprojectimage from "../../assets/StudentDashboard/makeProject-screenshot.png";
import styles from "./MakeProject.module.css";
import DashboardNavbar from "../../common/DashboardNavbar";
import SideBar from "../../common/SideBar";
import DashboardFooter from "../../common/DashboardFooter";
export default function MakeProject() {
  return (
    <>
      {/*Displays StudentDashboard Navigation bar */}
      <DashboardNavbar projectTitle="PROJECT" subTitle="Introduction" />
      {/*Displays Sidebar and buttons */}
      <div className={styles.Layout}>
        <div className={styles.Colunmn}>
          <SideBar dashboard="student" />
        </div>

        {/*Displays main content on student Dashboard */}
        <div className={styles.Colunmn}>
          <div className={styles.CentreArea}>
            <div className={styles.Dashboard}>
              <div>
                {/*Displays Right side of Side bar */}
                <div className={styles.ImageContainer}>
                  <img className={styles.Image} src={makeprojectimage} alt="" />
                </div>
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
