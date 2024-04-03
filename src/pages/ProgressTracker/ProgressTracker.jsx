import React from 'react'
import { useState } from 'react';
import './ProgressTracker.css'
import WhiteRectangle from './components/WhiteReactangle.jsx';
import Header from './components/Header.jsx';
import Footer from '/src/common/DashboardFooter.jsx';

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
      <Header />
        <div className="app">
          <div className="sidebar">
          </div>
            <div className="rectangle">
              <div className='content'>
                <p>Export as spreadsheet</p>
                <h2>BEGINNER COURSE</h2>
                {students.map((student, index) => (
                  <WhiteRectangle key={index} name={student.name} level={student.level} />
                ))}
              </div>
          </div>
        
        </div>
      <Footer />  
    </div>
  );
}

