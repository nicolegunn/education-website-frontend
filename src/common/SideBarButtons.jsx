import React from "react";
import styles from "./SideBarButtons.module.css";
import { Link } from "react-router-dom";

export default function SideBarButtons(props) {
    return (
        <Link to={props.link} className={styles.SideBarButtonsLink}>
            <div className={styles.SideBarButtonsList}>
                <img src={props.image} className={styles.SideBarButtonIcon} alt="" />
                <div className={styles.SideBarButtonTextContainer}>
                    <p className={styles.SideBarButtonText}>{props.buttonText}</p>
                    </div>
            </div>
        </Link>
    )
}