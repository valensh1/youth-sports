import React from 'react';

function Standings() {
  return (
    <div className="standings-container">
      <h1>Standings</h1>
      <table>
        <thead>
          <tr>
            <th id="header-team">Team</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>T</th>
            <th>PTS</th>
            <th>P%</th>
            <th>GF</th>
            <th>GA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <img src="https://i.imgur.com/x4pIvDM.png" alt="" />
              <span>Jr. Ducks (2)</span>
            </th>
            <td>9</td>
            <td>7</td>
            <td>1</td>
            <td>1</td>
            <td>15</td>
            <td>.758</td>
            <td>55</td>
            <td>17</td>
          </tr>
          <tr>
            <th>
              <img src="https://i.imgur.com/x4pIvDM.png" alt="" />
              <span>Jr. Ducks (2)</span>
            </th>
            <td>9</td>
            <td>7</td>
            <td>1</td>
            <td>1</td>
            <td>15</td>
            <td>.675</td>
            <td>55</td>
            <td>17</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
