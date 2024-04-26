# Level Up Works Website

## Introduction

The Level Up Works Website is a Learning Management System.

- School Students use the platform to get their lesson instructions, request help, and submit work.
- School Teachers are able to track student progress and keep track of requests for help.

## Technologies Used

- Frontend - React
- Server - Express.js with Node.js
- Database - MySQL

## Installation and Setup

Complete the following steps to set up and run the project in development mode:

1. Clone the backend repository:
   ```
   git clone https://github.com/Mission-Ready/2402-L4FT13-missionx-backend-t1
   ```
2. Clone the frontend repository:
   ```
   git clone https://github.com/Mission-Ready/2402-L4FT13-missionx-frontend-t1
   ```
3. Navigate to the backend folder and install dependencies
   ```
   npm i
   ```
4. Navigate to the frontend folder and install dependencies
   ```
   npm i
   ```
5. Navigate to the backend folder and start the server
   ```
   npm run dev
   ```
6. Navigate to the frontend folder and run the project in development mode
   ```
   npm run dev
   ```

## Routes - Eunhye
Frontend routes were set up as part of the initial set up of this project including the overall folder structure. Each page has its own route and css module, along with its own components folder.

## Authentication

### Login Process - Andrei

### Registering a New User - Andrei

### Protected Routes - Andrei

### UserContext

A context called UserContext, created using the React useContext hook, holds all user information for a logged in user except for the user's password. <br/>
This context is based on the user state variable which is held in the top level App component, and is updated using the setUser function when a user logs in. <br/>
Upon login all fields (other than password) from the student or teacher table of the MySQL database are returned in the response to a get request which is actioned upon login. <br/>
A key called user_type (student or teacher) is added to the UserContext together with the fields and corresponding values from the MySQL database query.

The UserContext is available to all components within the project, and is used within the sidebar on the Student and Teacher Dashboards (profile_pic), the Student and Teacher Profile Viewers, the Project Library (user_type) and the navigation bar at the top of the Home, ProjectLibrary and Profile Viewer Pages.

## Project Library

The main purpose of this page is to allow students to select a project. <br/>
Upon login a student will be directed to the Project Library page.

A project is represented on the page by a ProjectCard component which includes an image representing the project. <br/>
A student may click on a ProjectCard which will take the student to the Instructions page for the selected project. <br/>
The Instructions page is the first page of the Student Dashboard.

Teachers are also able to access the Project Library, however they should not be able to access the Student Dashboard by clicking on a project.

For the purposes of Mission X, only one project can be accessed, and teacher access has not been restricted.

Available projects are stored in a MySQL database in a table named project. <br/>
All projects are selected from this database and stored in an array of objects, each representing a project, which is used to render ProjectCard components onto the Project Library page.

The user can apply a number of filters which filter the available projects so that only those meeting the user's selected criteria are displayed.

### Navigation

Upon login a student will be directed to the Project Library page. <br/>
If the user is a teacher, they can navigate to the Project Library from the sidebar within the Teacher Dashboard page. <br/>
A user can also navigate to the Project Library via the navigation bar at the top of their Profile Viewer Page or the Home Page (when logged in).

From the Project Library a student may navigate to the Instructions page for a selected project by clicking on the corresponding ProjectCard. <br/>
For the purposes of Mission X, this has only been implemented for Project 1.

Teacher access should be restricted so that only students can navigate to the instructions for a given project, however this has not been implemented in Mission X.

Using the navigation bar at the top of the Project Library page, a user may navigate to the Home page, their Profile Viewer page or the first page of their Dashboard.

If the user is a student, clicking on PROFILE in the navigation bar will take them to the Student Profile Viewer.
If the user is a teacher, clicking on PROFILE in the navigation bar will take them to the Teacher Profile Viewer.

If the user is a student, clicking on DASHBOARD in the navigation bar will take them to the first page of the Student Dashboard (Instructions for Project 1).
If the user is a teacher, clicking on DASHBOARD in the navigation bar will take them to the first page of the Teacher Dashboard (Student Profiles).

A button is included below the ProjectCard components which will take the user back to the top of the page.

