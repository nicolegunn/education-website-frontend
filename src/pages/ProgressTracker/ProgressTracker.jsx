import React from 'react'
import { useState } from 'react';
import './ProgressTracker.css'
import WhiteRectangle from './components/WhiteReactangle.jsx';
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
        <div className="app">
          <div className="sidebar">
          </div>
            <div className="rectangle">
              <div className='content'>
                <p className='p-content'>Export as spreadsheet</p>
                <h2 className='h2-content'>BEGINNER COURSE</h2>
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

