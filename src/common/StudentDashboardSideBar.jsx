import React, { useState } from 'react'
import styles from './StudentDashboardSideBar.module.css'

import learningObjectives from "../assets/StudentDashboard/learningObjectives.png";
import instructions from "../assets/StudentDashboard/instructions.png";
import video from "../assets/StudentDashboard/video.png"
import makeProject from "../assets/StudentDashboard/makeProject.png"
import submitProject from "../assets/StudentDashboard/submitProject.png"
import bonusChallenge from "../assets/StudentDashboard/bonusChallenge.png"
import takeTheQuiz from "../assets/StudentDashboard/takeTheQuiz.png"
import arrowLeft from "../assets/arrowLeft.png"
import profile from "../assets/profile.png"
import settings from "../assets/settings.png"
import logout from "../assets/logout.png"

export default function StudentDashboardSideBar () {
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
                    <p><img src="../../public/images/students/RawiriFletcher.png" alt="" width="30%" /></p>
                </li>

                <li>
                    <a href="#"><p><img src={learningObjectives} alt="" width="10%" /> Learning Objectives</p></a>
                </li>
                
                <li>
                    <a href="#"><img src={instructions} alt="" width="10%" /> Instructions</a>
                </li>
                
                <li>
                    <a href="#"><img src={video} alt="" width="10%" /> Video Tutorial</a>
                </li>
                
                <li>
                    <a href="#"><img src={makeProject} alt="" width="10%" /> Make Project</a>
                </li>

                <li>
                    <a href="#"><img src={submitProject} alt="" width="10%" /> Submit Project</a>
                </li>

                <li>
                    <a href="#"><img src={bonusChallenge} alt="" width="10%" /> Bonus Challenge</a>
                </li>
                
                <li>
                    <a href="#"><img src={takeTheQuiz} alt="" width="10%" /> Take the Quiz</a>
                </li>
                </div>

                <button className={styles.toggleButton} onClick={toggleSidebar}><img src={arrowLeft} alt="" width="200%"/></button>
                    
                <div className={styles.settingButtons}>
                    <button class="profileButton"><img src={profile} alt="" />Profile</button>
                    <button class="settingsButton"><img src={settings} alt="" />Settings</button>
                    <button class="logoutButton"><img src={logout} alt="" />Log out</button>
                </div>
            </ul>
            
        </nav>
        </section>
        
        </>
    )
}