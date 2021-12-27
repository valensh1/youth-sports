import { useState, useEffect } from 'react';
import SeasonFilter from '../components/SeasonFilter.js';
import DatePicker from '../components/DatePicker.js';
import { DAYS_OF_WEEK } from '../Global_Variables/globalVariables.js';
import { MONTHS } from '../Global_Variables/globalVariables.js';

function Scores() {
  const [allData, setAllData] = useState([]);
  const [scores, setScores] = useState([]);
  const [scoresForDateChosen, setScoresForDateChosen] = useState([]);
  const [dateChosen, setDateChosen] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/hockeyPlayers/scores');
        const data = await response.json();
        console.log(data);
        setAllData(data);
        console.log(data[0].games);
        setScores(data[0].games);
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
      <SeasonFilter seasons={allData} />
      <DatePicker showScoresForDateChosen={showScoresForDateChosen} />
      <h1 className="scores-date">{dateChosen}</h1>

      {scoresForDateChosen?.scores?.map((score) => {
        return (
          <div className="scores-section">
            <div className="scores-g1-visitor scores">
              <img src="./img/Team-Logos/Hockey/SDIA-Oilers.jpeg" alt="" />
              <h3>{score?.visitorTeam}</h3>
              <h5>(0-8-0)</h5>
              <h1>{score?.visitorScore}</h1>
            </div>
            <div className="scores-g1-home scores">
              <img src="./img/Team-Logos/Hockey/JrDucks.png" alt="" />
              <h3>{score?.homeTeam}</h3>
              <h5>(7-1-1)</h5>
              <h1>{score?.homeScore}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Scores;
