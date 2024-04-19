import { useContext } from "react";
import { UserContext } from "../../../context";
import styles from "./PhotoCard.module.css";
import Button from "../../../common/Button";

export default function PhotoCard({ buttons }) {
  const profilePic = useContext(UserContext).profile_pic
  
  const btnStyle = {
    border: "2px solid #43C0F6",
    color: "#43C0F6",
    backgroundColor: "white",
    marginBottom: "25px",
  };

  return (
    <div className={styles.Card}>
      <img
        className={styles.ProfileImg}
        src={profilePic}
        alt="profile picture"
      />
      <div className={styles.ButtonBox}>
        {buttons.map((btn, index) => (
          <Button key={index} style={btnStyle}>
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
}
