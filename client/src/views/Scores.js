import { useState, useEffect } from 'react';
import $ from 'jquery';
import SeasonFilter from '../components/SeasonFilter.js';
import DatePicker from '../components/DatePicker.js';
import DivisionPicker from '../components/Hockey/DivisionPicker.js';
import TeamLogos from '../components/TeamLogos.js';
import { DAYS_OF_WEEK } from '../Global_Variables/globalVariables.js';
import { MONTHS } from '../Global_Variables/globalVariables.js';
import { SEASONS } from '../Global_Variables/globalVariables.js';

function Scores() {
  const [teamsData, setTeamsData] = useState([]);
  const [division, setDivision] = useState('');
  const [season, setSeason] = useState('');
  const [dateOfGames, setDateOfGames] = useState('');
  const [dateHeading, setDateHeading] = useState('');
  const [scoresForDateChosen, setScoresForDateChosen] = useState([]);
  const [start, setStart] = useState(false);

  //? FETCHING OF TEAMS DATA IMMEDIATELY UPON PAGE LOAD
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

  //? SEASON FILTER
  const seasonFilter = (season) => {
    console.log(season);
    setSeason(season);
  };

  //? DATE FILTER
  const dateFilter = (date) => {
    console.log(date);
    const dayOfWeek = DAYS_OF_WEEK[date.getDay()];
    const monthSpelledOut = MONTHS[date.getMonth()];
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const dateOfMonth = `${date.getDate()}`.padStart(2, '0');
    const year = date.getFullYear();
    setDateOfGames(`${month}-${dateOfMonth}-${year}`);
    setDateHeading(`${dayOfWeek}, ${monthSpelledOut} ${dateOfMonth}, ${year}`); // Date heading for stats in format such as Sunday, January 09, 2022.
  };

  //? DIVISION FILTER
  const divisionFilter = (division) => {
    console.log(division);
    setDivision(division);
  };

  //? FETCHING OF DATA FROM MONGODB BASED UPON FILTERS
  const fetchData = async () => {
    try {
      console.log('All three have been selected');
      const response = await fetch(
        `api/hockeyPlayers/scores?season=${season}&date=${dateOfGames}&division=${division}`
      );
      const data = await response.json();
      console.log(data);
      setScoresForDateChosen(data);
      setStart(true); // Set start state to true so IF there is no games for the date selected we can display the message of no games for dates selected. We want start state to be false to begin with because we don't want this message to be displayed before user has even selected a game date.
      $('.scores-date').html(dateHeading); // Use of jquery to insert date of games (e.g. Sunday, November 07, 2021) information into scores-date class (h1 tag in jsx below)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="scores-wrapper">
      <div className="filters">
        <DivisionPicker divisionFilter={divisionFilter} />
        <SeasonFilter
          className="filters-season filter-single"
          seasonFilter={seasonFilter}
        />
        <DatePicker dateFilter={dateFilter} />
        <button onClick={fetchData}>See Scores</button>
      </div>
      <h1 className="scores-date"></h1>
      <div className="scores-section-container">
        <h1 id="no-games-message">
          {!scoresForDateChosen.length && start
            ? `No games were played on this date`
            : ''}
        </h1>
        {scoresForDateChosen.map((score) => {
          return (
            <div key={score._id} className="scores-section">
              <div className="scores-visitor scores">
                <TeamLogos team={score?.visitorTeamShort} logo={teamsData} />
                <h3 className="scores-name">{score?.visitorTeamLong}</h3>
                <h2 className="scores-record">{`(${score?.visitorTeamPreviousWins}-${score?.visitorTeamPreviousLosses}-${score?.visitorTeamPreviousTies}) ${score?.visitorTeamPreviousPoints}pts`}</h2>
                <h1 className="scores-score">{score?.visitorTeamScore}</h1>
              </div>

              <div className="scores-home scores">
                <TeamLogos team={score?.homeTeamShort} logo={teamsData} />
                <h3 className="scores-name">{score?.homeTeamLong}</h3>
                <h2 className="scores-record">{`(${score?.homeTeamPreviousWins}-${score?.homeTeamPreviousLosses}-${score?.homeTeamPreviousTies}) ${score?.homeTeamPreviousPoints}pts`}</h2>
                <h1 className="scores-score">{score?.homeTeamScore}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Scores;
