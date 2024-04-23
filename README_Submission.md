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
   npm i or npm install
   ```
4. Navigate to the frontend folder and install dependencies
   ```
   npm i or npm install
   ```
5. Navigate to the backend folder and start the server
   ```
   npm run dev
   ```
6. Navigate to the frontend folder and run the project in development mode
   ```
   npm run dev
   ```

## Routes - Eunhye - you may want to talk about the routes you set up, or delete

## Authentication

### Login Process - Andrei

### Registering a New User - Andrei

### Protected Routes - Andrei

### UserContext - Nicole

## Project Library

Upon login a student will be directed to the project-library.
Available projects are stored in a MySQL database within the project table.
All projects are mapped from this database and displayed on the project-library page.

### Navigation

From the project-library a student may navigate to the instructions for a given project by clicking on the project container.
For the purposes of Mission X this has only been implemented for project 1.

Teacher access should be restricted so that only students can navigate to the instructions for a given project, however this has not been implemented in Mission X.

Using the navigation bar at the top of the project-library page, a user may navigate to the home page, their profile page or the first page of their dashboard.

If the user is a student, clicking on PROFILE in the nav bar will take them to the student-profile-viewer.
If the user is a teacher, clicking on PROFILE in the nav bar will take them to the teacher-profile-viewer.

If the user is a student, clicking on DASHBOARD in the nav bar will take them to the first page of the student-dashboard (instructions for project 1).
If the user is a teacher, clicking on DASHBOARD in the nav bar will take them to the first page of the teacher-dashboard (student-profiles).

A button is included after the project images which will take the user back to the top of the page.

If the user is a teacher, an additional button is included which will take the teacher to the first page of the teacher-dashboard (student-profiles).

### Filter Logic

A user can filter by:

- Free or subscription based projects
- Activity type
- Year level
- Subject matter
- Course level - Beginner - Intermediate - Advanced
  The user can also select how many projects to display on the page, with the options being 5, 10 or All.
  If no filters are selected in any given filter category, then no filters are applied in that category.

## User Profile Pages - Nicole

## Student Dashboard

### Instructions

### Video Tutorial

### Make Project

### Submitting a Project

## Teacher Dashboard

### Progress Tracker

### Student Profiles

### Project Submissions