If the user is a teacher, an additional button is included which will take the teacher to the first page of the Teacher Dashboard (Student Profiles).

### Filter Logic

A user can filter by:

- Free or subscription based projects
- Activity type
- Year level
- Subject matter
- Course level
  - Beginner
  - Intermediate
  - Advanced

The user can also select how many projects to display on the page, with the options being 5, 10 or All.

If no filters are selected in any given filter category, then no filters from that category are applied.

Three state variables are used in the filtering process:

- allProjects
  - An array of objects, each representing a project.
  - Set upon mount using a get request which returns all projects from the project table within the mySQL database.
- filtersObj
  - An object holding an array for each filter type.
  - The object keys match the field names in the MySQL project table.
  - Each filter is set to an empty array upon mount.
- filteredProjects
  - An array of objects representing the filtered projects.
  - This array is used to render the ProjectCard components using the map Array method.

When a filter checkbox or button is clicked, the handleFilter function is called by the handleChange or handleClick function associated with the CheckboxFilter or ButtonFilter component.

The handleFilter function passes the existing filtersObj state variable to the createFilter function, together with details of the name (representing the group of checkboxes or FilterButtons to which the checkbox or button belongs), the id of the checkbox or filter (equivalent to its label) and a boolean value indicating whether it has been selected or de-selected.

The createFilter function creates a new filter object by creating a copy of the existing filtersObj and adding or removing the value (which is an adjusted version of the checkbox or button's id property) from the appropriate array. <br/> The appropriate array is selected using the name property of the checkbox or filter selected. <br/>
The name properties of the checkboxes and filters match the keys within the filter objects.

The updated filter object is passed to the newFilteredProjects function which returns a filtered version of the allProjects array.

The setFiltersObj and setFilteredProjects state updating functions are then called with the new filter object and new filtered projects array.

The filteredProjects state variable is then used to render the ProjectCard components using the map Array method.

## User Profile Pages

The Profile Pages display the information about the logged in user sourced from the student or teacher table in the MySQL database.

The StudentProfileViewer and TeacherProfileViewer both utilize the ProfileViewer component. <br/>
The ProfileViewer includes two main components:

- PhotoCard
  - Includes the users profile image and buttons.
- ProfileCard
  - Includes information about the user sourced from the student or teacher table in the MySQL database.

The ProfileViewer component takes the following props:

- buttons
  - This prop holds the names of the buttons that are rendered on the PhotoCard component.
  - These differ depending on the user_type.
- cardFields
  - This prop holds the labels and values of each field mapped in the ProfileCard componet.
- navButtons
  - This prop holds the text and links passed to the NavBar component.
  - These differ depending on the user_type.
- logOutFunction
  - This is the logOutUser function passed down from App.jsx.
  - When a user logs out the UserContext is set to a blank array with a default avatar profile picture and the user is redirected to the Home page.

## Student Dashboard

### Learning Objectives
From the Project Library  student can navigate to the Learning Objective page for a selected project by clicking on the corresponding ProjectCard.It shows the learning objectives corresponding to the selected project from database.The main content of this page is stored as a innerhtml with inline styling in the project table of mySQL database where table column named learning_objective. <br/>
For the purposes of Mission X, this has only been implemented for Project 1.
### Instructions
It shows the Instructions corresponding to the selected project from database. The main content of this page is stored as a innerhtml with inline styling in the project table of mySQL database where table column named instructions.
### Video Tutorial
It shows the Video corresponding to the selected project from database.The URL of youtube video link is stored in the project table of mySQL database where table column named video.
### Make Project
It's a static page it shows the screenshot stored in the image folder.

### Submitting a Project
On this page, students can submit a screenshot of their project by using the 'Send Photo' button. The submission uses FileStack to store the image URLs which then gets updated on the database.

## Teacher Dashboard

### Progress Tracker

### Student Profiles

### Project Submissions
This page is for the teacher and displays project submissions received by students. The screenshots received on the 'Submit Project' page by students uses FileStack to create URLs for the submitted images which then gets updated on the database. Then, these image URLs get displayed on the frontend of this page.


