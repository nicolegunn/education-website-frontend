import { useState, useEffect } from "react";
import ProfileViewer from "../ProfileViewers/ProfileViewer";
import { DateTime } from "luxon";
import axios from "axios";

export default function StudentProfileViewer({ isLoggedIn, student }) {
  const [teacherName, setTeacherName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/teacher/${student.teacher_id}`)
      .then((res) => {
        setTeacherName(res.data[0].name);
      })
      .catch((err) => console.log(err));
  });

  const cardFields = [
    { label: "School", value: student.school },
    { label: "Teacher", value: teacherName },
    {
      label: "Course",
      value: student.course
        ? student.course[0].toUpperCase() + student.course.substring(1)
        : "",
    },
    {
      label: "Date of Birth",
      value: DateTime.fromISO(student.date_of_birth).toFormat("d LLLL yyyy"),
    },
    {
      label: "Contact No",
      value: student.contact_number,
    },
    { label: "Email Address", value: student.email },
  ];

  const navButtons = [
    { label: "HOME", link: "/" },
    { label: "PROJECTS", link: "/project-library" },
    { label: "SUBMISSIONS", link: "/project-submissions" },
  ];

  return (
    <>
      <ProfileViewer
        isLoggedIn={isLoggedIn}
        userType="student"
        user={student}
        buttons={["EDIT PROFILE", "CHANGE PHOTO"]}
        cardFields={cardFields}
        navButtons={navButtons}
      />
    </>
  );
}
