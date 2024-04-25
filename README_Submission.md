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

## Authentication

### Login Process

1. **Prevent Default Form Submission**: The function starts by preventing the default form submission using `e.preventDefault()`. This is done to prevent the page from refreshing when the form is submitted.

2. **Field Validation**: This checks if the email and password fields are not empty. If either of them is empty, it alerts the user to fill in all fields and returns from the function.

3. **API Call**: If the fields are not empty, it makes a POST request to the `/login` endpoint on the server using `axios.post()`. The server is running on `localhost` with the port number provided in the `port` prop. The email, password, and type (student or teacher) are sent in the request body.

4. **Response Handling**: If the server responds with a status of 200, it means the login was successful. The function then calls the `logInFunction` prop with the user data received from the server. If the server responds with a status of 401, it means the password was incorrect, and an alert is shown to the user.

**The `handleLogin` function is called when the user clicks the "Submit" button on the login form. The type of user (student or teacher) is determined based on the `name` attribute of the button that was clicked. This is passed to the `handleLogin` function through the event object `e`.**

### Registering a New User

**Signup Method**

1. **Prevent Default Form Submission**: The function starts by preventing the default form submission using `e.preventDefault()`. This is done to prevent the page from refreshing when the form is submitted.

2. **Field Validation**: It checks if the name, email, password, and confirmPassword fields are not empty. If any of them is empty, it alerts the user to fill in all fields and returns from the function. It also checks if the password and confirmPassword fields match. If they don't, it alerts the user that the passwords do not match and returns from the function.

3. **User Data Preparation**: It prepares the user data to be sent to the server. This includes the name, email, password, and some dummy data for other fields. If the user is a student, additional dummy data is added.

4. **API Call**: It makes a POST request to the `/signup` endpoint on the server using `axios.post()`. The server is running on `localhost` with the port number provided in the `port` prop. The user data is sent in the request body.

5. **Response Handling**: If the server responds with a status of 200, it means the registration was successful. The function then calls the `handleLogin` function to log in the user. If the server responds with a status other than 200, an error message shows to the user.

The `handleSignup` function is called when the user clicks the "Submit" button on the signup form. The type of user (student or teacher) is determined based on the `name` attribute of the button that was clicked. This is passed to the `handleSignup` function through the event object `e`.

**Important**

This code does not handle other potential errors, such as network errors or server errors, and does not provide feedback to the user in those cases.

### Protected Routes & useNavigate

**useNavigate is a hook provided by the react-router-dom library. It returns a function that you can use to navigate programmatically within your application**

1. **Context**: The `LoggedInContext` is a React context that holds the login state of the user. If the user is logged in, `isLoggedIn` is `true`; otherwise, it's `false`.

2. **Route Protection**: The `ProtectedRoute` function takes an `element` prop, which is the component to render for the route. If `isLoggedIn` is `true`, it returns the `element` prop, rendering the component. If `isLoggedIn` is `false`, it returns `<Navigate to="/" />`, which redirects the user to the home page.

3. **Usage**: To use `ProtectedRoute`, wrap it around the component in the `element` prop of the `Route`. For example, `<Route path="/project-library" element={<ProtectedRoute element={<ProjectLibrary port={PORT} logOutFunction={logOutUser} />} />}`. This means that the `ProjectLibrary` component will only be rendered if the user is logged in. If the user is not logged in, they will be redirected to the home page.

**Important**

Make sure that useNavigate hook is installed, otherwise the you will not be able to access the protected routes.

This ensures that only authenticated users can access certain routes. If a user who is not authenticated tries to access a protected route, they are redirected to a public page (in this case, the home page).

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
A student may click on a ProjectCard which will take the student to the Learning Objectives page for the selected project. <br/>
The Learning Objectives page is the first page of the Student Dashboard.

Teachers are also able to access the Project Library, however they should not be able to access the Student Dashboard by clicking on a project.

For the purposes of Mission X, only one project can be accessed, and teacher access has not been restricted.

Available projects are stored in a MySQL database in a table named project. <br/>
All projects are selected from this database and stored in an array of objects, each representing a project, which is used to render ProjectCard components onto the Project Library page.

The user can apply a number of filters which filter the available projects so that only those meeting the user's selected criteria are displayed.

### Navigation

Upon login a student will be directed to the Project Library page. <br/>
If the user is a teacher, they can navigate to the Project Library from the sidebar within the Teacher Dashboard page. <br/>
A user can also navigate to the Project Library via the navigation bar at the top of their Profile Viewer Page or the Home Page (when logged in).

From the Project Library a student may navigate to the Learning Objectives page for a selected project by clicking on the corresponding ProjectCard. <br/>
For the purposes of Mission X, this has only been implemented for Project 1.

Teacher access should be restricted so that only students can navigate to the Learning Objectives for a given project, however this has not been implemented in Mission X.

Using the navigation bar at the top of the Project Library page, a user may navigate to the Home page, their Profile Viewer page or the first page of their Dashboard.

If the user is a student, clicking on PROFILE in the navigation bar will take them to the Student Profile Viewer.
If the user is a teacher, clicking on PROFILE in the navigation bar will take them to the Teacher Profile Viewer.

If the user is a student, clicking on DASHBOARD in the navigation bar will take them to the first page of the Student Dashboard (Learning Objectives for Project 1).
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

From the Project Library student can navigate to the Learning Objective page for a selected project by clicking on the corresponding ProjectCard.It shows the learning objectives corresponding to the selected project from database.The main content of this page is stored as a innerhtml with inline styling in the project table of mySQL database where table column named learning_objective. <br/>
For the purposes of Mission X, this has only been implemented for Project 1.

### Instructions

It shows the Instructions corresponding to the selected project from database. The main content of this page is stored as a innerhtml with inline styling in the project table of mySQL database where table column named instructions.

### Video Tutorial

It shows the Video corresponding to the selected project from database.The URL of youtube video link is stored in the project table of mySQL database where table column named video.

### Make Project

It's a static page it shows the screenshot stored in the image folder.
