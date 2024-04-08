// THIS FILE IS NOT USED AND WILL BE REMOVED //

import React, { useState } from 'react'
import styles from './TeacherDashboardSideBar.module.css'
import DashboardContent from './DashboardContent';

import progressTracker from "../assets/TeacherDashboard/progressTracker.png"
import studentProfiles from "../assets/TeacherDashboard/studentProfiles.png"
import helpRequests from "../assets/TeacherDashboard/helpRequests.png"
import projectSubmissions from "../assets/TeacherDashboard/projectSubmissions.png"
import projectLibrary from "../assets/TeacherDashboard/projectLibrary.png"

import arrowLeft from "../assets/arrowLeft.png"
import profile from "../assets/profile.png"
import settings from "../assets/settings.png"
import logout from "../assets/logout.png"

export default function TeacherDashboardSideBar () {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive)
    }

    return (
        <>
        <section>
        <nav className={`${styles.sidebar} ${isActive ? styles.isActive : ""}`}>
            <ul>
                <div className={styles.menuButtons}>
                <li>
                    <p><img src="../../public/images/teachers/JasminaSalvador.png" alt="" width="30%" /></p>
                </li>

                <li>
                    <a href="#"><p><img src={progressTracker} alt="" width="10%" /> Progress Tracker</p></a>
                </li>
                
                <li>
                    <a href="#"><img src={studentProfiles} alt="" width="10%" /> Student Profiles</a>
                </li>
                
                <li>
                    <a href="#"><img src={helpRequests} alt="" width="10%" /> Help Requests</a>
                </li>
                
                <li>
                    <a href="#"><img src={projectSubmissions} alt="" width="10%" /> Project Submissions</a>
                </li>

                <li>
                    <a href="#"><img src={projectLibrary} alt="" width="10%" /> Project Library</a>
                </li>

                </div>

                <button className={styles.toggleButton} onClick={toggleSidebar}><img src={arrowLeft} alt="" width="200%"/></button>
                    
                <div className={styles.settingButtons}>
                    <button class="profileButton"><img src={profile} alt="" />Profile</button>
                    <button class="settingsButton"><img src={settings} alt="" /> Settings</button>
                    <button class="logoutButton"><img src={logout} alt="" />Log out</button>
                </div>
            </ul>
            
        </nav>
        </section>
        
        </>
    )
}