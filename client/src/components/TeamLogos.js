import React from 'react';

//? DISPLAYS TEAM LOGOS
function TeamLogos({ score, team }) {
  console.log(score, team);
  const whichTeam = team === 'visitor' ? 'visitorTeam' : 'homeTeam';
  console.log(whichTeam);

  return (
    <div>
      <img src="./img/Team-Logos/Hockey/JrDucks.png" alt="" />
    </div>
  );
}

export default TeamLogos;
