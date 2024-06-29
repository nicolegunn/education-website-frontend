import {useState } from "react";
import { PickerOverlay } from "filestack-react-18";
import styles from "./FileStack.module.css";
 
const FileStack = () => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
 
  const togglePickerOverlayVisibility = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };

  function patchSubmission(submission) {
    fetch("http://localhost:4000/submit-project", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submission: submission, student_id: 2, project_id: 5 }),   
    });
    if (response.ok) {
      console.log("Image URL sent successfully");
    } else {
      console.error("Failed to send image URL to server");
    }
  } 
  
  return (
    <div>
      <button
        className={styles.SendPhotoButton}
        onClick={togglePickerOverlayVisibility}
      >
        <img
          className={styles.BigPic}
          src="./src/assets/StudentDashboard/sendPhoto.png"
          alt="Send Photo"
        />
        <br />
        Send Photo
      </button>
 
      {isPickerOverlayVisible && (
        <PickerOverlay
          apikey="A9VOm58TLTudg6YPBXWiwz"
          onSuccess={(result) => {
            patchSubmission(result.filesUploaded[0].url)
           
          }}
        />
      )}
    </div>
  );
};
 
export default FileStack;