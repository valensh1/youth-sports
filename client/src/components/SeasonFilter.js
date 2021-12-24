//? Season Drop-down Menu
// All seasons are passed down as props from Scores.js file but are originally read from MongoDB database and only display the seasons that have applicable data in the MongoDB database.

function SeasonFilter({ seasons }) {
  return (
    <>
      <select>
        <option>Select Season</option>
        {seasons?.map((el) => {
          return <option value={el?.season}>{el?.season}</option>;
        })}
      </select>
    </>
  );
}

export default SeasonFilter;
