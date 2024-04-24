import React from 'react'
import { useState, useEffect } from 'react';
import styles from './ProgressTracker.module.css'
import WhiteRectangle from './components/WhiteRectangle.jsx';
import Footer from '/src/common/DashboardFooter.jsx';
import SideBar from '../../common/SideBar';
import TeacherDashboardNavbar from '../../common/TeacherDashboardNavbar.jsx'; 
import Circles from './components/Circles.jsx';

export default function ProgressTracker({port}) {
    //useState to get student data
    const [data, setData] = useState([]);
    //useEffect to get apis
    useEffect(() => {
      fetch(`http://localhost:${port}/student-progress-tracker`)
      .then((response) => response.json())
      .then((data) => {
        const parsedData = data.map(student => ({
          ...student,
          projects:JSON.parse(student.projects)
        }))
        setData(parsedData);
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
                  <div key={index} className={styles.Style}>
                    <div key={`white-${index}`}  className= {styles.NameCont}>
                    <WhiteRectangle name={student.name} level={`${student.completed_projects_count} ` + '/ 15 projects completed'}/>
                    </div>
                    {student.projects.map((project, projectKey) => (
                      <div key={`circle-${projectKey}`} className={styles.Circ}>
                      <Circles number={project.project_id} project={project.project_details}/>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
          </div>
    <Footer />
   </div>
   </div>
  );
}