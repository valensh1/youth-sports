import { useState, useEffect } from 'react';
import SeasonFilter from '../components/SeasonFilter.js';
import DatePicker from '../components/DatePicker.js';
import TeamLogos from '../components/TeamLogos.js';
import { DAYS_OF_WEEK } from '../Global_Variables/globalVariables.js';
import { MONTHS } from '../Global_Variables/globalVariables.js';

function Scores() {
  const [allData, setAllData] = useState([]);
  const [scores, setScores] = useState([]);
  const [scoresForDateChosen, setScoresForDateChosen] = useState([]);
  const [dateChosen, setDateChosen] = useState('');
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/hockeyPlayers/scores');
        const data = await response.json();
        console.log(data);
        setAllData(data);
        console.log(data[0].games);
        setScores(data[0].games);
        const response2 = await fetch('/api/hockeyPlayers/teams');
        const teamsDataPull = await response2.json();
        setTeamsData(teamsDataPull);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const showScoresForDateChosen = (
    normalFormattedDate,
    mongoDBFormattedDate
  ) => {
    const scoresForDate = scores.find((games) => {
      return games.date === mongoDBFormattedDate;
    });
    setScoresForDateChosen(scoresForDate);

    const dayOfWeek = DAYS_OF_WEEK[normalFormattedDate.getDay()];
    const month = MONTHS[normalFormattedDate.getMonth()];
    const dateOfMonth = normalFormattedDate.getDate();
    const year = normalFormattedDate.getFullYear();
    setDateChosen(`${dayOfWeek}, ${month} ${dateOfMonth}, ${year}`);
  };

  return (
    <div className="scores-wrapper">
      <div className="filters">
        <SeasonFilter className="filters-season filter" seasons={allData} />
        <DatePicker
          className="filter"
          showScoresForDateChosen={showScoresForDateChosen}
        />
      </div>
      <h1 className="scores-date">{dateChosen}</h1>
      <div className="scores-section-container">
        {scoresForDateChosen?.scores?.map((score) => {
          return (
            <div key={score._id} className="scores-section">
              <div className="scores-g1-visitor scores">
                <TeamLogos team={score?.visitorTeam} logo={teamsData} />
                <h3>{score?.visitorTeam}</h3>
                <h5>(0-8-0)</h5>
                <h1>{score?.visitorScore}</h1>
              </div>

              <div className="scores-g1-home scores">
                <TeamLogos team={score?.homeTeam} logo={teamsData} />
                <h3>{score?.homeTeam}</h3>
                <h5>(7-1-1)</h5>
                <h1>{score?.homeScore}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Scores;
