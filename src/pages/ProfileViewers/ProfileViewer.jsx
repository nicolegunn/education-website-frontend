import { useContext } from "react";
import { UserContext } from "../../context";
import { Link } from "react-router-dom";
import styles from "./ProfileViewer.module.css";
import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import Button from "../../common/Button.jsx";
import PhotoCard from "./components/PhotoCard.jsx";
import ProfileCard from "./components/ProfileCard.jsx";

//Unique styles passed to Button components used at bottom of page
const btnStyles = {
  marginLeft: "1rem",
  marginTop: "4rem",
  marginBottom: "4rem",
};

export default function ProfileViewer({ buttons, cardFields, navButtons, logOutFunction }) {
  const userType = useContext(UserContext).user_type;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBar navButtons={navButtons} LogOutFunction={logOutFunction} />
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
