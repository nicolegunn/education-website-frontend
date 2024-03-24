import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import level_up_works_logo from "../assets/NavBar/LevelUpWorks-white.png";
import avatar_white_icon from "../assets/NavBar/Avatar-white.png";
import new_zealand_flag from "../assets/NavBar/NZFlag.png";
import new_zealand_alternate_flag from "../assets/NavBar/MaoriFlag.png";

export default function NavBar() {
  return (
    <>
      <div className={styles.persistent_nav_bar}>
        <Link to="/">
          <img
            className={styles.level_up_works_logo}
            src={level_up_works_logo}
            alt="level_up_works_logo"
          />
        </Link>
        <div className={styles.navigation_bar}>
          <Link className={styles.radial_mount} to="/">
            <div>HOME</div>
          </Link>
          <Link className={styles.radial_mount} to="/about">
            <div>FEATURES</div>
          </Link>
          <Link className={styles.radial_mount} to="/TeacherProfileViewer">
            <div>TEACHERS</div>
          </Link>
        </div>
        <div className={styles.user_interface_plus_languageBar}>
          <div className={styles.language_flag_ribbon}>
            LANG:
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
          <div>
            <div className={styles.register_and_login}>
              <Link to="/home">
                <img
                  style={{ height: "24px" }}
                  src={avatar_white_icon}
                  alt="avatar_white_icon"
                />
              </Link>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                REGISTER
              </Link>{" "}
              |
              <Link
                to="/signin"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
