import React from 'react';

function TeamRecords({ team, date, records }) {
  console.log(team);
  console.log(date);
  console.log(records);

  return (
    <div>
      {records.map((record) => {
        return (
          <h5>
            {record?.date === date && record?.team === team
              ? `${record?.wins}-${record?.losses}-${record?.ties}`
              : ''}
          </h5>
        );
      })}
    </div>
  );
}
export default TeamRecords;
