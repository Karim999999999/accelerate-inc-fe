# Accelerate - SEI Project 3

## Introduction:

Accelerate is a Full-Stack MERN (MongoDB, Express, React and Node) application with CRUD functionality. The project was created over a one week period in a group of three (with Marco and Michael). Accelerate is a one-stop web tool for managing athlete applications, medical reporting, sessions, attendance, and article publication in a dedicated blogging system.

## The Brief

Build a full-stack application by making your own back-end and your own front-end.
Use an Express API to serve your data from a Mongo database.
Consume your API with a separate front-end built with React.
Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.
Be deployed online so it’s publicly accessible.

## Technologies Used

### Back-End

Node.js
MongoDB
Mongoose
Express
Nodemon
Bcrypt
JSON Web Token

### Front-End

React
CSS
Axios
Cloudinary (image uploading and hosting)
React-Router-Dom

### Development Tools

Adobe XD (wireframing)
Postman
Git & GitHub
Heroku (deployment)
VS Code

## Production Plan

### Phase 1 - Concept [Day 1]

I created this project with inspiration from an amputee cycling team in a refugee camp that I manage. While the concept started off as large and complex, the team worked together to prioritize the features of the product based on importance and feasibility within the tight time for this hackathon. This phase ended with the prioritization of the following features:

Article Publication and Management System
Site User Management System with multiple user permission tiers
Athlete Applications Management System
Athletes Medical Complications Management System
Training Sessions Management System
Athlete Attendance Management System
CSS Styling for mobile optimization

### Phase 2 - Design [Day 2]

The UI/UX Design, and Branding is borrowed from designs which I created for my cycling team, the sunbirds. The wireframing was done on Adobe XD, creating a clear outline for the user journeys for each of the 7 features identified above, as well as for a home page. To simplify Styling and Build, components were then simplified, allowing us to identify primary components to create and use across the site.

### Phase 3 - Planning [Day 2]

Using Airtable, I created a new base in his sports team account in order to manage the construction of components, user journeys and APIs. The build process was split into:
API Dev.
Front End Template components.
Front end Build for each feature.

We then assigned each member a full-stack back-end and front end feature to develop. As well as dividing the template component production to allow for easy replication of recurring components.

### Phase 4 - Back-end Development [Day 3&4]

The application was divided into a client-side and server-side. To close one chapter we began by creating the back-end using MongoDB, where each member developed different models and controllers. The links were then tested on Postman, after which development of the front end components commenced.

### Phase 5 - front-end Component Development [day 5]

We started by creating template code samples for getting and pushing data. These came along with components to manipulate the data. We created a form template, card template and table template dividing the work equally across the team members

### Phase 6 - front-end Build [day 5 and 6]

When the components on the client-side were developed, we merged and made sure our components were synced. We then divided the user journeys between Marco, Michael and Karim in order to avoid clashing across the production process and allow us to push to our own branches on Github.

### Phase 7 - Styling [day 7]

Styling was done consecutively to component development of the template components, however, the final stage involved Marco developing the CSS for the primary components like the NavBar.

### Phase 8 - Debugging and Optimization [day 8]

Following the development cycle, the team debugged the program and worked on optimizing the code base used for the project.

# Back-end:

## What Database type was used?

MongoDB was used to power the back-end for this application.

## Models:

### Medical Incidents:

```js
const medicalIncidentsSchema = new mongoose.Schema({
  medicDetails: {
    type: mongoose.Schema.ObjectId,
    ref: 'Users',
    required: true,
  },
  medicalIncident: {
    type: String,
    required: true,
  },
  descriptionOfIncident: {
    type: String,
    required: true,
  },
  medicalTreatment: {
    type: String,
    required: true,
  },
  counterIndications: {
    type: String,
    required: true,
  },
  barredFromHeavyExercise: {
    type: Boolean,
  },
  barredFromLightExercise: {
    type: Boolean,
  },
  durationOfBarFromExceriseDays: {
    type: Number,
  },
});
```

This is the medical incidents Schema, it is nested within an array in the Athlete Profile Schema. The Controllers push the medical Incident into the athlete's medical incidents property. Each Medical incident has its own ID which means it can be edited.

### Athlete Profile:

```js
const athleteSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    profilePhotoUrl: { type: String },
    yearStartedCycling: { type: Number, required: true },
    previousSportingExperience: { type: String, required: true },
    injury: { type: String, required: true },
    biography: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    employmentStatus: { type: String, required: true },
    applicationStatus: { type: String, required: true },
    medicalIncidents: [medicalIncidentsSchema],
    attendance: [{ type: mongoose.Types.ObjectId, ref: 'Sessions' }],
    dateAccepted: { type: Date },
  },
  { timestamps: true }
);
```

The athlete schema is used to keep track of the athletes’ data and performance. The athlete contains a linked field to the Sessions database in order to keep track of attendance. As session attendance is linked to athlete IDs, when it is tagged it should automatically tag. (This does not currently work). The medical Incidents Schema is an example of a nested schema, where the controllers allow for the medical incidents to be pushed into the array.

### Articles:

```js
const articleSchema = new mongoose.Schema(
  {
    title: { type: String },
    author: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, // we'll make it an ObjectID once we have users
    writtenBy: { type: String },
    body: { type: String },
    categories: [String], // is array okay? thought that one article could belong to more than one category
    status: { type: String },
  },
  { timestamps: true }
);
```

The schema for articles contains an Author property that is a linked Id to the User Schema. Making it required: true ensures that only a logged in user can make a request. The data will be taken from the JWT token in the request header. Timestamps are included in the Schema.

### Sessions:

