import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import Button from "../../common/Button.jsx";
import PhotoCard from "./components/PhotoCard.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import styles from "./ProfileViewer.module.css";

//Unique styles passed to Button components used at bottom of page
const btnStyles = {
  marginLeft: "1rem",
  marginTop: "4rem",
  marginBottom: "4rem",
};

export default function ProfileViewer({
  buttons, //The labels of buttons in the PhotoCard component.
  cardFields, //The fields and values mapped in the ProfileCard component.
  navButtons, //The text and links mapped into the NavBar.
  logOutFunction, //The logOutUser function passed down from App.jsx.
}) {
  const userType = useContext(UserContext).user_type;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBar navButtons={navButtons} logOutFunction={logOutFunction} />
      </div>
      <div className={styles.MainContent}>
        <PhotoCard buttons={buttons} />
        <div className={styles.FlexContainer}>
          <ProfileCard cardFields={cardFields} />
          <div className={styles.ButtonContainer}>
            <Link to="/project-library">
              <Button
                style={
                  userType === "teacher"
                    ? { ...btnStyles, backgroundColor: "#e5ab2c" }
                    : btnStyles
                }
              >
                BACK TO PROJECTS
              </Button>
            </Link>
            {userType === "teacher" && (
              <Link to="/progress-tracker">
                <Button style={btnStyles}>BACK TO DASHBOARD</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
}
