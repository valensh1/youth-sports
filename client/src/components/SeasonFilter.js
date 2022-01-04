//? Season Drop-down Menu
// All seasons are passed down as props from Scores.js file but are originally read from MongoDB database and only display the seasons that have applicable data in the MongoDB database.

function SeasonFilter({ seasons, seasonFilter }) {
  const seasonChange = (event) => {
    console.log(event.target.value);
    seasonFilter(event.target.value);
  };

  return (
    <>
      <select onChange={seasonChange}>
        <option>Select Season</option>
        {seasons?.map((season) => {
          return <option key={season}>{season}</option>;
        })}
      </select>
    </>
  );
}

export default SeasonFilter;
