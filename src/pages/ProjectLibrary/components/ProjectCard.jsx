import React from "react";

export default function ProjectCard({ projectObj }) {
  const activity_type = projectObj.activity_type;
  return (
    <div>
      <img src={`images/projects${projectObj.project_pic}`} alt="" />
      <h3>{projectObj.name}</h3>
      <p>{`${projectObj.course.toUpperCase()} | ${
        activity_type.charAt(0).toUpperCase() +
        activity_type.substr(1).toLowerCase()
      }`}</p>
    </div>
  );
}
