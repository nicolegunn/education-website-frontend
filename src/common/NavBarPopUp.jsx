import styles from "./NavBarPopUp.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context";

export default function NavBarPopUp({ logOutFunction }) {
  const user = useContext(UserContext);

  return (
    <span className={styles.PopUpBox}>
      <Link
        className={styles.PopUpLink}
        to={`/${user.user_type}-profile-viewer`}
      >
        My Profile
      </Link>{" "}
      <br />
      <Link
        className={styles.PopUpLink}
        to={`/${user.user_type}-profile-viewer`}
      >
        Settings
      </Link>
      <br />
      <span onClick={logOutFunction}>
        <Link className={styles.PopUpLink}>Log out</Link>
      </span>
    </span>
  );
}
