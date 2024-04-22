import { useState } from "react";
import styles from "./Login.module.css";
import imageStudent from "../../assets/LoginSignup/students.png";
import imageTeacher from "../../assets/LoginSignup/teachers.png";
import imageCrosshair from "../../assets/LoginSignup/esc.png";
import axios from "axios";

export default function Login({
  port,
  showLogin,
  updateShowLogin,
  logInFunction,
}) {

  const [isStudentLogin, setIsStudentLogin] = useState(true);
  const [isTeacherLogin, setIsTeacherLogin] = useState(true);

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleInput = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      case "email":
        setEmail(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${port}/login`, {
        email: email,
        password: password,
        type: e.target.name,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const userData = { ...res.data[0], user_type: e.target.name };

          logInFunction(userData);
        } else {
          //Add some code here
        }
      });
  };

// signup for teacher or student

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Show an error message that passwords do not match
      return;
    }
    let userType;
    if (e.target.name === "student") {
      userType = "student";
    } else if (e.target.name === "teacher") {
      userType = "teacher";
    }
    axios({
      
        method: 'post', 
        url: `http://localhost:${port}/signup`,
        headers:{},
        body:{
          name: name,
          email: email,
          password: password,
          userType: userType,
        }}
      )
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          // User registered successfully
          // You can redirect to login page here
        } else {
          // Show error message
        }
      });
  };

  return (
    <>
      {showLogin && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <div className={styles.body}>
              <div className="mainContainer">
                <div className={styles.containerHeader}>
                  <div className={styles.headerLeft} />
                  <div className={styles.headerRight}>
                    <img
                      style={{ height: "30px" }}
                      src={imageCrosshair}
                      alt="imageCrosshair"
                      onClick={updateShowLogin}
                    />
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.sectionLeft}>
                    <img style={{ height: "15em" }} src={imageStudent} />
                    <p className={styles.classSelector1}>Student</p>
                    <div className={styles.loginSignup}>
                      <p
                        style={{
                          marginRight: "20px",
                          fontSize: "1.5em",
                          fontWeight: "400",
                        }}
                        onClick={() => setIsStudentLogin(true)}
                      >
                        Log In
                      </p>
                      <p
                        style={{
                          marginLeft: "20px",
                          fontSize: "1.5em",
                          fontWeight: "400",
                        }}
                        onClick={() => setIsStudentLogin(false)}
                      >
                        Sign Up
                      </p>
                    </div>
                    <form className={styles.formsLayout}>
                      {isStudentLogin ? (
                        <>
                          <input
                            className={styles.inputField}
                            type="email"
                            placeholder="Email"
                            onChange={handleInput}
                            name="email"
                          />
                          <input
                            className={styles.inputField}
                            type="password"
                            placeholder="Password"
                            onChange={handleInput}
                            name="password"
                          />
                        </>
                      ) : (
                        <>
                          <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Full Name"
                            onChange={handleInput}
                            name="name"
                          />
                          <input
                            className={styles.inputField}
                            type="email"
                            placeholder="Email"
                            onChange={handleInput}
                            name="email"
                          />
                          <input
                            className={styles.inputField}
                            type="password"
                            placeholder="Password"
                            onChange={handleInput}
                            id="password"
                          />
                          <input
                            className={styles.inputField}
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleInput}
                            name="confirmPassword"
                          />
                        </>
                      )}

                      {/* Submit */}
                      <input
                        className={styles.submitButton}
                        type="submit"
                        value="Submit"
                        onSubmit={handleSignup}
                        name="student" // or "teacher" for teacher signup form
                      ></input>

                    </form>
                  </div>
                  <div className={styles.sectionRight}>
                    <img style={{ height: "15em" }} src={imageTeacher} />
                    <p className={styles.classSelector1}>Teacher</p>
                    <div className={styles.loginSignup}>
                      <p
                        style={{
                          marginRight: "20px",
                          fontSize: "1.5em",
                          fontWeight: "400",
                        }}
                        onClick={() => setIsTeacherLogin(true)}
                      >
                        Log In
                      </p>
                      <p
                        style={{
                          marginLeft: "20px",
                          fontSize: "1.5em",
                          fontWeight: "400",
                        }}
                        onClick={() => setIsTeacherLogin(false)}
                      >
                        Sign Up
                      </p>
                    </div>
                    <form className={styles.formsLayout}>
                      {isTeacherLogin ? (
                        <>
                          <input
                            className={styles.inputField}
                            type="email"
                            placeholder="Email"
                            onChange={handleInput}
                            name="email"
                          />
                          <input
                            className={styles.inputField}
                            type="password"
                            placeholder="Password"
                            onChange={handleInput}
                            name="password"
                          />
                        </>
                      ) : (
                        <>
                          <input
                            className={styles.inputField}
                            type="text"
                            placeholder="Full Name"
                            onChange={handleInput}
                            name="name"
                          />
                          <input
                            className={styles.inputField}
                            type="email"
                            placeholder="Email"
                            onChange={handleInput}
                            name="email"
                          />
                          <input
                            className={styles.inputField}
                            type="password"
                            placeholder="Password"
                            onChange={handleInput}
                            name="password"
                          />
                          <input
                            className={styles.inputField}
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleInput}
                            name="confirmPassword"
                          />
                        </>
                      )}
                      <input
                        className={styles.submitButton}
                        type="submit"
                        value="Submit"
                        onClick={handleLogin}
                        name="teacher"
                      ></input>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
