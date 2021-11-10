import React from 'react';

function SortBtn({ players }) {
  const sortAZ = () => {
    console.log(players);
    const sortedList = players.sort((a, b) => {
      return a.firstName - b.firstName;
    });
    console.log(players[0].firstName);
  };

  return (
    <div onClick={sortAZ}>
      <svg class="icon icon-home3">
        <use xlinkHref="./sprite.svg#icon-sort-alpha-asc"></use>
      </svg>
    </div>
  );
}

export default SortBtn;
