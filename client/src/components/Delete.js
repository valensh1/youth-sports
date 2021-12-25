import { useState } from 'react';

function Delete() {
  const [testData, setTestData] = useState([]);
  const handleClick = async () => {
    try {
      const response = await fetch('/api/hockeyPlayers/test/2021-10-17');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>CLICK HERE</button>
    </div>
  );
}

export default Delete;
