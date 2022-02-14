import { useParams, useLocation } from 'react-router-dom';

function Teams() {
  const search = useLocation().search;
  const team = new URLSearchParams(search).get('team');
  const division = new URLSearchParams(search).get('division');
  const season = new URLSearchParams(search).get('season');
  console.log(team);
  console.log(division);
  console.log(season);
  console.log(useLocation());
  const params = useParams();
  console.log(params);

  return (
    <div className="team">
      <h3>Jr. Ducks (2)</h3>
      <table className="team-table">
        <thead className="team-headers">
          <tr>
            <th>Player</th>
            <th>#</th>
            <th>Position</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Born</th>
            <th>Team</th>
            <th>Division</th>
            <th>Level</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <img
                src="https://i.imgur.com/gbCmMCr.jpg"
                alt=""
                style={{ height: '7rem', width: '7rem', borderRadius: '50%' }}
              />
              <td>Hunter Valentine</td>
            </th>
            <td>36</td>
            <td>Goalie</td>
            <td>5 ' 2</td>
            <td>72 lbs.</td>
            <td>09/06/2010</td>
            <td>Jr. Ducks (2)</td>
            <td>Peewee</td>
            <td>A</td>
            <td>Great Park</td>
          </tr>
          {/* <tr>
            <td>Case Nadal</td>
            <td>47</td>
            <td>Defenseman</td>
            <td>5 ' 0</td>
            <td>80 lbs.</td>
            <td>10/20/2010</td>
            <td>Jr. Ducks (2)</td>
            <td>Peewee</td>
            <td>A</td>
            <td>Great Park</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
