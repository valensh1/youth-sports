function DivisionPicker({ divisionFilter }) {
  const hockeyDivisions = [
    'Mites',
    'Squirt',
    'PeeWee',
    'Bantam',
    'Midget',
    'Juvenile',
    'Junior',
    'Senior',
  ];

  const setDivisionFilter = (event) => {
    divisionFilter(event.target.value);
  };

  return (
    <div className="filters-single">
      <label htmlFor="division-filter">Division:</label>
      <select name="division-filter" onChange={setDivisionFilter}>
        <option>Select Division</option>
        {hockeyDivisions.map((division) => {
          return (
            <option key={division} value={division}>
              {division}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DivisionPicker;
