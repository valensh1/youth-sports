import React from 'react';

function DatePicker() {
  const beginDate = new Date('10/10/2021');
  console.log(beginDate.getDate() + 15);

  return (
    <div>
      <select name="date-selection" id="date-selection">
        <option value="Select Season"></option>
        <option value="2021-2022"></option>
        <option value="2020-2021"></option>
        <option value="2019-2020"></option>
        <option value="2018-2019"></option>
        <option value="2017-2018"></option>
      </select>
    </div>
  );
}

export default DatePicker;
