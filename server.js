//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION
//? REQUIREMENTS - npm Packages - No Need to Modify This Code
require('dotenv').config(); // Requirement to be able to use .env file so we can reference passwords without displaying them in code.
const express = require('express');
const cors = require('cors');
const path = require('path'); // Provides utilities for working with file and directory paths
const PORT = process.env.PORT || 5001; // Creation of variable that is either the port the hosting service runs our application on when deployed or localhost:5001 if working on our local machine. Due to macOS Monterey we are using localhost:5001 because Apple decided to use localhost:5000 for its Airplay functionality
const app = express(); // Creation of variable app which calls the express function
app.use(cors()); // Every time file is saved the application runs the cors function

//? MONGOOSE/MongoDB SET-UP - Only changes needed are red commented line of code below
// const HockeyPlayer = require('./models/hockeyPlayerModel.js'); //! Don't think these need to be here if require it on hockeyPlayerController file
// const HockeyStats = require('./models/hockeyStatsModel.js'); //! Don't think these need to be here if require it on hockeyPlayerController file
// const HockeyGameScores = require('./models/gameScoresModel.js'); //! Don't think these need to be here if require it on hockeyPlayerController file
// const Teams = require('./models/teamsModel.js'); //! Don't think these need to be here if require it on hockeyPlayerController file
// const Standings = require('./models/standingsModel.js'); //! Don't think these need to be here if require it on hockeyPlayerController file
const mongoose = require('mongoose'); // Need to require Mongoose in order to access our MongoDB database; Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
const MONGODB_URI = process.env.MONGODB_URI; // Creation of variable which stores our MongoDB connection string containing our password to access our database. This connection string is stored on our .env file
const db = mongoose.connection; // Creation of variable to shorten our code. Instead of having to type mongoose.connection each time we can just refer to it as db.

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on('open', () => {
  console.log('Mongo is Connected');
});

//? MIDDLEWARE - No Need to Modify This Code
app.use(express.urlencoded({ extended: true })); // Middleware - so we can use req.body otherwise Express can't read what's in the body of our POST request. This Middleware parses data from forms in the x-www-form-urlencoded format
app.use(express.json()); // Middleware - for parsing data coming in the body of the POST request as json format

//? API ROUTES - Routes To Controllers Folder --> See red comments section for modification needed for new application
app.use(
  '/api/hockeyPlayers',
  require('./controllers/hockeyPlayerController.js')
); //! Modify file name for your application (change playerController.js). Every time this api/players path is hit we will require the playerController.js file which holds our routes related to players

//? DEPLOYMENT CODE FOR HEROKU - No Need to Modify This Code
if (process.env.NODE_ENV === 'production') {
  // When .env file has NODE_ENV=production in it run this code below (we must put this in our .env file for when deploying)
  app.use(express.static(path.join(__dirname, '/client/build'))); // When .env file has NODE_ENV=production then look for the static file in the /client/build folder. This folder won't be there until you go into the client folder and run npm run build command in Terminal.

  // Code below activates our React front-end. Any routes not shown above in API routes this code will send a file from the /client/build/index.html file which is basically our React front-end files
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  // Code to notify you that app is running on PORT 5001 on local computer.
  console.log(`Listening on PORT ${PORT} yo`);
});
