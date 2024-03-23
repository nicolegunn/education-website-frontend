import styles from "./StudentProfileViewer.module.css";
import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import Button from "../../common/Button.jsx";
import PhotoCard from "./components/PhotoCard.jsx";
import StudentProfileCard from "./components/StudentProfileCard.jsx";

//Dummy data - This will need to come from useState probably from App.jsx
const CurrentStudent = {
  student_id: 123,
  name: "Rawiri Fletcher",
  school: "Homai School",
  teacher: "Jasmina Salvador",
  course: "Beginner",
  date_of_birth: "25 June 2010",
  contact_number: "022 524 63 99",
  email: "fletchy.r@gmail.com",
  profile_pic: "/images/students/RawiriFletcher.png",
};

export default function StudentProfileViewer() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBar />
      </div>
      <div className={styles.MainContent}>
        <PhotoCard student={CurrentStudent} />
        <div className={styles.FlexContainer}>
          <StudentProfileCard student={CurrentStudent} />
          <Button >BACK TO PROJECTS</Button>
        </div>
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
}
