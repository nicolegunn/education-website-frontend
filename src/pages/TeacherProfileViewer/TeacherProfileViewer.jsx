import ProfileViewer from "../ProfileViewers/ProfileViewer";
import { DateTime } from "luxon";

export default function TeacherProfileViewer({ teacher }) {
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
        userType="teacher"
        user={teacher}
        buttons={["EDIT PROFILE", "CHANGE PHOTO", "SETTINGS"]}
        cardFields={cardFields}
      />
    </>
  );
}
