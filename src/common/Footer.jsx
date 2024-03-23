import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Company}>
        <div className={styles.Title}>COMPANY</div>
        <ul className={styles.List}>
          <li className={styles.ListItem}>About Us</li>
          <li className={styles.ListItem}>Careers</li>
          <li className={styles.ListItem}>Partners</li>
        </ul>
      </div>
      <div className={styles.Courses}>
        <div className={styles.Title}>COURSES</div>
        <ul className={styles.List}>
          <li className={styles.ListItem}>Register</li>
          <li className={styles.ListItem}>Login</li>
          <li className={styles.ListItem}>Projects</li>
          <li className={styles.ListItem}>Teachers</li>
          <li className={styles.ListItem}>Parents</li>
          <li className={styles.ListItem}>Resources</li>
        </ul>
      </div>
      <div className={styles.Support}>
        <div className={styles.Title}>SUPPORT</div>
        <ul className={styles.List}>
          <li className={styles.ListItem}>FAQs</li>
          <li className={styles.ListItem}>Helpdesk</li>
          <li className={styles.ListItem}>Contact Us</li>
        </ul>
      </div>
      <div className={styles.Legal}>
        <div className={styles.Title}>LEGAL</div>
        <ul className={styles.List}>
          <li className={styles.ListItem}>Terms & Conditions</li>
          <li className={styles.ListItem}>Privacy Policy</li>
        </ul>
      </div>
      <div className={styles.LevelUpDescription}>
        <div className={styles.Title}>LevelUp Works</div>
        <p className={styles.Paragraph}>
          LevelUp Works is an Auckland-based enterprise dedicated to developing
          game-based learning software to help teachers in response to the New
          Zealand Digital Technologies & Hangarau Matihiko.
          <br /> <br />
          alan@levelupworks.com <br /> (021) 668 185
        </p>
      </div>
    </footer>
  );
}
