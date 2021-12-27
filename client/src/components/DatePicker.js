import { useState } from 'react';

// Props passed from parent (Scores.js) was the variable showScoresForDateChosen so we are destructuring the props here so we don't need to use props throughout DatePicker.js file.
function DatePicker({ showScoresForDateChosen }) {
  //? Event Listener for Date Selection
  const handleDate = (event) => {
    let dateToModify = `${event.currentTarget.value}`; // Conversion of Date selected from HTML date input field into a string to modify so that built-in javaScript Date API can read correctly. When in yyyy-mm-dd format that HTML puts it in the javaScript date API is typically off by one day due to some time zone formatting issues. However, if you get the date in the mm-dd-yyyy format you don't encounter those issues.
    const monthDateAtFront = dateToModify.slice(5); // Slice part of the dateToModify string so that it only includes the month and day such as this format mm-dd-yyyy
    const yearToPutAtEnd = dateToModify.slice(0, 4); // Slice part of the dateToModify string so that it only includes the year so that we can ultimately concat the 2 sliced strings to get it into correct format for javaScript Date API to correctly read date without adding an extra day
    const modifiedDate = `${monthDateAtFront}-${yearToPutAtEnd}`; // Concat both sliced strings so javaScript Date API can be correctly used to extract date information without it being a day off
    const finalNormalFormattedDate = new Date(modifiedDate); // Creation of modifiedDate string above into an actual date using the javaScript Date API so that we can extract accurate date information
    const year = finalNormalFormattedDate.getFullYear(); // Creation of a variable for calendar year (e.g. year = 2021)
    const month = finalNormalFormattedDate.getMonth(); // Gets month of year by returning an index number with January being index 0
    const day = finalNormalFormattedDate.getDate(); // Gets day of month
    const mongoDBFormattedDate = `${year}-${month + 1}-${day}`; // Format date in same format as our date in MongoDB so we can pull necessary data we need when dates match
    console.log(mongoDBFormattedDate);

    //! Delete or modify this function call below if using this DatePicker component anywhere else in application!
    showScoresForDateChosen(finalNormalFormattedDate, mongoDBFormattedDate); // Call function located on parent file (Scores.js) and pass in formattedDate as the argument which ultimately gets scores for the specific date selected.
  };

  return (
    <div>
      <input type="date" onChange={handleDate} />
    </div>
  );
}

export default DatePicker;
