import { useState } from 'react';

// Props passed from parent (Scores.js) was the variable showScoresForDateChosen so we are destructuring the props here so we don't need to use props throughout DatePicker.js file.
function DatePicker({ showScoresForDateChosen }) {
  //? Event Listener for Date Selection
  const handleDate = (event) => {
    const selectedDate = new Date(event.currentTarget.value);
    const year = selectedDate.getFullYear(); // Creation of a variable for calendar year (e.g. year = 2021)
    const month = selectedDate.getMonth() + 1; // Because months start with 0 we need to add 1
    const day = selectedDate.getDate() + 1; // Funky thing with getting a date when formatted from input with yyyy/mm/dd format instead of yyyy-mm-dd format so need to add 1 as it is usually a day behind. Something due to time zones and default time zone used for date input in HTML
    const formattedDate = `${year}-${month}-${day}`; // Get date in same format as our date in MongoDB so we can pull necessary data we need when dates match

    //! Delete or modify this function call below if using this DatePicker component anywhere else in application!
    showScoresForDateChosen(formattedDate); // Call function located on parent file (Scores.js) and pass in formattedDate as the argument which ultimately gets scores for the specific date selected.
  };

  return (
    <div>
      <input type="date" placeholder="2021/12/31" onChange={handleDate} />
    </div>
  );
}

export default DatePicker;
