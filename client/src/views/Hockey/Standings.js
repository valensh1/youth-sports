import { useState, useEffect } from 'react';
import SeasonFilter from '../../components/SeasonFilter.js';
import HockeyDivisions from '../../components/Hockey/DivisionPicker.js';

function Standings() {
  const [teamsData, setTeamsData] = useState([]);
  const [division, setDivision] = useState('');
  const [standingsDataPull, setStandingsDataPull] = useState({});
  const [standings, setStandings] = useState([]);

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
      await setStandingsDataPull(data[1]);

      // FETCHING OF TEAMS DATA TO DISPLAY LOGO NEXT TO TEAM NAME
      const response2 = await fetch(`/api/hockeyPlayers/teams`);
      const teamsDataPull = await response2.json();
      console.log(teamsDataPull);
      await setTeamsData(teamsDataPull);
    } catch (error) {
      console.error(error);
    }
  };

  //? Manipulating Standings Object to get Ready to Display Standings Rankings
  // Add games played and winning percentage to standingsObject
  useEffect(() => {
    const standingsObjectArrayConversion = Object.values(standingsDataPull); // Converts standingsObject into an array
    standingsObjectArrayConversion.forEach((team) => {
      team.gamesPlayed = team.wins + team.losses + team.ties;
      team.pointsPercentage = team.points / (team.gamesPlayed * 2);
    });
    console.log(standingsObjectArrayConversion);

    standingsObjectArrayConversion.sort((a, b) => {
      return b.points - a.points || b.pointsPercentage - a.pointsPercentage; // Sorts teams by points and then if teams have the same amount of points it equals 0 which is a falsy value so then it jumps to the next part of code. || (or operator) returns first truthy value.
    });
    setStandings(standingsObjectArrayConversion);
  }, [standingsDataPull]);

  const getTeamInfo = (teamName, logo = null) => {
    const index = teamsData.findIndex((team) => {
      return team.teamNameLong === teamName;
    });
    const teamInfoToDisplay = logo
      ? teamsData[index]?.logo
      : teamsData[index]?.teamNameShort === 'Ducks' ||
        teamsData[index]?.teamNameShort === 'Kings'
      ? teamsData[index]?.teamNameLong
      : teamsData[index]?.teamNameShort;
    return teamInfoToDisplay;
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
          {standings.map((team, index) => {
            return (
              <tr key={team.team}>
                <th>
                  <span className="ranking">{index + 1}</span>
                  <img src={getTeamInfo(team.team, 'get logo here')} alt="" />
                  <span className="team-name">{getTeamInfo(team.team)}</span>
                </th>
                <td>{team.gamesPlayed}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.ties}</td>
                <td>{team.points}</td>
                <td>{team.pointsPercentage.toFixed(3).slice(1)}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
