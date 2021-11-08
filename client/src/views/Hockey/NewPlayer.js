//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

//? POST REQUEST - FORM TO INPUT NEW PLAYER
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'; // Must import useHistory in order to have React redirect to different pages outside the Router Link found on App.js
import NewPlayerForm from '../../components/NewPlayerForm.js';

const NewPlayer = event => {
  //! Need to modify NewPlayer based upon what you rename the NewPlayer.js file name.
  const [formData, setFormData] = useState({
    //! Need to change this based upon your Model schema from models folder. Should match
    img: '',
    firstName: '',
    lastName: '',
    number: '',
    position: '',
    height: '',
    weight: '',
    born: '',
    team: '',
    division: '',
    level: '',
    location: '',
  });

  const [completedData, setCompletedData] = useState({
    img: '',
    firstName: '',
    lastName: '',
    number: '',
    position: '',
    height: '',
    weight: '',
    born: '',
    team: '',
    division: '',
    level: '',
    location: '',
  });

  const [sampleData, setSampleData] = useState({
    img: 'https://cms.nhl.bamgrid.com/images/headshots/current/60x60/8476483.jpg',
    firstName: 'New',
    lastName: 'Dude',
    number: 23,
    position: 'Forward',
    height: 1,
    weight: 1,
    born: '02/25/1977',
    team: 'Jr. Ducks',
    division: 'PeeWee',
    level: 'A',
    location: 'Great Park',
  });

  const history = useHistory(); // MUST ACTIVATE USE HISTORY HERE TO REDIRECT TO DIFFERENT PAGE AFTER FORM SUBMISSION. WON'T WORK INSIDE THE handleSubmit FUNCTION SO MUST BE HERE

  const handleSubmit = () => {
    try {
      //? POST REQUEST - no need for async with post request
      console.log(formData);
      fetch('/api/hockeyPlayers', {
        //! Change players to accommodate your application
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(formData),
        body: JSON.stringify(completedData),
      })
        //? RESETTING OF FORM INPUT FIELDS TO BLANK AFTER FORM SUBMISSION
        .then(
          setFormData({
            //! Need to change this based upon your Model schema from models folder. Should match
            img: '',
            firstName: '',
            lastName: '',
            number: '',
            position: '',
            height: '',
            weight: '',
            born: '',
            team: '',
            division: '',
            level: '',
            location: '',
          })
        )
        //? REDIRECTION TO ROUTE AFTER FORM SUBMISSION
        .then(
          setTimeout(() => {
            history.push(`/hockeyPlayers`); //! Change players for name that fits your application. ENTER ROUTE HERE YOU WANT TO GO TO AFTER FORM SUBMISSION
          }, 1500) // Timeout of 1.5 seconds needed to allow for adequate time for data to be posted and then upon redirect the players.js useEffect hook has enough time to retrieve all the data including the newly posted data. It seemed to be working fine without setTimeout on local host but when deploying there seemed to be a problem so this is to fix that delay in the get request from players.js file getting the data including the newly posted player.
        );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitted = data => {
    // setFormData(data);
    // console.log(data);
    console.log(data);
    setCompletedData(data);
    fetch('/api/hockeyPlayers', {
      //! Change players to accommodate your application
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(formData),
      body: JSON.stringify(completedData),
    }).then(
      setTimeout(() => {
        history.push(`/hockeyPlayers`); //! Change players for name that fits your application. ENTER ROUTE HERE YOU WANT TO GO TO AFTER FORM SUBMISSION
      }, 2500) // Timeout of 1.5 seconds needed to allow for adequate time for data to be posted and then upon redirect the players.js useEffect hook has enough time to retrieve all the data including the newly posted data. It seemed to be working fine without setTimeout on local host but when deploying there seemed to be a problem so this is to fix that delay in the get request from players.js file getting the data including the newly posted player.
    );
  };

  //! Update all places in HTML below where it says player to names that fit your application. Also, update all inputs below such as type to match the type in your Model schema, change the name attribute to match your Model schema name (this must match - in model if you have a field called team your name attribute for that input must be team. That is how req.body knows what object fields to populate), value and onChange attributes will also need to be modified for your applications data.
  return <NewPlayerForm completedForm={handleSubmitted} />;
};

export default NewPlayer; //! Need to modify NewPlayer based upon what you rename the NewPlayer.js file name.
