// THIS FILE IS NOT USED AND WILL BE REMOVED //

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
        {/* Toggle function */}
        <nav className={`${styles.sidebar} ${isActive ? styles.isActive : ""}`}>
            {/* side bar buttons */}
            <ul>
                <div className={styles.menuButtons}>
                <li>
                    <Link to=""><button><img src="../../public/images/students/RawiriFletcher.png" alt="" width="40%" /></button></Link>
                </li>

                <li>
                    <Link to="/learning-objective"><img src={learningObjectives} alt="" width="10%" /> <p>Learning Objectives</p></Link>
                </li>
                
                <li>
                    <Link to="/instructions"><img src={instructions} alt="" width="10%" /> <p >Instructions</p></Link>
                </li>
                
                <li>
                    <Link to="/video-tutorial"><img src={video} alt="" width="10%" /> <p>Video Tutorial</p></Link>
                </li>
                
                <li>
                    <Link to="/make-project"><img src={makeProject} alt="" width="10%" /> <p>Make Project</p></Link>
                </li>

                <li>
                    <Link to="/submit-project"><img src={submitProject} alt="" width="10%" /> <p>Submit Project</p></Link>
                </li>

                <li>
                    <Link to=""><img src={bonusChallenge} alt="" width="10%" /> <p>Bonus Challenge</p></Link>
                </li>
                
                <li>
                    <Link to=""><img src={takeTheQuiz} alt="" width="10%" /> <p>Take the Quiz</p></Link>
                </li>
                </div>

                {/* Toggle Button - pink triangle button */}
                <div className={styles.toggleButtonContainer}>
                <button className={styles.toggleButton} onClick={toggleSidebar}><img src={arrowLeft} alt="" width="200%"/></button>
                </div>
                
                {/* Setting Buttons at the bottom of sidebar */}
                <div className={styles.settingButtonsContainer}>
                    <button><img src={profile} alt="" /><p>Profile</p></button>
                    <button><img src={settings} alt="" /><p>Settings</p></button>
                    <button><img src={logout} alt="" /><p>Log out</p></button>
                </div>
            </ul>
            
        </nav>
        
        </>
    )
}