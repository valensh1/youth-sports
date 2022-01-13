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
//   {
//     season: '2021-2022',
//     gameDate: '01-09-2022',
//     venue: 'Pickwick Ice',
//     gameTime: '8:40am',
//     division: 'PeeWee',
//     homeTeamLong: 'California Golden Bears',
//     homeTeamShort: 'Bears',
//     homeTeamId: 'pwbears1',
//     homeTeamScore: 2,
//     homeTeamPreviousWins: 4,
//     homeTeamPreviousLosses: 6,
//     homeTeamPreviousTies: 0,
//     homeTeamCurrentWins: 4,
//     homeTeamCurrentLosses: 7,
//     homeTeamCurrentTies: 0,
//     homeTeamPreviousPoints: 8,
//     homeTeamCurrentPoints: 8,
//     visitorTeamLong: 'Jr. Ducks (2)',
//     visitorTeamShort: 'Ducks',
//     visitorTeamId: 'pwducks2',
//     visitorTeamScore: 7,
//     visitorTeamPreviousWins: 8,
//     visitorTeamPreviousLosses: 1,
//     visitorTeamPreviousTies: 1,
//     visitorTeamCurrentWins: 9,
//     visitorTeamCurrentLosses: 1,
//     visitorTeamCurrentTies: 1,
//     visitorTeamPreviousPoints: 17,
//     visitorTeamCurrentPoints: 19,
//     winningTeamName: 'Jr. Ducks (2)',
//     winningTeamId: 'pwducks2',
//     losingTeamName: 'Bears',
//     losingTeamId: 'pwbears1',
//     tieResult: false,
//     week: 11,
//   },
//   {
//     season: '2021-2022',
//     gameDate: '01-09-2022',
//     venue: 'Ontario Ice',
//     gameTime: '8:45am',
//     division: 'PeeWee',
//     homeTeamLong: 'Empire Hockey Club',
//     homeTeamShort: 'Empire',
//     homeTeamId: 'pwempire1',
//     homeTeamScore: 7,
//     homeTeamPreviousWins: 2,
//     homeTeamPreviousLosses: 8,
//     homeTeamPreviousTies: 0,
//     homeTeamCurrentWins: 3,
//     homeTeamCurrentLosses: 8,
//     homeTeamCurrentTies: 0,
//     homeTeamPreviousPoints: 4,
//     homeTeamCurrentPoints: 6,
//     visitorTeamLong: 'Jr. Ducks (3)',
//     visitorTeamShort: 'Ducks',
//     visitorTeamId: 'pwducks3',
//     visitorTeamScore: 6,
//     visitorTeamPreviousWins: 1,
//     visitorTeamPreviousLosses: 6,
//     visitorTeamPreviousTies: 0,
//     visitorTeamCurrentWins: 1,
//     visitorTeamCurrentLosses: 7,
//     visitorTeamCurrentTies: 0,
//     visitorTeamPreviousPoints: 2,
//     visitorTeamCurrentPoints: 2,
//     winningTeamName: 'Empire',
//     winningTeamId: 'pwempire1',
//     losingTeamName: 'Jr. Ducks (3)',
//     losingTeamId: 'pwducks3',
//     tieResult: false,
//     week: 11,
//   },
//   {
//     season: '2021-2022',
//     gameDate: '01-09-2022',
//     venue: 'Valley Ice Center',
//     gameTime: '9:30am',
//     division: 'PeeWee',
//     homeTeamLong: 'California Heat',
//     homeTeamShort: 'Heat',
//     homeTeamId: 'pwheat1',
//     homeTeamScore: 3,
//     homeTeamPreviousWins: 4,
//     homeTeamPreviousLosses: 3,
//     homeTeamPreviousTies: 1,
//     homeTeamCurrentWins: 5,
//     homeTeamCurrentLosses: 3,
//     homeTeamCurrentTies: 1,
//     homeTeamPreviousPoints: 9,
//     homeTeamCurrentPoints: 11,
//     visitorTeamLong: 'Jr. Ice Dogs',
//     visitorTeamShort: 'Ice Dogs',
//     visitorTeamId: 'pwicedogs1',
//     visitorTeamScore: 2,
//     visitorTeamPreviousWins: 5,
//     visitorTeamPreviousLosses: 3,
//     visitorTeamPreviousTies: 0,
//     visitorTeamCurrentWins: 5,
//     visitorTeamCurrentLosses: 4,
//     visitorTeamCurrentTies: 0,
//     visitorTeamPreviousPoints: 10,
//     visitorTeamCurrentPoints: 10,
//     winningTeamName: 'Heat',
//     winningTeamId: 'pwheat1',
//     losingTeamName: 'Ice Dogs',
//     losingTeamId: 'pwicedogs1',
//     tieResult: false,
//     week: 11,
//   },
//   {
//     season: '2021-2022',
//     gameDate: '01-09-2022',
//     venue: 'San Diego Ice',
//     gameTime: '3:10pm',
//     division: 'PeeWee',
//     homeTeamLong: 'SDIA Hockey Club',
//     homeTeamShort: 'Oilers',
//     homeTeamId: 'pwoilers1',
//     homeTeamScore: 2,
//     homeTeamPreviousWins: 0,
//     homeTeamPreviousLosses: 8,
//     homeTeamPreviousTies: 0,
//     homeTeamCurrentWins: 0,
//     homeTeamCurrentLosses: 8,
//     homeTeamCurrentTies: 0,
//     homeTeamPreviousPoints: 0,
//     homeTeamCurrentPoints: 0,
//     visitorTeamLong: 'Lady Ducks',
//     visitorTeamShort: 'Lady Ducks',
//     visitorTeamId: 'pwladyducks1',
//     visitorTeamScore: 3,
//     visitorTeamPreviousWins: 1,
//     visitorTeamPreviousLosses: 4,
//     visitorTeamPreviousTies: 0,
//     visitorTeamCurrentWins: 2,
//     visitorTeamCurrentLosses: 4,
//     visitorTeamCurrentTies: 0,
//     visitorTeamPreviousPoints: 2,
//     visitorTeamCurrentPoints: 4,
//     winningTeamName: 'Lady Ducks',
//     winningTeamId: 'pwladyducks1',
//     losingTeamName: 'Oilers',
//     losingTeamId: 'pwoilers1',
//     tieResult: false,
//     week: 11,
//   },
//   {
//     season: '2021-2022',
//     gameDate: '01-09-2022',
//     venue: 'Lakewood Ice',
//     gameTime: '4:00pm',
//     division: 'PeeWee',
//     homeTeamLong: 'Jr. Kings (1)',
//     homeTeamShort: 'Kings',
//     homeTeamId: 'pwkings1',
//     homeTeamScore: 6,
//     homeTeamPreviousWins: 5,
//     homeTeamPreviousLosses: 1,
//     homeTeamPreviousTies: 2,
//     homeTeamCurrentWins: 6,
//     homeTeamCurrentLosses: 1,
//     homeTeamCurrentTies: 2,
//     homeTeamPreviousPoints: 12,
//     homeTeamCurrentPoints: 14,
//     visitorTeamLong: 'Saints',
//     visitorTeamShort: 'Saints',
//     visitorTeamId: 'pwsaints1',
//     visitorTeamScore: 1,
//     visitorTeamPreviousWins: 1,
//     visitorTeamPreviousLosses: 8,
//     visitorTeamPreviousTies: 0,
//     visitorTeamCurrentWins: 1,
//     visitorTeamCurrentLosses: 9,
//     visitorTeamCurrentTies: 0,
//     visitorTeamPreviousPoints: 2,
//     visitorTeamCurrentPoints: 2,
//     winningTeamName: 'Jr. Kings (1)',
//     winningTeamId: 'pwkings1',
//     losingTeamName: 'Saints',
//     losingTeamId: 'pwsaints1',
//     tieResult: false,
//     week: 11,
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
