import React, { useEffect, useState } from "react";
import { PickerOverlay } from "filestack-react-18";
import styles from "./FileStack.module.css";
 
const FileStack = () => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
  // const [imageUrl, setImageUrl] = useState("");
 
  const togglePickerOverlayVisibility = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };
 
  // useEffect(() => {
  //   const sendImageUrlToServer = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/submit-project", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ imgURL: imageUrl }),
  //       });
  //       if (response.ok) {
  //         console.log("Image URL sent successfully");
  //       } else {
  //         console.error("Failed to send image URL to server");
  //       }
  //     } catch (error) {
  //       console.error("Error sending image URL to server:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
 
  //   if (imageUrl) {
  //     sendImageUrlToServer();
  //   }
  // }, [imageUrl]);

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
 

// import React, { useState } from "react";
// import { PickerOverlay } from "filestack-react-18";

// const FileStack = ({ setImageUrl }) => {
//   const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);

//   const API_KEY = import.meta.env.REACT_APP_FILESTACK_API_KEY

//   const handleVisible = () => {
//     setIsPickerOverlayVisible(!isPickerOverlayVisible);
//   };

//   return (
//     <div>
//       <button onClick={handleVisible}>Upload</button>

//       <div>
//         {isPickerOverlayVisible && (
//           <PickerOverlay
//             apikey={API_KEY}
//             onSuccess={(result) => {
//               setImageUrl(result.filesUploaded[0].url);
//               setIsPickerOverlayVisible(false);
//             }}
//           />
//         )}
//       </div>
//  {/* Store this url to your database */}
//       {/* <a href={imageUrl}>click and open image url </a> */}
//     </div>
//   );
// };

// export default FileStack;