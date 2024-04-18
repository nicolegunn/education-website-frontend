import React from 'react'
import { useState, useEffect } from 'react';
import styles from './ProgressTracker.module.css'
import WhiteRectangle from './components/WhiteRectangle.jsx';
import Footer from '/src/common/DashboardFooter.jsx';
import SideBar from '../../common/SideBar';
import TeacherDashboardNavbar from '../../common/TeacherDashboardNavbar.jsx'; 

export default function ProgressTracker() {
    //useState to get student data
    const [data, setData] = useState([]);
    //useEffect to get apis
    useEffect(() => {
      fetch('http://localhost:4000/student')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("err", error)
      })
    }, []);


  return (
    <div>
       <TeacherDashboardNavbar />
   <div className={styles.App}>
    <SideBar className={styles.SideBar} dashboard="teacher"/>
            <div className={styles.Rectangle}>
              <div className={styles.Content}>
                <p className={styles.PContent}>Export as spreadsheet</p>
                <h2 className={styles.H2Content}>BEGINNER COURSE</h2>
                {data.map((student, index) => (
                  <WhiteRectangle key={index} name={student.name} level={student.course} />
                ))}
              </div>
          </div>
    <Footer />
   </div>
   </div>
  );
}