```js
const sessionSchema = new mongoose.Schema(
  {
    dateAndTime: { type: Date, required: true },
    sessionLength: { type: Number, required: true },
    sessionType: { type: String, required: true },
    distanceCycledKm: { type: Number, required: true },
    coach: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    attendance: [{ type: mongoose.Types.ObjectId, ref: 'Athletes' }],
    sessionStatus: { type: String, required: true, default: 'upcoming' },
    location: String,
    // photosUrls: [photoSchema],
  },
  { timestamps: true }
);
```

### Users:

```js
const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  articles: [{ type: mongoose.Types.ObjectId, ref: 'Article' }],
  isAdmin: Boolean,
  isWriter: Boolean,
  isEditor: Boolean,
  isCoach: Boolean,
  isAthlete: Boolean,
  isMedical: Boolean,
});
```

Boolean Fields for user schema allow us to set user permissions across the app’s controllers.

### User Presave Modification:

```js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
UserSchema.pre('save', function encryptPassword(next) {

  if (this.isModified('password')) {
    // ! Hashing the password
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  }
  // ! Tell mongoose to continue its lifecycle
  next();
```

This function hashes the password before it is saved in the database:
this -> new document that's gonna be created { username: ..., password: ... etc. }
hashSync -> turn my password into a hash
bcrypt.genSaltSync() -> adds a SALT. A salt is an extra string that gets added to the end
of our hash, making it just a little bit more secure.
If the password has changed…

```js
UserSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};
export default mongoose.model('User', UserSchema);
```

This function will compare the password the user logs in with, with the hashed pw in database. So the 2 hashes get compared together, if they're the same, you're golden.

## Controllers:

### CRUD Controlllers:

CRUD controls were developed for every model allowing for manipulation of the database on a permission basis. This maintained secure access through JWT tokens.

### Auth:

Auth controllers check if passwords match and create a JWT token stored in local storage. The key contains user permissions and Id.
Middleware:
The middleware was developed to validate JWT tokens for certain API routes. This helps ensure the security of the information on the database from non logged in users.
Seed Data:
Seed data was developed by Michael for dev purposes.
Client/Front End:
Axios to get Data:
Axios were used to pass data to the Backend including JWT tokens and form inputs. It was also used to manage to get requests and their permissions.
For Secure Requests
For Unsecure Requests

## Primary Components:

### NavBar

The navbar is a dynamic mobile-optimized navbar that uses CSS breakpoints in order to reorder the items into a burger menu. It was developed by Marco.

### Table

The tables have not yet been mobile-optimized into card views. They take data from an API route and are reused to link to different forms across the web application. This was created by Karim Ali

### Table Filter

The table filter was created by Karim Ali, it utilizes site navigation and filterable API routes in order to display different categories of table items.

### Form Component

### Athlete Cards

The athlete cards are used for the public access display of the approved athletes. The feature will be reused in later versions of the game
Site Navigation/ User Story:

### Non Logged In Users

Purpose of the user journey: Most site visitors will be non-logged-in users. This will mean that they can enjoy the public features of the site including athlete profile pages, and a discovery section to explore articles posted on the site.

### Article Management System

Purpose of the user journey: The article management system is an admin function for the writer and editor user types. It allows for writers to make proposals for articles which are then sent to editors for checking and corrections. When articles are finally approved by the editor, they are posted for public viewing on the site. Marco built up this user journey.
Challenges: The most complicated part of this feature was its architecture and design while reusing the base components made. This was because of the wide range of UIs needed based on the progress of the article in the article publication cycle.

### User Management System

Purpose of the user journey: The user management system is an admin-only function that allows site administrators to alter user details and permissions from the front end of the page. This part of the site was built by my colleague Michael.

### Athlete Management System

Purpose of the user journey: The athlete management system is the most elaborate part of the application, it allows athlete applications through the front end and has a mechanism to control the status of the athlete's application. Athlete profile pages also track attendance and medical incidents through permission systems for athletic and medical staff involved in the team's development. This begins to create a portfolio for each athlete.

### Session Management System

Purpose of the user journey: The session management system is a system for the coaching staff to register for training, take attendance and communicate any incidents with the administration of the site.

## Wins & Blockers

N.B use of props in the table component to link to a certain form type would be useful when rebuilding this site.

### Wins

Building a full-stack (MERN) project for the first time.
The professional appearance of the web app.
Creating many relationships between back-end models to allow features such as complex filtering depending on the user role and what access they were given on a single feature (i.e. medical staff should be able to access the athlete's medical status, editors could modify the status of a draft article…)

### Blockers

In trying to implement the aforementioned complex relationships we definitely pushed the non-relational nature of MongoDB a bit too far for our knowledge at the time, making it sometimes hard and time-consuming to make the front-end work seamlessly with the back-end. However, the ability to simply use JavaScript in manipulating the back-end helped smoothen some of the issues.

### Bugs

Sometimes the Mongoose filtering functions wouldn’t work as expected, so we’d have to implement filtering on the front-end. Some user journeys are also not completely built out yet, and we will need to complete them before the app is fully functional

### Future Improvements

I want to refactor the code base and dry it up. I can do this by creating more dynamic components with props for easier reusability. I would also continue to build up the user journeys and include more analytical features as part of the application. Finally, I would work on creating a responsive CSS theme so that it can be more accessible for tablet and mobile users.

### Key Takeaways

The process taught me the importance of product management and a clear vision of user journeys. Working in a group of three was a great way to learn about how to best communicate, plan and delegate responsibilities. Working on such a relationship heavy project on MongoDB well prepared us for future endeavours with Django/Postgres based projects. I should have been more cognizant of the tech abilities of my different group members
