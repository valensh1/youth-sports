import { useState, useEffect } from 'react';
import SeasonFilter from '../components/SeasonFilter.js';
import DatePicker from '../components/DatePicker.js';
import TeamLogos from '../components/TeamLogos.js';
import TeamRecords from '../components/TeamRecords.js';
import { DAYS_OF_WEEK } from '../Global_Variables/globalVariables.js';
import { MONTHS } from '../Global_Variables/globalVariables.js';
import { SEASONS } from '../Global_Variables/globalVariables.js';

function Scores() {
  const [season, setSeason] = useState('');
  const [scores, setScores] = useState([]);
  const [scoresForDateChosen, setScoresForDateChosen] = useState([]);
  const [dateChosen, setDateChosen] = useState('');
  const [previousWeek, setPreviousWeek] = useState('');
  const [teamsData, setTeamsData] = useState([]);
  const [standings, setStandings] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/hockeyPlayers/teams`);
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
        const response = await fetch(`/api/hockeyPlayers/standings/${season}`);
        const data = await response.json();
        console.log(data);
        setStandings(data);
      } catch (error) {
        console.error(error);
      }
    };
    pullDataFunction();
  }, [season]);

  const seasonFilter = async (season) => {
    try {
      const response = await fetch(`/api/hockeyPlayers/scores/${season}`);
      const data = await response.json();
      console.log(data);
      await setScores(data[0].games);
      await setSeason(season);
    } catch (error) {
      console.error(error);
    }
  };

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

    const standingsDate = normalFormattedDate;
    // const standingsMonth = standingsDate.getMonth() + 1;
    // const standingsDay = standingsDate.getDate() - 7;
    // const standingsYear = standingsDate.getFullYear();
    const standingsMonth = 12;
    const standingsDay = 12;
    const standingsYear = 2021;
    console.log(
      `Converted Date is ${standingsMonth}-${standingsDay}-${standingsYear}`
    );
    setPreviousWeek(`${standingsMonth}-${standingsDay}-${standingsYear}`);
    const standingsSearch = standings.filter((game) => {
      console.log(game.date);
      console.log(previousWeek);
      return game.date === previousWeek;
    });
    setRecords([...standingsSearch]);
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
        <h1 id="no-games-message">
          {scoresForDateChosen === undefined
            ? `No games were played on this date`
            : ''}
        </h1>
        {scoresForDateChosen?.scores?.map((score, index) => {
          return (
            <div key={score._id} className="scores-section">
              <div className="scores-visitor scores">
                <TeamLogos team={score?.visitorTeam} logo={teamsData} />
                <h3 className="scores-name">{score?.visitorTeam}</h3>
                <TeamRecords
                  team={score?.visitorTeam}
                  date={previousWeek}
                  records={records}
                />
                <h1 className="scores-score">{score?.visitorScore}</h1>
              </div>

              <div className="scores-home scores">
                <TeamLogos team={score?.homeTeam} logo={teamsData} />
                <h3 className="scores-name">{score?.homeTeam}</h3>
                <h5 className="scores-record">(7-1-1)</h5>
                <h1 className="scores-score">{score?.homeScore}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Scores;
