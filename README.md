# Workout Tracker

Creating a workout tracker using MongoDb, Mongoose & Express to create, record and update daily workout plans.

## User Story

As a user I want to be able to record, view and update my daily work outs. I want to be able to track the:
* name of exercise
* type of exercise (resistance or cardio)
* weight
* sets
* reps
* duration
* distance

## MVP

User should be able to:
* 1) Create a new workout plan
* 2) Add/update exercises on a previous plan
* 3) View the combined weight of multiple exercises on a stats page

## Process

Using provided front end template, and database seeds add the following:

1. Models folder, containing Workout model schema. Based on seed instances already provided.
2. Routes folder
* Views route for HTML pages
* API routes, for CRUD routes. To create new, update and view workouts.
3. Server.js with express routes and middleware
4. Gitignore file, prevent installed node mode uploads

### Requirements

NPM - Express
NPM - Mongoose
Middleware - Morgan
Database - MongoDb

### Screenshots

![](https://github.com/SILamble/Unit-17-Nosql-Homework-Workout-Tracker/blob/master/public/assets/Screenshots/Capture001.PNG)
![](https://github.com/SILamble/Unit-17-Nosql-Homework-Workout-Tracker/blob/master/public/assets/Screenshots/Capture002-new%20workout.PNG)
![](https://github.com/SILamble/Unit-17-Nosql-Homework-Workout-Tracker/blob/master/public/assets/Screenshots/Capture003-stats%20page.PNG)
![](https://github.com/SILamble/Unit-17-Nosql-Homework-Workout-Tracker/blob/master/public/assets/Screenshots/Capture004-folder.PNG)

## Deployment

Github Repo: https://github.com/SILamble/Unit-17-Nosql-Homework-Workout-Tracker
Heroku Deployed App: https://workout-tracker-sil-2020.herokuapp.com/

## Authors

Stuart Lamble: https://github.com/SILamble
