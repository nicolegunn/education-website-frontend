import styles from "./PhotoCard.module.css";
import Button from "../../../common/Button";

export default function PhotoCard({ student }) {
  const btnStyle = {
    border: "2px solid #43C0F6",
    color: "#43C0F6",
    backgroundColor: "white",
  };

  return (
    <div className={styles.Card}>
      <img
        className={styles.ProfileImg}
        src={student.profile_pic}
        alt="profile picture"
      />
      <div className={styles.ButtonBox}>
        <Button style={btnStyle}>EDIT PROFILE</Button>
        <Button style={btnStyle}>CHANGE PHOTO</Button>
      </div>
    </div>
  );
}
