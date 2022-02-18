//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION
const mongoose = require('mongoose');

//? SETTING UP MongoDB SCHEMA
//! Update playerSchema below for a name that fits your application. Also update any fields below for the type of schema such as changing team points with a type of number instead of string, etc. Also, you can add as many schema fields as needed.
const teamSchema = new mongoose.Schema({
  teamNameLong: {
    type: String,
    enum: [
      'Jr. Ducks (1)',
      'Jr. Ducks (2)',
      'Jr. Ducks (3)',
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
      'Jr. Kings (1)',
      'Jr. Kings (2)',
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
    required: true,
  },
  teamNameShort: {
    type: String,
    enum: [
      'Bears',
      'Blaze',
      'Condors',
      'Ducks',
      'Empire',
      'Flyers',
      'Goldrush',
      'Gulls',
      'Heat',
      'Ice Dogs',
      'Ice Hawks',
      'Kings',
      'Lady Ducks',
      'Maple Leafs',
      'Mariners',
      'Moose',
      'OC Hockey',
      'Oilers',
      'Pats',
      'Red Wings',
      'Reign',
      'Saints',
      'Wave',
    ],
    required: true,
  },
  headCoach: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    enum: [
      'Anaheim',
      'Irvine',
      'Great Park',
      'Lakewood',
      'Lake Forest',
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
      'Ventura',
      'Simi Valley',
      'Rose City',
      'Artesia',
    ],
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  teamId: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  teamPhoto: {
    type: String,
    required: false,
  },
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const Teams = mongoose.model('Teams', teamSchema); //! Update Player and playerSchema for names that fit your application. Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

// ? If miss adding fields to your schema for your original mongoose model you must add like this below
mongoose.model('Teams').schema.add({ teamNameAlias: String });
mongoose.model('Teams').schema.add({ headCoach: String });
mongoose.model('Teams').schema.add({ teamId: String });
mongoose.model('Teams').schema.add({ division: String });
mongoose.model('Teams').schema.add({ season: String });
mongoose.model('Teams').schema.add({ teamPhoto: String });

//? CREATION OF FIRST SET OF DATA FOR MongoDB DATABASE - Uncomment this out if you want this to populate your database with sample data
// const teams1 = Teams.create(
//   {
//     teamNameLong: 'Jr. Ducks (1)',
//     teamNameShort: 'Ducks',
//     headCoach: 'Jean Labbe',
//     city: 'Irvine',
//     logo: 'Ducks.png',
//   },
//   {
//     teamNameLong: 'Jr. Ducks (2)',
//     teamNameShort: 'Ducks',
//     headCoach: 'John Siemer',
//     city: 'Irvine',
//     logo: 'Ducks.png',
//   },
//   {
//     teamNameLong: 'Jr. Ducks (3)',
//     teamNameShort: 'Ducks',
//     headCoach: 'Tyler Wilkerson',
//     city: 'Westminster',
//     logo: 'Ducks.png',
//   },

//   {
//     teamNameLong: 'Jr. Condors',
//     teamNameShort: 'Condors',
//     headCoach: '',
//     city: 'Bakersfield',
//     logo: 'Condors.png',
//   },

//   {
//     teamNameLong: 'Bay Harbor Red Wings',
//     teamNameShort: 'Red Wings',
//     headCoach: '',
//     city: 'Torrance',
//     logo: 'RedWings.png',
//   },

//   {
//     teamNameLong: 'California Golden Bears',
//     teamNameShort: 'Bears',
//     headCoach: '',
//     city: 'Burbank',
//     logo: 'Bears.png',
//   },

//   {
//     teamNameLong: 'California Heat',
//     teamNameShort: 'Heat',
//     headCoach: '',
//     city: 'Panorama City',
//     logo: 'Heat.png',
//   },

//   {
//     teamNameLong: 'California Wave',
//     teamNameShort: 'Wave',
//     headCoach: '',
//     city: 'Artesia',
//     logo: 'Wave.jpeg',
//   },

//   {
//     teamNameLong: 'Desert Blaze',
//     teamNameShort: 'Blaze',
//     headCoach: '',
//     city: 'Palm Springs',
//     logo: 'Blaze.jpeg',
//   },

//   {
//     teamNameLong: 'Empire Hockey Club',
//     teamNameShort: 'Empire',
//     headCoach: '',
//     city: 'Ontario',
//     logo: 'Empire.png',
//   },

//   {
//     teamNameLong: 'Goldrush Hockey Club',
//     teamNameShort: 'Goldrush',
//     headCoach: '',
//     city: 'Lake Forest',
//     logo: 'Goldrush.png',
//   },

//   {
//     teamNameLong: 'Jr. Ice Dogs',
//     teamNameShort: 'Ice Dogs',
//     headCoach: 'Chris Ochoa',
//     city: 'Anaheim',
//     logo: 'IceDogs.gif',
//   },

//   {
//     teamNameLong: 'Jr. Reign',
//     teamNameShort: 'Reign',
//     headCoach: '',
//     city: 'Riverside',
//     logo: 'Reign.png',
//   },

//   {
//     teamNameLong: 'Jr. Kings (1)',
//     teamNameShort: 'Kings',
//     headCoach: '',
//     city: 'Los Angeles',
//     logo: 'Kings.png',
//   },

//   {
//     teamNameLong: 'OC Hockey Club',
//     teamNameShort: 'OC Hockey',
//     headCoach: '',
//     city: 'Yorba Linda',
//     logo: 'OCHockey.png',
//   },

//   {
//     teamNameLong: 'Moose',
//     teamNameShort: 'Moose',
//     headCoach: '',
//     city: 'Ontario',
//     logo: 'Moose.webp',
//   },

//   {
//     teamNameLong: 'Maple Leafs',
//     teamNameShort: 'Maple Leafs',
//     headCoach: '',
//     city: 'Pasadena',
//     logo: 'MapleLeafs.png',
//   },

//   {
//     teamNameLong: 'Rose City Pats',
//     teamNameShort: 'Pats',
//     headCoach: '',
//     city: 'Rose City',
//     logo: 'Pats.png',
//   },

//   {
//     teamNameLong: 'Jr. Gulls',
//     teamNameShort: 'Gulls',
//     headCoach: '',
//     city: 'San Diego',
//     logo: 'Gulls.png',
//   },

//   {
//     teamNameLong: 'Saints',
//     teamNameShort: 'Saints',
//     headCoach: '',
//     city: 'San Diego',
//     logo: 'Saints.webp',
//   },

//   {
//     teamNameLong: 'Ice Hawks',
//     teamNameShort: 'Ice Hawks',
//     headCoach: '',
//     city: 'Santa Barbara',
//     logo: 'IceHawks.jpeg',
//   },

//   {
//     teamNameLong: 'Jr. Flyers',
//     teamNameShort: 'Flyers',
//     headCoach: '',
//     city: 'Ventura',
//     logo: 'Flyers.png',
//   },

//   {
//     teamNameLong: 'SDIA Hockey Club',
//     teamNameShort: 'Oilers',
//     headCoach: '',
//     city: 'San Diego',
//     logo: 'Oilers.jpeg',
//   },

//   {
//     teamNameLong: 'Mariners',
//     teamNameShort: 'Mariners',
//     headCoach: '',
//     city: 'Ventura',
//     logo: 'Mariners.png',
//   },

//   {
//     teamNameLong: 'Lady Ducks',
//     teamNameShort: 'Lady Ducks',
//     headCoach: '',
//     city: 'Westminster',
//     logo: 'LadyDucks.png',
//   },

// {
// teamNameLong: 'Jr. Kings (2)',
// teamNameShort: 'Kings',
// headCoach: '',
// city: 'Los Angeles',
// logo: 'Kings.png',
// }

// );

// Teams.updateMany({ teamNameShort: 'Ducks' }, { logo: 'Ducks.png' }).then(
//   (data) => console.log(data)
// );

//? UPDATE RECORD
// Teams.updateMany(
//   {
//     team: 'Jr. Flyers',
// },
//   {
//     $set: {
//       teamNameAlias: 'Flyers',
//     },
//   }
// ).then((data) => console.log(data));

// HockeyPlayer.findOneAndUpdate(
//   { lastName: 'Gibson' },
//   {
//     height: 74,
//   }
// ).then((data) => console.log(data));

// Teams.updateMany(
//   {
//     city: 'Winner City',
//   },
//   {
//     $set: {
//       city: 'Anaheim',
//     },
//   }
// ).then((data) => console.log(data));

//? DELETION OF THE 1ST RECORD MONGOOSE FINDS IN MongoDB WITH THE SPECIFIED CRITERIA - Uncomment this out if you want to delete sample data above
// Player.findOneAndDelete({ firstName: 'Magic' }).then(data => console.log(data)); //! Change Player for a name that fits your application. Must do callback or it won't work.
// HockeyGameScore.findOneAndDelete({ season: '2021-2022' }).then((data) =>
//   console.log(data)
// );

//? Drop entire table
// Teams.collection.drop();

module.exports = Teams; //! Change Player for name that fits your Application. This should be consistent with name given in line 31 of code above
