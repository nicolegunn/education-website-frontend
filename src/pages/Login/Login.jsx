import { useState } from 'react';
import { Link } from "react-router-dom"
import styles from "./Login.module.css"
import axios from 'axios';

import ImageStudent from "../../assets/LoginSignup/students.png"
import ImageTeacher from "../../assets/LoginSignup/teachers.png"
import ImageCrosshair from "../../assets/LoginSignup/esc.png"

export default function Login({set, reset}) {
  const [isStudentLogin, setIsStudentLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Added this line

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill out all fields before submitting.');
    } else {
      axios.post('/api/login', { email, password })
        .then(response => {
          console.log("It's working");
          set();  // Set the login state
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <div className={styles.Body}>
        <div className="MainContainer">
          <div className={styles.ContainerHeader}>
            <div className={styles.HeaderLeft}/>
            <div className={styles.HeaderRight}>
              <Link to = "/">
                <img style={{height: '30px'}} src={ImageCrosshair} alt="imageCrosshair"/>
              </Link>
            </div>
          </div>
          <div className={styles.Container}>
            <div className={styles.SectionLeft}>
              <img style={{height: '15em'}} src={ImageStudent}/>
              <p className={styles.ClassSelector1}>Student</p>
              <div className={styles.LoginSignup}>
                <p style={{marginRight: '20px', fontSize: '1.5em', fontWeight: '400'}} onClick={() => setIsStudentLogin(true)}>Log In</p>
                <p style={{marginLeft: '20px', fontSize: '1.5em', fontWeight: '400'}} onClick={() => setIsStudentLogin(false)}>Sign Up</p>
              </div>
              {/* Student Part */}
              <form className={styles.FormsLayout } onSubmit={handleSubmit}>
                {isStudentLogin ? (
                  <>
                    <input className={styles.InputField} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className={styles.InputField} type="password" placeholder="Password" onChange={(e) => setPassword (e.target.value)}/>
                  </>
                ) : (
                  <>
                    <input className={styles.InputField} type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)}/>
                    <input className={styles.InputField} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className={styles.InputField} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <input className={styles.InputField} type="password" placeholder="Confirm Password"/>
                  </>
                )}
                <input className={styles.SubmitButton} type="submit" value="Submit"></input>
              </form>
            </div>
            <div className={styles.SectionRight}>
              <img style={{height: '15em'}} src={ImageTeacher}/>
              <p className={styles.ClassSelector1}>Teacher</p>
              <div className={styles.LoginSignup}>
                <p style={{marginRight: '20px', fontSize: '1.5em', fontWeight: '400'}} onClick={() => setIsStudentLogin(true)}>Log In</p>
                <p style={{marginLeft: '20px', fontSize: '1.5em', fontWeight: '400'}} onClick={() => setIsStudentLogin(false)}>Sign Up</p>
              </div>
              {/* Teacher Part */}
              <form className={styles.FormsLayout} onSubmit={handleSubmit}>
                {isStudentLogin ? (
                  <>
                    <input className={styles.InputField} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className={styles.InputField} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                  </>
                ) : (
                  <>
                    <input className={styles.InputField} type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)}/>
                    <input className={styles.InputField} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className={styles.InputField} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <input className={styles.InputField} type="password" placeholder="Confirm Password"/>
                  </> 
                )}
                <input className={styles.SubmitButton} type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
