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
import learningObjectivesSelected from "../assets/StudentDashboard/learningObjectivesSelected.png";
import instructions from "../assets/StudentDashboard/instructions.png";
import instructionsSelected from "../assets/StudentDashboard/instructionsSelected.png";
import video from "../assets/StudentDashboard/video.png"
import videoSelected from "../assets/StudentDashboard/videoSelected.png"
import makeProject from "../assets/StudentDashboard/makeProject.png"
import makeProjectSelected from "../assets/StudentDashboard/makeProjectSelected.png"
import submitProject from "../assets/StudentDashboard/submitProject.png"
import submitProjectSelected from "../assets/StudentDashboard/submitProjectSelected.png"
import bonusChallenge from "../assets/StudentDashboard/bonusChallenge.png"
import takeTheQuiz from "../assets/StudentDashboard/takeTheQuiz.png"

// Icons for Teacher Dashboard Side Bar
import progressTracker from "../assets/TeacherDashboard/progressTracker.png"
import progressTrackerSelected from "../assets/TeacherDashboard/progressTrackerSelected.png"
import studentProfiles from "../assets/TeacherDashboard/studentProfiles.png"
import studentProfilesSelected from "../assets/TeacherDashboard/studentProfilesSelected.png"
import helpRequests from "../assets/TeacherDashboard/helpRequests.png"
import helpRequestsSelected from "../assets/TeacherDashboard/helpRequestsSelected.png"
import projectSubmissions from "../assets/TeacherDashboard/projectSubmissions.png"
import projectSubmissionsSelected from "../assets/TeacherDashboard/projectSubmissionsSelected.png"
import projectLibrary from "../assets/TeacherDashboard/projectLibrary.png"
import projectLibrarySelected from "../assets/TeacherDashboard/projectLibrarySelected.png"

import SideBarButtons from "./SideBarButtons";


export default function SideBar(props) {
    const [isActive,setIsActive] = useState(false);
    const toggleSidebar = () => {setIsActive(!isActive)}
    const StudentButtonItems = [
        {
            link: "/learning-objectives",
            buttonText: "LEARNING OBJECTIVES",
            image: learningObjectives,
            selectedImage: learningObjectivesSelected
        },
        {
            link: "/instructions",
            buttonText: "INSTRUCTIONS",
            image: instructions,
            selectedImage: instructionsSelected
        },
        {
            link: "/video-tutorial",
            buttonText: "VIDEO TUTORIAL",
            image: video,
            selectedImage: videoSelected
        },
        {
            link: "/make-project",
            buttonText: "MAKE PROJECT",
            image: makeProject,
            selectedImage: makeProjectSelected
        },
        {
            link: "/submit-project",
            buttonText: "SUBMIT PROJECT",
            image: submitProject,
            selectedImage: submitProjectSelected
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
            selectedImage: progressTrackerSelected
        },
        {
            link: "/student-profiles",
            buttonText: "STUDENT PROFILES",
            image: studentProfiles,
            selectedImage: studentProfilesSelected
        },
        {
            link: "/help-requests",
            buttonText: "HELP REQUESTS",
            image: helpRequests,
            selectedImage: helpRequestsSelected
        },
        {
            link: "/project-submissions",
            buttonText: "PROJECT SUBMISSIONS",
            image: projectSubmissions,
            selectedImage: projectSubmissionsSelected
        },
        {
            link: "/project-library",
            buttonText: "PROJECT LIBRARY",
            image: projectLibrary,
            selectedImage: projectLibrarySelected
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
          return (
            <div key={index}>
              <SideBarButtons
                link={button.link}
                image={button.image}
                buttonText={button.buttonText}
                key={index}
              />
            </div>
          )})

// // Selected buttons
//    const buttons = buttonItems.map((button, index) => {
//      if (props.page === buttonItems.link) {
//        return (
//          <div key={index}>
//            <SideBarButtons
//              link={button.link}
//              image={button.image}
//              buttonText={button.buttonText}
//              key={index}
//            />
//          </div>
//        );
//      } else {
//        return (
//          <div key={index}>
//            <SideBarButtons
//              link={button.link}
//              image={button.selectedImage}
//              buttonText={button.buttonText}
//              key={index}
//            />
//          </div>
//        );
//      }
//    });


    return (
        <>
        {/* Toggle function */}
        <nav className={`${styles.SideBar} ${isActive ? styles.isActive : ""}`}>
            <div>
            <button className={styles.ProfilePicture}><img src="../../public/images/students/RawiriFletcher.png" alt="profile picture" width="40%" /></button>
            </div>
            
            {/* Import buttons */}
            <div className={styles.ImportedMenuButtons}>{buttons}</div>
            
            {/* Toggle Button */}
            <div className={styles.ToggleButtonContainer}>
                <button className={styles.ToggleButton} onClick={toggleSidebar}><img src={arrowLeft} alt="" width="200%"/></button>
            </div>
            
            {/* Setting Buttons at the bottom of sidebar */}
            <div className={styles.SettingButtonsContainer}>
                    <button className={styles.SettingButtons}><img src={profile} alt="profile" /><br/><p className={styles.SettingButtonsText}>Profile</p></button>
                    <button className={styles.SettingButtons}><img src={settings} alt="settings" /><br/><p className={styles.SettingButtonsText}>Settings</p></button>
                    <button className={styles.SettingButtons}><img src={logout} alt="logout" /><br/><p className={styles.SettingButtonsText}>Log out</p></button>
            </div>
        </nav>
        </>
)};