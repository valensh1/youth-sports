import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';

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

  const teamIDConversion = (teamID) => {
    if(teamID) {
      const regex = /[A-Z]/gi;
      return teamID?.match(regex).slice(2).join('');
    }
  }

  

  const [roster, setRoster] = useState([]); // Establish state for roster to loop over and show images and information on each player

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `/api/hockeyPlayers/team/rosters?teamID=${teamID}&season=${season}&division=${division}`
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
    <div className="team-info">
      <Navbar teamID={teamIDConversion(teamID)}/>
      <div className="team-container">
        <aside className="team-photo">
          <img className="team-logo" src={roster?.[1]?.[0].logo} alt="" />
          <img
            className="team-photo--img"
            src={roster?.[1]?.[0]?.teamPhoto}
            alt=""
          />
        </aside>
        <aside className="team-leaderboard">
          <h3>Leaderboard</h3>
          <div className="team-leaderboard--card">
            <div className="team-leaderboard--player">
              <img src="https://i.imgur.com/gbCmMCr.jpg" alt="" />
              <div className="team-leaderboard--player-stats">
                <p className="team-leaderboard--player-name">
                  Hunter Valentine
                </p>
                <p>
                  #36 <span className="period"></span> Ducks{' '}
                  <span className="period"></span> Goalie
                </p>
                <p>
                  {' '}
                  <span className="team-leaderboard-statLine">
                    200
                  </span> SAVES{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="team-leaderboard--card">
            <div className="team-leaderboard--player">
              <img src="https://i.imgur.com/gbCmMCr.jpg" alt="" />
              <div className="team-leaderboard--player-stats">
                <p className="team-leaderboard--player-name">
                  Hunter Valentine
                </p>
                <p className="team-leaderboard-player-teamNumPos">
                  #36 <span className="period"></span> Ducks{' '}
                  <span className="period"></span> Goalie
                </p>
                <p>
                  {' '}
                  <span className="team-leaderboard-statLine">
                    200
                  </span> SAVES{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="team-leaderboard--card">
            <div className="team-leaderboard--player">
              <img src="https://i.imgur.com/gbCmMCr.jpg" alt="" />
              <div className="team-leaderboard--player-stats">
                <p className="team-leaderboard--player-name">
                  Hunter Valentine
                </p>
                <p className="team-leaderboard-player-teamNumPos">
                  #36 <span className="period"></span> Ducks{' '}
                  <span className="period"></span> Goalie
                </p>
                <p>
                  {' '}
                  <span className="team-leaderboard-statLine">
                    200
                  </span> SAVES{' '}
                </p>
              </div>
            </div>
          </div>
        </aside>
        <h3 className="team-name">{team}</h3>
        <table>
          <thead>
            <tr id="team-headers">
              <th id="team-headers--player">Player</th>
              <th id="team-headers--number">#</th>
              <th>Position</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Born</th>
            </tr>
          </thead>
          <tbody>
            {roster[0]?.map((player) => {
              return (
                <tr className="team-players">
                  <div className="team-profile">
                    <img
                      className="team-profile--pic"
                      src={player.img}
                      alt=""
                    />
                    <p>{`${player.firstName} ${player.lastName}`}</p>
                  </div>
                  <td className="team-number">{player.number}</td>
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
    </div>
  );
}

export default Teams;
