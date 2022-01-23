import { useState, useEffect } from 'react';
import SeasonFilter from '../../components/SeasonFilter.js';
import HockeyDivisions from '../../components/Hockey/DivisionPicker.js';

function Standings() {
  const [division, setDivision] = useState('');
  const [standingsObject, setFinalStandingsObject] = useState({});

  //? DIVISION FILTER
  const divisionFilter = (division) => {
    console.log(division);
    division === 'Select Division' ? setDivision('') : setDivision(division);
  };

  //? SEASON FILTER
  const seasonFilter = async (season) => {
    try {
      console.log(season);
      const response = await fetch(
        `api/hockeyPlayers/standings?division=${division}&season=${season}`
      );
      const data = await response.json();
      console.log(data);
      const standingsObject = {};
      const teamsArray = data[0].forEach((team) => {
        standingsObject[team.teamNameLong] = {
          team: team.teamNameLong,
        };
      });
      // console.log(standingsObject);
      data[1].forEach((team) => {
        standingsObject[team.homeTeamLong].points = team.homeTeamCurrentPoints;
        standingsObject[team.homeTeamLong].wins = team.homeTeamCurrentWins;
        standingsObject[team.homeTeamLong].losses = team.homeTeamCurrentLosses;
        standingsObject[team.homeTeamLong].ties = team.homeTeamCurrentTies;
        standingsObject[team.visitorTeamLong].points =
          team.visitorTeamCurrentPoints;
        standingsObject[team.visitorTeamLong].wins =
          team.visitorTeamCurrentWins;
        standingsObject[team.visitorTeamLong].losses =
          team.visitorTeamCurrentLosses;
        standingsObject[team.visitorTeamLong].ties =
          team.visitorTeamCurrentTies;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="standings-container">
      <HockeyDivisions divisionFilter={divisionFilter} />
      {division || division === 'Select Division' ? (
        <SeasonFilter seasonFilter={seasonFilter} />
      ) : (
        ''
      )}
      <h1>Standings</h1>
      <table>
        <thead>
          <tr>
            <th id="header-team">Team</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>T</th>
            <th>PTS</th>
            <th>P%</th>
            <th>GF</th>
            <th>GA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <span className="ranking">1</span>
              <img src="https://i.imgur.com/x4pIvDM.png" alt="" />
              <span>Jr. Ducks (2)</span>
            </th>
            <td>9</td>
            <td>7</td>
            <td>1</td>
            <td>1</td>
            <td>15</td>
            <td>.758</td>
            <td>55</td>
            <td>17</td>
          </tr>
          <tr>
            <th>
              <span className="ranking">2</span>

              <img src="https://i.imgur.com/x4pIvDM.png" alt="" />
              <span>Jr. Ducks (2)</span>
            </th>
            <td>9</td>
            <td>7</td>
            <td>1</td>
            <td>1</td>
            <td>15</td>
            <td>.675</td>
            <td>55</td>
            <td>17</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
