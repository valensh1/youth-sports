import React from 'react';

const PlayerStats = ({ singlePlayer }) => {
  const statHeadingsDetermination = () => {
    if (singlePlayer.position === 'Goalie') {
      return (
        <thead className="players__stats-headings">
          <tr>
            <th>Season</th>
            <th>GP</th>
            <th>Mins</th>
            <th>Shots</th>
            <th>Saves</th>
            <th>SV%</th>
            <th>GAA</th>
            <th>SO</th>
          </tr>
        </thead>
      );
    } else {
      return (
        <thead className="players__stats-headings">
          <tr>
            <th>Season</th>
            <th>GP</th>
            <th>G</th>
            <th>A</th>
            <th>P</th>
            <th>PPG</th>
            <th>PIMS</th>
          </tr>
        </thead>
      );
    }
  };

  return (
    <table className="player__stats-table">
      <caption>{`${singlePlayer.firstName} ${singlePlayer.lastName} Career Stats`}</caption>
      {statHeadingsDetermination()}

      <tbody>
        <tr>
          <td>2021-2022</td>
          <td>5</td>
          <td>225</td>
          <td>90</td>
          <td>81</td>
          <td>.900</td>
          <td>1.80</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PlayerStats;
