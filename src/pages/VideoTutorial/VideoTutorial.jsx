import React from 'react'
import DashboardNavbar from '../../common/DashboardNavbar'
import styles from './VideoTutorial.module.css'
export default function VideoTutorial() {
  
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
                    <div>Video tutorial
                        
                    


 

                        
                        
                        
                        </div> 
                </div>
            </div>
            </div>
        </div>
        
    </>
    
  )
  }

