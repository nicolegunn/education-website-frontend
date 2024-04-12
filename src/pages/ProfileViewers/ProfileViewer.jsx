import styles from "./ProfileViewer.module.css";
import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import Button from "../../common/Button.jsx";
import PhotoCard from "./components/PhotoCard.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import { Link } from "react-router-dom";

//Unique styles passed to Button components used at bottom of page
  const btnStyles = {
    marginLeft: "1rem",
    marginTop: "4rem",
    marginBottom: "4rem",
  };

export default function ProfileViewer({
  userType,
  user,
  teacher = "",
  buttons,
  cardFields,
}) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBar />
      </div>
      <div className={styles.MainContent}>
        <PhotoCard user={user} buttons={buttons} />
        <div className={styles.FlexContainer}>
          <ProfileCard user={user} teacher={teacher} cardFields={cardFields} />
          <div className={styles.ButtonContainer}>
            <Link to="/project-library">
              <Button style={userType === "teacher" ? { ...btnStyles, backgroundColor: "#e5ab2c" } : btnStyles}>
                BACK TO PROJECTS
              </Button>
            </Link>
            {userType === "teacher" && (
              <Link to="/progress-tracker">
                <Button style={btnStyles}>
                  BACK TO DASHBOARD
                </Button>
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
