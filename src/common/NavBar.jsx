import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext, LoggedInContext } from "../context.js";
import styles from "./NavBar.module.css";
import level_up_works_logo from "../assets/NavBar/LevelUpWorks-white.png";
import avatar_white_icon from "../assets/NavBar/Avatar-white.png";
import new_zealand_flag from "../assets/NavBar/NZFlag.png";
import new_zealand_alternate_flag from "../assets/NavBar/MaoriFlag.png";

export default function NavBar({ navButtons = [], updateShowLogin }) {
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
          {navButtons.map((btn, index) => {
            return (
              <Link key={index} className={styles.radial_mount} to={btn.link}>
                <div>{btn.label}</div>
              </Link>
            );
          })}
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
              <div
                style={{ textDecoration: "none", color: "#ffffff" }}
                onClick={updateShowLogin}
              >
                REGISTER
              </div>
              <div
                style={{ textDecoration: "none", color: "#ffffff" }}
                onClick={updateShowLogin}
              >
                LOGIN
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
