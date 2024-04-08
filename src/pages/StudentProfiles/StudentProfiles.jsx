import React from 'react';
import './StudentProfile.css';
import Footer from '/src/common/DashboardFooter.jsx'

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
    <div className="background">
      <div className='sidebar'></div>
      <div className="rect">
        {students.map((student, index) => (
          <div key={index} className='student-card'>
          <img className='student-img' src={'./images/students/' + student.replace(/\s+/g, '') + '.png'} alt=" "/>
          <p className='student-name'>{student}</p>
          </div>
          ))}
      </div>
      <Footer />
    </div>
  )
}

export default StudentProfiles;