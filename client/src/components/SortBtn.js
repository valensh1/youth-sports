import React from 'react';
let sorted = false;

function SortBtn({ players, handleSort, originalData }) {
  const sortAZ = () => {
    const listingPriorToSort = [...players];
    sorted = !sorted;
    console.log(sorted);
    const sortedList = listingPriorToSort.sort((a, b) => {
      return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());
    });

    let result = sorted ? handleSort(sortedList) : handleSort(originalData);
    console.log(result);
  };

  return (
    <div onClick={sortAZ}>
      <svg class="icon icon-sortAZ">
        <use xlinkHref="./sprite.svg#icon-sort-alpha-asc"></use>
      </svg>
    </div>
  );
}

export default SortBtn;
