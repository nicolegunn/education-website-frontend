import React from 'react'
import makeprojectimage from "../../assets/StudentDashboard/makeProject-screenshot.png"
import styles from "./MakeProject.module.css"
import DashboardNavbar from '../../common/DashboardNavbar'
export default function MakeProject() {
  return (
    <>
    {/*Displays StudentDashboard Navigation bar */}
     <DashboardNavbar projectTitle='Project' subTitle='Introduction' dotMap="⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"/>
    {/*Displays Sidebar and buttons */}
        <div className={styles.layout}>
            <div className={styles.colunmn}>
                <div className={styles.sidebar}>
                    
                </div>
            </div>

    {/*Displays main content on student Dashboard */}
    <div className={styles.colunmn}>
                <div className={styles.centreArea}>
                <div className={styles.dashboard}>
            <div> {/*Displays Right side of Side bar */}
    <div className={styles.imageContainer}>
    <img className={styles.image} src={makeprojectimage}alt=""/>
    </div>
    </div> 
                </div>
            </div>
            </div>
        </div>
        
    </>
    
  )
}
