// import React from 'react'

// import { useState } from 'react'
// import styles from "./StudentDashboard.module.css"
// import DashboardNavbar from '../../common/DashboardNavbar'
// import LearningObjectives from "../StudentDashboard/components/LearningObjectives"
// import Instructions from "../StudentDashboard/components/Instructions"
// import VideoTutorial from "../StudentDashboard/components/VideoTutorial"
// import MakeProject from "../StudentDashboard/components/MakeProject"

// import ljIcon from "../../assets/StudentDashboard/learningObjectives.png"



// export default function Studentdashboard() {
//   const [ displayedContent, setDisplayedContent ] = useState({name: "learning-objectives", component: <LearningObjectives />})

//   function handleContentClick(e) {
//       console.log(e.target.id)
//       if(e.target.id === "instructions") { 
//           setDisplayedContent({name: "instructions", component:<Instructions />})
//       } else if (e.target.id === "video-tutorial") {
//           setDisplayedContent({name: "video-tutorial", component:<VideoTutorial />})
//       } else if(e.target.id === "make-project") {
//           setDisplayedContent({name: "make-project", component:<MakeProject />})
//       } else {
//           setDisplayedContent({name: "learning-objectives", component:<LearningObjectives />})
//       }
//   }

//   return (
//     <>
//     {/*Displays StudentDashboard Navigation bar */}
//      <DashboardNavbar projectTitle='Project' subTitle='Introduction' dotMap="⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"/>
//     {/*Displays Sidebar and buttons */}
//         <div className={styles.layout}>
//             <div className={styles.colunmn}>
//                 <div className={styles.sidebar}>
//                     <button id="learning-objectives" onClick={handleContentClick} 
//                     className={`${styles.btn} ${displayedContent.name==="learning-objectives" ? styles.active: ""}`}> <img src = {ljIcon} style={{height:'2em'}} alt='ljIcon'/> Learning Objectives </button> 
//                     <button id="instructions" onClick={handleContentClick} 
//                     className={`${styles.btn} ${displayedContent.name==="instructions" ? styles.active: ""}`}> Instructions </button> 
//                     <button id="video-tutorial" onClick={handleContentClick} 
//                     className={`${styles.btn} ${displayedContent.name==="video-tutorial" ? styles.active: ""}`}> Video Tutorial </button> 
//                     <button id="make-project" onClick={handleContentClick} 
//                     className={`${styles.btn} ${displayedContent.name==="make-project" ? styles.active: ""}`}> Make Project </button> 
//                 </div>
//             </div>

//     {/*Displays main content on student Dashboard */}
//     <div className={styles.colunmn}>
//                 <div className={styles.centreArea}>
//                 <div className={styles.dashboard}>
//                     <div>{displayedContent.component}</div> 
//                 </div>
//             </div>
//             </div>
//         </div>
        
//     </>
    
//   )
// }
