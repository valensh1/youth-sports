//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

const mongoose = require('mongoose');

//? SETTING UP MongoDB SCHEMA
//! Update playerSchema below for a name that fits your application. Also update any fields below for the type of schema such as changing team points with a type of number instead of string, etc. Also, you can add as many schema fields as needed.
const playerSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  imgAction: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
    enum: ['Forward', 'Defenseman', 'Goalie', 'Coach', 'Assistant Coach'],
  },
  height: Number,
  weight: Number,
  born: String,
  team: {
    type: String,
    required: true,
    enum: [
      'Jr. Ducks',
      'Jr. Condors',
      'Bay Harbor Red Wings',
      'California Golden Bears',
      'California Heat',
      'California Wave',
      'Desert Blaze',
      'Empire Hockey Club',
      'Goldrush Hockey Club',
      'Jr. Ice Dogs',
      'Jr. Reign',
      'Jr. Kings',
      'OC Hockey Club',
      'Moose',
      'Maple Leafs',
      'Rose City Pats',
      'Jr. Gulls',
      'Saints',
      'Ice Hawks',
      'Jr. Flyers',
      'SDIA Hockey Club',
      'Mariners',
      'Lady Ducks',
    ],
    teamID: {
      type: Number,
      required: true,
    },
    division: {
      type: String,
      required: true,
      enum: [
        'Mites',
        'Squirt',
        'PeeWee',
        'Bantam',
        'Midget',
        'Juvenile',
        'Junior',
        'Senior',
      ],
    },
    level: {
      type: String,
      required: true,
      uppercase: true,
      enum: ['B', 'BB', 'A', 'AA', 'AAA'],
    },
    location: {
      type: String,
      required: true,
      enum: [
        'Anaheim',
        'Great Park',
        'Lakewood',
        'Westminster',
        'Bakersfield',
        'Torrance',
        'Burbank',
        'Panorama City',
        'Palm Springs',
        'Ontario',
        'Aliso Viejo',
        'Riverside',
        'Los Angeles',
        'Yorba Linda',
        'Pasadena',
        'San Diego',
        'Santa Barbara',
        'Valencia',
        'Simi Valley',
      ],
    },
  },
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const HockeyPlayer = mongoose.model('HockeyPlayer', playerSchema); //! Update Player and playerSchema for names that fit your application. Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

//? If miss adding fields to your schema for your original mongoose model you must add like this below
mongoose.model('HockeyPlayer').schema.add({ division: String });
mongoose.model('HockeyPlayer').schema.add({ level: String });
mongoose.model('HockeyPlayer').schema.add({ location: String });
mongoose.model('HockeyPlayer').schema.add({ email: String });
mongoose.model('HockeyPlayer').schema.add({ imgAction: String });
//? CREATION OF FIRST SET OF DATA FOR MongoDB DATABASE - Uncomment this out if you want this to populate your database with sample data
// const hockeyPlayer1 = HockeyPlayer.create({
//   //   //! Change player1 and Player for names that fit your application. Creation of a player1 and saved to database. Want to comment this out otherwise it will keep saving data to mongoDB each time you save this file and you will have duplicates in your MongoDB
//   img: 'https://imgur.com/7yK4jS3.jpg',
//   imgAction: 'https://cms.nhl.bamgrid.com/images/actionshots/8476434.jpg',
//   firstName: 'Hunter',
//   lastName: 'Valentine',
//   number: 36,
//   position: 'Goalie',
//   height: 60,
//   weight: 71,
//   born: '09/06/2010',
//   team: 'Jr. Ducks',
//   division: 'PeeWee',
//   level: 'A',
//   location: 'Great Park',
// });

// HockeyPlayer.findOneAndUpdate(
//   { lastName: 'Gibson' },
//   {
//     height: 74,
//   }
// ).then((data) => console.log(data));

//? DELETION OF THE 1ST RECORD MONGOOSE FINDS IN MongoDB WITH THE SPECIFIED CRITERIA - Uncomment this out if you want to delete sample data above
// Player.findOneAndDelete({ firstName: 'Magic' }).then(data => console.log(data)); //! Change Player for a name that fits your application

module.exports = HockeyPlayer; //! Change Player for name that fits your Application. This should be consistent with name given in line 31 of code above
