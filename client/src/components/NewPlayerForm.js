import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'; // Must import useHistory in order to have React redirect to different pages outside the Router Link found on App.js

function NewPlayerForm({ completedForm }) {
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

  const handleSubmitted = event => {
    event.preventDefault();
    console.log('You clicked handle submit brother!!!');
    completedForm(formData);
    setFormData({
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
  };

  //? Name attribute on form items below critical for MongoDB to know what schema key/value pair it is being posted to
  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmitted}>
        <h1 className="form__heading">NEW PLAYER</h1>
        <div className="form__name">
          <div className="form__first form__container col-sm-4">
            <label className="form__label" htmlFor="firstName">
              First
            </label>
            <input
              type="text"
              className="form__input"
              name="firstName"
              onChange={event =>
                setFormData({ ...formData, firstName: event.target.value })
              }
            />
          </div>

          <div className="form__last form__container col-sm-4 ">
            <label htmlFor="lastName" className="form__label">
              Last
            </label>
            <input
              type="text"
              className="form__input"
              name="lastName"
              onChange={event =>
                setFormData({ ...formData, lastName: event.target.value })
              }
            />
          </div>
        </div>
        <div className="form__number form__container col-sm-1 mt-5">
          <label htmlFor="number" className="form__label">
            Jersey #
          </label>
          <input
            type="number"
            className="form__input"
            name="number"
            onChange={event =>
              setFormData({ ...formData, number: event.target.value })
            }
          />
        </div>
        <div className="position__check form__container mt-5 mb-2">
          <h3 className="position__heading">Position</h3>

          <div className="position__check-selections">
            <div className="form-check ">
              <label
                className="form-check-label form__label"
                htmlFor="position"
              >
                Forward
              </label>
              <input
                className="form-check-input form__input"
                type="checkbox"
                value="Forward"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
            </div>

            <div className="form-check ">
              <label
                className="form-check-label form__label"
                htmlFor="position"
              >
                Defenseman
              </label>
              <input
                className="form-check-input form__input"
                type="checkbox"
                value="Defenseman"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
            </div>

            <div className="form-check ">
              <label
                className="form-check-label form__label"
                htmlFor="position"
              >
                Goalie
              </label>
              <input
                className="form-check-input form__input"
                type="checkbox"
                value="Goalie"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
            </div>

            <div className="form-check ">
              <label
                className="form-check-label form__label"
                htmlFor="position"
              >
                Coach
              </label>
              <input
                className="form-check-input form__input"
                type="checkbox"
                value="Coach"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
            </div>

            <div className="form-check  mb-5">
              <label
                className="form-check-label form__label"
                htmlFor="position"
              >
                Assistant Coach
              </label>
              <input
                className="form-check-input form__input"
                type="checkbox"
                value="Assistant Coach"
                name="position"
                onChange={event =>
                  setFormData({ ...formData, position: event.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="form__height-weight">
          <div className="form__container">
            <label htmlFor="height" className="form__label">
              Height (inches)
            </label>
            <input
              type="number"
              className="form__height form__input col-8"
              name="height"
              onChange={event =>
                setFormData({ ...formData, height: event.target.value })
              }
            />
          </div>

          <div className="form__container">
            <label htmlFor="weight" className="form__label">
              Weight (lbs.)
            </label>
            <input
              type="number"
              className="form__weight form__input col-8"
              id="form-weight"
              name="weight"
              onChange={event =>
                setFormData({ ...formData, weight: event.target.value })
              }
            />
          </div>
        </div>
        <div className="form__born-birthplace mt-5">
          <div className="form__container form__born col-5">
            <label className="form__label" htmlFor="born">
              DOB
            </label>
            <input
              type="text"
              placeholder="xx/xx/xxxx"
              className="form__input form__born-input"
              name="born"
              onChange={event =>
                setFormData({ ...formData, born: event.target.value })
              }
            />
          </div>
        </div>
        <div className="form__container-team mt-5">
          <div className="form__container team-container  col-4">
            <label htmlFor="team">Team</label>
            <select
              name="team"
              id="team"
              className="form__input form__input-team"
              onChange={event =>
                setFormData({ ...formData, team: event.target.value })
              }
            >
              <option value="select-team"></option>
              {teams.map(team => {
                return <option key={team}>{team}</option>;
              })}
            </select>
          </div>

          <div
            className="form__container team-container col-2"
            id="division-container"
          >
            <label htmlFor="division">Division</label>
            <select
              className="form__input form__input-division"
              name="division"
              onChange={event =>
                setFormData({ ...formData, division: event.target.value })
              }
            >
              <option value="select-division"></option>
              {division.map(div => {
                return <option key={div}>{div}</option>;
              })}
            </select>
          </div>

          <div
            className="form__container team-container col-4"
            id="location-container"
          >
            <label htmlFor="location">Location</label>
            <select
              className="form__input form__input-location"
              name="location"
              onChange={event =>
                setFormData({ ...formData, location: event.target.value })
              }
            >
              <option value="select-location"></option>
              {cities.map(city => {
                return <option key={city}>{city}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="form__container form__container-levels mt-5">
          <h5>Level</h5>
          <div className="levels">
            {level.map(lev => {
              return (
                <div className="levels__checkbox">
                  <input
                    type="checkbox"
                    className="form__input levels-checkbox"
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
          className="form__input form__image col-10 mt-5"
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
}

export default NewPlayerForm;
