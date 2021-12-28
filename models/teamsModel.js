//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION
const mongoose = require('mongoose');

//? SETTING UP MongoDB SCHEMA
//! Update playerSchema below for a name that fits your application. Also update any fields below for the type of schema such as changing team points with a type of number instead of string, etc. Also, you can add as many schema fields as needed.
const teamSchema = new mongoose.Schema({
  team: {
    type: String,
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
    required: true,
  },
  city: {
    type: String,
    enum: [
      'Anaheim',
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
      'Artesia',
    ],
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const Teams = mongoose.model('Teams', teamSchema); //! Update Player and playerSchema for names that fit your application. Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

//? If miss adding fields to your schema for your original mongoose model you must add like this below
// mongoose.model('HockeyPlayer').schema.add({ division: String });

//? CREATION OF FIRST SET OF DATA FOR MongoDB DATABASE - Uncomment this out if you want this to populate your database with sample data
// const teams1 = Teams.create(
// {
//   team: 'Jr. Ducks',
//   city: 'Anaheim',
//   logo: 'JrDucks.jpeg',
// },
// {
//   team: 'Jr. Condors',
//   city: 'Bakersfield',
//   logo: 'JrCondors.png',
// },
// {
//   team: 'Bay Harbor Red Wings',
//   city: 'Torrance',
//   logo: 'RedWings.png',
// },
// {
//   team: 'California Golden Bears',
//   city: 'Burbank',
//   logo: 'GoldenBears.png',
// },
// {
//   team: 'California Heat',
//   city: 'Panorama City',
//   logo: 'Heat.png',
// },
// {
//   team: 'California Wave',
//   city: 'Artesia',
//   logo: 'Wave.jpeg',
// },
// {
//   team: 'Desert Blaze',
//   city: 'Palm Springs',
//   logo: 'Blaze.jpeg',
// },
// {
//   team: 'Empire Hockey Club',
//   city: 'Ontario',
//   logo: 'Empire.png',
// },
// {
//   team: 'Goldrush Hockey Club',
//   city: 'Lake Forest',
//   logo: 'GoldRush.png',
// },
// {
//   team: 'Jr. Ice Dogs',
//   city: 'Anaheim',
//   logo: 'IceDogs.gif',
// },
// {
//   team: 'Jr. Reign',
//   city: 'Riverside',
//   logo: 'JrReign.png',
// },
// {
//   team: 'Jr. Kings',
//   city: 'Los Angeles',
//   logo: 'JrKings.png',
// },
// {
//   team: 'OC Hockey Club',
//   city: 'Yorba Linda',
//   logo: 'OCHockeyClub.png',
// },
// {
//   team: 'Moose',
//   city: 'Ontario',
//   logo: 'Moose.webp',
// },
// {
//   team: 'Maple Leafs',
//   city: 'Pasadena',
//   logo: 'MapleLeafs.png',
// },
// {
//   team: 'Rose City Pats',
//   city: 'Rose City',
//   logo: 'Pats.png',
// },
// {
//   team: 'Jr. Gulls',
//   city: 'San Diego',
//   logo: 'JrGulls.png',
// },
// {
//   team: 'Saints',
//   city: 'San Diego',
//   logo: 'Saints.webp',
// },
// {
//   team: 'Ice Hawks',
//   city: 'Santa Barbara',
//   logo: 'IceHawks.jpeg',
// },
// {
//   team: 'Jr. Flyers',
//   city: 'Ventura',
//   logo: 'Flyers.png',
// },
// {
//   team: 'SDIA Hockey Club',
//   city: 'San Diego',
//   logo: 'SDIA-Oilers.png',
// },
// {
//   team: 'Mariners',
//   city: 'Ventura',
//   logo: 'Mariners.png',
// },
// {
//   team: 'Lady Ducks',
//   city: 'Westminster',
//   logo: 'LadyDucks.png',
// }
// );

// const teams2 = Teams.create(
//   {
//     team: 'Goldrush Hockey Club',
//     city: 'Lake Forest',
//     logo: 'GoldRush.png',
//   },

//   {
//     team: 'Rose City Pats',
//     city: 'Pasadena',
//     logo: 'Pats.png',
//   },
//   {
//     team: 'Jr. Flyers',
//     city: 'Ventura',
//     logo: 'Flyers.png',
//   },
//   {
//     team: 'Mariners',
//     city: 'Ventura',
//     logo: 'Mariners.png',
//   }
// );

//? UPDATE RECORD
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
