import React from 'react';

function Teams() {
  return (
    <div>
      <h3>Jr. Ducks (2)</h3>
      <table>
        <thead>
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
              <td>Hunter Valentine</td>
              <img
                src="https://imgur.com/7yK4jS3.jpg"
                alt=""
                style={{ height: '20rem', width: '20rem', borderRadius: '50%' }}
              />
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
