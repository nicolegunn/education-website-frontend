import styles from "./PhotoCard.module.css";
import Button from "../../../common/Button";

export default function PhotoCard({ user, buttons }) {
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
        src={user.profile_pic}
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
