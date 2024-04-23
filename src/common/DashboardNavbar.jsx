import React from "react";
import { useState } from "react";
import styles from "./DashboardNavbar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/NavBar/LevelUpWorks-blue.png";
import new_zealand_flag from "../assets/NavBar/NZFlag.png";
import new_zealand_alternate_flag from "../assets/NavBar/MaoriFlag.png";

export default function DashboardNavbar(props,{ port }) {


  {/*Start Project button color and text changes when project is submitted */}
    const [projectSubmission, setProjectSubmission] = useState([]);
  
    // useEffect(() => {
    //   fetch(`http://localhost:${port}/projects/1/instructions`)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       setProjectInstructions(result[0].instructions);
    //     });
    // }, []);






  // const [projectButton, selectedProjectButton] = useState([
  //   {label: "project-1", value: 1},
  //   {label: "project-2", value: 2},
  //   {label: "project-3", value: 3}
  // ]);

  const [isDeliveryClicked, setIsDeliveryClicked] = useState(false);
  const handleClick = (e) => {
    if (e.target.className.includes("delivery")) {
      setIsDeliveryClicked(true);
      if (isDeliveryClicked === true) {
        setIsDeliveryClicked(false);
      }
    }
  };

  // const handleDeliveryClassStyler = (e) => {
  //   if (isDeliveryClicked === true) {
  //     return "deliveryClicked";
  //   } else {
  //     return "delivery";
  //   }
  // };

  {/* Ask Teacher for Help button function */}
  function clickMe() {
    alert("Nice one, help request submitted successfully!");
  }

  {/*Start Project button function */}
  function projectStart() {
    alert("Nice one, project successfully started!");
  }
  return (
    <>
      <div className={styles.Navbar}>
        <img className={styles.Logo} src={logo} alt="logo" />

        {/*Displays Project and Subtitle  */}
        <div className={styles.Layout}>
          <div className={styles.ProjectHeading}>
            <p>{props.projectTitle}</p>
          </div>
          <div className={styles.ProjectSubheading}>
            <p>{props.subTitle}</p>
          </div>
        </div>

        {/*Displays Project number automatically */}
        <div className={styles.ProjectNumber}>
          <div onClick={handleClick} className={styles.Delivery}>
            1
          </div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
          <div onClick={handleClick} className={styles.DeliveryClicked}></div>
        </div>
        {/*Buttons */}
        <div className={styles.Btn}>

          {/*Start Project button */}
          <button onClick={projectStart} className={styles.Navbtn1}>
            Start Project
          </button>

          {/* Ask Teacher for Help button */}
          <button onClick={clickMe} className={styles.Navbtn2}>
            Ask Teacher for Help
          </button>

          {/* More Projects button */}
          <Link to="/project-library">
            <button className={styles.Navbtn3}>More Projects</button>
          </Link>

        </div>

        {/*Displays Flags */}
        <div className={styles.Languageflag}>
          <img
            src={new_zealand_flag}
            style={{ height: "0.7em" }}
            alt=" new_zealand_flag"
          />
          <img
            src={new_zealand_alternate_flag}
            style={{ height: "0.7em" }}
            alt="maori_flag"
          />
        </div>
      </div>
    </>
  );
}
