import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary.jsx";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer.jsx";
import LearningObjectives from "./pages/LearningObjectives/LearningObjectives.jsx";
import Instructions from "./pages/Instructions/Instructions.jsx";
import MakeProject from "./pages/MakeProject/MakeProject.jsx";
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial.jsx";
import ProjectSubmissions from "./pages/ProjectSubmissions/ProjectSubmissions.jsx";
import SubmitProject from "./pages/SubmitProject/SubmitProject.jsx";
import StudentProfiles from "./pages/StudentProfiles/StudentProfiles.jsx";
import ProgressTracker from "./pages/ProgressTracker/ProgressTracker.jsx";
import HelpRequests from "./pages/HelpRequests/HelpRequests.jsx";
import TeacherProfileViewer from "./pages/TeacherProfileViewer/TeacherProfileViewer.jsx";
import { tempUser } from "./common/TempUserFile.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //User will be an object of all the items from the database relating to the user
  //I'm guessing the database info will say whether the user is a teacher or student so we can pull that info from user
  const [user, setUser] = useState(tempUser);
  const [selectedProject, setSelectedProject] = useState(1);

  //state updating functions will need to go in here e.g.
  const updateSelectedProject = (projectID) => {
    setSelectedProject(projectID);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/project-library"
          element={<ProjectLibrary userType={user.user_type} />}
        />
        <Route
          path="/student-profile-viewer"
          element={<StudentProfileViewer user={user} />}
        />
        <Route path="/learning-objectives" element={<LearningObjectives />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/make-project" element={<MakeProject />} />
        <Route path="/video-tutorial" element={<VideoTutorial />} />
        <Route path="/project-submissions" element={<ProjectSubmissions />} />
        <Route path="/submit-project" element={<SubmitProject />} />
        <Route path="/student-profiles" element={<StudentProfiles />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/help-requests" element={<HelpRequests />} />
        <Route
          path="/teacher-profile-viewer"
          element={<TeacherProfileViewer />}
        />
      </Routes>
    </>
  );
}

export default App;
