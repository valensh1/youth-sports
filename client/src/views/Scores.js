import { useState, useEffect } from 'react';
import SeasonFilter from '../components/SeasonFilter.js';
import DatePicker from '../components/DatePicker.js';
import TeamLogos from '../components/TeamLogos.js';
import { DAYS_OF_WEEK } from '../Global_Variables/globalVariables.js';
import { MONTHS } from '../Global_Variables/globalVariables.js';
import { SEASONS } from '../Global_Variables/globalVariables.js';

function Scores() {
  // const [seasonData, setSeasonData] = useState('');
  const [scores, setScores] = useState([]);
  const [scoresForDateChosen, setScoresForDateChosen] = useState([]);
  const [dateChosen, setDateChosen] = useState('');
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/hockeyPlayers/teams');
        const teamsDataPull = await response.json();
        console.log(teamsDataPull);
        await setTeamsData(teamsDataPull);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    const pullDataFunction = async () => {
      try {
        const response = await fetch('/api/hockeyPlayers/scores');
        const data = await response.json();
        console.log(data);
        console.log(data[0].games);
        setScores(data[0].games);
      } catch (error) {
        console.error(error);
      }
    };
  }, [scores]);

  const showScoresForDateChosen = (
    normalFormattedDate,
    mongoDBFormattedDate
  ) => {
    const scoresForDate = scores.find((games) => {
      return games.date === mongoDBFormattedDate;
    });
    console.log(scoresForDate);
    setScoresForDateChosen(scoresForDate);

    const dayOfWeek = DAYS_OF_WEEK[normalFormattedDate.getDay()];
    const month = MONTHS[normalFormattedDate.getMonth()];
    const dateOfMonth = normalFormattedDate.getDate();
    const year = normalFormattedDate.getFullYear();
    setDateChosen(`${dayOfWeek}, ${month} ${dateOfMonth}, ${year}`);
  };

  const seasonFilter = async (season) => {
    try {
      const response = await fetch(`/api/hockeyPlayers/scores/${season}`);
      const data = await response.json();
      console.log(data);
      await setScores(data[0].games);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="scores-wrapper">
      <div className="filters">
        <SeasonFilter
          className="filters-season filter"
          seasons={SEASONS}
          seasonFilter={seasonFilter}
        />
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
