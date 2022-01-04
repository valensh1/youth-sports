//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION
//? CONTROLLER FILE
// The purpose of this file is to keep our routes organized. This playerController.js file deals with all player routes. Another controller file could be used for all routes related to teams, etc.
const express = require('express');
const APIRouter = express.Router();
const multer = require('multer'); //ADDED --> multer will be used to handle the form data.
const Aws = require('aws-sdk'); // ADDED --> aws-sdk library will used to upload image to s3 bucket.
const HockeyPlayers = require('../models/hockeyPlayerModel.js'); //! Modify players.js file for your applications file name. Require players model file so we can use it in this file
const HockeyGameScores = require('../models/gameScoresModel.js'); //! Modify players in route for your own application Creation of variable to pass our Player Model (or whatever you called your model) to this file so we can use our Model in this file when accessing Mongoose/MongoDB
const Teams = require('../models/teamsModel.js'); //! Modify players in route for your own application Creation of variable to pass our Player Model (or whatever you called your model) to this file so we can use our Model in this file when accessing Mongoose/MongoDB

//? INDEX ROUTE - (READ) ROUTE SHOWING ALL PLAYERS FROM A SPECIFIC TEAM. REQUEST COMES FROM Roster.js FILE ON FRONT-END
// '/' is the same as api/hockeyPlayers since we specify api/players in the sever.js file and so a / by itself represents that
APIRouter.get('/', async (req, res) => {
  try {
    const roster = await HockeyPlayers.find({}); //! Modify Players for your Application's collection name from your MongoDB database.
    res.status(200).json(roster);
  } catch (error) {
    res.status(400).json(error);
  }
});

//? INDEX ROUTE - (READ) ROUTE SHOWING ALL GAME SCORES FOR ALL TEAMS. REQUEST COMES FROM gameScores.js FILE ON FRONT-END
// '/' is the same as api/hockeyPlayers since we specify api/players in the sever.js file and so a / by itself represents that
APIRouter.get('/scores', async (req, res) => {
  try {
    const scores = await HockeyGameScores.find({}); //! Modify Players for your Application's collection name from your MongoDB database.
    res.status(200).json(scores);
  } catch (error) {
    res.status(400).json(error);
  }
});

//? DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
APIRouter.get('/scores/:season', async (req, res) => {
  try {
    const { season } = req.params;
    console.log(season);
    const scores = await HockeyGameScores.find({ season }); //! Modify Players for your Application's collection name from your MongoDB database.
    res.status(200).json(scores);
  } catch (error) {
    res.status(400).json(error);
  }
});

//? INDEX ROUTE - (READ) ROUTE SHOWING ALL TEAMS INFORMATION SUCH AS TEAM NAME, HEAD COACH, CITY, LOGO, ETC. REQUEST COMES FROM TeamLogos.js FILE ON FRONT-END
// '/' is the same as api/hockeyPlayers since we specify api/players in the sever.js file and so a / by itself represents that
APIRouter.get('/teams', async (req, res) => {
  try {
    const teamsInfo = await Teams.find({}); //! Modify Players for your Application's collection name from your MongoDB database.
    res.status(200).json(teamsInfo);
  } catch (error) {
    res.status(400).json(error);
  }
});

//? SHOW ROUTE - (READ) SHOW PAGE DISPLAYING ONE INDIVIDUAL PLAYER
APIRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const showPagePlayer = await HockeyPlayers.findById(id); //! Modify Players for your Application's collection name from your MongoDB database and variable name showPagePlayer for a variable that makes sense for your application. Instead of destructuring id above could just have done this ---> const showPagePlayer = await Players.findById(req.params.id)
    res.status(200).json(showPagePlayer); //! Modify showPagePlayer for whatever variable name you decide to use in line of code above that makes sense for your application
    console.log(showPagePlayer); //! Modify showPagePlayer for whatever variable name you decide to use in line of code above that makes sense for your application
  } catch (error) {
    res.status(400).send(error);
  }
});

//? DELETE ROUTE - DELETES INDIVIDUAL PLAYER FROM SHOW PAGE
APIRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlayer = await HockeyPlayers.findByIdAndDelete(id); //! Modify Players for your Application's collection name from your MongoDB database and variable name deletedPlayer for a variable that makes sense for your application. Instead of destructuring id above could just have done this ---> const showPagePlayer = await Players.findById(req.params.id)
    res.status(200).json(deletedPlayer); //! Modify deletedPlayer for whatever variable name you decide to use in line of code above that makes sense for your application
    console.log(deletedPlayer); //! Modify deletedPlayer for whatever variable name you decide to use in line of code above that makes sense for your application
  } catch (error) {
    res.status(400).send(error);
  }
});

//? POST REQUEST - (CREATE) - COMES FROM NewPlayer.js FILE ON FRONT-END
APIRouter.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newPost = await HockeyPlayers.create(req.body); //! Modify Players for your Application's collection name from your MongoDB database and variable name newPost for a variable that makes sense for your application.
  } catch (error) {
    res.status(400).json(error);
  }
});

//? PUT REQUEST - (UPDATE/EDIT) - COMES FROM editPlayer.js FILE ON FRONT-END
APIRouter.put('/edit/:id', async (req, res) => {
  try {
    const { id } = req.params; // Destructure of id out of req.params

    // Find req.params.id and replaces with req.body and returns the newly updated document. The return of newly updated document happens because of the new:true in code.
    const playerToUpdate = await HockeyPlayers.findByIdAndUpdate(
      //! Modify Players for your Application's collection name from your MongoDB database and variable name playerToUpdate for a variable that makes sense for your application.
      id, // Could have also put req.params here if I didn't destructure it above
      req.body,
      { new: true }
    );
    res.status(200).json(playerToUpdate); //! Modify playerToUpdate for whatever variable name you decide to use in line of code above that makes sense for your application
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = APIRouter;
