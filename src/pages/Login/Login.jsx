import { useState } from 'react';
import { Link } from "react-router-dom"
import styles from "./Login.module.css"
import imageStudent from "../../assets/LoginSignup/students.png"
import imageTeacher from "../../assets/LoginSignup/teachers.png"
import imageCrosshair from "../../assets/LoginSignup/esc.png"

export default function Login() {
  const [isStudentLogin, setIsStudentLogin] = useState(true);
  const [isTeacherLogin, setIsTeacherLogin] = useState(true);

  return (
    <>
      <div className={styles.body}>
        <div className="mainContainer">
          <div className={styles.containerHeader}>
            <div className={styles.headerLeft}/>
            <div className={styles.headerRight}>
              <Link to = "/">
                <img style={{height: '30px'}} src={imageCrosshair} alt="imageCrosshair"/>
              </Link>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.sectionLeft}>
              <img style={{height: '15em'}} src={imageStudent}/>
              <p className={styles.classSelector1}>Student</p>
              <div className={styles.loginSignup}>
                <p style={{marginRight: '20px', fontSize: '1.5em', fontWeight: '400'}} onClick={() => setIsStudentLogin(true)}>Log In</p>
                <p style={{marginLeft: '20px', fontSize: '1.5em', fontWeight: '400'}} onClick={() => setIsStudentLogin(false)}>Sign Up</p>
              </div>
              <form className={styles.formsLayout}>
                {isStudentLogin ? (
                  <>
                    <input className={styles.inputField} type="email" placeholder="Email"/>
                    <input className={styles.inputField} type="password" placeholder="Password"/>
                  </>
                ) : (
                  <>
                    <input className={styles.inputField} type="text" placeholder="Full Name"/>
                    <input className={styles.inputField} type="email" placeholder="Email"/>
                    <input className={styles.inputField} type="password" placeholder="Password"/>
                    <input className={styles.inputField} type="password" placeholder="Confirm Password"/>
                  </>
                )}
                <input className={styles.submitButton} type="submit" value="Submit"></input>
              </form>
            </div>
            <div className={styles.sectionRight}>
              <img style={{height: '15em'}} src={imageTeacher}/>
              <p className={styles.classSelector1}>Teacher</p>
              <div className={styles.loginSignup}>
                <p style={{marginRight: '20px', fontSize: '1.5em', fontWeight: '400'}} onClick={() => setIsTeacherLogin(true)}>Log In</p>
                <p style={{marginLeft: '20px', fontSize: '1.5em', fontWeight: '400'}} onClick={() => setIsTeacherLogin(false)}>Sign Up</p>
              </div>
              <form className={styles.formsLayout}>
                {isTeacherLogin ? (
                  <>
                    <input className={styles.inputField} type="email" placeholder="Email"/>
                    <input className={styles.inputField} type="password" placeholder="Password"/>
                  </>
                ) : (
                  <>
                    <input className={styles.inputField} type="text" placeholder="Full Name"/>
                    <input className={styles.inputField} type="email" placeholder="Email"/>
                    <input className={styles.inputField} type="password" placeholder="Password"/>
                    <input className={styles.inputField} type="password" placeholder="Confirm Password"/>
                  </> 
                )}
                <input className={styles.submitButton} type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
