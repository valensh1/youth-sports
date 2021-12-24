import { useState, useEffect } from 'react';
import SeasonFilter from '../components/SeasonFilter.js';
import DatePicker from '../components/DatePicker.js';

function Scores() {
  const [allData, setAllData] = useState([]);
  const [scores, setScores] = useState([]);
  const [scoresForDateChosen, setScoresForDateChosen] = useState([]);

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

  const showScoresForDateChosen = (date) => {
    const scoresForDate = scores.find((games) => {
      return games.date === date;
    });
    setScoresForDateChosen(scoresForDate);
  };

  return (
    <div className="scores-wrapper">
      <SeasonFilter seasons={allData} />
      <DatePicker showScoresForDateChosen={showScoresForDateChosen} />

      {scoresForDateChosen?.scores?.map((score) => {
        return (
          <div>
            <h5>{score?.homeTeam}</h5>
            <h1>{score?.homeScore}</h1>
          </div>
        );
      })}
      <h1 className="scores-date">Sunday, December 12</h1>
      <div className="scores-section">
        <div className="scores-g1-visitor scores">
          <img src="./img/Team-Logos/Hockey/SDIA-Oilers.jpeg" alt="" />
          <h3>SDIA</h3>
          <h5>(0-8-0)</h5>
          <h1>0</h1>
        </div>
        <div className="scores-g1-home scores">
          <img src="./img/Team-Logos/Hockey/JrDucks.png" alt="" />
          <h3>Jr Ducks(2)</h3>
          <h5>(7-1-1)</h5>

          <h1>7</h1>
        </div>
        <div className="scores-status scores">
          <h2>FINAL</h2>
        </div>
      </div>
    </div>
  );
}

export default Scores;
