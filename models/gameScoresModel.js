//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION
const mongoose = require('mongoose');

//? SETTING UP MongoDB SCHEMA
//! Update playerSchema below for a name that fits your application. Also update any fields below for the type of schema such as changing team points with a type of number instead of string, etc. Also, you can add as many schema fields as needed.
const gameScoresSchema = new mongoose.Schema({
  season: {
    type: String,
    required: true,
  },
  games: [
    {
      date: {
        type: String,
        required: true,
      },
      scores: [
        {
          visitorTeam: {
            type: String,
            required: true,
          },
          visitorScore: {
            type: Number,
            required: true,
          },
          homeTeam: {
            type: String,
            required: true,
          },
          homeScore: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const HockeyGameScore = mongoose.model('HockeyGameScore', gameScoresSchema); //! Update Player and playerSchema for names that fit your application. Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

//? If miss adding fields to your schema for your original mongoose model you must add like this below
// mongoose.model('HockeyPlayer').schema.add({ division: String });

//? CREATION OF FIRST SET OF DATA FOR MongoDB DATABASE - Uncomment this out if you want this to populate your database with sample data

// const hockeyGameScores1 = HockeyGameScore.create({
//   season: '2021-2022',
//   games: [
//     {
//       date: '2021-10-10',
//       scores: [
//         {
//           visitorTeam: 'Goldrush',
//           visitorScore: 4,
//           homeTeam: 'Jr. Ducks (2)',
//           homeScore: 3,
//         },
//         {
//           visitorTeam: 'Empire',
//           visitorScore: 5,
//           homeTeam: 'Ice Dogs',
//           homeScore: 6,
//         },
//         {
//           visitorTeam: 'Junior Kings (2)',
//           visitorScore: 3,
//           homeTeam: 'Bears',
//           homeScore: 0,
//         },
//         {
//           visitorTeam: 'Oilers',
//           visitorScore: 3,
//           homeTeam: 'Jr. Ducks (3)',
//           homeScore: 4,
//         },
//         {
//           visitorTeam: 'Heat',
//           visitorScore: 8,
//           homeTeam: 'Saints',
//           homeScore: 4,
//         },
//         {
//           visitorTeam: 'Jr. Ducks (1)',
//           visitorScore: 5,
//           homeTeam: 'Jr. Kings (1)',
//           homeScore: 5,
//         },
//       ],
//     },
//     {
//       date: '2021-10-17',
//       scores: [
//         {
//           visitorTeam: 'Saints',
//           visitorScore: 3,
//           homeTeam: 'Oilers',
//           homeScore: 2,
//         },
//         {
//           visitorTeam: 'Jr. Kings (1)',
//           visitorScore: 1,
//           homeTeam: 'Jr. Ducks (2)',
//           homeScore: 3,
//         },
//         {
//           visitorTeam: 'Empire',
//           visitorScore: 5,
//           homeTeam: 'Bears',
//           homeScore: 6,
//         },
//         {
//           visitorTeam: 'Ice Dogs',
//           visitorScore: 5,
//           homeTeam: 'Lady Ducks',
//           homeScore: 3,
//         },
//         {
//           visitorTeam: 'Jr. Ducks (3)',
//           visitorScore: 1,
//           homeTeam: 'Heat',
//           homeScore: 3,
//         },
//         {
//           visitorTeam: 'Jr. Ducks (1)',
//           visitorScore: 3,
//           homeTeam: 'Jr. Kings (2)',
//           homeScore: 5,
//         },
//       ],
//     },
//     {
//       date: '2021-10-24',
//       scores: [
//         {
//           visitorTeam: 'Jr. Kings (2)',
//           visitorScore: 8,
//           homeTeam: 'Oilers',
//           homeScore: 3,
//         },
//         {
//           visitorTeam: 'Heat',
//           visitorScore: 3,
//           homeTeam: 'Jr. Ducks (1)',
//           homeScore: 3,
//         },
//         {
//           visitorTeam: 'Saints',
//           visitorScore: 2,
//           homeTeam: 'Bears',
//           homeScore: 5,
//         },
//         {
//           visitorTeam: 'Jr. Ducks (2)',
//           visitorScore: 8,
//           homeTeam: 'Ice Dogs',
//           homeScore: 1,
//         },
//         {
//           visitorTeam: 'Empire',
//           visitorScore: 3,
//           homeTeam: 'Jr. Kings (1)',
//           homeScore: 8,
//         },
//         {
//           visitorTeam: 'Jr. Ducks (3)',
//           visitorScore: 0,
//           homeTeam: 'Goldrush',
//           homeScore: 6,
//         },
//         {
//           visitorTeam: 'Lady Ducks',
//           visitorScore: 5,
//           homeTeam: 'Jr. Kings (2)',
//           homeScore: 3,
//         },
//       ],
//     },
//     {
//       date: '2021-10-31',
//       scores: [
//         {
//           visitorTeam: 'Ice Dogs',
//           visitorScore: 6,
//           homeTeam: 'Jr. Ducks (3)',
//           homeScore: 4,
//         },
//         {
//           visitorTeam: 'Jr. Ducks (1)',
//           visitorScore: 7,
//           homeTeam: 'Empire',
//           homeScore: 2,
//         },
//         {
//           visitorTeam: 'Jr. Kings (1)',
//           visitorScore: 8,
//           homeTeam: 'Saints',
//           homeScore: 1,
//         },
//         {
//           visitorTeam: 'Bears',
//           visitorScore: 0,
//           homeTeam: 'Goldrush',
//           homeScore: 7,
//         },
//         {
//           visitorTeam: 'Oilers',
//           visitorScore: 2,
//           homeTeam: 'Jr. Ducks (2)',
//           homeScore: 8,
//         },
//       ],
//     },
//     {
//       date: '2021-11-07',
//       scores: [
//         {
//           visitorTeam: 'Jr. Ducks (1)',
//           visitorScore: 2,
//           homeTeam: 'Jr. Ducks (2)',
//           homeScore: 8,
//         },
//         {
//           visitorTeam: 'Jr. Kings (2)',
//           visitorScore: 2,
//           homeTeam: 'Heat',
//           homeScore: 1,
//         },
//         {
//           visitorTeam: 'Goldrush',
//           visitorScore: 11,
//           homeTeam: 'Saints',
//           homeScore: 2,
//         },
//         {
//           visitorTeam: 'Bears',
//           visitorScore: 8,
//           homeTeam: 'Jr. Ducks (3)',
//           homeScore: 0,
//         },
//         {
//           visitorTeam: 'Oilers',
//           visitorScore: 2,
//           homeTeam: 'Empire',
//           homeScore: 9,
//         },
//       ],
//     },
//     {
//       date: '2021-11-14',
//       scores: [
//         {
//           visitorTeam: 'Jr. Ducks (3)',
//           visitorScore: 1,
//           homeTeam: 'Jr. Ducks (1)',
//           homeScore: 4,
//         },
//         {
//           visitorTeam: 'Jr. Kings (1)',
//           visitorScore: 8,
//           homeTeam: 'Bears',
//           homeScore: 6,
//         },
//         {
//           visitorTeam: 'Saints',
//           visitorScore: 1,
//           homeTeam: 'Empire',
//           homeScore: 5,
//         },
//         {
//           visitorTeam: 'Ice Dogs',
//           visitorScore: 2,
//           homeTeam: 'Jr. Kings (2)',
//           homeScore: 9,
//         },
//         {
//           visitorTeam: 'Jr. Ducks (2)',
//           visitorScore: 3,
//           homeTeam: 'Goldrush',
//           homeScore: 3,
//         },
//         {
//           visitorTeam: 'Lady Ducks',
//           visitorScore: 0,
//           homeTeam: 'Jr. Kings (1)',
//           homeScore: 2,
//         },
//         {
//           visitorTeam: 'Heat',
//           visitorScore: 8,
//           homeTeam: 'Oilers',
//           homeScore: 3,
//         },
//       ],
//     },
// {
//   date: '2021-11-21',
//   scores: [
//     {
//       visitorTeam: 'Jr. Kings (2)',
//       visitorScore: 14,
//       homeTeam: 'Bears',
//       homeScore: 3,
//     },
//     {
//       visitorTeam: 'Heat',
//       visitorScore: 2,
//       homeTeam: 'Jr. Ducks (2)',
//       homeScore: 7,
//     },
//     {
//       visitorTeam: 'Ice Dogs',
//       visitorScore: 2,
//       homeTeam: 'Jr. Kings (1)',
//       homeScore: 11,
//     },
//     {
//       visitorTeam: 'Jr. Ducks (1)',
//       visitorScore: 6,
//       homeTeam: 'Saints',
//       homeScore: 1,
//     },
//     {
//       visitorTeam: 'Empire',
//       visitorScore: 0,
//       homeTeam: 'Goldrush',
//       homeScore: 7,
//     },
//   ],
// },
// {
//   date: '2021-12-05',
//   scores: [
//     {
//       visitorTeam: 'Empire',
//       visitorScore: 0,
//       homeTeam: 'Jr. Ducks (2)',
//       homeScore: 1,
//     },
//     {
//       visitorTeam: 'Ice Dogs',
//       visitorScore: 7,
//       homeTeam: 'Saints',
//       homeScore: 2,
//     },
//     {
//       visitorTeam: 'Bears',
//       visitorScore: 7,
//       homeTeam: 'Jr. Ducks (1)',
//       homeScore: 5,
//     },
//     {
//       visitorTeam: 'Jr. Ducks (3)',
//       visitorScore: 3,
//       homeTeam: 'Jr. Kings (2)',
//       homeScore: 8,
//     },
//     {
//       visitorTeam: 'Jr. Kings (1)',
//       visitorScore: 5,
//       homeTeam: 'Oilers',
//       homeScore: 1,
//     },
//   ],
// },
// {
//   date: '2021-12-12',
//   scores: [
//     {
//       visitorTeam: 'Oilers',
//       visitorScore: 0,
//       homeTeam: 'Jr. Ducks (2)',
//       homeScore: 7,
//     },
//     {
//       visitorTeam: 'Goldrush',
//       visitorScore: 2,
//       homeTeam: 'Heat',
//       homeScore: 2,
//     },
//     {
//       visitorTeam: 'Bears',
//       visitorScore: 5,
//       homeTeam: 'Ice Dogs',
//       homeScore: 6,
//     },
//     {
//       visitorTeam: 'Saints',
//       visitorScore: 0,
//       homeTeam: 'Jr. Ducks (1)',
//       homeScore: 14,
//     },
//     {
//       visitorTeam: 'Lady Ducks',
//       visitorScore: 1,
//       homeTeam: 'Jr. Ducks (2)',
//       homeScore: 2,
//     },
//     {
//       visitorTeam: 'Empire',
//       visitorScore: 3,
//       homeTeam: 'Jr. Kings (2)',
//       homeScore: 5,
//     },
//   ],
// },
// {
//   date: '2021-12-19',
//   scores: [
//     {
//       visitorTeam: 'Heat',
//       visitorScore: 6,
//       homeTeam: 'Bears',
//       homeScore: 0,
//     },
//     {
//       visitorTeam: 'Lady Ducks',
//       visitorScore: 3,
//       homeTeam: 'Jr. Ducks (1)',
//       homeScore: 4,
//     },
//     {
//       visitorTeam: 'Goldrush',
//       visitorScore: 9,
//       homeTeam: 'Empire',
//       homeScore: 1,
//     },
//     {
//       visitorTeam: 'Jr. Kings (2)',
//       visitorScore: 4,
//       homeTeam: 'Jr. Kings (1)',
//       homeScore: 4,
//     },
//   ],
// },
//   ],
// });

//? TO ADD NEW WEEKS GAME TO DATABASE - MUST PUSH TO END OF ARRAY
// const hockeyGameScores2 = HockeyGameScore.findOneAndUpdate(
//   { _id: '61d166f46cef5855a3581279' },
//   {
//     $push: {
//       games: {
//         $each: [
//           {
//             date: '2021-11-21',
//             scores: [
//               {
//                 visitorTeam: 'Jr. Kings (2)',
//                 visitorScore: 14,
//                 homeTeam: 'Bears',
//                 homeScore: 3,
//               },
//               {
//                 visitorTeam: 'Heat',
//                 visitorScore: 2,
//                 homeTeam: 'Jr. Ducks (2)',
//                 homeScore: 7,
//               },
//               {
//                 visitorTeam: 'Ice Dogs',
//                 visitorScore: 2,
//                 homeTeam: 'Jr. Kings (1)',
//                 homeScore: 11,
//               },
//               {
//                 visitorTeam: 'Jr. Ducks (1)',
//                 visitorScore: 6,
//                 homeTeam: 'Saints',
//                 homeScore: 1,
//               },
//               {
//                 visitorTeam: 'Empire',
//                 visitorScore: 0,
//                 homeTeam: 'Goldrush',
//                 homeScore: 7,
//               },
//             ],
//           },
//         ],
//       },
//     },
//   }
// ).then((data) => console.log(data));

//? TO ADD MULTIPLE WEEKS OF GAMES TO DATABASE - MUST PUSH TO END OF ARRAY
// const hockeyGameScores3 = HockeyGameScore.findOneAndUpdate(
//   { _id: '61d166f46cef5855a3581279' },
//   {
//     $push: {
//       games: {
//         $each: [
//           {
//             date: '2021-12-05',
//             scores: [
//               {
//                 visitorTeam: 'Empire',
//                 visitorScore: 0,
//                 homeTeam: 'Jr. Ducks (2)',
//                 homeScore: 1,
//               },
//               {
//                 visitorTeam: 'Ice Dogs',
//                 visitorScore: 7,
//                 homeTeam: 'Saints',
//                 homeScore: 2,
//               },
//               {
//                 visitorTeam: 'Bears',
//                 visitorScore: 7,
//                 homeTeam: 'Jr. Ducks (1)',
//                 homeScore: 5,
//               },
//               {
//                 visitorTeam: 'Jr. Ducks (3)',
//                 visitorScore: 3,
//                 homeTeam: 'Jr. Kings (2)',
//                 homeScore: 8,
//               },
//               {
//                 visitorTeam: 'Jr. Kings (1)',
//                 visitorScore: 5,
//                 homeTeam: 'Oilers',
//                 homeScore: 1,
//               },
//             ],
//           },
//           {
//             date: '2021-12-12',
//             scores: [
//               {
//                 visitorTeam: 'Oilers',
//                 visitorScore: 0,
//                 homeTeam: 'Jr. Ducks (2)',
//                 homeScore: 7,
//               },
//               {
//                 visitorTeam: 'Goldrush',
//                 visitorScore: 2,
//                 homeTeam: 'Heat',
//                 homeScore: 2,
//               },
//               {
//                 visitorTeam: 'Bears',
//                 visitorScore: 5,
//                 homeTeam: 'Ice Dogs',
//                 homeScore: 6,
//               },
//               {
//                 visitorTeam: 'Saints',
//                 visitorScore: 0,
//                 homeTeam: 'Jr. Ducks (1)',
//                 homeScore: 14,
//               },
//               {
//                 visitorTeam: 'Lady Ducks',
//                 visitorScore: 1,
//                 homeTeam: 'Jr. Ducks (2)',
//                 homeScore: 2,
//               },
//               {
//                 visitorTeam: 'Empire',
//                 visitorScore: 3,
//                 homeTeam: 'Jr. Kings (2)',
//                 homeScore: 5,
//               },
//             ],
//           },
//           {
//             date: '2021-12-19',
//             scores: [
//               {
//                 visitorTeam: 'Heat',
//                 visitorScore: 6,
//                 homeTeam: 'Bears',
//                 homeScore: 0,
//               },
//               {
//                 visitorTeam: 'Lady Ducks',
//                 visitorScore: 3,
//                 homeTeam: 'Jr. Ducks (1)',
//                 homeScore: 4,
//               },
//               {
//                 visitorTeam: 'Goldrush',
//                 visitorScore: 9,
//                 homeTeam: 'Empire',
//                 homeScore: 1,
//               },
//               {
//                 visitorTeam: 'Jr. Kings (2)',
//                 visitorScore: 4,
//                 homeTeam: 'Jr. Kings (1)',
//                 homeScore: 4,
//               },
//             ],
//           },
//         ],
//       },
//     },
//   }
// ).then((data) => console.log(data));

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

module.exports = HockeyGameScore; //! Change Player for name that fits your Application. This should be consistent with name given in line 31 of code above
