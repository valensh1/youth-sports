//! ALL RED COMMENTED SECTIONS ARE PLACES WHERE POTENTIAL CHANGES ARE NEEDED BASED UPON YOUR APPLICATION

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SortBtn from '../../components/SortBtn.js';

const Roster = () => {
  //! Need to modify Roster based upon what you rename the Roster.js file name.
  const [originalData, setOriginalData] = useState([]); // Original data in order it was pulled from Mongo which is earliest to latest in order of input from form (latest input at bottom of roster)
  const [players, setPlayers] = useState([]); //! Change players and setPlayers to names that relate to your application

  useEffect(() => {
    (async () => {
      try {
        //? GET REQUEST - INDEX ROUTE SHOWING ALL PLAYERS
        const response = await fetch('/api/hockeyPlayers'); //! Change players to accommodate your application. Leave api the same
        const data = await response.json();
        await setPlayers(data); //! Change setPlayers to whatever name you use above in useState
        console.log(data);
        await setOriginalData(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // sortedList argument was passed back up from child to parent
  const handleSort = list => {
    console.log(list);
    setPlayers([...list]);
  };

  //! Change where it says players to accommodate your application and change the fields shown in index page to show whatever fields you want to show from your MongoDB database.
  return (
    <div className="index-container">
      <h1>Roster of Players</h1>
      <table>
        <thead>
          <tr>
            <th>
              <SortBtn
                players={players}
                handleSort={handleSort}
                originalData={originalData}
              />
              Player
            </th>
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
        {players?.map(player => {
          return (
            <tbody key={player?._id}>
              <tr className="index__player">
                <td className="index__player-pic-td">
                  <Link
                    className="index__player-link"
                    to={`/hockeyPlayers/${player?._id}`}
                  >
                    <img
                      src={player?.img}
                      alt="player profile"
                      className="index__player-pic"
                    />
                    <p className="index__player-name">{`${player?.firstName} ${player?.lastName}`}</p>
                  </Link>
                </td>

                <td> {player?.number}</td>
                <td>{player?.position}</td>
                <td> {player?.height}</td>
                <td>{player?.weight}</td>
                <td>{player?.born}</td>
                <td>{player?.team}</td>
                <td>{player?.division}</td>
                <td>{player?.level}</td>
                <td>{player?.location}</td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <button className="btn btn-index">
        <Link className="btn-link" to="/hockeyPlayers/new">
          NEW PLAYER
        </Link>
      </button>
    </div>
  );
};

export default Roster; //! Need to modify Roster based upon what you rename the Roster.js file name.
