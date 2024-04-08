import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import styles from "./SideBar.module.css"

// Icon for common buttons
import arrowLeft from "../assets/arrowLeft.png"
import profile from "../assets/profile.png"
import settings from "../assets/settings.png"
import logout from "../assets/logout.png"

// Icons for Student Dashboard Side Bar
import learningObjectives from "../assets/StudentDashboard/learningObjectives.png";
import instructions from "../assets/StudentDashboard/instructions.png";
import video from "../assets/StudentDashboard/video.png"
import makeProject from "../assets/StudentDashboard/makeProject.png"
import submitProject from "../assets/StudentDashboard/submitProject.png"
import bonusChallenge from "../assets/StudentDashboard/bonusChallenge.png"
import takeTheQuiz from "../assets/StudentDashboard/takeTheQuiz.png"

// Icons for Teacher Dashboard Side Bar
import progressTracker from "../assets/TeacherDashboard/progressTracker.png"
import studentProfiles from "../assets/TeacherDashboard/studentProfiles.png"
import helpRequests from "../assets/TeacherDashboard/helpRequests.png"
import projectSubmissions from "../assets/TeacherDashboard/projectSubmissions.png"
import projectLibrary from "../assets/TeacherDashboard/projectLibrary.png"
import SideBarButtons from "./SideBarButtons";


export default function SideBar(props) {
    const [isActive,setIsActive] = useState(false);
    const toggleSidebar = () => {setIsActive(!isActive)}
    const StudentButtonItems = [
        {
            link: "/learning-objectives",
            buttonText: "LEARNING OBJECTIVES",
            image: learningObjectives,
        },
        {
            link: "/instructions",
            buttonText: "INSTRUCTIONS",
            image: instructions,
        },
        {
            link: "/video-tutorial",
            buttonText: "VIDEO TUTORIAL",
            image: video,
        },
        {
            link: "/make-project",
            buttonText: "MAKE PROJECT",
            image: makeProject,
        },
        {
            link: "/submit-project",
            buttonText: "SUBMIT PROJECT",
            image: submitProject,
        },
        {
            link: "/student-dashboard/bonus-challenge",
            buttonText: "BONUS CHALLENGE",
            image: bonusChallenge,
        },
        {
            link: "/student-dashboard/take-the-quiz",
            buttonText: "TAKE THE QUIZ",
            image: takeTheQuiz,
        },
    ];

    const TeacherButtonItems = [
        {
            link: "/progress-tracker",
            buttonText: "PROGRESS TRACKER",
            image: progressTracker,
        },
        {
            link: "/student-profiles",
            buttonText: "STUDENT PROFILES",
            image: studentProfiles,
        },
        {
            link: "/help-requests",
            buttonText: "HELP REQUESTS",
            image: helpRequests,
        },
        {
            link: "/project-submissions",
            buttonText: "PROJECT SUBMISSIONS",
            image: projectSubmissions,
        },
        {
            link: "/project-library",
            buttonText: "PROJECT LIBRARY",
            image: projectLibrary,
        },
    ];

    // const getStudentProfilePicture = () => {}

    let buttonItems = []
    if(props.dashboard === "student"){
        buttonItems = StudentButtonItems
    } else if (props.dashboard === "teacher"){
        buttonItems = TeacherButtonItems
    } else {
        const buttonItems = []
    }

    // const [profilePicture, setProfilePicture] = useState(props.TeacherDashboard? "../../images/teachers/JasminaSalvador.png" : "");
    // useEffect(() => props.TeacherDashboard? null : getStudentProfilePicture(), []);
    
   const buttons = buttonItems.map((button, index) => {
    return(
        <div key={index}>
    <SideBarButtons
        link={button.link}
        image={button.image}
        buttonText={button.buttonText}
        key={index}/>
        </div>
    )
    })


    return (
        <>
        {/* Toggle function */}
        <nav className={`${styles.SideBar} ${isActive ? styles.isActive : ""}`}>
            <div>
            <button className={styles.ProfilePicture}><img src="../../public/images/students/RawiriFletcher.png" alt="" width="40%" /></button>
            </div>
            
            {/* Import buttons */}
            <div>{buttons}</div>
            
            {/* Toggle Button */}
            <div className={styles.ToggleButtonContainer}>
                <button className={styles.toggleButton} onClick={toggleSidebar}><img src={arrowLeft} alt="" width="200%"/></button>
            </div>
            
            {/* Setting Buttons at the bottom of sidebar */}
            <div className={styles.SettingButtonsContainer}>
                    <button><img src={profile} alt="" /><br/><p>Profile</p></button>
                    <button><img src={settings} alt="" /><br/><p>Settings</p></button>
                    <button><img src={logout} alt="" /><br/><p>Log out</p></button>
            </div>
        </nav>
        </>
)};