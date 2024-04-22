import React, { useState } from "react";
import { PickerOverlay } from "filestack-react-18";

const FileStack = ({ setImageUrl }) => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);

  const API_KEY = import.meta.env.REACT_APP_FILESTACK_API_KEY

  const handleVisible = () => {
    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };

  return (
    <div>
      <button onClick={handleVisible}>Upload</button>

      <div>
        {isPickerOverlayVisible && (
          <PickerOverlay
            apikey={API_KEY}
            onSuccess={(result) => {
              setImageUrl(result.filesUploaded[0].url);
              setIsPickerOverlayVisible(false);
            }}
          />
        )}
      </div>
 {/* Store this url to your database */}
      {/* <a href={imageUrl}>click and open image url </a> */}
    </div>
  );
};

export default FileStack;