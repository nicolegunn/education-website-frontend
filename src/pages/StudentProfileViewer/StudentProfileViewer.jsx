import styles from "./StudentProfileViewer.module.css";
import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import Button from "../../common/Button.jsx";
import PhotoCard from "./components/PhotoCard.jsx";
import StudentProfileCard from "./components/StudentProfileCard.jsx";
import { Link } from "react-router-dom";

export default function StudentProfileViewer({ student, teacher }) {

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBar />
      </div>
      <div className={styles.MainContent}>
        <PhotoCard student={student} />
        <div className={styles.FlexContainer}>
          <StudentProfileCard student={student} teacher={teacher} />
          <Link to="/project-library">
            <Button>BACK TO PROJECTS</Button>
          </Link>
        </div>
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
}
