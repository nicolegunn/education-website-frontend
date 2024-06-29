import { Link } from "react-router-dom";
import logo from "../assets/NavBar/LevelUpWorks-blue.png";
import new_zealand_flag from "../assets/NavBar/NZFlag.png";
import new_zealand_alternate_flag from "../assets/NavBar/MaoriFlag.png";
import styles from "./TeacherDashboardNavbar.module.css";

export default function TeacherDashboardNavbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <img className={styles.Logo} src={logo} alt="logo" />

        {/*Buttons */}
        <div className={styles.Btn}>
          <button className={styles.Navbtn2}>Help Center</button>
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
