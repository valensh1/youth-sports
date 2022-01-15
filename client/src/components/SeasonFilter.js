import { SEASONS } from '../Global_Variables/globalVariables.js';
//? Season Drop-down Menu
// All seasons are passed down as props from Scores.js file but are originally read from MongoDB database and only display the seasons that have applicable data in the MongoDB database.

function SeasonFilter({ seasonFilter }) {
  const seasonChange = async (event) => {
    seasonFilter(event.target.value);
  };

  return (
    <div className="filters-single">
      <label htmlFor="season-filter">Season:</label>
      <select name="season-filter" onChange={seasonChange}>
        <option>Select Season</option>
        {SEASONS?.map((season) => {
          return <option key={season}>{season}</option>;
        })}
      </select>
    </div>
  );
}

export default SeasonFilter;
