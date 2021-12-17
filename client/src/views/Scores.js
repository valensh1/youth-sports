import React from 'react';

function Scores() {
  return (
    <div className="scores-wrapper">
      <h1 className="scores-date">Sunday, December 12</h1>
      <div className="scores-section">
        <div className="scores-g1-visitor scores">
          <img
            src="http://scaha.com/scaha/javax.faces.resource/dynamiccontent.properties.xhtml?ln=primefaces&pfdrid=uPYKfcsnjWLnvqXOqYWUEz6FZfqwuSI4ajuF5VGy4VgdPlQNHSmSDg%3D%3D&target=7&pfdrid_c=true"
            alt=""
          />
          <h4>SDIA</h4>
          <h1>0</h1>
        </div>
        <div className="scores-g1-home scores">
          <img
            src="http://scaha.com/scaha/javax.faces.resource/dynamiccontent.properties.xhtml?ln=primefaces&pfdrid=uPYKfcsnjWLnvqXOqYWUEz6FZfqwuSI4T%2Bk559qB3Jydv%2F9ufTytlw5SK8TWdxFgRbrdthlyVHY%3D&targethome=3&pfdrid_c=true"
            alt=""
          />
          <h4>Jr Ducks(2)</h4>
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
