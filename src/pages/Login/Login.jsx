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
    //Adding some dummy data to the other columns so entire row in database is complete
    let userData = {
      name: name,
      email: email,
      password: password,
      school: "Mission X Primary School",
      profile_pic: "/images/Avatar-blue.png",
      date_of_birth: "1980-01-01",
      contact_number: "021-123-456",
      type: e.target.name,
    };
    if (userData.type === "student") {
      userData = {
        ...userData,
        date_of_birth: "2014-01-01",
        teacher_id: 1,
        course: "intermediate",
      };
    }

    axios.post(`http://localhost:${port}/signup`, userData).then((res) => {
      if (res.status === 200) {
        handleLogin(e);
        // User registered successfully
        // You can redirect to login page here
      } else {
        // Show error message
      }
    });
  };

  const selectHandler = (e) => {
    if (
      (e.target.name === "student" && isStudentLogin) ||
      (e.target.name === "teacher" && isTeacherLogin)
    ) {
      handleLogin(e);
    } else {
      handleSignup(e);
    }
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
                    {/* Cross on top right of login pop up to close it */}
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
                      {/* Log In Heading*/}
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
                      {/* Sign up Heading*/}
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
                    {/* These two inputs show when isStudentLogin is true */}
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
                          {/* The following inputs show up when isStudentLogin is false */}
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

                      {/* Submit */}
                      <input
                        className={styles.submitButton}
                        type="submit"
                        value="Submit"
                        onClick={selectHandler}
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
                      {/* These two inputs show when isTeacherLogin is true */}
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
                          {/* These inputs show when isTeacherLogin is false */}
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
                        onClick={selectHandler}
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
