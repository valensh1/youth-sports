import React from 'react';

function Scores() {
  return (
    <div className="scores-wrapper">
      <h1 className="scores-date">Sunday, December 12</h1>
      <div className="scores-section">
        <div className="scores-g1-visitor scores">
          <img src="./img/Team-Logos/Hockey/SDIA-Oilers.jpeg" alt="" />
          <h3>SDIA</h3>
          <h5>(0-8-0)</h5>
          <h1>0</h1>
        </div>
        <div className="scores-g1-home scores">
          <img src="./img/Team-Logos/Hockey/JrDucks.png" alt="" />
          <h3>Jr Ducks(2)</h3>
          <h5>(7-1-1)</h5>

          <h1>7</h1>
        </div>
        <div className="scores-status scores">
          <h2>FINAL</h2>
        </div>
      </div>
    </div>
  );
}

export default Scores;
