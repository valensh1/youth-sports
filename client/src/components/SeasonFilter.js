//? Season Drop-down Menu
// All seasons are passed down as props from Scores.js file but are originally read from MongoDB database and only display the seasons that have applicable data in the MongoDB database.

function SeasonFilter({ seasons, seasonFilter }) {
  const seasonChange = (event) => {
    seasonFilter(event.target.value);
  };

  return (
    <>
      <label htmlFor="season-filter">Season:</label>
      <select name="season-filter" onChange={seasonChange}>
        <option>Select Season</option>
        {seasons?.map((season) => {
          return <option key={season}>{season}</option>;
        })}
      </select>
    </>
  );
}

export default SeasonFilter;
