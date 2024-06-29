import { useContext } from "react";
import { DateTime } from "luxon";
import { UserContext } from "../../context.js";
import ProfileViewer from "../ProfileViewers/ProfileViewer";

export default function StudentProfileViewer({ logOutFunction }) {
  const student = useContext(UserContext);

  const cardFields = [
    { label: "School", value: student.school },
    { label: "Teacher", value: student.teacher_name },
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
    { label: "DASHBOARD", link: "/learning-objectives" },
  ];

  return (
    <>
      <ProfileViewer
        buttons={["EDIT PROFILE", "CHANGE PHOTO"]}
        cardFields={cardFields}
        navButtons={navButtons}
        logOutFunction={logOutFunction}
      />
    </>
  );
}
