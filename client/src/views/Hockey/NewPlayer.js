//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

//? POST REQUEST - FORM TO INPUT NEW PLAYER
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Must import useHistory in order to have React redirect to different pages outside the Router Link found on App.js

const NewPlayer = event => {
  //! Need to modify NewPlayer based upon what you rename the NewPlayer.js file name.

  const teams = [
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
  ].sort();

  const cities = [
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
  ].sort();

  const division = [
    'Mites',
    'Squirt',
    'PeeWee',
    'Bantam',
    'Midget',
    'Juvenile',
    'Junior',
    'Senior',
  ];

  const level = ['B', 'BB', 'A', 'AA', 'AAA'];

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

  const history = useHistory(); // MUST ACTIVATE USE HISTORY HERE TO REDIRECT TO DIFFERENT PAGE AFTER FORM SUBMISSION. WON'T WORK INSIDE THE handleSubmit FUNCTION SO MUST BE HERE

  const handleSubmit = event => {
    try {
      //? POST REQUEST - no need for async with post request
      event.preventDefault();
      fetch('/api/hockeyPlayers', {
        //! Change players to accommodate your application
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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

  //! Update all places in HTML below where it says player to names that fit your application. Also, update all inputs below such as type to match the type in your Model schema, change the name attribute to match your Model schema name (this must match - in model if you have a field called team your name attribute for that input must be team. That is how req.body knows what object fields to populate), value and onChange attributes will also need to be modified for your applications data.
  //? Name attribute on form items below critical for MongoDB to know what schema key/value pair it is being posted to
  return (
    <div className="form">
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <h1>NEW PLAYER</h1>
        <div className="form__name">
          <div className="form__first col-sm-4">
            <label className="form__label" htmlFor="firstName">
              First
            </label>
            <input
              type="text"
              className="form__first-input"
              name="firstName"
              onChange={event =>
                setFormData({ ...formData, firstName: event.target.value })
              }
            />
          </div>

          <div className="form__last col-sm-4 ">
            <label htmlFor="lastName" className="form__label">
              Last
            </label>
            <input
              type="text"
              className="form__last-input"
              name="lastName"
              onChange={event =>
                setFormData({ ...formData, lastName: event.target.value })
              }
            />
          </div>
        </div>
        <div className="form__number col-sm-1 mt-5">
          <label htmlFor="number" className="form__label">
            Jersey #
          </label>
          <input
            type="number"
            className="form__number-input"
            name="number"
            onChange={event =>
              setFormData({ ...formData, number: event.target.value })
            }
          />
        </div>
        <div className=" form__position mt-5 mb-2">
          <h3 className="form__position-heading">Position</h3>

          <div className="form__position-selections">
            <div className="form__position-forward ">
              <input
                className="form__position-input"
                type="checkbox"
                value="Forward"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
              <label className="form__label" htmlFor="position">
                Forward
              </label>
            </div>

            <div className="form__position-defenseman ">
              <input
                className="form__position-input"
                type="checkbox"
                value="Defenseman"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
              <label className="form__label" htmlFor="position">
                Defenseman
              </label>
            </div>

            <div className="form__position-goalie">
              <input
                className="form__position-input"
                type="checkbox"
                value="Goalie"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
              <label className="form__label" htmlFor="position">
                Goalie
              </label>
            </div>

            <div className="form__position-coach">
              <input
                className="form__position-input"
                type="checkbox"
                value="Coach"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
              <label className="form__label" htmlFor="position">
                Coach
              </label>
            </div>

            <div className="form__position-assistantCoach  mb-5">
              <input
                className="form__position-input"
                type="checkbox"
                value="Assistant Coach"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
              <label className="form__label" htmlFor="position">
                Assistant Coach
              </label>
            </div>
          </div>
        </div>
        <div className="form__height-weight">
          <div className="form__height">
            <label htmlFor="height" className="form__label">
              Height (inches)
            </label>
            <input
              type="number"
              className="form__height-input col-8"
              name="height"
              onChange={event =>
                setFormData({ ...formData, height: event.target.value })
              }
            />
          </div>

          <div className="form__weight">
            <label htmlFor="weight" className="form__label">
              Weight (lbs.)
            </label>
            <input
              type="number"
              className="form__weight-input col-8"
              id="form-weight"
              name="weight"
              onChange={event =>
                setFormData({ ...formData, weight: event.target.value })
              }
            />
          </div>
        </div>

        <div className="form__born col-5">
          <label className="form__label" htmlFor="born">
            DOB
          </label>
          <input
            type="text"
            placeholder="xx/xx/xxxx"
            className="form__born-input"
            name="born"
            onChange={event =>
              setFormData({ ...formData, born: event.target.value })
            }
          />
        </div>

        <div className=" form__teamDivision team mt-5">
          <div className="form__teamDivision-team  col-4">
            <label htmlFor="team">Team</label>
            <select
              name="team"
              className="form__teamDivision-select"
              onChange={event =>
                setFormData({ ...formData, team: event.target.value })
              }
            >
              <option value="select team"></option>
              {teams.map(team => {
                return <option key={team}>{team}</option>;
              })}
            </select>
          </div>

          <div className="form__teamDivision-division col-2">
            <label htmlFor="division">Division</label>
            <select
              className="form__teamDivision-select"
              name="division"
              onChange={event =>
                setFormData({ ...formData, division: event.target.value })
              }
            >
              <option value="select division"></option>
              {division.map(div => {
                return <option key={div}>{div}</option>;
              })}
            </select>
          </div>

          <div className="form__location col-4">
            <label htmlFor="location" className="form__label">
              Location
            </label>
            <select
              className="form__location-select"
              name="location"
              onChange={event =>
                setFormData({ ...formData, location: event.target.value })
              }
            >
              <option value="select location"></option>
              {cities.map(city => {
                return <option key={city}>{city}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="form__level mt-5">
          <h5>Level</h5>
          <div className="levels">
            {level.map(lev => {
              return (
                <div className="form__level-checkbox">
                  <input
                    type="checkbox"
                    className="form__level-checkbox-input"
                    value={lev}
                    name="level"
                    onChange={event =>
                      setFormData({ ...formData, level: event.target.value })
                    }
                  />
                  <label htmlFor="level">{lev}</label>
                </div>
              );
            })}
          </div>
        </div>

        <input
          type="text"
          className="form__img col-10 mt-5"
          placeholder="Image String"
          name="img"
          onChange={event =>
            setFormData({ ...formData, img: event.target.value })
          }
        />

        <div className="button-div mt-5">
          <button className="button">
            SUBMIT<span>&rarr;</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPlayer; //! Need to modify NewPlayer based upon what you rename the NewPlayer.js file name.
