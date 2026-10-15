---
title: 'UFitness: Mobile Fitness App for Students'
short: UFitness
tagline: Short workouts that fit a dorm room and find their own place in a student's schedule.
role: Project Manager
team: Team of 5
period: Jan – May 2026
sort: 202601
group: led
led: A five-member team in Trello, from concept to a feature-complete app presented at a university open house.
built: The database architecture and authentication behind the app, using Cloud Firestore and Firebase Authentication with email and Google sign-in.
outcome: More than 100 downloads on campus.
stack: [React Native, Expo, Firebase Authentication, Cloud Firestore, expo-calendar, expo-sensors, react-native-svg]
---

## The problem

Many students want to exercise but face three limits at once: packed class schedules, small dorm rooms, and no budget for a gym or equipment. Most fitness programs ask for an hour or more and plenty of floor space.

## The idea

UFitness offers workouts of 10 to 20 minutes that fit in a 2×2 meter space and need no equipment. It also schedules them into the free time a student already has.

- The Smart Gap Finder reads the phone's calendar, finds free windows of at least 20 minutes between classes, and ranks them. Silver windows suit a quick HIIT or micro session, Gold windows (45 minutes or more) suit a full workout, and Diamond windows (two hours or more) suit a longer one. Events added in the app are written back to the phone's calendar.
- Five routines (HIIT, Strength, Core, Cardio and Micro) are generated each day from a date-seeded shuffle of a dorm-friendly exercise library, so they change at midnight without a server. A session player runs a timer for timed moves and waits for confirmation on rep-based ones.
- Steps come from the phone's pedometer, and water intake can be logged in milliliters, ounces or glasses. Charts cover workouts, steps, calories, minutes and hydration over ranges from a single day to a full year. A Compete tab ranks the top 50 users by steps.

## What I did

I managed the five-member team in Trello through delivery and oversaw the database architecture and authentication. The app keeps each user's data in a single Firestore document that syncs in real time and is cached on the device, so it opens instantly. Measurements are stored in metric units and converted only for display, and a day-rollover routine moves each day's stats into history before resetting the daily counters. Sign-in uses Firebase Authentication with email and password or a Google account.

## Outcome

The team shipped a feature-complete app, presented it at a university open house, and reached more than 100 downloads on campus.
