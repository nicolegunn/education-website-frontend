import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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

function App() {
  //Andrei - you will probably need to tweak these once you do your login tables
  //set isLoggedIn to true for now, will need to change this to false as inital (updated to true when user logs in)
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //Inital state should be '' until someone is logged in, I've just set it to 'teacher' as a temporary measure
  const [userType, setUserType] = useState("teacher");

  //student and teacher are objects of info from the database (see axios requests in useEffect below)
  //the request will need to be dynamic - currently just hooked into first student and teacher
  //student state will only be populated if logged in and user is student, teacher will be populated if anyone is logged in (because each student has a teacher
  //teacherID would come from student table if the person logged in is a student
  const [student, setStudent] = useState([]);

  const [teacher, setTeacher] = useState([]);

  //Andrei, these will need to be dynamic, I've just set to id of 1 for student and teacher for now
  //If the user is a student the teacher ID will come from the student data
  //Change to run on isLoggedIn change once set up
  useEffect(() => {
    axios
      .get("http://localhost:4000/student/1")
      .then((res) => {
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:4000/teacher/1")
      .then((res) => {
        setTeacher(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Routes>
        {/* Andrei - note props added to Home, ProjectLibrary and the 2 ProfileViewers
        Andrei - the user prop in Home will need to be dynamic - i.e. if teacher logs in then user will be the teacher and if student logs in will need to be student */}
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} user={teacher} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/project-library"
          element={
            <ProjectLibrary
              isLoggedIn={isLoggedIn}
              userType={userType}
              user={teacher}
            />
          }
        />
        <Route
          path="/student-profile-viewer"
          element={
            <StudentProfileViewer
              isLoggedIn={isLoggedIn}
              student={student}
              teacher={teacher}
            />
          }
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
          element={
            <TeacherProfileViewer isLoggedIn={isLoggedIn} teacher={teacher} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
