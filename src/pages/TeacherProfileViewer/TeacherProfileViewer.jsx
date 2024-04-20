import { useContext } from "react";
import { UserContext } from "../../context.js";
import ProfileViewer from "../ProfileViewers/ProfileViewer";
import { DateTime } from "luxon";

const navButtons = [
  { label: "HOME", link: "/" },
  { label: "PROJECTS", link: "/project-library" },
  { label: "DASHBOARD", link: "/progress-tracker" },
];

export default function TeacherProfileViewer({ logOutFunction }) {
  const teacher = useContext(UserContext);

  const cardFields = [
    { label: "School", value: teacher.school },
    {
      label: "Date of Birth",
      value: DateTime.fromISO(teacher.date_of_birth).toFormat("d LLLL yyyy"),
    },
    {
      label: "Contact No",
      value: teacher.contact_number,
    },
    { label: "Email Address", value: teacher.email },
  ];

  return (
    <>
      <ProfileViewer
        buttons={["EDIT PROFILE", "CHANGE PHOTO", "SETTINGS"]}
        cardFields={cardFields}
        navButtons={navButtons}
        logOutFunction={logOutFunction}
      />
    </>
  );
}
