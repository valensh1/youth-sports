import { useState } from 'react';

// Props passed from parent (Scores.js) was the variable showScoresForDateChosen so we are destructuring the props here so we don't need to use props throughout DatePicker.js file.
function DatePicker({ showScoresForDateChosen }) {
  //? Event Listener for Date Selection
  const handleDate = (event) => {
    let dateToModify = `${event.currentTarget.value}`; // Conversion of Date selected from HTML date input field into a string to modify so that built-in javaScript Date API can read correctly. When in yyyy-mm-dd format that HTML puts it in the javaScript date API is typically off by one day due to some time zone formatting issues. However, if you get the date in the mm-dd-yyyy format you don't encounter those issues.
    console.log(`Date on this browser is --> ${dateToModify}`);
    const monthExtract = dateToModify.slice(5, 7);
    const dayExtract = dateToModify.slice(-2);
    const yearExtract = dateToModify.slice(0, 4);
    const finalNormalFormattedDate = new Date(
      yearExtract,
      monthExtract - 1,
      dayExtract
    );
    const year = finalNormalFormattedDate.getFullYear(); // Creation of a variable for calendar year (e.g. year = 2021)
    const month = finalNormalFormattedDate.getMonth(); // Gets month of year by returning an index number with January being index 0
    let day = finalNormalFormattedDate.getDate(); // Gets day of month
    const dayToStringConversion = `${day}`;

    // If there is no 2 digits in day variable above (meaning its only like the 5th of the month so it returns only 5) we want to put a 0 in front to match the format in our mongoDB database which always has 2 digits for day of month such as 05.
    if (!dayToStringConversion?.[1]) {
      day = `0${day}`;
    }
    const mongoDBFormattedDate = `${year}-${month + 1}-${day}`; // Format date in same format as our date in MongoDB so we can pull necessary data we need when dates match

    //! Delete or modify this function call below if using this DatePicker component anywhere else in application!
    showScoresForDateChosen(finalNormalFormattedDate, mongoDBFormattedDate); // Call function located on parent file (Scores.js) and pass in formattedDate as the argument which ultimately gets scores for the specific date selected.
  };

  return (
    <div>
      <input className="filters-date" type="date" onChange={handleDate} />
    </div>
  );
}

export default DatePicker;
