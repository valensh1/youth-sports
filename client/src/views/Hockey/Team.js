import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Teams() {
  const search = useLocation().search;
  const team = new URLSearchParams(search).get('team');
  const teamID = new URLSearchParams(search).get('teamID');
  const division = new URLSearchParams(search).get('division');
  const season = new URLSearchParams(search).get('season');
  console.log(team);
  console.log(teamID);
  console.log(division);
  console.log(season);

  const [roster, setRoster] = useState([]); // Establish state for roster to loop over and show images and information on each player

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `/api/hockeyPlayers/team/rosters?teamID=${teamID}`
        );
        const data = await response.json();
        console.log(data);
        await setRoster(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="team">
      <h3>Jr. Ducks (2)</h3>
      <table className="team-table">
        <thead className="team-headers">
          <tr>
            <th>Player</th>
            <th>#</th>
            <th>Position</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Born</th>
            <th>Team</th>
            <th>Division</th>
            <th>Level</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((player) => {
            return (
              <tr>
                <th>
                  <img
                    src={player.img}
                    alt=""
                    style={{
                      height: '7rem',
                      width: '7rem',
                      borderRadius: '50%',
                    }}
                  />
                  <td>{`${player.firstName} ${player.lastName}`}</td>
                </th>
                <td>{player.number}</td>
                <td>{player.position}</td>
                <td>{player.height}</td>
                <td>{player.weight}</td>
                <td>{player.born}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
