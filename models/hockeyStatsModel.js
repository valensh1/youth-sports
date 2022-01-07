//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION
const mongoose = require('mongoose');

//? SETTING UP MongoDB SCHEMA
//! Update playerSchema below for a name that fits your application. Also update any fields below for the type of schema such as changing team points with a type of number instead of string, etc. Also, you can add as many schema fields as needed.
const statsSchema = new mongoose.Schema({
  season: {
    type: String,
    required: true,
    id: {
      type: String,
      required: false,
    },

    GP: {
      type: Number,
      required: true,
    },

    Mins: {
      type: Number,
      required: true,
    },
    Shots: {
      type: Number,
      required: true,
    },
    Saves: {
      type: Number,
      required: true,
    },
    SVPercentage: {
      type: Number,
      required: true,
    },
    GAA: {
      type: Number,
      required: true,
    },
    SO: {
      type: Number,
      required: true,
    },
    Goals: {
      type: Number,
      required: true,
    },
    Assists: {
      type: Number,
      required: true,
    },
    Points: {
      type: Number,
      required: true,
    },
    PPG: {
      type: Number,
      required: true,
    },
    PIMS: {
      type: Number,
      required: true,
    },
  },
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const HockeyStats = mongoose.model('HockeyStats', statsSchema); //! Update Player and playerSchema for names that fit your application. Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

//? If miss adding fields to your schema for your original mongoose model you must add like this below
// mongoose.model('HockeyPlayer').schema.add({ division: String });

//? CREATION OF FIRST SET OF DATA FOR MongoDB DATABASE - Uncomment this out if you want this to populate your database with sample data
const hockeyStats1 = HockeyStats.create({
  season: 2021 - 2022,
  GP: 5,
  Mins: 225,
  Shots: 90,
  Saves: 81,
  SVPercentage: 0.9,
  GAA: 1.8,
  SO: 1,
  Goals: 0,
  Assists: 0,
  Points: 0,
  PPG: 0,
  PIMS: 0,
});

// HockeyPlayer.findOneAndUpdate(
//   { lastName: 'Gibson' },
//   {
//     height: 74,
//   }
// ).then((data) => console.log(data));

//? DELETION OF THE 1ST RECORD MONGOOSE FINDS IN MongoDB WITH THE SPECIFIED CRITERIA - Uncomment this out if you want to delete sample data above
// Player.findOneAndDelete({ firstName: 'Magic' }).then(data => console.log(data)); //! Change Player for a name that fits your application

module.exports = HockeyStats; //! Change Player for name that fits your Application. This should be consistent with name given in line 31 of code above
