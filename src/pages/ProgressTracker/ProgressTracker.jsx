import React from 'react'
import { useState } from 'react';
import styles from './ProgressTracker.module.css'
import WhiteRectangle from './components/WhiteReactangle.jsx';
import Footer from '/src/common/DashboardFooter.jsx';
import SideBar from '../../common/SideBar';
import DashboardNavbar from '../../common/DashboardNavbar.jsx'; 

export default function ProgressTracker() {
    const students = [{
      name: 'Aiden Andrews', level: '4/15 projects completed'
    }, {
      name: 'Aiden Andrews', level: '4/15 projects completed'
    }, {
      name: 'Aiden Andrews', level: '4/15 projects completed'
    }, {
      name: 'Aiden Andrews', level: '4/15 projects completed'
    }];

  return (
    <div>
      <DashboardNavbar />
   <div className={styles.App}>
    <SideBar dashboard="student"/>
            <div className={styles.Rectangle}>
              <div className={styles.Content}>
                <p className={styles.PContent}>Export as spreadsheet</p>
                <h2 className={styles.H2Content}>BEGINNER COURSE</h2>
                {students.map((student, index) => (
                  <WhiteRectangle key={index} name={student.name} level={student.level} />
                ))}
              </div>
          </div>
    <Footer />
   </div>
   </div>
  );
}

