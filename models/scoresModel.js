//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION
const mongoose = require('mongoose');

//? SETTING UP MongoDB SCHEMA
//! Update playerSchema below for a name that fits your application. Also update any fields below for the type of schema such as changing team points with a type of number instead of string, etc. Also, you can add as many schema fields as needed.
const scoresSchema = new mongoose.Schema({
  season: {
    type: String,
    required: true,
  },
  gameDate: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  gameTime: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  homeTeamLong: {
    type: String,
    required: true,
  },
  homeTeamShort: {
    type: String,
    required: true,
  },
  homeTeamId: {
    type: String,
    required: true,
  },
  homeTeamScore: {
    type: Number,
    required: true,
  },
  homeTeamPreviousWins: {
    type: Number,
    required: true,
  },
  homeTeamPreviousLosses: {
    type: Number,
    required: true,
  },
  homeTeamPreviousTies: {
    type: Number,
    required: true,
  },
  homeTeamCurrentWins: {
    type: Number,
    required: true,
  },
  homeTeamCurrentLosses: {
    type: Number,
    required: true,
  },
  homeTeamCurrentTies: {
    type: Number,
    required: true,
  },
  homeTeamPreviousPoints: {
    type: Number,
    required: true,
  },
  homeTeamCurrentPoints: {
    type: Number,
    required: true,
  },
  visitorTeamLong: {
    type: String,
    required: true,
  },
  visitorTeamShort: {
    type: String,
    required: true,
  },
  visitorTeamId: {
    type: String,
    required: true,
  },
  visitorTeamScore: {
    type: Number,
    required: true,
  },
  visitorTeamPreviousWins: {
    type: Number,
    required: true,
  },
  visitorTeamPreviousLosses: {
    type: Number,
    required: true,
  },
  visitorTeamPreviousTies: {
    type: Number,
    required: true,
  },
  visitorTeamCurrentWins: {
    type: Number,
    required: true,
  },
  visitorTeamCurrentLosses: {
    type: Number,
    required: true,
  },
  visitorTeamCurrentTies: {
    type: Number,
    required: true,
  },
  visitorTeamPreviousPoints: {
    type: Number,
    required: true,
  },
  visitorTeamCurrentPoints: {
    type: Number,
    required: true,
  },
  winningTeamName: {
    type: String,
    required: true,
  },
  winningTeamId: {
    type: String,
    required: true,
  },
  losingTeamName: {
    type: String,
    required: true,
  },
  losingTeamId: {
    type: String,
    required: true,
  },
  tieResult: {
    type: Boolean,
    required: true,
  },
  week: {
    type: Number,
    required: true,
  },
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const Scores = mongoose.model('Score', scoresSchema); //! Update Player and playerSchema for names that fit your application. Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

//? If miss adding fields to your schema for your original mongoose model you must add like this below
// mongoose.model('HockeyPlayer').schema.add({ division: String });

//? CREATION OF FIRST SET OF DATA FOR MongoDB DATABASE - Uncomment this out if you want this to populate your database with sample data
// const hockeyScores1 = Scores.insertMany([
// {
//   season: '2021-2022',
//   gameDate: '01-23-2022',
//   venue: 'Anaheim Ice',
//   gameTime: '2:45pm',
//   division: 'PeeWee',
//   visitorTeamLong: 'California Heat',
//   visitorTeamShort: 'Heat',
//   visitorTeamId: 'pwheat1',
//   visitorTeamScore: 3,
//   visitorTeamPreviousWins: 5,
//   visitorTeamPreviousLosses: 3,
//   visitorTeamPreviousTies: 1,
//   visitorTeamCurrentWins: 5,
//   visitorTeamCurrentLosses: 3,
//   visitorTeamCurrentTies: 2,
//   visitorTeamPreviousPoints: 11,
//   visitorTeamCurrentPoints: 12,
//   homeTeamLong: 'Lady Ducks',
//   homeTeamShort: 'Lady Ducks',
//   homeTeamId: 'pwladyducks1',
//   homeTeamScore: 3,
//   homeTeamPreviousWins: 2,
//   homeTeamPreviousLosses: 4,
//   homeTeamPreviousTies: 0,
//   homeTeamCurrentWins: 2,
//   homeTeamCurrentLosses: 4,
//   homeTeamCurrentTies: 1,
//   homeTeamPreviousPoints: 4,
//   homeTeamCurrentPoints: 5,
//   winningTeamName: 'tie',
//   winningTeamId: 'tie',
//   losingTeamName: 'tie',
//   losingTeamId: 'tie',
//   tieResult: true,
//   week: 12,
// },
// {
//   season: '2021-2022',
//   gameDate: '01-23-2022',
//   venue: 'Anaheim Ice',
//   gameTime: '8:45am',
//   division: 'PeeWee',
//   homeTeamLong: 'Jr. Ducks (3)',
//   homeTeamShort: 'Ducks',
//   homeTeamId: 'pwducks3',
//   homeTeamScore: 7,
//   homeTeamPreviousWins: 1,
//   homeTeamPreviousLosses: 7,
//   homeTeamPreviousTies: 0,
//   homeTeamCurrentWins: 1,
//   homeTeamCurrentLosses: 7,
//   homeTeamCurrentTies: 0,
//   homeTeamPreviousPoints: 2,
//   homeTeamCurrentPoints: 2,
//   visitorTeamLong: 'Lady Ducks',
//   visitorTeamShort: 'Lady Ducks',
//   visitorTeamId: 'pwladyducks1',
//   visitorTeamScore: 4,
//   visitorTeamPreviousWins: 2,
//   visitorTeamPreviousLosses: 4,
//   visitorTeamPreviousTies: 0,
//   visitorTeamCurrentWins: 2,
//   visitorTeamCurrentLosses: 5,
//   visitorTeamCurrentTies: 0,
//   visitorTeamPreviousPoints: 4,
//   visitorTeamCurrentPoints: 4,
//   winningTeamName: 'Jr. Ducks (3)',
//   winningTeamId: 'pwducks3',
//   losingTeamName: 'Lady Ducks',
//   losingTeamId: 'Lady Ducks',
//   tieResult: false,
//   week: 12,
// },
// {
//   season: '2021-2022',
//   gameDate: '01-23-2022',
//   venue: 'Valley Ice Center',
//   gameTime: '9:30am',
//   division: 'PeeWee',
//   homeTeamLong: 'California Heat',
//   homeTeamShort: 'Heat',
//   homeTeamId: 'pwheat1',
//   homeTeamScore: 7,
//   homeTeamPreviousWins: 5,
//   homeTeamPreviousLosses: 3,
//   homeTeamPreviousTies: 1,
//   homeTeamCurrentWins: 6,
//   homeTeamCurrentLosses: 3,
//   homeTeamCurrentTies: 1,
//   homeTeamPreviousPoints: 11,
//   homeTeamCurrentPoints: 13,
//   visitorTeamLong: 'Jr. Ducks (1)',
//   visitorTeamShort: 'Ducks',
//   visitorTeamId: 'pwducks1',
//   visitorTeamScore: 3,
//   visitorTeamPreviousWins: 4,
//   visitorTeamPreviousLosses: 3,
//   visitorTeamPreviousTies: 2,
//   visitorTeamCurrentWins: 4,
//   visitorTeamCurrentLosses: 4,
//   visitorTeamCurrentTies: 2,
//   visitorTeamPreviousPoints: 10,
//   visitorTeamCurrentPoints: 10,
//   winningTeamName: 'Heat',
//   winningTeamId: 'pwheat1',
//   losingTeamName: 'Jr. Ducks (1)',
//   losingTeamId: 'pwducks1',
//   tieResult: false,
//   week: 12,
// },
// {
//   season: '2021-2022',
//   gameDate: '01-23-2022',
//   venue: 'Pickwick Ice',
//   gameTime: '10:20am',
//   division: 'PeeWee',
//   homeTeamLong: 'California Golden Bears',
//   homeTeamShort: 'Bears',
//   homeTeamId: 'pwbears1',
//   homeTeamScore: 1,
//   homeTeamPreviousWins: 4,
//   homeTeamPreviousLosses: 7,
//   homeTeamPreviousTies: 0,
//   homeTeamCurrentWins: 4,
//   homeTeamCurrentLosses: 8,
//   homeTeamCurrentTies: 0,
//   homeTeamPreviousPoints: 8,
//   homeTeamCurrentPoints: 8,
//   visitorTeamLong: 'Goldrush Hockey Club',
//   visitorTeamShort: 'Goldrush',
//   visitorTeamId: 'pwgoldrush1',
//   visitorTeamScore: 5,
//   visitorTeamPreviousWins: 6,
//   visitorTeamPreviousLosses: 0,
//   visitorTeamPreviousTies: 2,
//   visitorTeamCurrentWins: 7,
//   visitorTeamCurrentLosses: 0,
//   visitorTeamCurrentTies: 2,
//   visitorTeamPreviousPoints: 14,
//   visitorTeamCurrentPoints: 16,
//   winningTeamName: 'Goldrush',
//   winningTeamId: 'pwgoldrush1',
//   losingTeamName: 'Bears',
//   losingTeamId: 'pwbears1',
//   tieResult: false,
//   week: 12,
// },
//   {
//     season: '2021-2022',
//     gameDate: '01-23-2022',
//     venue: 'Westminster Ice',
//     gameTime: '2:00pm',
//     division: 'PeeWee',
//     visitorTeamLong: 'Jr. Kings (1)',
//     visitorTeamShort: 'Kings',
//     visitorTeamId: 'pwkings1',
//     visitorTeamScore: 5,
//     visitorTeamPreviousWins: 6,
//     visitorTeamPreviousLosses: 1,
//     visitorTeamPreviousTies: 2,
//     visitorTeamCurrentWins: 7,
//     visitorTeamCurrentLosses: 1,
//     visitorTeamCurrentTies: 2,
//     visitorTeamPreviousPoints: 14,
//     visitorTeamCurrentPoints: 16,
//     homeTeamLong: 'Jr. Ducks (3)',
//     homeTeamShort: 'Ducks',
//     homeTeamId: 'pwducks3',
//     homeTeamScore: 0,
//     homeTeamPreviousWins: 1,
//     homeTeamPreviousLosses: 7,
//     homeTeamPreviousTies: 0,
//     homeTeamCurrentWins: 1,
//     homeTeamCurrentLosses: 8,
//     homeTeamCurrentTies: 0,
//     homeTeamPreviousPoints: 2,
//     homeTeamCurrentPoints: 2,
//     winningTeamName: 'Jr. Kings (1)',
//     winningTeamId: 'pwkings1',
//     losingTeamName: 'Jr. Ducks (3)',
//     losingTeamId: 'pwducks3',
//     tieResult: false,
//     week: 12,
//   },
// ]).then((data) => console.log(data));

//? UPDATE RECORD
// HockeyPlayer.findOneAndUpdate(
//   { lastName: 'Gibson' },
//   {
//     height: 74,
//   }
// ).then((data) => console.log(data));

//? DELETION OF THE 1ST RECORD MONGOOSE FINDS IN MongoDB WITH THE SPECIFIED CRITERIA - Uncomment this out if you want to delete sample data above
// Player.findOneAndDelete({ firstName: 'Magic' }).then(data => console.log(data)); //! Change Player for a name that fits your application. Must do callback or it won't work.
// HockeyGameScore.findOneAndDelete({ season: '2021-2022' }).then((data) =>
//   console.log(data)
// );

module.exports = Scores; //! Change Player for name that fits your Application. This should be consistent with name given in line 31 of code above
