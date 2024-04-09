import React from 'react';
import styles from './StudentProfile.module.css';
import Footer from '/src/common/DashboardFooter.jsx';
import DashboardNavbar from '../../common/DashboardNavbar.jsx'; 
import SideBar from '../../common/SideBar';




function StudentProfiles() {
  const students = [
    'Aiden Andrews',
    'Alice Kindellan',
    'Courtney Bristol',
    'Hanu Nepe',
    'Harry McGrath',
    'Javier Fuego',
    'Lisa Horan',
    'Lucia Mendez',
    'Mark OLeary',
    'Nagani Cortes',
    'Neveah Machenry',
    'Rawiri Fletcher',
    'Shane OMonahan',
    'Simon Laine',
    'Tokio Han'

  ] 

  return (
    <div>
      <DashboardNavbar />
      <div className={styles.App}>
        <SideBar dashboard="student" />
        <div className={styles.Rectangle}>
          {students.map((student, index) => (
            <div key={index} className={styles.StudentCard}>
            <img className={styles.StudentImg} src={'/images/students/' + student.replace(/\s+/g, '') + '.png'} alt=" "/>
            <p className={styles.StudentName}>{student}</p>
            </div>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default StudentProfiles;